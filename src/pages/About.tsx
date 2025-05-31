import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, BookOpen } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Anonymous Founder",
      role: "Blockchain Educator",
      description: "10+ years in blockchain development and education"
    },
    {
      name: "Anonymous CTO", 
      role: "Technical Lead",
      description: "Former Ethereum core developer"
    },
    {
      name: "Anonymous Head of Curriculum",
      role: "Learning Design",
      description: "Educational technology specialist"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Complete Anonymity",
      description: "Learn without revealing your identity. Only your wallet address is needed."
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Connect with fellow anonymous learners in our community."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Earn certifications that are recognized by leading blockchain companies."
    },
    {
      icon: BookOpen,
      title: "Self-Paced Learning",
      description: "Study at your own pace with lifetime access to materials."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">About AnonU</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The world's first anonymous blockchain learning academy. 
              Master blockchain development while maintaining complete privacy.
            </p>
          </div>

          <div className="mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  AnonU exists to democratize blockchain education while respecting your privacy. 
                  We believe that anyone should be able to learn cutting-edge blockchain technology 
                  without compromising their anonymity. Our innovative flat-rate tuition model ensures 
                  that financial barriers don't prevent talented individuals from entering the blockchain space.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <value.icon className="w-6 h-6 mr-3 text-orange-500" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Anonymous Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-center">{member.name}</CardTitle>
                    <CardDescription className="text-orange-400 text-center">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Why Anonymous Education?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-300">
                  <p>
                    In the blockchain space, privacy and anonymity are fundamental rights. 
                    Traditional education platforms require extensive personal information, 
                    creating unnecessary privacy risks.
                  </p>
                  <p>
                    AnonU leverages the power of blockchain technology to provide world-class 
                    education while respecting your privacy. Pay with MetaMask, learn anonymously, 
                    and earn verifiable credentials—all without revealing your identity.
                  </p>
                  <p>
                    Join thousands of anonymous learners who have already started their blockchain 
                    journey with AnonU. Your privacy is our priority.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
