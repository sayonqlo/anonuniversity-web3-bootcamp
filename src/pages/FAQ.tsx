
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does anonymous learning work?",
      answer: "Simply connect your MetaMask wallet and pay the flat-rate tuition. No personal information, emails, or KYC required. Your wallet address is your only identifier."
    },
    {
      question: "What's included in the 0.1 ETH tuition?",
      answer: "Complete access to all courses, certification programs, community forums, and learning materials for 3 months. No hidden fees or additional charges."
    },
    {
      question: "Are the certifications recognized by employers?",
      answer: "Yes, our blockchain certifications are recognized by leading Web3 companies and traditional enterprises entering the blockchain space."
    },
    {
      question: "Can I extend my access beyond 3 months?",
      answer: "Yes, you can extend your access by paying an additional 0.1 ETH for another 3-month period. Your progress is saved to your wallet address."
    },
    {
      question: "What if I lose access to my wallet?",
      answer: "Unfortunately, since we maintain no personal records, losing access to your wallet means losing access to your account. We recommend using a hardware wallet or secure backup methods."
    },
    {
      question: "Do I need prior blockchain experience?",
      answer: "No! Our curriculum starts with absolute basics and progresses to advanced topics. Complete beginners are welcome."
    },
    {
      question: "What blockchain networks do you teach?",
      answer: "We focus primarily on Ethereum, but also cover other major networks like Polygon, Arbitrum, and emerging Layer 2 solutions."
    },
    {
      question: "Is there a mobile app?",
      answer: "Currently, AnonU is web-based and works great on mobile browsers with MetaMask mobile. A dedicated mobile app is in development."
    },
    {
      question: "Can I get a refund?",
      answer: "Due to the anonymous nature of our platform, refunds are not possible. However, you can try our free sample modules before purchasing."
    },
    {
      question: "How do I connect with other students?",
      answer: "Our anonymous community forums allow you to connect with fellow learners using only your wallet address or ENS name."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-400">
              Everything you need to know about AnonU's anonymous blockchain education
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-start">
                    <HelpCircle className="w-5 h-5 mr-3 text-orange-500 mt-1 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 ml-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-center">Still Have Questions?</CardTitle>
              <CardDescription className="text-center">
                Can't find what you're looking for? Contact our anonymous support team.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Mail className="w-4 h-4 mr-2" />
                Contact Anonymous Support
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                We'll respond to your wallet address within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
