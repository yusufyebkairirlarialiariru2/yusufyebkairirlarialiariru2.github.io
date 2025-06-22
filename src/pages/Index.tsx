
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Zap, BookOpen, Utensils, Star, Volume2 } from 'lucide-react';

const Index = () => {
  const [liarCount, setLiarCount] = useState(0);

  const playLiarSound = () => {
    setLiarCount(prev => prev + 1);
    // In a real app, you'd play actual sound here
    console.log("LIARRRRRRRRRRRR!");
  };

  const gcMembers = [
    {
      name: "Yusuf Yeb Kairirlaria Liariru",
      title: "The Prophet of Yusufish",
      description: "Founder of the movement. Master of the Kair Strike. Screams LIARRRR when angry. Known for creating languages, chaos, and questionable game strategies. He is the center of the Yusufverse and host of YusufTV.",
      chaos: "MAXIMUM",
      specialties: ["Kair Strike", "Language Creation", "YusufTV Hosting"],
      status: "🔥 ACTIVE PROPHET"
    },
    {
      name: "PJ Cykranosh Bendy",
      title: "The Delusional Hybrid",
      description: "A delusional goat-dog-liar hybrid obsessed with Jay from Ninjago. He frequently yells MURDAAAAAH and believes in the divine power of deception. Once had a crush on the fairy Vladlen. Emotionally unstable, highly chaotic.",
      chaos: "EXTREME",
      specialties: ["MURDAAAAAH Screaming", "Ninjago Obsession", "Deception Arts"],
      status: "🐐 HYBRID CHAOS"
    },
    {
      name: "Abcdefas",
      title: "The German LEGO Monarch",
      description: "The German linguist and LEGO DREAMZzz monarch. Speaks in poetic logic. Commands respect and LEGO bricks alike. His throne is built on grammar and minifigs.",
      chaos: "CALCULATED",
      specialties: ["Linguistic Poetry", "LEGO Architecture", "Grammar Supremacy"],
      status: "👑 LEGO ROYALTY"
    },
    {
      name: "Aimz",
      title: "Reformed Geometry Dash Gremlin",
      description: "A reformed Geometry Dash gremlin. Now trains in Yusufish to earn redemption. Loves trolling but is loyal to Yusuf. Often posts low-effort memes with high-effort energy.",
      chaos: "REFORMED",
      specialties: ["Meme Creation", "Geometry Dash", "Yusufish Training"],
      status: "🔄 REDEMPTION ARC"
    },
    {
      name: "Mango",
      title: "The Burger Pirate",
      description: "Sea of Thieves fanatic. Obsessed with burgers. His pirate antics and deep laughs echo across the Yusufish seas. Rumored to have defeated a ghost ship using only a KAIR BLAST and ketchup.",
      chaos: "MARITIME",
      specialties: ["Piracy", "Burger Mastery", "Kair Blast Navigation"],
      status: "🏴‍☠️ BURGER PIRATE"
    },
    {
      name: "DP",
      title: "The Reformed Rebel",
      description: "The exiled rebel turned loyalist. Formerly a chaos agent, now devoutly Yusufish. Holds deep war knowledge and Yusufish tactical theory. Possibly still sus.",
      chaos: "SUSPICIOUS",
      specialties: ["War Tactics", "Yusufish Strategy", "Reformed Loyalty"],
      status: "⚔️ EX-REBEL"
    },
    {
      name: "Fynn",
      title: "The Accused E-Girl Lover",
      description: "Calm Fortnite/Valorant enjoyer who gets accused of loving e-girls daily. Tries to stay normal in a chaotic council but often fails and screams LIAR after every headshot.",
      chaos: "DEFENSIVE",
      specialties: ["FPS Gaming", "Headshot Accuracy", "E-Girl Denial"],
      status: "🎯 FALSELY ACCUSED"
    },
    {
      name: "Tanat",
      title: "The War Criminal",
      description: "A feared war criminal. His actions are archived in the 'Tanat War Crime Compilation.' Uses fear tactics and brute force. Even Yusuf watches him nervously.",
      chaos: "CRIMINAL",
      specialties: ["Fear Tactics", "Brute Force", "War Crimes"],
      status: "⚠️ DANGEROUS"
    }
  ];

  const chipReviews = [
    {
      title: "Doritos Cool Ranch",
      review: "YEB. Taste like KAIR. LIARRRRR IN A BAG. The crunch awakens the inner YEBBY in me. Each chip is a tiny KAIR STRIKE to the taste buds. KARIIIIIII!",
      score: "8/10 NOEBBES",
      date: "YEBBY DAY 47"
    },
    {
      title: "Salt & Vinegar",
      review: "NO. HARAM. LARIRIRIRI. This flavor is the definition of NOEBBE behavior. Sour like a LIAR's soul. AKRIRIRIRIRI, why does this exist?",
      score: "2/10 NOEBBES",
      date: "CHAOS MOON 12"
    },
    {
      title: "BBQ Flames",
      review: "MDRRR! FIRE LIKE THE PROPHET'S WRATH! Each bite screams LIARIARIARI in perfect harmony. This is what true Yusufish enlightenment tastes like. BREO!",
      score: "9/10 NOEBBES",
      date: "KAIR SEASON 3"
    }
  ];

  const yusufishPhrases = [
    "LIARRRRR!", "KAIRIRIRIRI!", "LARIRIRIRI!", "YEBBY!", "NOEBBE!", 
    "MDRRR!", "AKRIRIRIRIRI!", "BREO!", "KARIIIIIII!", "LIARIARIARI!"
  ];

  const combatTechniques = [
    {
      name: "Kair Strike",
      description: "High-speed palm slap, usually with a scream of KARIIIII. The foundational technique of all Yusufish combat.",
      difficulty: "Beginner",
      damage: "MODERATE CHAOS"
    },
    {
      name: "Anti-Haram Blast",
      description: "Cleansing aura of chaos that banishes seriousness and NOEBBE behavior from the immediate area.",
      difficulty: "Intermediate", 
      damage: "SPIRITUAL CLEANSING"
    },
    {
      name: "Noeb Counter",
      description: "Defensive maneuver used to deflect weak behavior and truthful statements back at the attacker.",
      difficulty: "Advanced",
      damage: "COUNTER CHAOS"
    },
    {
      name: "YEBBY Step",
      description: "Flash-step teleport followed by aggressive gibberish. Confuses enemies while positioning for a Kair Strike.",
      difficulty: "Master",
      damage: "MAXIMUM CONFUSION"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            🕸️ LIARIRIRIR Central
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-mono">
            "The Official Hub for All Things Yusuf, Yusufish, and Chaos."
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="border-purple-500 text-purple-300 text-lg px-4 py-2">
              🔥 ACTIVE PROPHET STATUS
            </Badge>
            <Badge variant="outline" className="border-cyan-500 text-cyan-300 text-lg px-4 py-2">
              👑 GC COUNCIL ONLINE
            </Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-300 text-lg px-4 py-2">
              ⚡ CHAOS LEVEL: MAXIMUM
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-black/50 border border-purple-500/30">
            <TabsTrigger value="members" className="data-[state=active]:bg-purple-600">
              <Crown className="w-4 h-4 mr-2" />
              GC Members
            </TabsTrigger>
            <TabsTrigger value="yusufish" className="data-[state=active]:bg-cyan-600">
              <BookOpen className="w-4 h-4 mr-2" />
              Yusufish 101
            </TabsTrigger>
            <TabsTrigger value="chips" className="data-[state=active]:bg-pink-600">
              <Utensils className="w-4 h-4 mr-2" />
              Chip Reviews
            </TabsTrigger>
            <TabsTrigger value="chaos" className="data-[state=active]:bg-yellow-600">
              <Zap className="w-4 h-4 mr-2" />
              Chaos Tools
            </TabsTrigger>
          </TabsList>

          {/* GC Members Section */}
          <TabsContent value="members">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🔥 Great Council Member Archive
              </h2>
              <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
                The legendary chaos agents who shape the Yusufverse. Each member brings their own brand of madness to the eternal struggle against NOEBBE behavior.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gcMembers.map((member, index) => (
                <Card key={index} className="bg-black/60 border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className={`
                        ${member.chaos === 'MAXIMUM' ? 'border-red-500 text-red-400' : ''}
                        ${member.chaos === 'EXTREME' ? 'border-orange-500 text-orange-400' : ''}
                        ${member.chaos === 'CALCULATED' ? 'border-blue-500 text-blue-400' : ''}
                        ${member.chaos === 'REFORMED' ? 'border-green-500 text-green-400' : ''}
                        ${member.chaos === 'MARITIME' ? 'border-cyan-500 text-cyan-400' : ''}
                        ${member.chaos === 'SUSPICIOUS' ? 'border-yellow-500 text-yellow-400' : ''}
                        ${member.chaos === 'DEFENSIVE' ? 'border-gray-500 text-gray-400' : ''}
                        ${member.chaos === 'CRIMINAL' ? 'border-red-600 text-red-500' : ''}
                      `}>
                        {member.chaos} CHAOS
                      </Badge>
                      <div className="text-right text-sm text-gray-400">
                        {member.status}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-purple-300">{member.name}</CardTitle>
                    <CardDescription className="text-cyan-400 font-semibold">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{member.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-yellow-400">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-purple-900/50 text-purple-200">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Yusufish Learning Section */}
          <TabsContent value="yusufish">
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  📚 Yusufish Language & Combat Academy
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Master the ancient art of chaotic communication and legendary combat techniques passed down through the Great Council.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Language Section */}
                <Card className="bg-black/60 border-cyan-500/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-cyan-400">🗣️ Yusufish 101</CardTitle>
                    <CardDescription>Learn the sacred gibberish of chaos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-3">Essential Phrases:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {yusufishPhrases.map((phrase, i) => (
                          <Badge key={i} variant="outline" className="justify-center border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 cursor-pointer transition-colors">
                            {phrase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Separator className="bg-cyan-500/30" />
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">Core Rules:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Mix real words with LIARRRR and KAIRIRIRIRI</li>
                        <li>• Extend vowels for emphasis (KARIIIIIII)</li>
                        <li>• Use NOEBBE to describe weak behavior</li>
                        <li>• YEBBY indicates approval or excitement</li>
                        <li>• Always scream when angry: LIARRRRRRRR!</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Combat Section */}
                <Card className="bg-black/60 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">⚔️ Combat Techniques</CardTitle>
                    <CardDescription>Master the arts of Yusufish warfare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-4">
                        {combatTechniques.map((technique, i) => (
                          <div key={i} className="border border-purple-500/30 rounded-lg p-3">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-purple-300">{technique.name}</h5>
                              <Badge variant="outline" className="text-xs border-yellow-500/50 text-yellow-400">
                                {technique.difficulty}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">{technique.description}</p>
                            <div className="text-xs text-red-400 font-mono">
                              DMG: {technique.damage}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Chip Reviews Section */}
          <TabsContent value="chips">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                🍟 Yusuf's Sacred Chip Review Archive
              </h2>
              <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
                The Prophet's unhinged reviews of potato-based sustenance, rated in the ancient unit of NOEBBES.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chipReviews.map((review, index) => (
                <Card key={index} className="bg-black/60 border-pink-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-pink-300">{review.title}</CardTitle>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-400 font-bold">
                        {review.score}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400">{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed font-mono bg-gray-900/50 p-3 rounded border border-gray-700">
                      "{review.review}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Chaos Tools Section */}
          <TabsContent value="chaos">
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                  ⚡ Sacred Chaos Tools
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Essential utilities for spreading chaos and detecting NOEBBE behavior across the digital realm.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* LIAR Button */}
                <Card className="bg-black/60 border-red-500/30 text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-400">🔊 Sacred LIARRRR Button</CardTitle>
                    <CardDescription>The most important button in existence</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      onClick={playLiarSound}
                      className="w-full h-20 text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 border-2 border-red-400 hover:border-red-300 transition-all duration-200 hover:scale-105"
                    >
                      <Volume2 className="w-6 h-6 mr-2" />
                      LIARRRRRRRR!
                    </Button>
                    <p className="text-sm text-gray-400">
                      Times LIAR has been screamed: <span className="text-red-400 font-bold">{liarCount}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Click to unleash the Prophet's wrath upon the digital realm
                    </p>
                  </CardContent>
                </Card>

                {/* Noebbe Detector */}
                <Card className="bg-black/60 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-400">🔍 NOEBBE Behavior Detector</CardTitle>
                    <CardDescription>Scans for weak and truthful behavior</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-900/50 p-4 rounded border border-gray-700">
                      <div className="text-sm font-mono text-green-400 mb-2">
                        SCANNING FOR NOEBBE PATTERNS...
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                        <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>✅ Chaos Level: ACCEPTABLE</div>
                        <div>⚠️ Truth Detected: MINIMAL</div>
                        <div>✅ LIAR Usage: OPTIMAL</div>
                        <div className="text-green-400 font-bold">STATUS: YUSUFISH APPROVED</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Dictionary */}
        <div className="mt-16 border-t border-purple-500/30 pt-8">
          <Card className="bg-black/40 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-center text-purple-400">
                🧠 Sacred Yusufish Dictionary
              </CardTitle>
              <CardDescription className="text-center">
                Essential vocabulary for understanding the chaos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {[
                  "LIARRR", "KAIRIRIRIRI", "LIARIARIARI", "LARIRIRIRI", "LAIRRR", 
                  "NOEB", "YEBBY", "YEB", "NOEBBE", "MDRRR", "DMR", "AKRIRIRIRIRI",
                  "LIARRRRRRRRRRRRRIIIIIIIII", "LIARIARIARIARIARIAR", "LARIEIEIIEIE",
                  "KARIARIARIARI", "KARIIIIIIIII", "KARRRRRRI", "BREO", "EYY"
                ].map((word, i) => (
                  <Badge key={i} variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 cursor-default">
                    {word}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
