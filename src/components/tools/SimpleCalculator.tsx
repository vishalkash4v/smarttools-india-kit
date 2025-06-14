
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const SimpleCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      return;
    }
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(parseFloat(result.toFixed(7)))); // Avoid long decimal places
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (first: number, second: number, op: string): number => {
    if (op === '+') return first + second;
    if (op === '-') return first - second;
    if (op === '*') return first * second;
    if (op === '/') return second === 0 ? NaN : first / second; // Handle division by zero
    return second;
  };

  const handleEquals = () => {
    const inputValue = parseFloat(displayValue);
    if (operator && firstOperand !== null) {
      if (waitingForSecondOperand) { // If equals is pressed repeatedly after an operation
        setOperator(null); // Prevent further operations with the same operator
        return;
      }
      const result = calculate(firstOperand, inputValue, operator);
      if (isNaN(result)) {
        setDisplayValue('Error');
      } else {
        setDisplayValue(String(parseFloat(result.toFixed(7))));
      }
      setFirstOperand(null); // Reset for new calculation
      // setOperator(null); // Operator is reset by performOperation or clearDisplay
      setWaitingForSecondOperand(true); // Ready for new number or new operation
    }
  };
  
  const buttons = [
    { label: 'AC', handler: clearDisplay, className: 'col-span-2 bg-destructive hover:bg-destructive/90' },
    { label: '%', handler: () => performOperation('%'), className: 'bg-secondary hover:bg-secondary/80' }, // Placeholder for %
    { label: '/', handler: () => performOperation('/'), className: 'bg-secondary hover:bg-secondary/80' },
    { label: '7', handler: () => inputDigit('7') },
    { label: '8', handler: () => inputDigit('8') },
    { label: '9', handler: () => inputDigit('9') },
    { label: '*', handler: () => performOperation('*'), className: 'bg-secondary hover:bg-secondary/80' },
    { label: '4', handler: () => inputDigit('4') },
    { label: '5', handler: () => inputDigit('5') },
    { label: '6', handler: () => inputDigit('6') },
    { label: '-', handler: () => performOperation('-'), className: 'bg-secondary hover:bg-secondary/80' },
    { label: '1', handler: () => inputDigit('1') },
    { label: '2', handler: () => inputDigit('2') },
    { label: '3', handler: () => inputDigit('3') },
    { label: '+', handler: () => performOperation('+'), className: 'bg-secondary hover:bg-secondary/80' },
    { label: '0', handler: () => inputDigit('0'), className: 'col-span-2' },
    { label: '.', handler: inputDecimal },
    { label: '=', handler: handleEquals, className: 'bg-primary hover:bg-primary/90' },
  ];

  return (
    <Card className="w-full max-w-xs mx-auto shadow-lg">
      <CardContent className="p-4 space-y-4">
        <Input
          type="text"
          value={displayValue}
          readOnly
          className="text-right text-3xl h-16 mb-4 bg-muted/30 border-muted-foreground/20"
          data-testid="calculator-display"
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <Button
              key={btn.label}
              onClick={btn.handler}
              variant={btn.className?.includes('bg-') ? 'default' : 'outline'}
              className={`text-xl p-4 h-16 ${btn.className || ''}`}
              data-testid={`button-${btn.label}`}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleCalculator;

