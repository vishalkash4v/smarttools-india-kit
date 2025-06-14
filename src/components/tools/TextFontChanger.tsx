
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FontStyle {
  name: string;
  description: string;
  transform: (text: string) => string;
  category: string;
}

const TextFontChanger = () => {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const fontStyles: FontStyle[] = [
    // Unicode Styles
    {
      name: 'Bold',
      description: 'Mathematical Bold',
      category: 'Unicode',
      transform: (text) => text.replace(/[A-Za-z0-9]/g, (char) => {
        const boldMap: { [key: string]: string } = {
          'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
          'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
          'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
          'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
          'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
          'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
          '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
        };
        return boldMap[char] || char;
      })
    },
    {
      name: 'Italic',
      description: 'Mathematical Italic',
      category: 'Unicode',
      transform: (text) => text.replace(/[A-Za-z]/g, (char) => {
        const italicMap: { [key: string]: string } = {
          'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
          'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
          'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
          'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
          'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
          'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧'
        };
        return italicMap[char] || char;
      })
    },
    {
      name: 'Double Struck',
      description: 'Mathematical Double-Struck',
      category: 'Unicode',
      transform: (text) => text.replace(/[A-Za-z0-9]/g, (char) => {
        const doubleMap: { [key: string]: string } = {
          'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
          'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
          'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
          'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
          'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
          'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
          '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
        };
        return doubleMap[char] || char;
      })
    },
    {
      name: 'Monospace',
      description: 'Fixed-width Font',
      category: 'Unicode',
      transform: (text) => text.replace(/[A-Za-z0-9]/g, (char) => {
        const monoMap: { [key: string]: string } = {
          'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
          'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
          'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
          'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
          'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
          'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
          '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
        };
        return monoMap[char] || char;
      })
    },
    // Special Styles
    {
      name: 'Upside Down',
      description: 'Flipped Text',
      category: 'Special',
      transform: (text) => {
        const flipMap: { [key: string]: string } = {
          'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
          'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
          'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
          'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
          'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴',
          'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
          '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
          '.': '˙', ',': "'", '?': '¿', '!': '¡', "'": ',', '"': '„', '(': ')', ')': '(', '[': ']', ']': '[',
          '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋'
        };
        return text.toLowerCase().split('').map(char => flipMap[char] || char).reverse().join('');
      }
    },
    {
      name: 'Mirror Text',
      description: 'Reversed Character Order',
      category: 'Special',
      transform: (text) => text.split('').reverse().join('')
    },
    {
      name: 'Bubble Text',
      description: 'Circled Characters',
      category: 'Special',
      transform: (text) => text.replace(/[A-Za-z0-9]/g, (char) => {
        const bubbleMap: { [key: string]: string } = {
          'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
          'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
          'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
          'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
          'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
          'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
          '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
        };
        return bubbleMap[char] || char;
      })
    },
    {
      name: 'Square Text',
      description: 'Squared Characters',
      category: 'Special',
      transform: (text) => text.replace(/[A-Za-z]/g, (char) => {
        const squareMap: { [key: string]: string } = {
          'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
          'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
          'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉'
        };
        return squareMap[char.toUpperCase()] || char;
      })
    },
    // Decorative Styles
    {
      name: 'Zalgo Text',
      description: 'Glitchy Combining Characters',
      category: 'Decorative',
      transform: (text) => {
        const zalgoChars = [
          '\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u0309',
          '\u030A', '\u030B', '\u030C', '\u030D', '\u030E', '\u030F', '\u0310', '\u0311', '\u0312', '\u0313',
          '\u0314', '\u0315', '\u0316', '\u0317', '\u0318', '\u0319', '\u031A', '\u031B', '\u031C', '\u031D'
        ];
        return text.split('').map(char => {
          if (char.match(/[a-zA-Z]/)) {
            const numZalgo = Math.floor(Math.random() * 3) + 1;
            let zalgoText = char;
            for (let i = 0; i < numZalgo; i++) {
              zalgoText += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
            }
            return zalgoText;
          }
          return char;
        }).join('');
      }
    },
    {
      name: 'Strikethrough',
      description: 'Text with Line Through',
      category: 'Decorative',
      transform: (text) => text.split('').map(char => char + '\u0336').join('')
    },
    {
      name: 'Underline',
      description: 'Text with Underline',
      category: 'Decorative',
      transform: (text) => text.split('').map(char => char + '\u0332').join('')
    },
    // Text Case Styles
    {
      name: 'aLtErNaTiNg CaSe',
      description: 'Alternating Upper and Lower Case',
      category: 'Case',
      transform: (text) => text.split('').map((char, index) => 
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      ).join('')
    },
    {
      name: 'InVeRsE cAsE',
      description: 'Inverse Alternating Case',
      category: 'Case',
      transform: (text) => text.split('').map((char, index) => 
        index % 2 === 1 ? char.toLowerCase() : char.toUpperCase()
      ).join('')
    },
    {
      name: 'UPPERCASE',
      description: 'All Characters Uppercase',
      category: 'Case',
      transform: (text) => text.toUpperCase()
    },
    {
      name: 'lowercase',
      description: 'All Characters Lowercase',
      category: 'Case',
      transform: (text) => text.toLowerCase()
    },
    {
      name: 'Title Case',
      description: 'First Letter of Each Word Capitalized',
      category: 'Case',
      transform: (text) => text.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
    }
  ];

  const categories = ['All', ...Array.from(new Set(fontStyles.map(style => style.category)))];

  const filteredStyles = selectedCategory === 'All' 
    ? fontStyles 
    : fontStyles.filter(style => style.category === selectedCategory);

  const copyToClipboard = useCallback(async (text: string, styleName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${styleName} text copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy text to clipboard",
        variant: "destructive",
      });
    }
  }, [toast]);

  const downloadText = useCallback((text: string, styleName: string) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${styleName.toLowerCase().replace(/\s+/g, '_')}_text.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `${styleName} text downloaded as file`,
    });
  }, [toast]);

  const clearText = useCallback(() => {
    setInputText('');
    toast({
      title: "Cleared!",
      description: "Input text has been cleared",
    });
  }, [toast]);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Text Font Changer
            <RefreshCw className="h-5 w-5" />
          </CardTitle>
          <CardDescription>
            Transform your plain text into various fancy fonts and styles. Perfect for social media, messaging, and creative writing.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="input-text" className="text-sm font-medium">
              Enter your text:
            </label>
            <Textarea
              id="input-text"
              placeholder="Type your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[100px] resize-y"
            />
            {inputText && (
              <div className="flex gap-2">
                <Button onClick={clearText} variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Clear
                </Button>
                <Badge variant="secondary">
                  {inputText.length} characters
                </Badge>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Filter by category:</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {inputText && (
        <div className="grid gap-4">
          {filteredStyles.map((style, index) => {
            const transformedText = style.transform(inputText);
            return (
              <Card key={index} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{style.name}</CardTitle>
                      <CardDescription>{style.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{style.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg font-mono text-lg leading-relaxed break-all">
                    {transformedText}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(transformedText, style.name)}
                      variant="outline"
                      size="sm"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      onClick={() => downloadText(transformedText, style.name)}
                      variant="outline"
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {!inputText && (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              Enter some text above to see it transformed into various fancy fonts and styles!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TextFontChanger;
