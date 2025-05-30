
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { useWeb3 } from "@/contexts/Web3Context";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { isConnected, connectWallet } = useWeb3();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isConnected) {
      navigate("/dashboard");
    } else {
      connectWallet();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-900/30 border border-orange-600/30 text-orange-400 rounded-full text-sm font-medium">
                🔒 100% Anonymous Learning
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Career <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Pivot</span> to Blockchain
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Master blockchain development completely anonymously. Pay once with MetaMask, 
                access everything for 3 months. No personal information required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-6"
              >
                {isConnected ? 'Access Dashboard' : 'Connect & Start Learning'} 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() => navigate('/courses')}
              >
                View Curriculum
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-900/30 border border-orange-600/30 rounded-lg mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Anonymous</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-900/30 border border-orange-600/30 rounded-lg mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-white">3 Mo</div>
                <div className="text-sm text-gray-400">Full Access</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-900/30 border border-orange-600/30 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-white">Certified</div>
                <div className="text-sm text-gray-400">Developer</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">dApp</span>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Anonymous Learning Path</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-900/30 border border-orange-600/30 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm">1</div>
                    <span className="text-gray-300">Connect MetaMask wallet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-900/30 border border-orange-600/30 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm">2</div>
                    <span className="text-gray-300">Pay flat-rate tuition (0.1 ETH)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-900/30 border border-orange-600/30 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm">3</div>
                    <span className="text-gray-300">Access full academy for 3 months</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-900/30 border border-orange-600/30 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm">4</div>
                    <span className="text-gray-300">Earn blockchain developer certification</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 border border-orange-600/30 p-4 rounded-lg">
                  <div className="text-sm text-orange-400 font-medium">Flat-Rate Tuition</div>
                  <div className="text-2xl font-bold text-orange-300">0.1 ETH</div>
                  <div className="text-sm text-orange-400">3 Months • All Courses</div>
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
