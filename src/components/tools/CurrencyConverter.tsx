
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from "@/hooks/use-toast";
import { AlertCircle, ArrowRightLeft } from 'lucide-react';

interface CurrenciesResponse {
  [key: string]: string;
}

interface ConversionResponse {
  amount: number;
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
}

const fetchCurrencies = async (): Promise<CurrenciesResponse> => {
  const response = await fetch('https://api.frankfurter.app/currencies');
  if (!response.ok) {
    throw new Error('Failed to fetch currencies');
  }
  return response.json();
};

const fetchConversion = async (amount: number, from: string, to: string): Promise<ConversionResponse> => {
  if (from === to) { // API doesn't handle same currency conversion well for rates
    return { amount, base: from, date: new Date().toISOString().split('T')[0], rates: { [to]: amount } };
  }
  const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch conversion rate');
  }
  return response.json();
};

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('INR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [isLoadingConversion, setIsLoadingConversion] = useState<boolean>(false);

  const { data: currencies, isLoading: isLoadingCurrencies, error: currenciesError } = useQuery<CurrenciesResponse, Error>({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies,
    staleTime: Infinity, // Currencies don't change often
  });

  const handleConvert = async () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid positive amount.",
        variant: "destructive",
      });
      return;
    }
    if (!fromCurrency || !toCurrency) {
      toast({
        title: "Missing Selection",
        description: "Please select both 'From' and 'To' currencies.",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingConversion(true);
    setConvertedAmount(null);
    try {
      if (fromCurrency === toCurrency) {
        setConvertedAmount(numericAmount);
      } else {
        const data = await fetchConversion(numericAmount, fromCurrency, toCurrency);
        // The API returns the converted amount directly in rates[toCurrency] when amount is specified
        setConvertedAmount(data.rates[toCurrency]);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during conversion.";
      toast({
        title: "Conversion Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Conversion error:", error);
    } finally {
      setIsLoadingConversion(false);
    }
  };

  useEffect(() => {
    // Auto-convert on initial load or when currencies change, if amount is valid
    if (amount && fromCurrency && toCurrency && parseFloat(amount) > 0 && currencies) {
       handleConvert();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency, toCurrency, currencies]); // Only run when currencies load or selections change, not amount

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    // Trigger conversion after swap
    // setAmount(convertedAmount ? convertedAmount.toString() : amount); // Optional: use converted amount as new input
  };
  
  if (isLoadingCurrencies) return <p>Loading currencies...</p>;
  if (currenciesError) return <p className="text-red-500">Error loading currencies: {currenciesError.message}</p>;

  const currencyOptions = currencies ? Object.entries(currencies).map(([code, name]) => ({
    value: code,
    label: `${code} - ${name}`,
  })) : [];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
        <div className="space-y-2">
          <Label htmlFor="fromCurrency">From</Label>
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger id="fromCurrency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencyOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button variant="ghost" size="icon" onClick={handleSwapCurrencies} className="mt-auto md:mt-6 self-center justify-self-center">
          <ArrowRightLeft className="h-5 w-5" />
        </Button>

        <div className="space-y-2">
          <Label htmlFor="toCurrency">To</Label>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger id="toCurrency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencyOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button onClick={handleConvert} disabled={isLoadingConversion} className="w-full">
        {isLoadingConversion ? 'Converting...' : 'Convert'}
      </Button>

      {convertedAmount !== null && (
        <div className="mt-6 p-4 bg-muted rounded-md text-center">
          <p className="text-sm text-muted-foreground">Converted Amount</p>
          <p className="text-3xl font-bold text-primary">
            {convertedAmount.toLocaleString(undefined, { style: 'currency', currency: toCurrency, minimumFractionDigits: 2, maximumFractionDigits: 4 })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {amount} {fromCurrency} = {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
