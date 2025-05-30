
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { useWeb3 } from "@/contexts/Web3Context";

const Hero = () => {
  const { isConnected, connectWallet } = useWeb3();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                🚀 Career Pivot to Blockchain
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blockchain</span> at Your Own Pace
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From understanding the basics to becoming a certified blockchain developer. 
                Completely anonymous learning with flat-rate tuition. Pay once with MetaMask, access everything.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {isConnected ? (
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-6">
                  Access Academy <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  onClick={connectWallet}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-6"
                >
                  Connect Wallet to Start <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                View Curriculum
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Anonymous</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Self</div>
                <div className="text-sm text-gray-600">Paced</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Certified</div>
                <div className="text-sm text-gray-600">Developer</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">dApp</span>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Learning Path</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                    <span className="text-gray-700">Understand Blockchain Basics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">2</div>
                    <span className="text-gray-700">Become Certified Developer</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-lg">
                  <div className="text-sm text-orange-800 font-medium">Flat-Rate Tuition</div>
                  <div className="text-2xl font-bold text-orange-900">0.1 ETH</div>
                  <div className="text-sm text-orange-600">Lifetime Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
