import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

// Import project images
import dekosmetiskeImage from "@/assets/dekosmetiske-image.jpg";
import msfPropertiesImage from "@/assets/msf-properties-image.jpg";
import galileoProtocolImage from "@/assets/galileo-protocol-image.jpg";
import b9EnergyImage from "@/assets/b9-energy-image.jpg";
import sodomaLawImage from "@/assets/sodoma-law-image.jpg";
import qnqBuildersImage from "@/assets/qnq-builders-image.jpg";
import mattisAutoImage from "@/assets/mattis-auto-image.jpg";
import fancyMoissaniteImage from "@/assets/fancy-moissanite-image.jpg";
import ncAttorneyImage from "@/assets/nc-attorney-image.jpg";
import rpoAiImage from "@/assets/rpo-ai-image.jpg";

// Real project data from Ali Ishaq's resume
const projects = [
  {
    id: "dekosmetiskelaeger",
    title: "Dekosmetiskelæger.dk",
    description: "Professional cosmetic clinic website with appointment booking system, treatment showcase, and multilingual support for Danish medical practice. Features advanced SEO optimization and performance tuning.",
    technologies: ["WordPress", "PHP", "Custom Themes", "Booking System", "Multilingual", "SEO"],
    imageUrl: dekosmetiskeImage,
    category: "WordPress",
    liveUrl: "https://www.dekosmetiskelaeger.dk/",
  },
  {
    id: "msf-properties",
    title: "MSF Properties",
    description: "Comprehensive real estate platform featuring property listings, advanced search functionality, virtual tours, and integrated property management tools specifically designed for the UAE market.",
    technologies: ["WordPress", "Real Estate Plugin", "Custom Fields", "Property Search", "Maps Integration", "Virtual Tours"],
    imageUrl: msfPropertiesImage,
    category: "WordPress",
    liveUrl: "https://msfproperties.ae/",
  },
  {
    id: "empyrian-media",
    title: "Empyrian Media",
    description: "Digital marketing agency website with portfolio showcase, service pages, client testimonials, and case studies. Modern design with advanced animations and performance optimization.",
    technologies: ["WordPress", "Elementor Pro", "Custom Animations", "SEO Optimization", "Performance Tuning", "Analytics"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://empyrianmedia.com/",
  },
  {
    id: "galileo-protocol",
    title: "GALILEO Protocol",
    description: "Blockchain-based protocol website with sophisticated design, technical documentation, and integration with blockchain technologies. Features modern UI/UX and responsive design.",
    technologies: ["WordPress", "Blockchain Integration", "Custom Design", "Technical Documentation", "Responsive Design"],
    imageUrl: galileoProtocolImage,
    category: "WordPress",
    liveUrl: "https://galileoprotocol.io/",
  },
  {
    id: "b9-energy",
    title: "B9 Energy",
    description: "Energy sector website showcasing renewable energy solutions, company services, and project portfolios. Features clean design with focus on sustainability and environmental impact.",
    technologies: ["WordPress", "Custom Theme", "Portfolio Management", "Service Showcase", "Environmental Design"],
    imageUrl: b9EnergyImage,
    category: "WordPress",
    liveUrl: "https://b9energy.co.uk/",
  },
  {
    id: "sodoma-law",
    title: "Sodoma Law",
    description: "Professional law firm website with practice area showcase, attorney profiles, case studies, and client portal. Features sophisticated design with emphasis on trust and professionalism.",
    technologies: ["WordPress", "Legal Theme", "Attorney Profiles", "Case Studies", "Client Portal", "Professional Design"],
    imageUrl: sodomaLawImage,
    category: "WordPress",
    liveUrl: "https://www.sodomalaw.com/",
  },
  {
    id: "qnq-builders",
    title: "QNQ Builders",
    description: "Construction company website featuring project galleries, service offerings, team profiles, and client testimonials. Emphasis on showcasing construction expertise and completed projects.",
    technologies: ["WordPress", "Construction Theme", "Project Gallery", "Team Profiles", "Testimonials", "Service Pages"],
    imageUrl: qnqBuildersImage,
    category: "WordPress",
    liveUrl: "https://qnqbuilders.co.uk/",
  },
  {
    id: "mattis-auto-detailing",
    title: "Mattis Auto Detailing",
    description: "Automotive detailing service website with service packages, before/after galleries, booking system, and customer reviews. Features modern design optimized for mobile users.",
    technologies: ["WordPress", "Automotive Theme", "Booking System", "Gallery Management", "Mobile Optimization", "Review System"],
    imageUrl: mattisAutoImage,
    category: "WordPress",
    liveUrl: "https://mattisautodetailing-com.us.stackstaging.com/",
  },
  {
    id: "fancy-moissanite",
    title: "Fancy Moissanite",
    description: "E-commerce jewelry website featuring moissanite products with WooCommerce integration, payment gateways, product customization, and advanced search functionality.",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Payment Integration", "Product Customization", "Search Filters"],
    imageUrl: fancyMoissaniteImage,
    category: "WordPress",
    liveUrl: "https://fancymoissanite.com/",
  },
  {
    id: "north-carolina-attorney",
    title: "North Carolina Attorney",
    description: "Legal services website for Hartsell & Williams featuring attorney profiles, practice areas, legal resources, and client consultation booking. Professional design with local SEO optimization.",
    technologies: ["WordPress", "Legal Framework", "Attorney Directory", "Consultation Booking", "Legal Resources", "Local SEO"],
    imageUrl: ncAttorneyImage,
    category: "WordPress",
    liveUrl: "https://yourncattorney.com/",
  },
  {
    id: "agency-angle",
    title: "Agency Angle / Clear Lines",
    description: "Creative agency website showcasing design services, portfolio projects, and client success stories. Features modern animations and interactive elements for enhanced user experience.",
    technologies: ["WordPress", "Creative Design", "Portfolio Showcase", "Animations", "Interactive Elements", "Client Stories"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://empyrianmedia.com/",
  },
  {
    id: "rpo-ai",
    title: "RPO.ai",
    description: "AI-powered recruitment platform featuring advanced candidate matching, automated workflows, and data analytics. Modern tech design with emphasis on AI capabilities and user experience.",
    technologies: ["WordPress", "AI Integration", "Data Analytics", "Automated Workflows", "Modern UI", "Tech Design"],
    imageUrl: rpoAiImage,
    category: "WordPress",
    liveUrl: "https://rpo.ai/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "WordPress"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Projects</span></h1>
            <p className="text-gray-400">
              Explore my portfolio of WordPress development projects, showcasing custom themes, 
              WooCommerce solutions, and comprehensive web applications for diverse industries.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">100+</div>
              <div className="text-gray-400">Websites Managed</div>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon-pink mb-2">40%</div>
              <div className="text-gray-400">Performance Improvement</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-neon-blue text-white shadow-lg shadow-neon-blue/20"
                    : "bg-dark-300 text-gray-400 hover:bg-dark-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="glass-panel p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-400 mb-6">
              I'm currently available for freelance WordPress projects and would love to discuss your ideas.
            </p>
            <a
              href="/contact"
              className="neo-button inline-flex items-center"
            >
              Let's Work Together
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Projects;