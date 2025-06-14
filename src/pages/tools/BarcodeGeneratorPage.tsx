
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import BarcodeGenerator from '@/components/tools/BarcodeGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, QrCode, Package, Store, Zap, Shield } from 'lucide-react';

const BarcodeGeneratorPage = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Inventory Manager",
      rating: 5,
      comment: "This barcode generator has revolutionized our inventory management! We generate hundreds of barcodes daily for our retail store. The quality is perfect for printing on labels.",
      date: "December 2024"
    },
    {
      name: "Anita Mehta",
      role: "Small Business Owner",
      rating: 5,
      comment: "Perfect for my handmade jewelry business. I can quickly create professional barcodes for product tracking and point-of-sale systems. Saves money on expensive barcode software!",
      date: "November 2024"
    },
    {
      name: "Vikram Singh",
      role: "Warehouse Supervisor",
      rating: 5,
      comment: "Excellent tool for logistics and shipping. We use it to generate tracking barcodes and product identification codes. The different barcode formats support all our needs.",
      date: "November 2024"
    },
    {
      name: "Priya Patel",
      role: "Event Organizer",
      rating: 4,
      comment: "Great for creating ticket barcodes and attendee badges. Easy to use and generates high-quality codes that scan perfectly with our equipment.",
      date: "October 2024"
    }
  ];

  const faqs = [
    {
      question: "What types of barcodes can I generate?",
      answer: "Our tool supports multiple barcode formats including Code 128, Code 39, EAN-13, UPC-A, and more. Each format is suitable for different applications like retail, inventory, or shipping."
    },
    {
      question: "Are the generated barcodes industry-standard?",
      answer: "Yes! All barcodes generated follow international standards and are compatible with commercial barcode scanners, POS systems, and inventory management software."
    },
    {
      question: "Can I download the barcodes for printing?",
      answer: "Absolutely! You can download barcodes in various formats suitable for different printing needs, from small labels to large signs. The images are high-resolution for professional use."
    },
    {
      question: "Is there a limit to how many barcodes I can generate?",
      answer: "No limits! Generate as many barcodes as you need for your business or personal use. The tool works entirely in your browser without any usage restrictions."
    },
    {
      question: "What information can I encode in a barcode?",
      answer: "You can encode various types of data including product codes, serial numbers, URLs, text, and numerical data. The maximum length depends on the barcode format you choose."
    },
    {
      question: "Do the barcodes work with mobile scanner apps?",
      answer: "Yes! The barcodes are compatible with mobile barcode scanner apps, handheld scanners, and integrated POS systems. They follow standard encoding protocols for universal compatibility."
    }
  ];

  return (
    <PageWrapper
      title="Barcode Generator - Create Barcodes Online Free"
      description="Generate professional barcodes instantly. Support for Code 128, Code 39, EAN-13, UPC and more. Perfect for inventory, retail, and business applications."
      keywords="barcode generator, create barcode, code 128, code 39, ean-13, upc barcode, inventory management"
    >
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-indigo-100 dark:bg-indigo-900/20">
                <QrCode className="h-12 w-12 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Professional Barcode Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create industry-standard barcodes instantly. Perfect for inventory management, retail operations, and business applications.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Package className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Supports Code 128, Code 39, EAN-13, UPC and more</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Create professional barcodes in seconds</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Store className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Business Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compatible with all commercial scanners and POS systems</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Tool */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create Your Barcode</CardTitle>
              <CardDescription>Enter your data and generate professional barcodes instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <BarcodeGenerator />
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-indigo-600">Retail & E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Product Identification:</strong> Create unique barcodes for every product in your inventory. Essential for point-of-sale systems, price checking, and stock management in retail stores.
                  <br /><br />
                  <strong>SKU Management:</strong> Generate barcodes for Stock Keeping Units (SKUs) to streamline inventory tracking, reduce errors, and improve checkout efficiency.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Warehouse & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Inventory Tracking:</strong> Implement barcode systems for warehouse management, shipping labels, and asset tracking. Reduce manual data entry errors and improve operational efficiency.
                  <br /><br />
                  <strong>Supply Chain Management:</strong> Create barcodes for tracking products through the entire supply chain from manufacturer to end customer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Healthcare & Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Patient Management:</strong> Generate barcodes for patient wristbands, medical records, and prescription tracking to improve safety and reduce medical errors.
                  <br /><br />
                  <strong>Sample Tracking:</strong> Create unique identifiers for laboratory samples, ensuring accurate tracking and test result management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Manufacturing & Quality Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Production Tracking:</strong> Implement barcodes for tracking products through manufacturing processes, quality control checkpoints, and final inspection.
                  <br /><br />
                  <strong>Asset Management:</strong> Label equipment, tools, and machinery with barcodes for maintenance tracking, calibration schedules, and asset auditing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* User Reviews */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Customer Reviews</CardTitle>
              <CardDescription className="text-center">
                Trusted by businesses worldwide for professional barcode generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    <p className="text-xs text-muted-foreground mt-3">{review.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-center">
                Common questions about barcode generation and usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {index < faqs.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BarcodeGeneratorPage;
