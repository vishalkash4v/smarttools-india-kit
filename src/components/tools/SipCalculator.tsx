import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, PiggyBank, Calendar, Percent } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const SipCalculator = () => {
  const [calculationType, setCalculationType] = useState<'sip' | 'lumpsum'>('sip');
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [lumpSumAmount, setLumpSumAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [result, setResult] = useState<{ totalInvestment: number; totalReturns: number; maturityAmount: number; } | null>(null);
  const { currencySymbol, loading: currencyLoading } = useCurrency();

  const calculateSip = () => {
    const P = parseFloat(monthlyInvestment);
    const L = parseFloat(lumpSumAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if ((calculationType === 'sip' && P <= 0) || (calculationType === 'lumpsum' && L <= 0) || r <= 0 || n <= 0) return;

    let maturityAmount = 0;
    let totalInvestment = 0;

    if (calculationType === 'sip') {
      // Future Value of SIP Formula: FV = P * (((1 + r)^n - 1) / r) * (1 + r)
      maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      totalInvestment = P * n;
    } else {
      // Compound Interest Formula: A = P(1 + r/n)^(nt)
      maturityAmount = L * Math.pow(1 + (r * 12) / 1, 1 * n / 12);
      totalInvestment = L;
    }

    const totalReturns = maturityAmount - totalInvestment;

    setResult({
      totalInvestment,
      totalReturns,
      maturityAmount,
    });
  };

  const handleCalculate = () => {
    calculateSip();
  };

  const handleClear = () => {
    setMonthlyInvestment('');
    setLumpSumAmount('');
    setTimePeriod('');
    setInterestRate('');
    setResult(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6" />
            SIP & Lump Sum Calculator
          </CardTitle>
          <CardDescription>
            Calculate returns on your Systematic Investment Plan (SIP) or Lump Sum investments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Button
              variant={calculationType === 'sip' ? 'default' : 'outline'}
              onClick={() => setCalculationType('sip')}
              className="flex-1"
            >
              SIP
            </Button>
            <Button
              variant={calculationType === 'lumpsum' ? 'default' : 'outline'}
              onClick={() => setCalculationType('lumpsum')}
              className="flex-1"
            >
              Lump Sum
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calculationType === 'sip' && (
              <div className="space-y-2">
                <Label htmlFor="monthlyInvestment" className="flex items-center gap-2">
                  <PiggyBank className="h-4 w-4" />
                  Monthly Investment
                </Label>
                <Input
                  id="monthlyInvestment"
                  type="number"
                  placeholder="5000"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                />
              </div>
            )}

            {calculationType === 'lumpsum' && (
              <div className="space-y-2">
                <Label htmlFor="lumpSumAmount" className="flex items-center gap-2">
                  <PiggyBank className="h-4 w-4" />
                  Lump Sum Amount
                </Label>
                <Input
                  id="lumpSumAmount"
                  type="number"
                  placeholder="100000"
                  value={lumpSumAmount}
                  onChange={(e) => setLumpSumAmount(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="timePeriod" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Time Period (Years)
              </Label>
              <Input
                id="timePeriod"
                type="number"
                placeholder="5"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestRate" className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                Expected Rate of Return (% per annum)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                placeholder="12"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleCalculate} disabled={!monthlyInvestment && !lumpSumAmount || !timePeriod || !interestRate} className="flex-1">
              Calculate
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>

          {result && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Investment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">
                      {currencySymbol}{formatCurrency(result.totalInvestment)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                  </div>
                  
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">
                      {currencySymbol}{formatCurrency(result.totalReturns)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Returns</div>
                  </div>
                  
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">
                      {currencySymbol}{formatCurrency(result.maturityAmount)}
                    </div>
                    <div className="text-sm text-muted-foreground">Maturity Value</div>
                  </div>
                </div>
                
                {calculationType === 'sip' && (
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Monthly SIP:</strong> {currencySymbol}{formatCurrency(parseFloat(monthlyInvestment))} for {timePeriod} years
                    </div>
                  </div>
                )}
                
                {calculationType === 'lumpsum' && (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="text-sm text-green-700 dark:text-green-300">
                      <strong>Lump Sum Investment:</strong> {currencySymbol}{formatCurrency(parseFloat(lumpSumAmount))} for {timePeriod} years
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SipCalculator;
