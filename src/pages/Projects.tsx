import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

// Real project data from Ali Ishaq's portfolio
const projects = [
  {
    id: "usman-hardware",
    title: "Usman Hardware Inventory Management System",
    description: "Complete inventory management system with React frontend and WordPress backend. Features real-time stock tracking, order management, and comprehensive reporting dashboard.",
    technologies: ["React", "WordPress", "REST API", "Inventory Management", "Real-time Updates", "Dashboard"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    category: "React, WordPress",
    liveUrl: "https://zaidawn.site/",
    githubUrl: "https://github.com",
  },
  {
    id: "iq-ceilings",
    title: "IQ Ceilings",
    description: "Modern false ceilings company website with React frontend and WordPress backend. Showcases ceiling designs, project gallery, and service offerings with elegant UI.",
    technologies: ["React", "WordPress", "Gallery", "Portfolio", "Modern UI", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    category: "React",
    liveUrl: "https://iqfalseceilings.site/",
    githubUrl: "https://github.com",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description: "Modern personal portfolio website showcasing skills, projects, and professional experience. Built with React featuring smooth animations and responsive design.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Responsive Design", "Animations", "Modern UI"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    category: "React",
    githubUrl: "https://github.com",
  },
  {
    id: "dekosmetiskelaeger",
    title: "Dekosmetiskelæger.dk",
    description: "Professional cosmetic clinic website with appointment booking system, treatment showcase, and multilingual support for Danish medical practice. Features advanced SEO optimization and performance tuning.",
    technologies: ["WordPress", "PHP", "Custom Themes", "Booking System", "Multilingual", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
    category: "WordPress",
    liveUrl: "https://www.dekosmetiskelaeger.dk/",
  },
  {
    id: "lila-dene",
    title: "Lila Dene",
    description: "Elegant e-commerce website featuring fashion and lifestyle products. Custom WooCommerce integration with advanced product filtering and beautiful design.",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Custom Design", "Product Filtering", "Payment Integration"],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://liladene.com/",
  },
  {
    id: "msf-properties",
    title: "MSF Properties",
    description: "Comprehensive real estate platform featuring property listings, advanced search functionality, virtual tours, and integrated property management tools specifically designed for the UAE market.",
    technologies: ["WordPress", "Real Estate Plugin", "Custom Fields", "Property Search", "Maps Integration", "Virtual Tours"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
    category: "WordPress",
    liveUrl: "https://msfproperties.ae/",
  },
  {
    id: "rpo-ai",
    title: "RPO.ai",
    description: "AI-powered recruitment platform featuring advanced candidate matching, automated workflows, and data analytics. Modern tech design with emphasis on AI capabilities and user experience.",
    technologies: ["WordPress", "AI Integration", "Data Analytics", "Automated Workflows", "Modern UI", "Tech Design"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://rpo.ai/",
  },
  {
    id: "b9-energy",
    title: "B9 Energy",
    description: "Energy sector website showcasing renewable energy solutions, company services, and project portfolios. Features clean design with focus on sustainability and environmental impact.",
    technologies: ["WordPress", "Custom Theme", "Portfolio Management", "Service Showcase", "Environmental Design"],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://b9energy.co.uk/",
  },
  {
    id: "sodoma-law",
    title: "Sodoma Law",
    description: "Professional law firm website with practice area showcase, attorney profiles, case studies, and client portal. Features sophisticated design with emphasis on trust and professionalism.",
    technologies: ["WordPress", "Legal Theme", "Attorney Profiles", "Case Studies", "Client Portal", "Professional Design"],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://www.sodomalaw.com/",
  },
  {
    id: "qnq-builders",
    title: "QNQ Builders",
    description: "Construction company website featuring project galleries, service offerings, team profiles, and client testimonials. Emphasis on showcasing construction expertise and completed projects.",
    technologies: ["WordPress", "Construction Theme", "Project Gallery", "Team Profiles", "Testimonials", "Service Pages"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://qnqbuilders.co.uk/",
  },
  {
    id: "cortechsols",
    title: "Cortechsols",
    description: "Technology solutions company website showcasing IT services, software development, and consulting offerings. Modern design with focus on technical expertise.",
    technologies: ["WordPress", "Tech Theme", "Service Pages", "Portfolio", "Modern UI", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://www.cortechsols.com/",
  },
  {
    id: "fancy-moissanite",
    title: "Fancy Moissanite",
    description: "E-commerce jewelry website featuring moissanite products with WooCommerce integration, payment gateways, product customization, and advanced search functionality.",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Payment Integration", "Product Customization", "Search Filters"],
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://fancymoissanite.com/",
  },
  {
    id: "north-carolina-attorney",
    title: "North Carolina Attorney",
    description: "Legal services website featuring attorney profiles, practice areas, legal resources, and client consultation booking. Professional design with local SEO optimization.",
    technologies: ["WordPress", "Legal Framework", "Attorney Directory", "Consultation Booking", "Legal Resources", "Local SEO"],
    imageUrl: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://yourncattorney.com/",
  },
  {
    id: "hartsell-williams",
    title: "Hartsell & Williams",
    description: "Established law firm website with comprehensive attorney profiles, practice areas, and client resources. Professional design emphasizing experience and credibility.",
    technologies: ["WordPress", "Legal Theme", "Attorney Profiles", "Practice Areas", "Professional Design", "Client Portal"],
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://hwpalaw.com/",
  },
  {
    id: "agency-angle",
    title: "Agency Angle",
    description: "Creative agency website showcasing design services, portfolio projects, and client success stories. Features modern animations and interactive elements for enhanced user experience.",
    technologies: ["WordPress", "Creative Design", "Portfolio Showcase", "Animations", "Interactive Elements", "Client Stories"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://www.agencyangle.com/",
  },
  {
    id: "clear-lines",
    title: "Clear Lines",
    description: "Design agency website with minimalist aesthetic, showcasing creative projects and design services. Clean, modern interface with emphasis on visual storytelling.",
    technologies: ["WordPress", "Minimalist Design", "Portfolio", "Creative Services", "Modern UI", "Visual Design"],
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://clearlinels.com/",
  },
  {
    id: "galileo-protocol",
    title: "GALILEO Protocol",
    description: "Blockchain-based protocol website with sophisticated design, technical documentation, and integration with blockchain technologies. Features modern UI/UX and responsive design.",
    technologies: ["WordPress", "Blockchain Integration", "Custom Design", "Technical Documentation", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032",
    category: "WordPress",
    liveUrl: "https://galileoprotocol.io/",
  },
  {
    id: "k-tyson-law",
    title: "K Tyson Law",
    description: "Professional legal services website with attorney information, practice areas, and client consultation features. Modern, trustworthy design optimized for client engagement.",
    technologies: ["WordPress", "Legal Theme", "Consultation Forms", "Practice Areas", "Professional Design", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    category: "WordPress",
    liveUrl: "https://ktysonlaw.com/",
  },
  {
    id: "c-the-future",
    title: "C The Future",
    description: "Non-profit organization website focused on future initiatives and community programs. Clean design with emphasis on mission and impact.",
    technologies: ["WordPress", "Non-profit Theme", "Donation Integration", "Event Management", "Community Features", "Impact Showcase"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    category: "WordPress",
    liveUrl: "https://cthefuture.org/",
  },
  {
    id: "bright-plus-paints",
    title: "Bright Plus Paints",
    description: "Paint company website showcasing products, color palettes, and services. Vibrant design with product catalog and professional painting services information.",
    technologies: ["WordPress", "Product Catalog", "Color Gallery", "Service Pages", "Visual Design", "E-commerce"],
    imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2074",
    category: "WordPress",
  },
  {
    id: "prime-biome-health",
    title: "Prime Biome Health Store",
    description: "Health supplement e-commerce store with WooCommerce integration. Features product information, reviews, and secure checkout process.",
    technologies: ["WordPress", "WooCommerce", "Health Products", "E-commerce", "Payment Integration", "Product Reviews"],
    imageUrl: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://primebiomehealth.store/",
  },
  {
    id: "femi-pro-health",
    title: "Femi Pro Health",
    description: "Women's health supplement store with detailed product information and educational resources. Clean, trustworthy design optimized for health-conscious customers.",
    technologies: ["WordPress", "WooCommerce", "Health Store", "Product Information", "Educational Content", "Secure Checkout"],
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://femiprohealth.store/",
  },
  {
    id: "billionaire-suits",
    title: "Billionaire Suits",
    description: "Premium men's fashion e-commerce store specializing in luxury suits. Elegant design with high-quality product imagery and seamless shopping experience.",
    technologies: ["WordPress", "WooCommerce", "Fashion E-commerce", "Product Gallery", "Size Guide", "Premium Design"],
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080",
    category: "WordPress",
    liveUrl: "https://billionairesuit.store/",
  },
  {
    id: "js-health-store",
    title: "JS Health Store",
    description: "Health vitamins and supplements e-commerce platform with comprehensive product catalog and wellness resources. Modern design with focus on health and wellness.",
    technologies: ["WordPress", "WooCommerce", "Vitamins Store", "Product Catalog", "Health Resources", "Shopping Cart"],
    imageUrl: "https://images.unsplash.com/photo-1550572017-4523f46a4bb4?q=80&w=2069",
    category: "WordPress",
    liveUrl: "https://jshealthvitamins.store/",
  },
  {
    id: "bag-elegance",
    title: "Bag Elegance Store",
    description: "Luxury bag e-commerce store featuring designer bags and accessories. Sophisticated design with product showcases and smooth checkout experience.",
    technologies: ["WordPress", "WooCommerce", "Fashion E-commerce", "Product Gallery", "Luxury Design", "Payment Integration"],
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069",
    category: "WordPress",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React", "WordPress"];
  
  // Filter projects based on category
  const filteredProjects = projects.filter(project => {
    if (filter === "All") return true;
    return project.category.includes(filter);
  });

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Projects</span></h1>
            <p className="text-gray-400">
              Explore my portfolio of React and WordPress development projects, showcasing custom themes, 
              modern web applications, WooCommerce solutions, and comprehensive platforms for diverse industries.
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
              I'm currently available for freelance React and WordPress projects and would love to discuss your ideas.
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