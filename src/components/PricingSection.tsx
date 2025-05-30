
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";
import { useWeb3 } from "@/contexts/Web3Context";

const PricingSection = () => {
  const { isConnected, connectWallet } = useWeb3();

  const features = [
    "Complete anonymity - no personal information required",
    "Self-paced learning with lifetime access",
    "From blockchain basics to advanced development",
    "Industry-recognized certification upon completion",
    "Real-world project portfolio building",
    "Community access and peer learning",
    "Regular curriculum updates",
    "Direct access to industry mentors"
  ];

  const handleEnroll = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }
    // In a real implementation, this would trigger the payment transaction
    console.log("Processing payment...");
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Flat-Rate</span> Tuition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like Western Governors University, pay once and access everything. No hidden fees, no subscriptions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-orange-200 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <CardHeader className="text-center pb-8 pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-3xl font-bold">Blockchain Academy Access</CardTitle>
              <CardDescription className="text-lg">Complete career transformation program</CardDescription>
              <div className="mt-6">
                <div className="text-5xl font-bold text-gray-900">0.1 ETH</div>
                <div className="text-lg text-gray-600 mt-2">One-time payment • Lifetime access</div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Additional Benefits:</h4>
                  <ul className="space-y-3">
                    {features.slice(4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleEnroll}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-12 py-6"
                >
                  {isConnected ? 'Pay with MetaMask' : 'Connect Wallet to Enroll'}
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Secure payment via MetaMask • No personal information required
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
