import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ToolsPage from '@/pages/ToolsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import NotFoundPage from '@/pages/NotFoundPage';

import WordCounterPage from '@/pages/tools/WordCounterPage';
import TextCaseConverterPage from '@/pages/tools/TextCaseConverterPage';
import ImageCompressorPage from '@/pages/tools/ImageCompressorPage';
import UrlShortenerPage from '@/pages/tools/UrlShortenerPage';
import Base64ConverterPage from '@/pages/tools/Base64ConverterPage';
import LoremIpsumGeneratorPage from '@/pages/tools/LoremIpsumGeneratorPage';
import QrCodeGeneratorPage from '@/pages/tools/QrCodeGeneratorPage';
import PasswordGeneratorPage from '@/pages/tools/PasswordGeneratorPage';
import TextToSpeechPage from '@/pages/tools/TextToSpeechPage';
import JsonFormatterPage from '@/pages/tools/JsonFormatterPage';
import ColorPickerToolPage from '@/pages/tools/ColorPickerToolPage';
import ImageToBase64Page from '@/pages/tools/ImageToBase64Page';
import WhitespaceRemoverPage from '@/pages/tools/WhitespaceRemoverPage';
import DuplicateLineRemoverPage from '@/pages/tools/DuplicateLineRemoverPage';
import TextReverserPage from '@/pages/tools/TextReverserPage';
import LogoToFaviconPage from '@/pages/tools/LogoToFaviconPage';
import ImageUpscalerPage from '@/pages/tools/ImageUpscalerPage';
import ImageCropperPage from '@/pages/tools/ImageCropperPage';
import RegexTesterPage from '@/pages/tools/RegexTesterPage';
import TextFontChangerPage from '@/pages/tools/TextFontChangerPage';
import AiTextRewriterPage from '@/pages/tools/AiTextRewriterPage';
import ImageFormatConverterPage from '@/pages/tools/ImageFormatConverterPage';
import SvgOptimizerPage from '@/pages/tools/SvgOptimizerPage';
import ImageMetadataViewerPage from '@/pages/tools/ImageMetadataViewerPage';
import PdfTextExtractorPage from '@/pages/tools/PdfTextExtractorPage';
import PlaceholderImageGeneratorPage from '@/pages/tools/PlaceholderImageGeneratorPage';
import TypingTutorPage from '@/pages/tools/TypingTutorPage';
import TypingTestPage from '@/pages/tools/TypingTestPage';
import TypingGamesPage from '@/pages/tools/TypingGamesPage';
import TypingCompetitionPage from '@/pages/tools/TypingCompetitionPage';
import SimpleCalculatorPage from '@/pages/tools/SimpleCalculatorPage';
import AgeCalculatorPage from '@/pages/tools/AgeCalculatorPage';
import DateDifferenceCalculatorPage from '@/pages/tools/DateDifferenceCalculatorPage';
import BmiCalculatorPage from '@/pages/tools/BmiCalculatorPage';
import PercentageCalculatorPage from '@/pages/tools/PercentageCalculatorPage';
import CurrencyConverterPage from '@/pages/tools/CurrencyConverterPage';
import GstCalculatorPage from '@/pages/tools/GstCalculatorPage';
import EmiCalculatorPage from '@/pages/tools/EmiCalculatorPage';
import SipCalculatorPage from '@/pages/tools/SipCalculatorPage';
import PpfCalculatorPage from '@/pages/tools/PpfCalculatorPage';
import FdCalculatorPage from '@/pages/tools/FdCalculatorPage';
import IncomeTaxCalculatorPage from '@/pages/tools/IncomeTaxCalculatorPage';
import TemperatureConverterPage from '@/pages/tools/TemperatureConverterPage';
import UnitConverterPage from '@/pages/tools/UnitConverterPage';
import LivePreviewPage from '@/pages/tools/LivePreviewPage';
import JavascriptMinifierPage from '@/pages/tools/JavascriptMinifierPage';
import TableToJsonConverterPage from '@/pages/tools/TableToJsonConverterPage';
import StopwatchPage from '@/pages/tools/StopwatchPage';
import CountdownTimerPage from '@/pages/tools/CountdownTimerPage';
import ListRandomizerPage from '@/pages/tools/ListRandomizerPage';
import BarcodeGeneratorPage from '@/pages/tools/BarcodeGeneratorPage';
import UrlSlugGeneratorPage from '@/pages/tools/UrlSlugGeneratorPage';
import TextToHandwritingPage from '@/pages/tools/TextToHandwritingPage';
import NotesPage from '@/pages/tools/NotesPage';
import UrlWrapperPage from '@/pages/tools/UrlWrapperPage';
import IpLookupPage from '@/pages/tools/IpLookupPage';
import TodoListPage from '@/pages/tools/TodoListPage';

