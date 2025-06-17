import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gamepad2, Target, Zap, Heart, Star, RotateCcw, Play } from 'lucide-react';

const TypingGames = () => {
  const [gameType, setGameType] = useState('words');
  const [language, setLanguage] = useState('english');
  const [difficulty, setDifficulty] = useState('easy');
  const [isGameActive, setIsGameActive] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [typedText, setTypedText] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(3000);
  const [isGameOver, setIsGameOver] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const gameWords = {
    english: {
      easy: ['cat', 'dog', 'sun', 'fun', 'run', 'big', 'red', 'blue', 'tree', 'book'],
      medium: ['happy', 'computer', 'keyboard', 'typing', 'practice', 'learning', 'challenge', 'victory'],
      hard: ['programming', 'technology', 'development', 'algorithm', 'efficiency', 'productivity', 'optimization']
    },
    hindi: {
      easy: ['घर', 'पानी', 'आम', 'सूरज', 'चाँद', 'फूल', 'पेड़', 'किताब'],
      medium: ['कंप्यूटर', 'टाइपिंग', 'अभ्यास', 'विद्यालय', 'प्रगति', 'सफलता'],
      hard: ['तकनीकी', 'प्रौद्योगिकी', 'विकास', 'कुशलता', 'उत्पादकता', 'अनुकूलन']
    }
  };

  const getRandomWord = () => {
    const words = gameWords[language as keyof typeof gameWords][difficulty as keyof typeof gameWords.english];
    return words[Math.floor(Math.random() * words.length)];
  };

  const startGame = () => {
    setIsGameActive(true);
    setIsGameOver(false);
    setCurrentWord(getRandomWord());
    setTypedText('');
    setScore(0);
    setLives(3);
    setLevel(1);
    setTimeLeft(30);
    setWordsCompleted(0);
    setGameSpeed(3000);
  };

  const resetGame = () => {
    setIsGameActive(false);
    setIsGameOver(false);
    setCurrentWord('');
    setTypedText('');
    setScore(0);
    setLives(3);
    setLevel(1);
    setTimeLeft(30);
    setWordsCompleted(0);
    setGameSpeed(3000);
  };

  const nextWord = () => {
    setCurrentWord(getRandomWord());
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
    if (isGameActive && timeLeft > 0 && gameType === 'time') {
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
  }, [isGameActive, timeLeft, gameType]);

  // Word timeout effect for survival mode
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (isGameActive && gameType === 'survival' && currentWord) {
      timeout = setTimeout(() => {
        setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
            handleGameOver();
            return 0;
          }
          nextWord();
          return newLives;
        });
      }, gameSpeed);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isGameActive, currentWord, gameSpeed, gameType]);

  // Progress animation for survival mode
  useEffect(() => {
    if (gameType === 'survival' && isGameActive && progressRef.current) {
      const progressElement = progressRef.current;
      progressElement.style.animation = 'none';
      progressElement.offsetHeight; // Trigger reflow
      progressElement.style.animation = `shrinkProgress ${gameSpeed}ms linear`;
    }
  }, [currentWord, gameSpeed, gameType, isGameActive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isGameActive || isGameOver) return;

    const value = e.target.value;
    setTypedText(value);

    if (value === currentWord) {
      const points = currentWord.length * level;
      setScore(prev => prev + points);
      nextWord();
    } else if (value.length > currentWord.length) {
      // Wrong input - reset
      setTypedText('');
      if (gameType === 'survival') {
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
      return typedText[index] === currentWord[index] ? 'text-green-600' : 'text-red-600';
    }
    return 'text-gray-600';
  };

  const progress = gameType === 'time' ? (timeLeft / 30) * 100 : (wordsCompleted % 10) / 10 * 100;

  return (
    <div className="space-y-6">
      <style>{`
        @keyframes shrinkProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>

      {/* Game Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Typing Games
          </CardTitle>
          <CardDescription>
            Fun games to improve your typing skills
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Game Mode</label>
              <Select value={gameType} onValueChange={setGameType} disabled={isGameActive}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="words">Word Challenge</SelectItem>
                  <SelectItem value="time">Time Attack</SelectItem>
                  <SelectItem value="survival">Survival Mode</SelectItem>
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

          {/* Game Mode Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <h4 className="font-medium mb-1">Word Challenge</h4>
              <p className="text-muted-foreground">Type words correctly to score points. No time pressure!</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium mb-1">Time Attack</h4>
              <p className="text-muted-foreground">Type as many words as possible in 30 seconds.</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <h4 className="font-medium mb-1">Survival Mode</h4>
              <p className="text-muted-foreground">Type words before time runs out. Lose all lives and it's over!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Stats */}
      {isGameActive || isGameOver ? (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{score}</p>
                  <p className="text-xs text-muted-foreground">Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{wordsCompleted}</p>
                  <p className="text-xs text-muted-foreground">Words</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{level}</p>
                  <p className="text-xs text-muted-foreground">Level</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {gameType === 'survival' && (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-2xl font-bold">{lives}</p>
                    <p className="text-xs text-muted-foreground">Lives</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          {gameType === 'time' && (
            <Card>
              <CardContent className="p-4">
                <div>
                  <p className="text-2xl font-bold">{timeLeft}s</p>
                  <p className="text-xs text-muted-foreground">Time Left</p>
                </div>
              </CardContent>
            </Card>
          )}
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-sm font-medium mb-2">Progress</p>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {/* Game Area */}
      {currentWord && (isGameActive || isGameOver) ? (
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
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current Word Display */}
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-mono font-bold mb-4">
                {currentWord.split('').map((char, index) => (
                  <span
                    key={index}
                    className={getCharacterClass(index)}
                  >
                    {char}
                  </span>
                ))}
              </div>
              
              {/* Progress bar for survival mode */}
              {gameType === 'survival' && isGameActive && (
                <div className="max-w-md mx-auto">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      ref={progressRef}
                      className="bg-blue-600 h-3 rounded-full transition-all duration-100"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Type before time runs out!</p>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={typedText}
                onChange={handleInputChange}
                className="w-full p-4 border rounded-lg text-xl text-center font-mono focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={isGameActive ? "Type the word..." : "Game Over"}
                disabled={!isGameActive}
                autoFocus={isGameActive}
              />
            </div>

            {/* Game Over Results */}
            {isGameOver && (
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Game Over!</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-md mx-auto">
                  <div>
                    <p className="text-muted-foreground">Final Score</p>
                    <p className="text-xl font-bold">{score}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Words Typed</p>
                    <p className="text-xl font-bold">{wordsCompleted}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Level Reached</p>
                    <p className="text-xl font-bold">{level}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Points/Word</p>
                    <p className="text-xl font-bold">{wordsCompleted > 0 ? Math.round(score / wordsCompleted) : 0}</p>
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
              Choose your game mode, language, and difficulty level, then click "Start Game"
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TypingGames;
