
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SocialLinks from "@/components/SocialLinks";
import { FileCode, Code, Database, Globe, PenTool, Layers, Github, Award, BookOpen } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const About = () => {
  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h1>
            <p className="text-gray-400">
              Learn more about my journey, expertise, and passion for web development
            </p>
          </div>
        </AnimatedSection>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback 
                  src="http://itsali.site/wp-content/uploads/2025/11/DSC_0004-scaled-1.jpg" 
                  alt="Ali Ishaq - Developer" 
                  className="w-full object-cover"
                  fallbackSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -top-5 -right-5 p-4 glass-panel rounded-lg backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Experience</p>
                    <p className="text-white font-medium">3+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 p-4 glass-panel rounded-lg backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-neon-purple/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-purple">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Projects</p>
                    <p className="text-white font-medium">100+ Websites</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-7" delay={0.2}>
            <div className="glass-panel p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
              <p className="text-gray-400 mb-6">
                I'm Ali Ishaq, a Senior WordPress Developer and Full Stack Web Engineer with 3+ years of extensive experience delivering high-performance, scalable, and secure WordPress & WooCommerce solutions. 
                My expertise spans custom plugin/theme development, REST API integration, blockchain-based eCommerce, and React front-end integration.
              </p>
              <p className="text-gray-400 mb-6">
                Throughout my career, I've led teams, managed large-scale deployments for high-traffic environments, and optimized 100+ websites for performance and SEO. 
                My experience includes integrating blockchain technology with WordPress, building multi-vendor marketplaces, and implementing AI tool automation to streamline development workflows.
              </p>
              <p className="text-gray-400 mb-6">
                What sets me apart is my commitment to staying at the forefront of technological advancements, my expertise in team leadership and server administration (AWS, Nginx, cPanel), 
                and my ability to deliver solutions that exceed client expectations while maintaining code quality and security standards.
              </p>
              
              <div className="flex justify-center mt-8">
                <SocialLinks showEmailAndWebsite={false} />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Services Section */}
        <AnimatedSection delay={0.3}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Services I <span className="text-gradient">Offer</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-panel p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-neon-blue/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-blue mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">WordPress Development</h3>
                <p className="text-gray-400 mb-4">
                  Custom WordPress themes and plugins, WooCommerce integration, and performance optimization for your online presence.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                    Custom Theme Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                    Plugin Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                    E-commerce Solutions
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-neon-purple/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-purple mb-4">
                  <FileCode size={24} />
                </div>
              <h3 className="text-xl font-bold mb-3">React & Full Stack Development</h3>
              <p className="text-gray-400 mb-4">
                Modern React applications with WordPress backends, REST API development, and full-stack JavaScript solutions with MySQL and PostgreSQL databases.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  React.js Frontend Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  REST API & JWT Authentication
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></span>
                  MySQL & PostgreSQL Database Design
                </li>
              </ul>
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-neon-pink/20 w-12 h-12 rounded-full flex items-center justify-center text-neon-pink mb-4">
                  <Layers size={24} />
                </div>
              <h3 className="text-xl font-bold mb-3">Server & DevOps</h3>
              <p className="text-gray-400 mb-4">
                Expert in server administration, deployment pipelines, and managing high-traffic WordPress environments with AWS, Nginx, and cPanel.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  AWS & Cloud Infrastructure
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  Nginx & Apache Server Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                  CI/CD Deployment & Site Migration
                </li>
              </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education & Certifications */}
        <AnimatedSection delay={0.4}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Education & <span className="text-gradient">Certifications</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue mr-4 mt-1">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Computer Science (BSCS)</h3>
                    <p className="text-neon-blue">Virtual University of Pakistan</p>
                    <p className="text-gray-400 mt-1">2020 - 2024 | GPA: 3.1 / 4.0</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Comprehensive education in computer science fundamentals, web technologies, software engineering principles, and database management systems.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-purple/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-purple mr-4 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Team Leadership & Agile Development</h3>
                    <p className="text-neon-purple">Cortechsols</p>
                    <p className="text-gray-400 mt-1">2024</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Led teams of 5+ developers using Agile methodologies, improving delivery efficiency by 30% and overseeing code reviews and DevOps deployment pipelines.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-pink/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-pink mr-4 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Blockchain & NFT Integration</h3>
                    <p className="text-neon-pink">Kodoverse</p>
                    <p className="text-gray-400 mt-1">2023</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Successfully integrated blockchain and NFT functionality into WordPress eCommerce platforms, generating unique NFTs per product with custom plugin development.
                </p>
              </div>
              
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-neon-blue mr-4 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Performance & SEO Optimization</h3>
                    <p className="text-neon-blue">Multiple Projects</p>
                    <p className="text-gray-400 mt-1">2020 - Present</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Optimized 100+ websites for performance and SEO, improving page load speeds by up to 45% and reducing server response times by 40%.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Connect with me */}
        <AnimatedSection delay={0.5}>
          <div className="glass-panel p-8 rounded-xl text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8">
              Interested in working together? Feel free to connect with me on social media or send me a message.
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default About;
