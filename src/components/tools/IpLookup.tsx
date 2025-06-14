
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Wifi, Shield, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface IpData {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

const IpLookup = () => {
  const [ipData, setIpData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchIpData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) {
        throw new Error('Failed to fetch IP data');
      }
      const data = await response.json();
      setIpData(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchIpData}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            What's My IP Address
          </CardTitle>
          <CardDescription>
            View your public IP address and location information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div></div>
            <Button onClick={fetchIpData} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          {ipData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* IP Information */}
              <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wifi className="h-5 w-5" />
                    IP Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">IP Address:</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(ipData.ip, 'IP Address')}
                      className="h-auto p-1 font-mono text-sm"
                    >
                      {ipData.ip}
                    </Button>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">IP Version:</span>
                    <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
                      {ipData.version}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Network:</span>
                    <span className="text-sm font-medium font-mono">{ipData.network}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ISP:</span>
                    <span className="text-sm font-medium">{ipData.org}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Location Information */}
              <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Country:</span>
                    <span className="text-sm font-medium">{ipData.country_name} ({ipData.country_code})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Region:</span>
                    <span className="text-sm font-medium">{ipData.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">City:</span>
                    <span className="text-sm font-medium">{ipData.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Postal:</span>
                    <span className="text-sm font-medium">{ipData.postal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Coordinates:</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(`${ipData.latitude}, ${ipData.longitude}`, 'Coordinates')}
                      className="h-auto p-1 text-sm"
                    >
                      {ipData.latitude}, {ipData.longitude}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="bg-muted/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Additional Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Timezone:</span>
                    <span className="text-sm font-medium">{ipData.timezone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">UTC Offset:</span>
                    <span className="text-sm font-medium">{ipData.utc_offset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Currency:</span>
                    <span className="text-sm font-medium">{ipData.currency} ({ipData.currency_name})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Calling Code:</span>
                    <span className="text-sm font-medium">{ipData.country_calling_code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">In EU:</span>
                    <span className="text-sm font-medium">{ipData.in_eu ? 'Yes' : 'No'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default IpLookup;
