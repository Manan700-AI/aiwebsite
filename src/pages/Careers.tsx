
import React, { useState } from "react";
import AINavbar from "@/components/AINavbar";
import AIFooter from "@/components/AIFooter";
import { Briefcase, MapPin, Clock, Upload, Users, Code, Brain, Heart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Careers = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast({
        title: "Resume uploaded successfully!",
        description: `File: ${file.name}`
      });
    }
  };

  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and mentor junior developers.",
      requirements: ["5+ years of ML/AI experience", "Python, TensorFlow, PyTorch", "PhD preferred"]
    },
    {
      title: "AI Training Specialist",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      description: "Design and deliver comprehensive AI training programs for enterprise clients.",
      requirements: ["3+ years training experience", "AI/ML expertise", "Excellent communication skills"]
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time",
      description: "Analyze complex datasets to drive insights and improve our AI solutions.",
      requirements: ["Statistics/Data Science background", "R, Python, SQL", "2+ years experience"]
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive product strategy for our AI automation platform and client solutions.",
      requirements: ["5+ years product management", "AI/tech background", "Strategic thinking"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AINavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our AI Revolution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of artificial intelligence. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at AI-tamate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building more than just AI solutions – we're creating a culture of innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Work with the latest AI technologies and contribute to groundbreaking solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Team</h3>
              <p className="text-gray-600">
                Join a diverse team of experts who value collaboration and continuous learning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact & Purpose</h3>
              <p className="text-gray-600">
                Make a meaningful difference by helping businesses transform with AI.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-semibold text-gray-900">Health & Wellness</div>
                <div className="text-gray-600 text-sm">Comprehensive medical, dental, and vision coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏡</div>
                <div className="font-semibold text-gray-900">Remote Flexibility</div>
                <div className="text-gray-600 text-sm">Hybrid work options and remote-first culture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-semibold text-gray-900">Learning Budget</div>
                <div className="text-gray-600 text-sm">Annual budget for courses, conferences, and books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-gray-900">Equity Package</div>
                <div className="text-gray-600 text-sm">Share in our success with competitive equity options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career in AI and make an impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm space-x-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Upload Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Don't See the Perfect Role?
              </h2>
              <p className="text-xl text-gray-600">
                We're always looking for exceptional talent. Upload your resume and we'll keep you in mind for future opportunities.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <span className="text-lg font-medium text-gray-900 mb-2">
                    Upload Your Resume
                  </span>
                  <span className="text-gray-500 text-sm">
                    PDF, DOC, or DOCX (Max 5MB)
                  </span>
                </label>
              </div>
              
              {selectedFile && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Upload className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-900">{selectedFile.name}</div>
                      <div className="text-green-700 text-sm">Resume uploaded successfully</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI-Enhanced Recruitment Message */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-blue-200 mr-3" />
            <h2 className="text-3xl font-bold text-white">AI-Enhanced Recruitment</h2>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We use our own AI technology to match candidates with the perfect roles. 
            Our system analyzes skills, experience, and cultural fit to ensure the best match for both parties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
            <div>
              <div className="text-2xl font-bold text-white mb-2">🎯</div>
              <div className="font-semibold">Smart Matching</div>
              <div className="text-sm">AI-powered role recommendations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">⚡</div>
              <div className="font-semibold">Fast Process</div>
              <div className="text-sm">Streamlined interview workflow</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">🤝</div>
              <div className="font-semibold">Cultural Fit</div>
              <div className="text-sm">Values and team alignment analysis</div>
            </div>
          </div>
        </div>
      </section>

      <AIFooter />
    </div>
  );
};

export default Careers;
