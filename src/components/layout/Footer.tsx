
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toolCategories = [
    { 
      name: 'Calculators', 
      tools: [
        { name: 'BMI Calculator', path: '/bmi-calculator' },
        { name: 'EMI Calculator', path: '/emi-calculator' },
        { name: 'GST Calculator', path: '/gst-calculator' },
        { name: 'Age Calculator', path: '/age-calculator' },
        { name: 'SIP Calculator', path: '/sip-calculator' },
        { name: 'PPF Calculator', path: '/ppf-calculator' },
        { name: 'FD Calculator', path: '/fd-calculator' },
        { name: 'Income Tax Calculator', path: '/income-tax-calculator' }
      ] 
    },
    { 
      name: 'Text Tools', 
      tools: [
        { name: 'Word Counter', path: '/word-counter' },
        { name: 'Text Case Converter', path: '/text-case-converter' },
        { name: 'Duplicate Line Remover', path: '/duplicate-line-remover' },
        { name: 'Whitespace Remover', path: '/whitespace-remover' },
        { name: 'Base64 Converter', path: '/base64-converter' }
      ] 
    },
    { 
      name: 'Developer Tools', 
      tools: [
        { name: 'JSON Formatter', path: '/json-formatter' },
        { name: 'JavaScript Minifier', path: '/javascript-minifier' },
        { name: 'Live Preview', path: '/live-preview' },
        { name: 'Regex Tester', path: '/regex-tester' }
      ] 
    },
    { 
      name: 'Utilities', 
      tools: [
        { name: 'QR Code Generator', path: '/qr-code-generator' },
        { name: 'Color Picker', path: '/color-picker-tool' },
        { name: 'Password Generator', path: '/password-generator' },
        { name: 'Currency Converter', path: '/currency-converter' },
        { name: 'Temperature Converter', path: '/temperature-converter' },
        { name: 'Unit Converter', path: '/unit-converter' }
      ] 
    },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'All Tools', href: '/tools' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FYN Tools India
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Professional online tools for developers, businesses, and individuals. 
              All tools are free, secure, and work directly in your browser.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@fyntools-india.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8350937959</span>
              </div>
            </div>
          </div>

          {/* Tool Categories */}
          {toolCategories.map((category) => (
            <div key={category.name}>
              <h3 className="font-semibold text-foreground mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.tools.map((tool) => (
                  <li key={tool.name}>
                    <Link 
                      to={tool.path} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                    >
                      {tool.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} FYN Tools India. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
