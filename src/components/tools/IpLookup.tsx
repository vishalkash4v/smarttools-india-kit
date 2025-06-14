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
  const [ipv4, setIpv4] = useState<string | null>(null);
  const [ipv6, setIpv6] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchIpData = async () => {
    setLoading(true);
    setError(null);
    setIpv4(null);
    setIpv6(null);
    setIpData(null);
    
    try {
      const results = await Promise.allSettled([
        fetch('https://ipapi.co/json/'),
        fetch('https://api.ipify.org?format=json'),
        fetch('https://api64.ipify.org?format=json')
      ]);

      const [mainDataRes, ipv4Res, ipv6Res] = results;

      if (mainDataRes.status === 'fulfilled' && mainDataRes.value.ok) {
        const data = await mainDataRes.value.json();
        setIpData(data);
      } else {
        console.error('Failed to fetch main IP data with location.');
      }

      if (ipv4Res.status === 'fulfilled' && ipv4Res.value.ok) {
        const data = await ipv4Res.value.json();
        setIpv4(data.ip);
      } else {
        console.warn('Could not fetch IPv4 address.');
      }

      if (ipv6Res.status === 'fulfilled' && ipv6Res.value.ok) {
        const data = await ipv6Res.value.json();
        setIpv6(data.ip);
      } else {
        console.warn('Could not fetch IPv6 address.');
      }

      const hasAnyData = results.some(res => res.status === 'fulfilled' && res.value.ok);
      if (!hasAnyData) {
        throw new Error('Failed to fetch any IP data. Please check your network connection.');
      }

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
            <Button onClick={fetchIpData} variant="outline" size="sm" disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {(ipData || ipv4 || ipv6) && (
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
                  {ipv4 && (
                    <div className="grid grid-cols-[max-content_1fr] items-start gap-x-2">
                      <span className="text-sm text-muted-foreground whitespace-nowrap pt-1">IPv4 Address:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(ipv4, 'IPv4 Address')}
                        className="h-auto p-1 font-mono text-sm text-right break-all w-full justify-end"
                      >
                        {ipv4}
                      </Button>
                    </div>
                  )}
                  {ipv6 && (
                     <div className="grid grid-cols-[max-content_1fr] items-start gap-x-2">
                      <span className="text-sm text-muted-foreground whitespace-nowrap pt-1">IPv6 Address:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(ipv6, 'IPv6 Address')}
                        className="h-auto p-1 font-mono text-sm text-right break-all w-full justify-end"
                      >
                        {ipv6}
                      </Button>
                    </div>
                  )}
                   {!ipv4 && !ipv6 && ipData?.ip && (
                    <div className="grid grid-cols-[max-content_1fr] items-start gap-x-2">
                      <span className="text-sm text-muted-foreground whitespace-nowrap pt-1">IP Address:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(ipData.ip, 'IP Address')}
                        className="h-auto p-1 font-mono text-sm text-right break-all w-full justify-end"
                      >
                        {ipData.ip}
                      </Button>
                    </div>
                   )}
                  {ipData?.org && (
                    <div className="grid grid-cols-[max-content_1fr] items-start gap-x-2">
                      <span className="text-sm text-muted-foreground">ISP:</span>
                      <span className="text-sm font-medium text-right break-words">{ipData.org}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Location Information */}
              {ipData && (
                <Card className="bg-muted/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">Country:</span>
                      <span className="text-sm font-medium text-right">{ipData.country_name} ({ipData.country_code})</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">Region:</span>
                      <span className="text-sm font-medium text-right">{ipData.region}</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">City:</span>
                      <span className="text-sm font-medium text-right">{ipData.city}</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">Postal:</span>
                      <span className="text-sm font-medium text-right">{ipData.postal || 'N/A'}</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] items-start gap-x-2">
                      <span className="text-sm text-muted-foreground pt-1">Coordinates:</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(`${ipData.latitude}, ${ipData.longitude}`, 'Coordinates')}
                        className="h-auto p-1 text-sm text-right break-all w-full justify-end"
                      >
                        {ipData.latitude}, {ipData.longitude}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Additional Information */}
              {ipData && (
                <Card className="bg-muted/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Additional Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">Timezone:</span>
                      <span className="text-sm font-medium text-right">{ipData.timezone}</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">UTC Offset:</span>
                      <span className="text-sm font-medium text-right">{ipData.utc_offset}</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">Currency:</span>
                      <span className="text-sm font-medium text-right break-words">{ipData.currency} ({ipData.currency_name})</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">Calling Code:</span>
                      <span className="text-sm font-medium text-right">{ipData.country_calling_code}</span>
                    </div>
                    <div className="grid grid-cols-[max-content_1fr] gap-x-2">
                      <span className="text-sm text-muted-foreground">In EU:</span>
                      <span className="text-sm font-medium text-right">{ipData.in_eu ? 'Yes' : 'No'}</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default IpLookup;
