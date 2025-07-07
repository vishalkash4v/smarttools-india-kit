
import React from 'react';
import TableToJsonConverter from '@/components/tools/TableToJsonConverter';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, FileJson, ArrowRight, Database } from 'lucide-react';

const TableToJsonConverterPage = () => {
  return (
    <PageWrapper
      title="Table to JSON Converter"
      description="Convert HTML tables, CSV data, and spreadsheet data to JSON format instantly. Professional data transformation tool for developers and data analysts."
      keywords="table to JSON converter, CSV to JSON, HTML table converter, data transformation, JSON generator, spreadsheet converter"
      pageTitle="Table to JSON Converter"
      toolCategory="Data Converter"
      canonicalUrl="https://fyntools.com/table-to-json-converter"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Table className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Table to JSON Converter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform tabular data into JSON format quickly and easily for your applications and APIs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <ArrowRight className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Convert table data to JSON in real-time</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <FileJson className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Support for CSV, HTML tables, and more</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Clean Output</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Well-formatted, valid JSON output</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Converter Tool */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Table className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Data Converter
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional table to JSON transformation tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TableToJsonConverter />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for developers who need to convert spreadsheet data or HTML tables into JSON 
                  format for APIs and web applications. Transform client-provided data, database exports, 
                  or CSV files into properly structured JSON that can be easily consumed by JavaScript 
                  applications, REST APIs, and NoSQL databases.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Streamline data migration projects by converting legacy table formats to modern JSON. 
                  Essential for moving data between different systems, platforms, or databases. Convert 
                  Excel exports, CSV files, or HTML tables into JSON format that can be imported into 
                  modern applications, document databases, or cloud services.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Data analysts and scientists can quickly convert tabular data into JSON format for use 
                  with JavaScript libraries, data visualization tools, or web-based analytics platforms. 
                  Transform survey results, research data, or business metrics into a format that's 
                  compatible with modern data processing workflows and visualization frameworks.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Frontend developers can convert static table data into dynamic JSON objects for use in 
                  React, Vue, Angular, or vanilla JavaScript applications. Perfect for creating mock data, 
                  converting client-provided spreadsheets into app-ready formats, or transforming HTML 
                  table data into structured objects for dynamic rendering and manipulation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TableToJsonConverterPage;
