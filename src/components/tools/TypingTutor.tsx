
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Keyboard, RotateCcw, Trophy, Target, Timer } from 'lucide-react';

const TypingTutor = () => {
  const [language, setLanguage] = useState('english');
  const [lessonType, setLessonType] = useState('beginner');
  const [currentText, setCurrentText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const lessons = {
    english: {
      beginner: [
        'the quick brown fox jumps over the lazy dog',
        'a journey of a thousand miles begins with a single step',
        'practice makes perfect when learning to type fast',
        'typing skills are essential in the digital age'
      ],
      intermediate: [
        'The rapid advancement of technology has transformed our daily lives in ways we could never have imagined just a few decades ago.',
        'Professional communication requires clear, concise, and well-structured writing that conveys your message effectively.',
        'Learning to touch type without looking at the keyboard is a valuable skill that will serve you throughout your career.',
        'Digital literacy encompasses not just the ability to use technology, but also to understand its implications and limitations.'
      ],
      advanced: [
        'Artificial intelligence and machine learning algorithms are revolutionizing industries across the globe, from healthcare and finance to transportation and entertainment.',
        'The interconnected nature of modern business requires professionals to communicate effectively across multiple platforms, time zones, and cultural boundaries.',
        'Cybersecurity has become increasingly important as our reliance on digital infrastructure grows, requiring both technical expertise and user awareness.',
        'Sustainable development goals require innovative solutions that balance economic growth with environmental protection and social equity.'
      ]
    },
    hindi: {
      beginner: [
        'मैं आज कल बहुत अच्छा टाइप कर रहा हूँ',
        'हिंदी भाषा बहुत सुंदर और व्यापक है',
        'अभ्यास से ही हम टाइपिंग में माहिर बन सकते हैं',
        'कंप्यूटर का उपयोग आज हर क्षेत्र में हो रहा है'
      ],
      intermediate: [
        'भारत एक विविधताओं से भरा देश है जहाँ अनेक भाषाएँ बोली जाती हैं और विभिन्न संस्कृतियों का मेल देखने को मिलता है।',
        'शिक्षा के क्षेत्र में डिजिटल तकनीक का प्रयोग करके हम बेहतर और प्रभावी तरीके से पढ़ाई कर सकते हैं।',
        'हिंदी टाइपिंग सीखना आज के समय में एक महत्वपूर्ण कौशल है जो करियर में बहुत काम आता है।',
        'इंटरनेट और सोशल मीडिया के कारण हमारे संवाद करने के तरीके में बहुत बदलाव आया है।'
      ],
      advanced: [
        'कृत्रिम बुद्धिमत्ता और मशीन लर्निंग के क्षेत्र में हो रहे विकास से तकनीकी क्रांति का सूत्रपात हो रहा है जो समाज के हर क्षेत्र को प्रभावित कर रहा है।',
        'वैश्वीकरण के इस युग में विभिन्न संस्कृतियों के बीच तालमेल बिठाना और एक साझा मंच पर काम करना आवश्यक हो गया है।',
        'पर्यावरण संरक्षण और टिकाऊ विकास के लिए हमें नवीन तकनीकों का उपयोग करते हुए प्राकृतिक संसाधनों का सदुपयोग करना होगा।',
        'डिजिटल भारत की पहल के तहत सरकारी सेवाओं को ऑनलाइन उपलब्ध कराकर नागरिकों के जीवन को सुविधाजनक बनाया जा रहा है।'
      ]
    }
  };

  const getRandomLesson = () => {
    const lessons_list = lessons[language as keyof typeof lessons][lessonType as keyof typeof lessons.english];
    return lessons_list[Math.floor(Math.random() * lessons_list.length)];
  };

  const startLesson = () => {
    const newText = getRandomLesson();
    setCurrentText(newText);
    setTypedText('');
    setCurrentIndex(0);
    setStartTime(new Date());
    setWpm(0);
    setAccuracy(100);
    setIsCompleted(false);
    setErrors(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTypedText(value);

    if (value.length <= currentText.length) {
      setCurrentIndex(value.length);

      // Calculate errors
      let errorCount = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== currentText[i]) {
          errorCount++;
        }
      }
      setErrors(errorCount);

      // Calculate accuracy
      const accuracyPercentage = value.length > 0 ? ((value.length - errorCount) / value.length) * 100 : 100;
      setAccuracy(Math.round(accuracyPercentage));

      // Calculate WPM
      if (startTime) {
        const timeElapsed = (new Date().getTime() - startTime.getTime()) / 1000 / 60;
        const wordsTyped = value.trim().split(' ').length;
        const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
        setWpm(currentWpm);
      }

      // Check completion
      if (value === currentText) {
        setIsCompleted(true);
      }
    }
  };

  const resetLesson = () => {
    setTypedText('');
    setCurrentIndex(0);
    setStartTime(new Date());
    setWpm(0);
    setAccuracy(100);
    setIsCompleted(false);
    setErrors(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getCharacterClass = (index: number) => {
    if (index < typedText.length) {
      return typedText[index] === currentText[index] ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
    } else if (index === currentIndex) {
      return 'bg-blue-200 border-b-2 border-blue-500';
    }
    return 'text-gray-600';
  };

  const progress = currentText ? (currentIndex / currentText.length) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="h-5 w-5" />
            Typing Tutor Settings
          </CardTitle>
          <CardDescription>
            Choose your language and difficulty level to start learning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Language</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">हिंदी</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <Select value={lessonType} onValueChange={setLessonType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={startLesson} className="w-full">
                Start New Lesson
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      {currentText && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{wpm}</p>
                  <p className="text-xs text-muted-foreground">WPM</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{accuracy}%</p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">{errors}</p>
                  <p className="text-xs text-muted-foreground">Errors</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-sm font-medium mb-2">Progress</p>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{Math.round(progress)}%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Typing Area */}
      {currentText && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Typing Practice</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={resetLesson}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                {isCompleted && (
                  <Badge variant="default" className="bg-green-500">
                    <Trophy className="h-4 w-4 mr-1" />
                    Completed!
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Text Display */}
            <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="text-lg leading-relaxed font-mono">
                {currentText.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`${getCharacterClass(index)} px-0.5 rounded`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={typedText}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-lg font-mono"
              placeholder="Start typing here..."
              disabled={isCompleted}
              autoFocus
            />

            {/* Instructions */}
            <div className="text-sm text-muted-foreground">
              <p>• Focus on accuracy first, speed will come naturally</p>
              <p>• Use all fingers and avoid looking at the keyboard</p>
              <p>• Maintain good posture while typing</p>
              <p>• Take breaks to avoid fatigue</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Start Message */}
      {!currentText && (
        <Card className="text-center py-12">
          <CardContent>
            <Keyboard className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Ready to Learn Typing?</h3>
            <p className="text-muted-foreground mb-4">
              Select your language and difficulty level, then click "Start New Lesson" to begin
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TypingTutor;
