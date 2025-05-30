
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology, cryptography, and distributed systems from the ground up.",
      duration: "6 weeks",
      students: 15420,
      rating: 4.8,
      level: "Beginner" as const,
      price: "$199",
      image: "/placeholder.svg"
    },
    {
      title: "Ethereum Smart Contracts",
      description: "Master Solidity programming and build secure, efficient smart contracts on the Ethereum blockchain.",
      duration: "8 weeks",
      students: 12850,
      rating: 4.9,
      level: "Intermediate" as const,
      price: "$299",
      image: "/placeholder.svg"
    },
    {
      title: "DeFi Development",
      description: "Create decentralized finance applications including DEXs, lending protocols, and yield farming platforms.",
      duration: "10 weeks",
      students: 8930,
      rating: 4.7,
      level: "Advanced" as const,
      price: "$399",
      image: "/placeholder.svg"
    },
    {
      title: "NFT Marketplace Development",
      description: "Build your own NFT marketplace from scratch using modern web3 technologies and smart contracts.",
      duration: "6 weeks",
      students: 11200,
      rating: 4.6,
      level: "Intermediate" as const,
      price: "$259",
      image: "/placeholder.svg"
    },
    {
      title: "Web3 Full-Stack Development",
      description: "Complete bootcamp covering React, Node.js, and blockchain integration for modern dApp development.",
      duration: "12 weeks",
      students: 9650,
      rating: 4.9,
      level: "Intermediate" as const,
      price: "$499",
      image: "/placeholder.svg"
    },
    {
      title: "Blockchain Security & Auditing",
      description: "Learn to identify vulnerabilities and perform security audits on smart contracts and blockchain systems.",
      duration: "8 weeks",
      students: 6800,
      rating: 4.8,
      level: "Advanced" as const,
      price: "$349",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed by industry experts to take you from beginner to blockchain professional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
