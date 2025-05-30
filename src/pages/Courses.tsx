
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const Courses = () => {
  const allCourses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Master the core concepts of blockchain technology, cryptography, and distributed systems.",
      duration: "4 weeks",
      modules: 12,
      difficulty: "Beginner",
      rating: 4.8,
      students: 1200
    },
    {
      id: 2,
      title: "Smart Contract Development",
      description: "Learn Solidity programming and build secure, efficient smart contracts on Ethereum.",
      duration: "6 weeks",
      modules: 18,
      difficulty: "Intermediate",
      rating: 4.9,
      students: 850
    },
    {
      id: 3,
      title: "DeFi Protocol Design",
      description: "Understand and build decentralized finance protocols, including DEXs and lending platforms.",
      duration: "5 weeks",
      modules: 15,
      difficulty: "Advanced",
      rating: 4.7,
      students: 620
    },
    {
      id: 4,
      title: "NFT Development",
      description: "Create and deploy NFT collections, marketplaces, and related smart contracts.",
      duration: "3 weeks",
      modules: 10,
      difficulty: "Intermediate",
      rating: 4.6,
      students: 540
    },
    {
      id: 5,
      title: "Web3 Frontend Development",
      description: "Build decentralized applications with React, ethers.js, and modern Web3 tools.",
      duration: "4 weeks",
      modules: 14,
      difficulty: "Intermediate",
      rating: 4.8,
      students: 720
    },
    {
      id: 6,
      title: "Blockchain Security Auditing",
      description: "Learn to identify vulnerabilities and conduct security audits of smart contracts.",
      duration: "6 weeks",
      modules: 20,
      difficulty: "Advanced",
      rating: 4.9,
      students: 380
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400";
      case "Intermediate": return "text-yellow-400";
      case "Advanced": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Course Catalog</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive blockchain education from fundamentals to advanced development. 
            All courses included with your flat-rate tuition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <Card key={course.id} className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-white">{course.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.modules} modules
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    View Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