import HashGeneratorPage from '@/pages/tools/HashGeneratorPage';
import JwtDecoderPage from '@/pages/tools/JwtDecoderPage';
import MetaTagPreviewerPage from '@/pages/tools/MetaTagPreviewerPage';
import EnhancedUnitConverterPage from '@/pages/tools/EnhancedUnitConverterPage';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* Tool Routes */}
          <Route path="/word-counter" element={<WordCounterPage />} />
          <Route path="/text-case-converter" element={<TextCaseConverterPage />} />
          <Route path="/image-compressor" element={<ImageCompressorPage />} />
          <Route path="/url-shortener" element={<UrlShortenerPage />} />
          <Route path="/base64-converter" element={<Base64ConverterPage />} />
          <Route path="/lorem-ipsum-generator" element={<LoremIpsumGeneratorPage />} />
          <Route path="/qr-code-generator" element={<QrCodeGeneratorPage />} />
          <Route path="/password-generator" element={<PasswordGeneratorPage />} />
          <Route path="/text-to-speech" element={<TextToSpeechPage />} />
          <Route path="/json-formatter" element={<JsonFormatterPage />} />
          <Route path="/color-picker-tool" element={<ColorPickerToolPage />} />
          <Route path="/image-to-base64" element={<ImageToBase64Page />} />
          <Route path="/whitespace-remover" element={<WhitespaceRemoverPage />} />
          <Route path="/duplicate-line-remover" element={<DuplicateLineRemoverPage />} />
          <Route path="/text-reverser" element={<TextReverserPage />} />
          <Route path="/logo-to-favicon" element={<LogoToFaviconPage />} />
          <Route path="/image-upscaler" element={<ImageUpscalerPage />} />
          <Route path="/image-cropper" element={<ImageCropperPage />} />
          <Route path="/regex-tester" element={<RegexTesterPage />} />
          <Route path="/text-font-changer" element={<TextFontChangerPage />} />
          <Route path="/ai-text-rewriter" element={<AiTextRewriterPage />} />
          <Route path="/image-format-converter" element={<ImageFormatConverterPage />} />
          <Route path="/svg-optimizer" element={<SvgOptimizerPage />} />
          <Route path="/image-metadata-viewer" element={<ImageMetadataViewerPage />} />
          <Route path="/pdf-text-extractor" element={<PdfTextExtractorPage />} />
          <Route path="/placeholder-image-generator" element={<PlaceholderImageGeneratorPage />} />
          <Route path="/typing-tutor" element={<TypingTutorPage />} />
          <Route path="/typing-test" element={<TypingTestPage />} />
          <Route path="/typing-games" element={<TypingGamesPage />} />
          <Route path="/typing-competition" element={<TypingCompetitionPage />} />
          <Route path="/simple-calculator" element={<SimpleCalculatorPage />} />
          <Route path="/age-calculator" element={<AgeCalculatorPage />} />
          <Route path="/date-difference-calculator" element={<DateDifferenceCalculatorPage />} />
          <Route path="/bmi-calculator" element={<BmiCalculatorPage />} />
          <Route path="/percentage-calculator" element={<PercentageCalculatorPage />} />
          <Route path="/currency-converter" element={<CurrencyConverterPage />} />
          <Route path="/gst-calculator" element={<GstCalculatorPage />} />
          <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
          <Route path="/sip-calculator" element={<SipCalculatorPage />} />
          <Route path="/ppf-calculator" element={<PpfCalculatorPage />} />
          <Route path="/fd-calculator" element={<FdCalculatorPage />} />
          <Route path="/income-tax-calculator" element={<IncomeTaxCalculatorPage />} />
          <Route path="/temperature-converter" element={<TemperatureConverterPage />} />
          <Route path="/unit-converter" element={<UnitConverterPage />} />
          <Route path="/live-preview" element={<LivePreviewPage />} />
          <Route path="/javascript-minifier" element={<JavascriptMinifierPage />} />
          <Route path="/table-to-json-converter" element={<TableToJsonConverterPage />} />
          <Route path="/stopwatch" element={<StopwatchPage />} />
          <Route path="/countdown-timer" element={<CountdownTimerPage />} />
          <Route path="/list-randomizer" element={<ListRandomizerPage />} />
          <Route path="/barcode-generator" element={<BarcodeGeneratorPage />} />
          <Route path="/url-slug-generator" element={<UrlSlugGeneratorPage />} />
          <Route path="/text-to-handwriting" element={<TextToHandwritingPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/url-wrapper" element={<UrlWrapperPage />} />
          <Route path="/ip-lookup" element={<IpLookupPage />} />
          <Route path="/todo-list" element={<TodoListPage />} />
          
          {/* New Developer Tools Routes */}
          <Route path="/hash-generator" element={<HashGeneratorPage />} />
          <Route path="/jwt-decoder" element={<JwtDecoderPage />} />
          <Route path="/meta-tag-previewer" element={<MetaTagPreviewerPage />} />
          <Route path="/enhanced-unit-converter" element={<EnhancedUnitConverterPage />} />
          
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
