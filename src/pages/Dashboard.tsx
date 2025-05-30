
import { useWeb3 } from "@/contexts/Web3Context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, Play, Lock } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isConnected } = useWeb3();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);

  const courses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Master the core concepts of blockchain technology",
      duration: "4 weeks",
      progress: 0,
      isUnlocked: true,
      modules: 12
    },
    {
      id: 2,
      title: "Smart Contract Development",
      description: "Learn Solidity and build decentralized applications",
      duration: "6 weeks", 
      progress: 0,
      isUnlocked: true,
      modules: 18
    },
    {
      id: 3,
      title: "DeFi Protocol Design",
      description: "Understand and build DeFi protocols",
      duration: "5 weeks",
      progress: 0,
      isUnlocked: true,
      modules: 15
    },
    {
      id: 4,
      title: "NFT Development",
      description: "Create and deploy NFT collections",
      duration: "3 weeks",
      progress: 0,
      isUnlocked: true,
      modules: 10
    }
  ];

  if (!isConnected) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to AnonU</h1>
          <p className="text-gray-400 text-lg">Your anonymous blockchain learning journey starts here</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Your Courses</h2>
              <div className="grid gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white">{course.title}</CardTitle>
                          <CardDescription className="text-gray-400">
                            {course.description}
                          </CardDescription>
                        </div>
                        {course.isUnlocked ? (
                          <Button className="bg-orange-600 hover:bg-orange-700">
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </Button>
                        ) : (
                          <Button disabled className="bg-gray-600">
                            <Lock className="w-4 h-4 mr-2" />
                            Locked
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {course.modules} modules
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-gray-400">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <div 
                            className="bg-orange-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-orange-500" />
                  Certification Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Overall Progress</span>
                      <span className="text-gray-400">0%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Complete all courses to earn your Certified Blockchain Developer credential
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Access Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Access Duration:</span>
                    <span className="text-green-400">3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payment:</span>
                    <span className="text-green-400">0.1 ETH</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
