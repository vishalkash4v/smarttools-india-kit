
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Banknote, TrendingUp, Receipt } from 'lucide-react';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [annualRate, setAnnualRate] = useState<string>('');
  const [tenureYears, setTenureYears] = useState<string>('');
  
  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  const [principalError, setPrincipalError] = useState<string>('');
  const [rateError, setRateError] = useState<string>('');
  const [tenureError, setTenureError] = useState<string>('');

  const validateInputs = () => {
    let isValid = true;
    if (!principal || parseFloat(principal) <= 0) {
      setPrincipalError('Principal must be greater than 0.');
      isValid = false;
    } else {
      setPrincipalError('');
    }
    if (!annualRate || parseFloat(annualRate) <= 0) {
      setRateError('Annual interest rate must be greater than 0.');
      isValid = false;
    } else {
      setRateError('');
    }
    if (!tenureYears || parseFloat(tenureYears) <= 0) {
      setTenureError('Loan tenure must be greater than 0.');
      isValid = false;
    } else {
      setTenureError('');
    }
    return isValid;
  };

  const calculateEmi = () => {
    if (!validateInputs()) {
      setEmi(null);
      setTotalInterest(null);
      setTotalPayment(null);
      return;
    }

    const p = parseFloat(principal);
    const annualR = parseFloat(annualRate);
    const tYears = parseFloat(tenureYears);

    const monthlyRate = annualR / (12 * 100);
    const numberOfMonths = tYears * 12;

    if (monthlyRate === 0) { // Handle case for 0% interest
      const calculatedEmi = p / numberOfMonths;
      setEmi(calculatedEmi);
      setTotalInterest(0);
      setTotalPayment(p);
      return;
    }

    const emiNumerator = p * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths);
    const emiDenominator = Math.pow(1 + monthlyRate, numberOfMonths) - 1;
    const calculatedEmi = emiNumerator / emiDenominator;

    setEmi(calculatedEmi);
    const totalPaid = calculatedEmi * numberOfMonths;
    setTotalPayment(totalPaid);
    setTotalInterest(totalPaid - p);
  };

  const handleReset = () => {
    setPrincipal('');
    setAnnualRate('');
    setTenureYears('');
    setEmi(null);
    setTotalInterest(null);
    setTotalPayment(null);
    setPrincipalError('');
    setRateError('');
    setTenureError('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="principal" className="mb-1 block">Principal Amount (₹)</Label>
          <Input
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="e.g., 100000"
            min="0"
          />
          {principalError && <p className="text-red-500 text-xs mt-1">{principalError}</p>}
        </div>
        <div>
          <Label htmlFor="annualRate" className="mb-1 block">Annual Interest Rate (%)</Label>
          <Input
            id="annualRate"
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            placeholder="e.g., 8.5"
            min="0"
          />
          {rateError && <p className="text-red-500 text-xs mt-1">{rateError}</p>}
        </div>
        <div>
          <Label htmlFor="tenureYears" className="mb-1 block">Loan Tenure (Years)</Label>
          <Input
            id="tenureYears"
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(e.target.value)}
            placeholder="e.g., 5"
            min="0"
          />
          {tenureError && <p className="text-red-500 text-xs mt-1">{tenureError}</p>}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={calculateEmi} className="w-full sm:w-auto">Calculate EMI</Button>
        <Button onClick={handleReset} variant="outline" className="w-full sm:w-auto">Reset</Button>
      </div>

      {emi !== null && totalInterest !== null && totalPayment !== null && (
        <Card className="mt-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">Loan Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
              <div className="flex items-center">
                <Banknote className="h-6 w-6 mr-3 text-primary" />
                <span className="font-medium">Monthly EMI</span>
              </div>
              <span className="text-lg font-semibold text-primary">₹{emi.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-orange-500" />
                <span className="font-medium">Total Interest Payable</span>
              </div>
              <span className="text-lg font-semibold">₹{totalInterest.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
              <div className="flex items-center">
                <Receipt className="h-6 w-6 mr-3 text-green-500" />
                <span className="font-medium">Total Payment (Principal + Interest)</span>
              </div>
              <span className="text-lg font-semibold">₹{totalPayment.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Note: This is an estimate. Actual EMI may vary based on lender policies.
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default EmiCalculator;

