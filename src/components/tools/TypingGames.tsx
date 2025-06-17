
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gamepad2, Target, Zap, Heart, Star, RotateCcw, Play, Trophy, Clock, Keyboard, Users, Brain, Rocket } from 'lucide-react';

const TypingGames = () => {
  const [gameType, setGameType] = useState('word-race');
  const [language, setLanguage] = useState('english');
  const [difficulty, setDifficulty] = useState('easy');
  const [isGameActive, setIsGameActive] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(3000);
  const [isGameOver, setIsGameOver] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [grossAccuracy, setGrossAccuracy] = useState(100);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [correctKeystrokes, setCorrectKeystrokes] = useState(0);
  const [errors, setErrors] = useState(0);
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const gameTypes = {
    'word-race': { name: 'Word Race', icon: Rocket, desc: 'Race against time to type words' },
    'speed-burst': { name: 'Speed Burst', icon: Zap, desc: '30-second speed challenge' },
    'accuracy-master': { name: 'Accuracy Master', icon: Target, desc: 'Perfect typing challenge' },
    'survival-mode': { name: 'Survival Mode', icon: Heart, desc: 'Type before time runs out' },
    'word-hunter': { name: 'Word Hunter', icon: Target, desc: 'Find and type specific words' },
    'letter-rain': { name: 'Letter Rain', icon: Brain, desc: 'Type falling letters' },
    'phrase-master': { name: 'Phrase Master', icon: Star, desc: 'Complete common phrases' },
    'number-ninja': { name: 'Number Ninja', icon: Keyboard, desc: 'Type numbers and symbols' },
    'code-typer': { name: 'Code Typer', icon: Brain, desc: 'Type programming code snippets' },
    'story-mode': { name: 'Story Mode', icon: Star, desc: 'Type complete stories' },
    'rhythm-typing': { name: 'Rhythm Typing', icon: Zap, desc: 'Type to the beat' },
    'blind-typing': { name: 'Blind Typing', icon: Brain, desc: 'Type without seeing text' },
    'reverse-typing': { name: 'Reverse Typing', icon: RotateCcw, desc: 'Type words backwards' },
    'endless-mode': { name: 'Endless Mode', icon: Rocket, desc: 'Never-ending typing challenge' },
    'multiplayer-race': { name: 'Multiplayer Race', icon: Users, desc: 'Race against other players' },
    'typing-olympics': { name: 'Typing Olympics', icon: Trophy, desc: 'Multiple mini-challenges' },
  };

  const gameWords = {
    english: {
      easy: ['cat', 'dog', 'sun', 'fun', 'run', 'big', 'red', 'blue', 'tree', 'book', 'love', 'home', 'time', 'good', 'day'],
      medium: ['happy', 'computer', 'keyboard', 'typing', 'practice', 'learning', 'challenge', 'victory', 'success', 'improve'],
      hard: ['programming', 'technology', 'development', 'algorithm', 'efficiency', 'productivity', 'optimization', 'performance', 'competitive', 'professional']
    },
    hindi: {
      easy: ['घर', 'पानी', 'आम', 'सूरज', 'चाँद', 'फूल', 'पेड़', 'किताब', 'प्यार', 'समय'],
      medium: ['कंप्यूटर', 'टाइपिंग', 'अभ्यास', 'विद्यालय', 'प्रगति', 'सफलता', 'चुनौती', 'विकास'],
      hard: ['तकनीकी', 'प्रौद्योगिकी', 'विकास', 'कुशलता', 'उत्पादकता', 'अनुकूलन', 'प्रतिस्पर्धा', 'व्यावसायिक']
    }
  };

  const phrases = {
    english: [
      'The quick brown fox jumps over the lazy dog',
      'Practice makes perfect typing skills',
      'Typing speed improves with consistent practice',
      'Learn touch typing for better efficiency'
    ],
    hindi: [
      'अभ्यास से टाइपिंग कुशलता बढ़ती है',
      'तेज़ टाइपिंग से काम आसान हो जाता है',
      'कंप्यूटर कौशल आज की आवश्यकता है'
    ]
  };

  const codeSnippets = [
    'function hello() { return "world"; }',
    'const arr = [1, 2, 3, 4, 5];',
    'if (condition) { execute(); }',
    'for (let i = 0; i < 10; i++) {}'
  ];

  const getGameText = () => {
    const words = gameWords[language as keyof typeof gameWords][difficulty as keyof typeof gameWords.english];
    
    switch (gameType) {
      case 'word-race':
      case 'speed-burst':
      case 'word-hunter':
        return words[Math.floor(Math.random() * words.length)];
      case 'phrase-master':
      case 'story-mode':
        const phraseList = phrases[language as keyof typeof phrases];
        return phraseList[Math.floor(Math.random() * phraseList.length)];
      case 'code-typer':
        return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      case 'number-ninja':
        return Math.random().toString().substr(2, 6);
      case 'reverse-typing':
        return words[Math.floor(Math.random() * words.length)].split('').reverse().join('');
      default:
        return words[Math.floor(Math.random() * words.length)];
    }
  };

  const calculateAccuracy = () => {
    if (totalKeystrokes === 0) return 100;
    const netAccuracy = ((correctKeystrokes) / totalKeystrokes) * 100;
    const grossAccuracy = ((correctKeystrokes) / (totalKeystrokes + backspaceCount)) * 100;
    setAccuracy(Math.max(0, netAccuracy));
    setGrossAccuracy(Math.max(0, grossAccuracy));
  };

  const calculateWPM = () => {
    if (!startTime) return;
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
    const wordsTyped = correctKeystrokes / 5; // standard: 5 characters = 1 word
    setWpm(Math.round(wordsTyped / timeElapsed));
  };

  const startGame = () => {
    setIsGameActive(true);
    setIsGameOver(false);
    setCurrentText(getGameText());
    setTypedText('');
    setScore(0);
    setLives(3);
    setLevel(1);
    setTimeLeft(gameType === 'speed-burst' ? 30 : 60);
    setWordsCompleted(0);
    setGameSpeed(3000);
    setAccuracy(100);
    setGrossAccuracy(100);
    setTotalKeystrokes(0);
    setCorrectKeystrokes(0);
    setErrors(0);
    setBackspaceCount(0);
    setWpm(0);
    setStartTime(Date.now());
    
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const resetGame = () => {
    setIsGameActive(false);
    setIsGameOver(false);
    setCurrentText('');
    setTypedText('');
    setScore(0);
    setLives(3);
    setLevel(1);
    setTimeLeft(60);
    setWordsCompleted(0);
    setGameSpeed(3000);
    setAccuracy(100);
    setGrossAccuracy(100);
    setTotalKeystrokes(0);
    setCorrectKeystrokes(0);
    setErrors(0);
    setBackspaceCount(0);
    setWpm(0);
    setStartTime(null);
  };

  const nextText = () => {
    setCurrentText(getGameText());
    setTypedText('');
    setWordsCompleted(prev => prev + 1);
    
    // Increase difficulty every 10 words
    if ((wordsCompleted + 1) % 10 === 0) {
      setLevel(prev => prev + 1);
      setGameSpeed(prev => Math.max(prev - 200, 1000));
    }
  };

  const handleGameOver = () => {
    setIsGameActive(false);
    setIsGameOver(true);
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isGameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleGameOver();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGameActive, timeLeft]);

  // Calculate metrics
  useEffect(() => {
    calculateAccuracy();
    calculateWPM();
  }, [totalKeystrokes, correctKeystrokes, backspaceCount, startTime]);

  // Progress animation for survival mode
  useEffect(() => {
    if ((gameType === 'survival-mode' || gameType === 'letter-rain') && isGameActive && progressRef.current) {
      const progressElement = progressRef.current;
      progressElement.style.animation = 'none';
      progressElement.offsetHeight; // Trigger reflow
      progressElement.style.animation = `shrinkProgress ${gameSpeed}ms linear`;
    }
  }, [currentText, gameSpeed, gameType, isGameActive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isGameActive || isGameOver) return;

    const value = e.target.value;
    const prevLength = typedText.length;
    
    // Handle backspace
    if (value.length < prevLength) {
      setBackspaceCount(prev => prev + 1);
      setTypedText(value);
      return;
    }

    // New character typed
    const newChar = value[value.length - 1];
    const expectedChar = currentText[value.length - 1];
    
    setTotalKeystrokes(prev => prev + 1);
    
    if (newChar === expectedChar) {
      setCorrectKeystrokes(prev => prev + 1);
    } else {
      setErrors(prev => prev + 1);
    }
    
    setTypedText(value);

    if (value === currentText) {
      const points = currentText.length * level * (accuracy / 100);
      setScore(prev => prev + Math.round(points));
      nextText();
    } else if (value.length > currentText.length) {
      // Wrong input - reset for some game modes
      if (gameType === 'accuracy-master') {
        setTypedText('');
        setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
            handleGameOver();
            return 0;
          }
          return newLives;
        });
      }
    }
  };

  const getCharacterClass = (index: number) => {
    if (index < typedText.length) {
      return typedText[index] === currentText[index] ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
    }
    if (index === typedText.length) {
      return 'bg-blue-200 animate-pulse'; // Current cursor position
    }
    return 'text-gray-600';
  };

  const getProgressValue = () => {
    switch (gameType) {
      case 'speed-burst':
        return ((30 - timeLeft) / 30) * 100;
      case 'word-race':
        return ((60 - timeLeft) / 60) * 100;
      case 'accuracy-master':
        return (accuracy);
      case 'survival-mode':
        return (lives / 3) * 100;
      default:
        return (typedText.length / currentText.length) * 100;
    }
  };

  return (
    <div className="space-y-6">
      <style>{`
        @keyframes shrinkProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>

      {/* Game Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            15+ Fun Typing Games
          </CardTitle>
          <CardDescription>
            Choose from various typing games to improve your skills
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Game Type</label>
              <Select value={gameType} onValueChange={setGameType} disabled={isGameActive}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {Object.entries(gameTypes).map(([key, game]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex items-center gap-2">
                        <game.icon className="h-4 w-4" />
                        {game.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Language</label>
              <Select value={language} onValueChange={setLanguage} disabled={isGameActive}>
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
              <Select value={difficulty} onValueChange={setDifficulty} disabled={isGameActive}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={startGame} disabled={isGameActive} className="flex-1">
                <Play className="h-4 w-4 mr-2" />
                Start Game
              </Button>
              <Button variant="outline" onClick={resetGame}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Game Description */}
          {gameType && (
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center gap-2 mb-1">
                {React.createElement(gameTypes[gameType as keyof typeof gameTypes].icon, { className: "h-4 w-4" })}
                <h4 className="font-medium">{gameTypes[gameType as keyof typeof gameTypes].name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{gameTypes[gameType as keyof typeof gameTypes].desc}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Game Stats */}
      {isGameActive || isGameOver ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="text-xl font-bold">{score}</p>
                  <p className="text-xs text-muted-foreground">Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-xl font-bold">{wpm}</p>
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
                  <p className="text-xl font-bold">{accuracy.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground">Net Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-500" />
                <div>
                  <p className="text-xl font-bold">{grossAccuracy.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground">Gross Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-xl font-bold">{wordsCompleted}</p>
                <p className="text-xs text-muted-foreground">Words</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-xl font-bold">{errors}</p>
                <p className="text-xs text-muted-foreground">Errors</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-xl font-bold">{timeLeft}s</p>
                <p className="text-xs text-muted-foreground">Time Left</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-sm font-medium mb-2">Progress</p>
                <Progress value={getProgressValue()} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{getProgressValue().toFixed(0)}%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {/* Game Area */}
      {currentText && (isGameActive || isGameOver) ? (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Game Area</CardTitle>
              <div className="flex gap-2">
                {isGameOver && (
                  <Badge variant="destructive">Game Over</Badge>
                )}
                {isGameActive && (
                  <Badge variant="default" className="bg-green-500">Playing</Badge>
                )}
                {lives < 3 && gameType === 'accuracy-master' && (
                  <div className="flex gap-1">
                    {Array.from({ length: lives }, (_, i) => (
                      <Heart key={i} className="h-4 w-4 text-red-500 fill-current" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current Text Display */}
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-mono font-bold mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                {currentText.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`${getCharacterClass(index)} px-1 py-0.5 rounded`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
              
              {/* Game-specific progress bars */}
              {(gameType === 'survival-mode' || gameType === 'letter-rain') && isGameActive && (
                <div className="max-w-md mx-auto mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      ref={progressRef}
                      className="bg-red-600 h-3 rounded-full transition-all duration-100"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Type before time runs out!</p>
                </div>
              )}

              {/* Overall progress */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{typedText.length}/{currentText.length}</span>
                </div>
                <Progress value={(typedText.length / currentText.length) * 100} className="h-2" />
              </div>
            </div>

            {/* Input */}
            <div className="max-w-md mx-auto">
              <input
                ref={inputRef}
                type="text"
                value={typedText}
                onChange={handleInputChange}
                className="w-full p-4 border rounded-lg text-xl text-center font-mono focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={isGameActive ? "Type here..." : "Game Over"}
                disabled={!isGameActive}
                autoFocus={isGameActive}
                autoComplete="off"
                spellCheck="false"
              />
              {/* Real-time feedback */}
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Keystrokes: {totalKeystrokes}</span>
                <span>Backspaces: {backspaceCount}</span>
              </div>
            </div>

            {/* Game Over Results */}
            {isGameOver && (
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Game Over!</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-2xl mx-auto mb-6">
                  <div>
                    <p className="text-muted-foreground">Final Score</p>
                    <p className="text-xl font-bold">{score}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">WPM</p>
                    <p className="text-xl font-bold">{wpm}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Net Accuracy</p>
                    <p className="text-xl font-bold">{accuracy.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Gross Accuracy</p>
                    <p className="text-xl font-bold">{grossAccuracy.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Words Completed</p>
                    <p className="text-xl font-bold">{wordsCompleted}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Errors</p>
                    <p className="text-xl font-bold">{errors}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Corrections</p>
                    <p className="text-xl font-bold">{backspaceCount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Level Reached</p>
                    <p className="text-xl font-bold">{level}</p>
                  </div>
                </div>
                <Button onClick={startGame} className="mt-4">
                  Play Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <Gamepad2 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Ready to Play?</h3>
            <p className="text-muted-foreground mb-4">
              Choose your game type, language, and difficulty level, then click "Start Game"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-md mx-auto text-xs text-muted-foreground">
              <div>• 15+ Game Modes</div>
              <div>• Speed Tests</div>
              <div>• Accuracy Training</div>
              <div>• Progress Tracking</div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Accuracy Explanation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Understanding Accuracy Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Net Accuracy</h4>
              <p className="text-muted-foreground">
                Calculated as correct keystrokes ÷ total keystrokes. This doesn't count corrections you made with backspace.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Gross Accuracy</h4>
              <p className="text-muted-foreground">
                Includes corrections in the calculation. Shows your accuracy including the time spent correcting mistakes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypingGames;
