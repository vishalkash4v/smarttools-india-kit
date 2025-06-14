
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import { Copy, RefreshCw } from 'lucide-react';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const { toast } = useToast();

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charPool = '';
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool === '') {
      toast({
        title: 'No Character Types Selected',
        description: 'Please select at least one character type.',
        variant: 'destructive',
      });
      setPassword('');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      newPassword += charPool[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (!password) {
      toast({
        title: 'Nothing to Copy',
        description: 'Generate a password first.',
        variant: 'destructive',
      });
      return;
    }
    navigator.clipboard.writeText(password).then(() => {
      toast({
        title: 'Copied!',
        description: 'Password copied to clipboard.',
      });
    }).catch(() => {
      toast({
        title: 'Copy Failed',
        description: 'Could not copy password to clipboard.',
        variant: 'destructive',
      });
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="length">Password Length: {length}</Label>
        <Slider
          id="length"
          min={6}
          max={32}
          step={1}
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="uppercase" checked={includeUppercase} onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)} />
          <Label htmlFor="uppercase">Include Uppercase (A-Z)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="lowercase" checked={includeLowercase} onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)} />
          <Label htmlFor="lowercase">Include Lowercase (a-z)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="numbers" checked={includeNumbers} onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)} />
          <Label htmlFor="numbers">Include Numbers (0-9)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="symbols" checked={includeSymbols} onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)} />
          <Label htmlFor="symbols">Include Symbols (!@#...)</Label>
        </div>
      </div>
      <Button onClick={generatePassword} className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" /> Generate Password
      </Button>
      {password && (
        <div className="relative">
          <Input type="text" value={password} readOnly className="pr-10 text-lg" />
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
            aria-label="Copy password"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
