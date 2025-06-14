
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react';

interface SipResult {
  totalInvestment: number;
  estimatedReturns: number;
  totalValue: number;
}

const SipCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [result, setResult] = useState<SipResult | null>(null);

  const calculateSip = () => {
    const P = parseFloat(monthlyAmount);
    const r = parseFloat(expectedReturn) / 100 / 12; // Monthly rate
    const n = parseFloat(timePeriod) * 12; // Total months

    if (P <= 0 || r <= 0 || n <= 0) return;

    // SIP formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r)
    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const totalInvestment = P * n;
    const estimatedReturns = futureValue - totalInvestment;

    setResult({
      totalInvestment,
      estimatedReturns,
      totalValue: futureValue,
    });
  };

  const handleCalculate = () => {
    calculateSip();
  };

  const handleClear = () => {
    setMonthlyAmount('');
    setExpectedReturn('');
    setTimePeriod('');
    setResult(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            SIP Calculator (India)
          </CardTitle>
          <CardDescription>
            Calculate returns on your Systematic Investment Plan (SIP) investments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyAmount" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Monthly Investment (₹)
              </Label>
              <Input
                id="monthlyAmount"
                type="number"
                placeholder="5000"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedReturn" className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                Expected Return (% per annum)
              </Label>
              <Input
                id="expectedReturn"
                type="number"
                step="0.1"
                placeholder="12"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timePeriod" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Time Period (Years)
              </Label>
              <Input
                id="timePeriod"
                type="number"
                placeholder="10"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleCalculate} disabled={!monthlyAmount || !expectedReturn || !timePeriod} className="flex-1">
              Calculate SIP Returns
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>

          {result && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">SIP Calculation Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(result.totalInvestment)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                  </div>
                  
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(result.estimatedReturns)}
                    </div>
                    <div className="text-sm text-muted-foreground">Estimated Returns</div>
                  </div>
                  
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(result.totalValue)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Value</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Note:</strong> This calculation is based on the assumption that returns are compounded monthly. 
                    Actual returns may vary based on market conditions. SIP investments are subject to market risks.
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SipCalculator;
