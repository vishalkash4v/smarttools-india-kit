
import React from 'react';
import PasswordGenerator from '@/components/tools/PasswordGenerator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, Shield, Lock, Zap } from 'lucide-react';

const PasswordGeneratorPage = () => {
  return (
    <PageWrapper
      title="Password Generator"
      description="Generate strong, secure passwords with customizable length and character sets. Professional password creator with uppercase, lowercase, numbers, and symbols."
      keywords="password generator, strong password, secure password, random password, password creator, password security, cybersecurity tool"
      pageTitle="Password Generator"
      toolCategory="Security Tool"
      canonicalUrl="https://fyntools.com/password-generator"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <KeyRound className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Password Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Create strong, random passwords based on your security criteria and requirements.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Secure Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Cryptographically secure random passwords</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Customizable Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Choose length and character types</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Generate multiple passwords quickly</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Password Generator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <KeyRound className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Secure Password Creator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional password generation tool for maximum security
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <PasswordGenerator />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Cybersecurity Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Strong passwords are the first line of defense against cyber attacks. Use unique, 
                  complex passwords for each account to prevent credential stuffing and brute force 
                  attacks. Our generator creates passwords that meet industry security standards, 
                  helping protect your personal and business accounts from unauthorized access.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Organizations rely on strong password policies to protect sensitive data and systems. 
                  Generate secure passwords for employee accounts, service accounts, and system 
                  administration. Essential for compliance with security frameworks and protecting 
                  against data breaches that could compromise business operations and customer trust.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personal Account Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Protect your personal accounts including email, social media, banking, and online 
                  services with strong, unique passwords. Use different passwords for each account 
                  to prevent a single breach from compromising multiple accounts. Combine with two-factor 
                  authentication for maximum security across all your digital accounts.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Password Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Generate secure passwords and store them safely using password managers. Our tool 
                  creates complex passwords that are difficult to guess but easy to store securely. 
                  Regular password updates using strong, random passwords help maintain account security 
                  over time and reduce the risk of compromised credentials.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PasswordGeneratorPage;
