
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWeb3 } from "@/contexts/Web3Context";
import { Award, BookOpen, Clock, Trophy, User } from "lucide-react";

const Profile = () => {
  const { account } = useWeb3();

  const achievements = [
    { id: 1, title: "First Login", description: "Connected your wallet", earned: true },
    { id: 2, title: "Course Starter", description: "Started your first course", earned: false },
    { id: 3, title: "Module Master", description: "Completed 10 modules", earned: false },
    { id: 4, title: "Smart Contract Scholar", description: "Completed Smart Contract course", earned: false }
  ];

  const stats = {
    coursesCompleted: 0,
    modulesCompleted: 0,
    hoursStudied: 0,
    certificationsEarned: 0
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Student Profile</h1>
            <p className="text-gray-400">Track your anonymous learning journey</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Anonymous Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm">Wallet Address</label>
                      <div className="text-white font-mono">
                        {account ? formatAddress(account) : "Not connected"}
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Member Since</label>
                      <div className="text-white">Today</div>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Learning Path</label>
                      <div className="text-white">Blockchain Developer Certification</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id}
                        className={`p-4 rounded-lg border ${
                          achievement.earned 
                            ? 'bg-orange-900/20 border-orange-500' 
                            : 'bg-gray-700 border-gray-600'
                        }`}
                      >
                        <div className={`font-medium ${
                          achievement.earned ? 'text-orange-400' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {achievement.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Learning Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Courses Completed</span>
                      <span className="text-white font-bold">{stats.coursesCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Modules Completed</span>
                      <span className="text-white font-bold">{stats.modulesCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hours Studied</span>
                      <span className="text-white font-bold">{stats.hoursStudied}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Certifications</span>
                      <span className="text-white font-bold">{stats.certificationsEarned}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                    Next Milestone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-2">Start Learning</div>
                    <div className="text-sm text-gray-400 mb-4">
                      Begin your first course to unlock achievements
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Go to Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
