
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Users, Timer, Target, Crown, Medal, Award } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  wpm: number;
  accuracy: number;
  progress: number;
  isFinished: boolean;
  isCurrentUser: boolean;
}

const TypingCompetition = () => {
  const [language, setLanguage] = useState('english');
  const [isInRoom, setIsInRoom] = useState(false);
  const [isRaceActive, setIsRaceActive] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [raceFinished, setRaceFinished] = useState(false);
  const [finalPosition, setFinalPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Simulated players for demonstration
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 'user',
      name: 'You',
      wpm: 0,
      accuracy: 100,
      progress: 0,
      isFinished: false,
      isCurrentUser: true
    }
  ]);

  const raceTexts = {
    english: [
      "The art of typing is not just about speed, but also about accuracy and consistency. Professional typists understand that maintaining proper form and technique is essential for long-term success.",
      "In today's digital world, efficient typing skills can significantly boost productivity and career prospects. Whether you're writing emails, coding, or creating content, fast and accurate typing is invaluable.",
      "Technology continues to evolve at an unprecedented pace, transforming how we work, communicate, and live our daily lives. Adapting to these changes requires continuous learning and skill development.",
      "The internet has revolutionized global communication, connecting billions of people across different continents and cultures. This connectivity has created new opportunities for collaboration and innovation."
    ],
    hindi: [
      "आज के डिजिटल युग में टाइपिंग एक महत्वपूर्ण कौशल है जो हमारी कार्यक्षमता और व्यावसायिक सफलता में महत्वपूर्ण भूमिका निभाता है। नियमित अभ्यास से हम इस कला में निपुणता प्राप्त कर सकते हैं।",
      "भारत की तकनीकी प्रगति ने शिक्षा, स्वास्थ्य और व्यापार के क्षेत्र में नए अवसर प्रदान किए हैं। डिजिटल साक्षरता अब एक आवश्यकता बन गई है जो हर व्यक्ति के लिए महत्वपूर्ण है।",
      "हिंदी भाषा की समृद्ध परंपरा और आधुनिक तकनीक का संयोजन नई संभावनाओं को जन्म दे रहा है। यह हमारी संस्कृति को आगे बढ़ाने में सहायक है।",
      "शिक्षा के क्षेत्र में इंटरनेट और कंप्यूटर का उपयोग छात्रों के लिए नए आयाम खोल रहा है। ऑनलाइन शिक्षा अब पारंपरिक शिक्षा का पूरक बन गई है।"
    ]
  };

  const generateBotPlayers = () => {
    const botNames = ['SpeedyTyper', 'KeyboardKing', 'TypeMaster', 'QuickFingers', 'RapidRacer'];
    const bots: Player[] = botNames.slice(0, Math.floor(Math.random() * 4) + 2).map((name, index) => ({
      id: `bot-${index}`,
      name,
      wpm: 0,
      accuracy: 95 + Math.random() * 5,
      progress: 0,
      isFinished: false,
      isCurrentUser: false
    }));
    return bots;
  };

  const joinRoom = () => {
    const bots = generateBotPlayers();
    setPlayers([...players, ...bots]);
    setIsInRoom(true);
    
    // Simulate waiting for race to start
    setTimeout(() => {
      startRace();
    }, 2000);
  };

  const startRace = () => {
    const texts = raceTexts[language as keyof typeof raceTexts];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setCurrentText(randomText);
    
    // 3-2-1 countdown
    setCountdown(3);
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsRaceActive(true);
          setStartTime(new Date());
          if (inputRef.current) {
            inputRef.current.focus();
          }
          
          // Start bot simulation
          simulateBotTyping();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const simulateBotTyping = () => {
    const interval = setInterval(() => {
      setPlayers(prevPlayers => 
        prevPlayers.map(player => {
          if (!player.isCurrentUser && !player.isFinished && isRaceActive) {
            const baseSpeed = 40 + Math.random() * 40; // 40-80 WPM
            const progressIncrement = (baseSpeed / 60) / currentText.length * 100;
            const newProgress = Math.min(player.progress + progressIncrement, 100);
            
            return {
              ...player,
              progress: newProgress,
              wpm: Math.round(baseSpeed + Math.random() * 10),
              isFinished: newProgress >= 100
            };
          }
          return player;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isRaceActive || raceFinished) return;

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

      // Calculate progress
      const progress = (value.length / currentText.length) * 100;

      // Calculate WPM
      if (startTime) {
        const timeElapsed = (new Date().getTime() - startTime.getTime()) / 1000 / 60;
        const wordsTyped = value.trim().split(' ').length;
        const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
        setWpm(currentWpm);
      }

      // Update current player
      setPlayers(prevPlayers =>
        prevPlayers.map(player =>
          player.isCurrentUser
            ? { ...player, wpm, accuracy, progress, isFinished: progress >= 100 }
            : player
        )
      );

      // Check completion
      if (value === currentText) {
        const finishedPlayers = players.filter(p => p.isFinished).length;
        setFinalPosition(finishedPlayers + 1);
        setRaceFinished(true);
        setIsRaceActive(false);
      }
    }
  };

  const leaveRoom = () => {
    setIsInRoom(false);
    setIsRaceActive(false);
    setCurrentText('');
    setTypedText('');
    setCurrentIndex(0);
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setCountdown(0);
    setRaceFinished(false);
    setFinalPosition(0);
    setPlayers([{
      id: 'user',
      name: 'You',
      wpm: 0,
      accuracy: 100,
      progress: 0,
      isFinished: false,
      isCurrentUser: true
    }]);
  };

  const getCharacterClass = (index: number) => {
    if (index < typedText.length) {
      return typedText[index] === currentText[index] ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
    } else if (index === currentIndex) {
      return 'bg-blue-200 border-b-2 border-blue-500';
    }
    return 'text-gray-600';
  };

  const sortedPlayers = [...players].sort((a, b) => {
    if (a.isFinished && !b.isFinished) return -1;
    if (!a.isFinished && b.isFinished) return 1;
    if (a.isFinished && b.isFinished) return b.progress - a.progress;
    return b.progress - a.progress;
  });

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="h-4 w-4 text-yellow-500" />;
      case 1: return <Medal className="h-4 w-4 text-gray-400" />;
      case 2: return <Award className="h-4 w-4 text-orange-500" />;
      default: return <span className="text-sm font-bold">{index + 1}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Menu */}
      {!isInRoom && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Typing Competition
            </CardTitle>
            <CardDescription>
              Compete with random players in real-time typing races
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div className="flex items-end">
                <Button onClick={joinRoom} className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Find Race
                </Button>
              </div>
            </div>

            <div className="text-center py-8">
              <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Ready to Race?</h3>
              <p className="text-muted-foreground">
                Click "Find Race" to join a typing competition with other players
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Race Room */}
      {isInRoom && (
        <>
          {/* Countdown */}
          {countdown > 0 && (
            <Card className="text-center">
              <CardContent className="py-12">
                <div className="text-6xl font-bold text-primary mb-4">{countdown}</div>
                <p className="text-lg text-muted-foreground">Get ready to type!</p>
              </CardContent>
            </Card>
          )}

          {/* Players List */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Race Participants ({players.length})
                </CardTitle>
                <Button variant="outline" onClick={leaveRoom}>
                  Leave Race
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sortedPlayers.map((player, index) => (
                  <div key={player.id} className={`flex items-center gap-4 p-3 rounded-lg border ${player.isCurrentUser ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200' : 'bg-card'}`}>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(index)}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{player.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{player.name}</span>
                          {player.isCurrentUser && <Badge variant="secondary" className="text-xs">You</Badge>}
                          {player.isFinished && <Badge variant="default" className="text-xs bg-green-500">Finished</Badge>}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{player.wpm} WPM</span>
                          <span>{Math.round(player.accuracy)}% Accuracy</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-32">
                      <Progress value={player.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{Math.round(player.progress)}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Race Stats */}
          {(isRaceActive || raceFinished) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  <div>
                    <p className="text-2xl font-bold text-red-500">{errors}</p>
                    <p className="text-xs text-muted-foreground">Errors</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div>
                    <p className="text-2xl font-bold">{Math.round((currentIndex / currentText.length) * 100)}%</p>
                    <p className="text-xs text-muted-foreground">Progress</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Typing Area */}
          {currentText && countdown === 0 && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Race Text</CardTitle>
                  {raceFinished && (
                    <Badge variant="default" className="bg-green-500">
                      <Trophy className="h-4 w-4 mr-1" />
                      Finished #{finalPosition}
                    </Badge>
                  )}
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
                  placeholder={isRaceActive ? "Type the text above..." : "Race finished!"}
                  disabled={!isRaceActive}
                  autoFocus={isRaceActive}
                />

                {/* Final Results */}
                {raceFinished && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Race Complete!</h3>
                    <p className="text-muted-foreground mb-4">
                      You finished in position #{finalPosition} out of {players.length} players
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button onClick={joinRoom}>
                        Race Again
                      </Button>
                      <Button variant="outline" onClick={leaveRoom}>
                        Leave Room
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default TypingCompetition;
