
import React from 'react';
import CurrencyConverter from '@/components/tools/CurrencyConverter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Currency } from 'lucide-react'; // Using Currency icon

const CurrencyConverterPage = () => {
  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Currency className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Currency Converter</CardTitle>
          </div>
          <CardDescription>Convert amounts between different currencies using up-to-date exchange rates.</CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyConverter />
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrencyConverterPage;
