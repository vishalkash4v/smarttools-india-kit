
import React from 'react';
import CurrencyConverter from '@/components/tools/CurrencyConverter';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Globe, RefreshCw } from 'lucide-react';

const CurrencyConverterPage = () => {
  return (
    <PageWrapper
      title="Currency Converter"
      description="Professional currency converter with real-time exchange rates. Convert between USD, EUR, INR, GBP and 150+ world currencies with accurate, up-to-date rates."
      keywords="currency converter, exchange rates, USD to INR, EUR to USD, currency calculator, foreign exchange, money converter, live exchange rates"
      pageTitle="Currency Converter"
      toolCategory="Financial Tool"
      canonicalUrl="https://fyntools.com/currency-converter"
      heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <DollarSign className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Currency Converter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Convert between world currencies with real-time exchange rates and professional accuracy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Live Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Real-time exchange rates from financial markets</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">150+ Currencies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Support for major world currencies</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <RefreshCw className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Auto Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Rates updated automatically throughout the day</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Currency Converter */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Exchange Rate Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional currency conversion with live market rates
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <CurrencyConverter />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">International Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Essential for travelers planning international trips, budgeting vacation expenses, and 
                  understanding costs in foreign countries. Convert your home currency to destination 
                  currency for accurate budget planning, shopping decisions, and expense tracking during 
                  travel. Perfect for business travelers, tourists, and digital nomads.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">International Business</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Businesses operating internationally need accurate currency conversion for pricing, 
                  invoicing, and financial planning. Calculate costs for international suppliers, set 
                  prices for global customers, and analyze foreign market opportunities. Essential for 
                  import/export businesses, freelancers with international clients, and e-commerce.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Investment & Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Investors and traders use currency conversion for international stock markets, forex 
                  trading, and global investment portfolio management. Calculate returns in your base 
                  currency, compare international investments, and manage currency risk in diversified 
                  portfolios. Critical for financial planning and investment analysis.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Online Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Compare prices from international online stores, calculate shipping costs, and understand 
                  the total cost of purchases in your local currency. Perfect for finding the best deals 
                  across global marketplaces, evaluating international sellers, and making informed 
                  purchasing decisions when shopping from foreign websites.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CurrencyConverterPage;
