
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

interface IpInfoRowProps {
  label: string;
  value: string | number | boolean | null | undefined;
  isCopiable?: boolean;
}

const IpInfoRow: React.FC<IpInfoRowProps> = ({ label, value, isCopiable = false }) => {
  const { toast } = useToast();

  if (value === null || typeof value === 'undefined' || value === '') {
    return null;
  }

  const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value);

  const copyToClipboard = () => {
    if (isCopiable) {
      navigator.clipboard.writeText(displayValue);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard.`,
      });
    }
  };

  const ValueComponent = isCopiable ? (
    <Button
      variant="ghost"
      size="sm"
      onClick={copyToClipboard}
      className="group h-auto p-1 font-mono text-sm text-left break-all w-full justify-start -ml-1"
    >
      <span className="truncate flex-grow">{displayValue}</span>
      <Copy className="h-4 w-4 ml-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  ) : (
    <span className="text-sm font-medium text-left break-all">{displayValue}</span>
  );

  return (
    <div className="grid grid-cols-[100px_1fr] items-start gap-x-4 py-2 border-b border-border/20 last:border-b-0">
      <span className="text-sm text-muted-foreground pt-1">{label}:</span>
      <div className="min-w-0 flex">{ValueComponent}</div>
    </div>
  );
};

export default IpInfoRow;
