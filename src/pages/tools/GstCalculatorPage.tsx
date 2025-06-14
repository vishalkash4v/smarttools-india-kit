
import React from 'react';
import GstCalculator from '@/components/tools/GstCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent } from 'lucide-react';

const GstCalculatorPage = () => {
  return (
    <PageWrapper
      title="GST Calculator"
      description="Calculate Goods and Services Tax (GST) amounts quickly and easily. Get detailed breakdown of CGST, SGST, and IGST with professional accuracy."
      keywords="GST calculator, goods and services tax, CGST, SGST, IGST, tax calculation, India"
      pageTitle="GST Calculator"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <Card className="hover-lift">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Percent className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">GST Calculator</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Calculate Goods and Services Tax (GST) amounts quickly and easily with detailed breakdown.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GstCalculator />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GstCalculatorPage;
