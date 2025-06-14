
import React from 'react';
import DuplicateLineRemoverComponent from '@/components/tools/DuplicateLineRemover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListX } from 'lucide-react'; // Icon for duplicate line remover

const DuplicateLineRemoverPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <ListX className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Duplicate Line Remover</CardTitle>
          </div>
          <CardDescription>Remove duplicate lines from your text quickly and easily.</CardDescription>
        </CardHeader>
        <CardContent>
          <DuplicateLineRemoverComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default DuplicateLineRemoverPage;
