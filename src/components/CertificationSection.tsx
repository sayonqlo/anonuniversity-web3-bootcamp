
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Linkedin, Shield } from "lucide-react";

const CertificationSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Earn Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Blockchain Developer</span> Certification
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete all courses and earn an industry-recognized certification that you can add directly to your LinkedIn profile - all while maintaining complete anonymity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certification Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-900/30 border border-orange-600/30 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Industry Recognition</h3>
                  <p className="text-gray-400">Verified blockchain development skills</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-900/30 border border-orange-600/30 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LinkedIn Integration</h3>
                  <p className="text-gray-400">Downloadable badge for your profile</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-900/30 border border-orange-600/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Anonymous Achievement</h3>
                  <p className="text-gray-400">No personal data tied to certification</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Certification Requirements:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Complete all 4 core courses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Pass all module assessments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Complete final capstone project</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Maintain 85% overall grade</span>
                </li>
              </ul>
            </div>
          </div>

          {/* LinkedIn Badge Preview */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-2xl max-w-md mx-auto">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Certified Blockchain Developer</h3>
                  <p className="text-gray-600">AnonU - The Anonymous University</p>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Blockchain Development
                </Badge>
                <div className="text-sm text-gray-500">
                  Issued: {new Date().getFullYear()}
                </div>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Add to LinkedIn
                </Button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
