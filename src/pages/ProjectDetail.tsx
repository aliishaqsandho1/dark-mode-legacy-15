import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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

// Full project data with all details
const projects = [
  {
    id: "dekosmetiskelaeger",
    title: "Dekosmetiskelæger.dk",
    description: "Professional cosmetic clinic website with appointment booking system, treatment showcase, and multilingual support for Danish medical practice. Features advanced SEO optimization and performance tuning.",
    fullDescription: "A comprehensive website for a Danish cosmetic clinic that provides professional medical aesthetic treatments. The website features a sophisticated appointment booking system that allows patients to schedule consultations and treatments online. The multilingual support ensures accessibility for both Danish and international patients. The site showcases various cosmetic treatments with detailed information, before/after galleries, and doctor profiles. Advanced SEO optimization ensures high visibility in search results, while performance tuning guarantees fast loading times across all devices.",
    technologies: ["WordPress", "PHP", "Custom Themes", "Booking System", "Multilingual", "SEO"],
    imageUrl: dekosmetiskeImage,
    category: "WordPress",
    liveUrl: "https://www.dekosmetiskelaeger.dk/",
    features: [
      "Online appointment booking system",
      "Multilingual support (Danish/English)",
      "Treatment showcase with galleries",
      "Doctor and staff profiles",
      "SEO optimized content",
      "Mobile responsive design",
      "Patient testimonials",
      "Contact forms and consultation requests"
    ],
    challenges: [
      "Implementing GDPR compliant booking system",
      "Optimizing for Danish search engines",
      "Creating multilingual content management",
      "Ensuring medical compliance standards"
    ],
    results: [
      "15% increase in SEO performance",
      "30% improvement in user engagement",
      "Streamlined appointment booking process",
      "Enhanced patient experience"
    ]
  },
  {
    id: "msf-properties",
    title: "MSF Properties",
    description: "Comprehensive real estate platform featuring property listings, advanced search functionality, virtual tours, and integrated property management tools specifically designed for the UAE market.",
    fullDescription: "MSF Properties is a cutting-edge real estate platform designed specifically for the UAE market. The website features an extensive property database with advanced search and filtering capabilities, allowing users to find properties based on location, price, size, and amenities. Virtual tour integration provides immersive property viewing experiences, while the property management tools help real estate agents manage their listings efficiently. The platform includes mortgage calculators, property comparison tools, and detailed neighborhood information to assist buyers in making informed decisions.",
    technologies: ["WordPress", "Real Estate Plugin", "Custom Fields", "Property Search", "Maps Integration", "Virtual Tours"],
    imageUrl: msfPropertiesImage,
    category: "WordPress",
    liveUrl: "https://msfproperties.ae/",
    features: [
      "Advanced property search and filters",
      "Interactive maps integration",
      "Virtual tour capabilities",
      "Property comparison tools",
      "Mortgage calculator",
      "Agent profiles and contact system",
      "Multilingual support",
      "Mobile-optimized browsing"
    ],
    challenges: [
      "Integrating with UAE property databases",
      "Implementing complex search algorithms",
      "Optimizing for mobile browsing",
      "Creating seamless virtual tour experience"
    ],
    results: [
      "Increased property inquiries by 40%",
      "Improved user engagement time",
      "Streamlined property management",
      "Enhanced user experience"
    ]
  },
  {
    id: "empyrian-media",
    title: "Empyrian Media",
    description: "Digital marketing agency website with portfolio showcase, service pages, client testimonials, and case studies. Modern design with advanced animations and performance optimization.",
    fullDescription: "Empyrian Media's website represents the pinnacle of digital marketing agency presentation. The site features a dynamic portfolio showcase highlighting successful campaigns and creative work. Service pages detail comprehensive digital marketing offerings including SEO, social media marketing, content creation, and web development. Client testimonials and detailed case studies demonstrate proven results and build trust with potential clients. The modern design incorporates advanced CSS animations and interactive elements that engage visitors while maintaining excellent performance scores.",
    technologies: ["WordPress", "Elementor Pro", "Custom Animations", "SEO Optimization", "Performance Tuning", "Analytics"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://empyrianmedia.com/",
    features: [
      "Dynamic portfolio showcase",
      "Service page templates",
      "Client testimonial system",
      "Case study presentations",
      "Advanced CSS animations",
      "Performance optimization",
      "SEO-friendly structure",
      "Contact and quote forms"
    ],
    challenges: [
      "Balancing animation performance",
      "Creating engaging portfolio displays",
      "Optimizing for search engines",
      "Maintaining fast loading speeds"
    ],
    results: [
      "Improved client acquisition rate",
      "Enhanced brand presentation",
      "Better search engine rankings",
      "Increased user engagement"
    ]
  },
  {
    id: "galileo-protocol",
    title: "GALILEO Protocol",
    description: "Blockchain-based protocol website with sophisticated design, technical documentation, and integration with blockchain technologies. Features modern UI/UX and responsive design.",
    fullDescription: "GALILEO Protocol represents the future of blockchain technology with a sophisticated website that communicates complex technical concepts through elegant design. The site features comprehensive technical documentation, whitepaper integration, and detailed explanations of the protocol's functionality. Interactive elements help users understand blockchain concepts, while the modern UI/UX design ensures accessibility for both technical and non-technical audiences. The responsive design ensures optimal viewing across all devices, from desktop computers to mobile phones.",
    technologies: ["WordPress", "Blockchain Integration", "Custom Design", "Technical Documentation", "Responsive Design"],
    imageUrl: galileoProtocolImage,
    category: "WordPress",
    liveUrl: "https://galileoprotocol.io/",
    features: [
      "Technical documentation system",
      "Blockchain integration features",
      "Interactive protocol explanations",
      "Whitepaper integration",
      "Modern UI/UX design",
      "Responsive layout",
      "Community features",
      "Developer resources"
    ],
    challenges: [
      "Explaining complex blockchain concepts",
      "Creating intuitive navigation",
      "Ensuring technical accuracy",
      "Maintaining modern design standards"
    ],
    results: [
      "Improved user understanding",
      "Enhanced developer adoption",
      "Better community engagement",
      "Professional brand presence"
    ]
  },
  {
    id: "b9-energy",
    title: "B9 Energy",
    description: "Energy sector website showcasing renewable energy solutions, company services, and project portfolios. Features clean design with focus on sustainability and environmental impact.",
    fullDescription: "B9 Energy's website champions renewable energy solutions through a clean, environmentally-conscious design. The site showcases comprehensive renewable energy services including solar, wind, and energy storage solutions. Project portfolios demonstrate successful installations and their environmental impact, while service pages detail technical capabilities and consultation processes. The clean design reflects the company's commitment to sustainability, with green color schemes and imagery that reinforces environmental responsibility.",
    technologies: ["WordPress", "Custom Theme", "Portfolio Management", "Service Showcase", "Environmental Design"],
    imageUrl: b9EnergyImage,
    category: "WordPress",
    liveUrl: "https://b9energy.co.uk/",
    features: [
      "Renewable energy portfolio",
      "Service showcase pages",
      "Environmental impact displays",
      "Project case studies",
      "Consultation booking",
      "Sustainability-focused design",
      "Technical specifications",
      "Contact and quote systems"
    ],
    challenges: [
      "Communicating technical energy concepts",
      "Showcasing environmental benefits",
      "Creating engaging project displays",
      "Optimizing for industry keywords"
    ],
    results: [
      "Increased project inquiries",
      "Better brand positioning",
      "Enhanced credibility",
      "Improved search visibility"
    ]
  },
  {
    id: "sodoma-law",
    title: "Sodoma Law",
    description: "Professional law firm website with practice area showcase, attorney profiles, case studies, and client portal. Features sophisticated design with emphasis on trust and professionalism.",
    fullDescription: "Sodoma Law's website embodies professionalism and trust through sophisticated design and comprehensive functionality. The site features detailed practice area pages that explain legal services in accessible language, while attorney profiles showcase the firm's expertise and experience. Case studies demonstrate successful outcomes without compromising client confidentiality, and the client portal provides secure access to case information and documents. The design emphasizes trust and reliability, crucial factors for potential clients seeking legal representation.",
    technologies: ["WordPress", "Legal Theme", "Attorney Profiles", "Case Studies", "Client Portal", "Professional Design"],
    imageUrl: sodomaLawImage,
    category: "WordPress",
    liveUrl: "https://www.sodomalaw.com/",
    features: [
      "Practice area descriptions",
      "Attorney profile system",
      "Case study presentations",
      "Secure client portal",
      "Consultation booking",
      "Legal resource library",
      "Professional design",
      "Contact and consultation forms"
    ],
    challenges: [
      "Ensuring legal compliance",
      "Balancing professionalism with accessibility",
      "Implementing secure client areas",
      "Creating trust through design"
    ],
    results: [
      "Increased client consultations",
      "Enhanced professional image",
      "Improved client communication",
      "Better search engine rankings"
    ]
  },
  {
    id: "qnq-builders",
    title: "QNQ Builders",
    description: "Construction company website featuring project galleries, service offerings, team profiles, and client testimonials. Emphasis on showcasing construction expertise and completed projects.",
    fullDescription: "QNQ Builders' website showcases construction excellence through comprehensive project galleries and service presentations. The site features extensive before-and-after galleries of completed projects, demonstrating the company's craftsmanship and attention to detail. Service pages detail various construction offerings from residential builds to commercial projects, while team profiles introduce the experienced professionals behind each project. Client testimonials provide social proof and build trust with potential customers seeking reliable construction services.",
    technologies: ["WordPress", "Construction Theme", "Project Gallery", "Team Profiles", "Testimonials", "Service Pages"],
    imageUrl: qnqBuildersImage,
    category: "WordPress",
    liveUrl: "https://qnqbuilders.co.uk/",
    features: [
      "Comprehensive project galleries",
      "Service category pages",
      "Team member profiles",
      "Client testimonial system",
      "Before/after showcases",
      "Quote request forms",
      "Construction timeline displays",
      "Contact and consultation booking"
    ],
    challenges: [
      "Organizing extensive project galleries",
      "Showcasing work quality effectively",
      "Creating trust through testimonials",
      "Optimizing image-heavy content"
    ],
    results: [
      "Increased project inquiries",
      "Better showcasing of expertise",
      "Enhanced client trust",
      "Improved conversion rates"
    ]
  },
  {
    id: "mattis-auto-detailing",
    title: "Mattis Auto Detailing",
    description: "Automotive detailing service website with service packages, before/after galleries, booking system, and customer reviews. Features modern design optimized for mobile users.",
    fullDescription: "Mattis Auto Detailing's website caters to automotive enthusiasts with a modern, mobile-optimized design that showcases professional car detailing services. The site features detailed service packages ranging from basic washes to premium detailing services, with clear pricing and service descriptions. Before-and-after galleries demonstrate the dramatic improvements possible through professional detailing, while the integrated booking system allows customers to schedule services conveniently. Customer reviews and testimonials build trust and showcase service quality.",
    technologies: ["WordPress", "Automotive Theme", "Booking System", "Gallery Management", "Mobile Optimization", "Review System"],
    imageUrl: mattisAutoImage,
    category: "WordPress",
    liveUrl: "https://mattisautodetailing-com.us.stackstaging.com/",
    features: [
      "Service package displays",
      "Before/after galleries",
      "Online booking system",
      "Customer review integration",
      "Service pricing tables",
      "Mobile-optimized design",
      "Location and contact info",
      "Service area mapping"
    ],
    challenges: [
      "Mobile optimization for busy customers",
      "Effective before/after presentations",
      "Streamlined booking process",
      "Building trust through reviews"
    ],
    results: [
      "Increased mobile bookings",
      "Better service understanding",
      "Enhanced customer satisfaction",
      "Streamlined operations"
    ]
  },
  {
    id: "fancy-moissanite",
    title: "Fancy Moissanite",
    description: "E-commerce jewelry website featuring moissanite products with WooCommerce integration, payment gateways, product customization, and advanced search functionality.",
    fullDescription: "Fancy Moissanite represents the pinnacle of e-commerce jewelry retail, specializing in high-quality moissanite gemstones and jewelry. The website features comprehensive WooCommerce integration with secure payment gateways, detailed product catalogs with high-resolution imagery, and advanced search functionality that helps customers find specific styles, cuts, and sizes. Product customization tools allow customers to create unique pieces, while educational content helps them understand moissanite quality and care. The site balances luxury aesthetics with user-friendly navigation.",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Payment Integration", "Product Customization", "Search Filters"],
    imageUrl: fancyMoissaniteImage,
    category: "WordPress",
    liveUrl: "https://fancymoissanite.com/",
    features: [
      "Complete e-commerce functionality",
      "Product customization tools",
      "Advanced search and filters",
      "Secure payment processing",
      "High-resolution product galleries",
      "Customer account management",
      "Wishlist and comparison features",
      "Educational content sections"
    ],
    challenges: [
      "Implementing complex product variations",
      "Ensuring secure payment processing",
      "Creating intuitive product search",
      "Balancing luxury design with usability"
    ],
    results: [
      "15% increase in revenue",
      "Improved customer satisfaction",
      "Enhanced product discovery",
      "Streamlined checkout process"
    ]
  },
  {
    id: "north-carolina-attorney",
    title: "North Carolina Attorney",
    description: "Legal services website for Hartsell & Williams featuring attorney profiles, practice areas, legal resources, and client consultation booking. Professional design with local SEO optimization.",
    fullDescription: "The North Carolina Attorney website for Hartsell & Williams serves as a comprehensive resource for legal services in North Carolina. The site features detailed attorney profiles highlighting education, experience, and specializations, while practice area pages explain legal services in accessible terms. Legal resources provide valuable information to potential clients, and the consultation booking system streamlines the initial contact process. Local SEO optimization ensures visibility for location-specific legal searches, helping connect local clients with appropriate legal representation.",
    technologies: ["WordPress", "Legal Framework", "Attorney Directory", "Consultation Booking", "Legal Resources", "Local SEO"],
    imageUrl: ncAttorneyImage,
    category: "WordPress",
    liveUrl: "https://yourncattorney.com/",
    features: [
      "Attorney profile system",
      "Practice area descriptions",
      "Legal resource library",
      "Consultation booking",
      "Local SEO optimization",
      "Professional design",
      "Contact and inquiry forms",
      "Client testimonials"
    ],
    challenges: [
      "Local SEO optimization",
      "Legal compliance requirements",
      "Professional brand presentation",
      "Accessible legal information"
    ],
    results: [
      "Improved local search rankings",
      "Increased consultation bookings",
      "Enhanced professional image",
      "Better client communication"
    ]
  },
  {
    id: "agency-angle",
    title: "Agency Angle / Clear Lines",
    description: "Creative agency website showcasing design services, portfolio projects, and client success stories. Features modern animations and interactive elements for enhanced user experience.",
    fullDescription: "Agency Angle (Clear Lines) represents creative excellence through a modern, animation-rich website that showcases design and marketing services. The site features an extensive portfolio of creative projects spanning branding, web design, and marketing campaigns. Interactive elements and smooth animations engage visitors while demonstrating the agency's creative capabilities. Client success stories provide concrete examples of results achieved, while service pages detail the agency's comprehensive creative offerings from concept to completion.",
    technologies: ["WordPress", "Creative Design", "Portfolio Showcase", "Animations", "Interactive Elements", "Client Stories"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://empyrianmedia.com/",
    features: [
      "Interactive portfolio showcase",
      "Creative service presentations",
      "Client success stories",
      "Modern animation effects",
      "Interactive design elements",
      "Creative process explanations",
      "Team member profiles",
      "Project inquiry forms"
    ],
    challenges: [
      "Balancing creativity with performance",
      "Showcasing diverse creative work",
      "Creating engaging interactions",
      "Maintaining fast loading speeds"
    ],
    results: [
      "Enhanced creative presentation",
      "Increased client inquiries",
      "Better portfolio engagement",
      "Improved brand perception"
    ]
  },
  {
    id: "rpo-ai",
    title: "RPO.ai",
    description: "AI-powered recruitment platform featuring advanced candidate matching, automated workflows, and data analytics. Modern tech design with emphasis on AI capabilities and user experience.",
    fullDescription: "RPO.ai represents the future of recruitment technology with an AI-powered platform that revolutionizes candidate matching and hiring processes. The website showcases advanced algorithms that match candidates with positions based on skills, experience, and cultural fit. Automated workflows streamline the recruitment process for both recruiters and candidates, while comprehensive data analytics provide insights into hiring trends and success metrics. The modern tech design emphasizes the platform's AI capabilities while maintaining user-friendly navigation for all stakeholders.",
    technologies: ["WordPress", "AI Integration", "Data Analytics", "Automated Workflows", "Modern UI", "Tech Design"],
    imageUrl: rpoAiImage,
    category: "WordPress",
    liveUrl: "https://rpo.ai/",
    features: [
      "AI-powered candidate matching",
      "Automated recruitment workflows",
      "Comprehensive data analytics",
      "Modern tech interface",
      "Candidate and recruiter dashboards",
      "Performance tracking",
      "Integration capabilities",
      "AI algorithm explanations"
    ],
    challenges: [
      "Explaining AI technology clearly",
      "Creating intuitive tech interfaces",
      "Demonstrating AI capabilities",
      "Balancing technical depth with accessibility"
    ],
    results: [
      "Improved candidate matching accuracy",
      "Streamlined recruitment processes",
      "Enhanced user experience",
      "Better recruitment outcomes"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <main className="pt-24 pb-16">
        <section className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="neo-button inline-flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom">
        {/* Back Button */}
        <AnimatedSection>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-gray-400 hover:text-neon-blue transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-neon-blue/20 text-neon-blue text-sm px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Calendar size={16} className="mr-1" />
                2023-2024
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{project.description}</p>
          </div>
        </AnimatedSection>

        {/* Project Image */}
        <AnimatedSection delay={0.2}>
          <div className="relative rounded-xl overflow-hidden mb-12 aspect-video">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-100/50 to-transparent" />
          </div>
        </AnimatedSection>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <AnimatedSection delay={0.3}>
              <div className="glass-panel p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection delay={0.4}>
              <div className="glass-panel p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Challenges & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.5}>
                <div className="glass-panel p-6 rounded-xl h-full">
                  <h3 className="text-xl font-bold mb-4">Challenges</h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="glass-panel p-6 rounded-xl h-full">
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <div className="space-y-3">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-neon-pink rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <AnimatedSection delay={0.3}>
              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <User size={16} className="mr-2" />
                      Client
                    </div>
                    <div className="text-white">{project.title}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Tag size={16} className="mr-2" />
                      Category
                    </div>
                    <div className="text-white">{project.category}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Calendar size={16} className="mr-2" />
                      Timeline
                    </div>
                    <div className="text-white">2023-2024</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Technologies */}
            <AnimatedSection delay={0.4}>
              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 rounded-full bg-dark-400 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Live Project */}
            <AnimatedSection delay={0.5}>
              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">View Project</h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button w-full flex items-center justify-center"
                >
                  Visit Live Site
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </AnimatedSection>

            {/* Contact CTA */}
            <AnimatedSection delay={0.6}>
              <div className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-lg font-bold mb-3">Interested in Similar Work?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Let's discuss your project requirements and create something amazing together.
                </p>
                <Link to="/contact" className="neo-button w-full inline-flex items-center justify-center">
                  Get In Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;