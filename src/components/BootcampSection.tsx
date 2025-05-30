
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Users, Trophy, ArrowRight } from "lucide-react";

const BootcampSection = () => {
  const features = [
    "Live interactive sessions with industry experts",
    "1-on-1 mentorship throughout the program",
    "Real-world project portfolio development",
    "Job placement assistance and career support",
    "Access to exclusive blockchain developer community",
    "Certificate of completion from BlockchainAcademy"
  ];

  const curriculum = [
    { week: "Weeks 1-2", topic: "Blockchain Fundamentals & Cryptography", description: "Build strong foundation in distributed systems" },
    { week: "Weeks 3-4", topic: "Ethereum & Smart Contract Development", description: "Master Solidity and deployment strategies" },
    { week: "Weeks 5-6", topic: "DeFi Protocols & Advanced Concepts", description: "Build complex decentralized applications" },
    { week: "Weeks 7-8", topic: "Web3 Integration & Frontend Development", description: "Connect blockchain to modern web interfaces" },
    { week: "Weeks 9-10", topic: "Security & Testing Best Practices", description: "Learn auditing and secure development" },
    { week: "Weeks 11-12", topic: "Capstone Project & Portfolio Building", description: "Create professional-grade dApp portfolio" }
  ];

  return (
    <section id="bootcamp" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blockchain Developer <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bootcamp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intensive 12-week program designed to transform you into a job-ready blockchain developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 p-6 bg-white rounded-xl shadow-lg">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">25</div>
                <div className="text-sm text-gray-600">Max Students</div>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Job Placement</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Overview</h3>
            <div className="space-y-4">
              {curriculum.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.topic}</CardTitle>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {item.week}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Blockchain Journey?</h3>
          <p className="text-xl text-gray-600 mb-8">Next cohort starts January 15th, 2024</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$1,999</div>
              <div className="text-sm text-gray-600">Full Program</div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampSection;
