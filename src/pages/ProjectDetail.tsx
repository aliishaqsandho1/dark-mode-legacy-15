import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Project data matching the Projects page
const projects = [
  {
    id: "usman-hardware",
    title: "Usman Hardware Inventory Management System",
    description: "Complete inventory management system with React frontend and WordPress backend. Features real-time stock tracking, order management, and comprehensive reporting dashboard.",
    fullDescription: "A comprehensive inventory management system built with React frontend and WordPress backend, designed specifically for hardware businesses. The system features real-time stock tracking, automated reorder alerts, order management, and comprehensive reporting dashboards. The React frontend provides a smooth, responsive user experience while the WordPress backend ensures easy content management and data handling. Integration with barcode scanners and mobile devices enables efficient warehouse operations.",
    technologies: ["React", "WordPress", "REST API", "Inventory Management", "Real-time Updates", "Dashboard"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    category: "React",
    liveUrl: "https://zaidawn.site/",
    features: [
      "Real-time inventory tracking",
      "Automated reorder alerts",
      "Comprehensive reporting dashboard",
      "Barcode scanner integration",
      "Order management system",
      "Multi-user access control",
      "Mobile-responsive interface",
      "WordPress backend integration"
    ],
    challenges: [
      "Real-time data synchronization",
      "Complex reporting requirements",
      "Mobile optimization for warehouse use",
      "Integration with existing systems"
    ],
    results: [
      "40% reduction in inventory errors",
      "Improved stock visibility",
      "Streamlined order processing",
      "Enhanced operational efficiency"
    ]
  },
  {
    id: "iq-ceilings",
    title: "IQ Ceilings",
    description: "Modern false ceilings company website with React frontend and WordPress backend. Showcases ceiling designs, project gallery, and service offerings with elegant UI.",
    fullDescription: "IQ Ceilings website combines React's dynamic frontend capabilities with WordPress's powerful content management to create an elegant showcase for false ceiling designs. The site features an extensive project gallery with before-and-after comparisons, detailed service offerings, and design inspiration galleries. The React frontend enables smooth animations and interactive elements while WordPress backend simplifies content updates and project management.",
    technologies: ["React", "WordPress", "Gallery", "Portfolio", "Modern UI", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    category: "React",
    liveUrl: "https://iqfalseceilings.site/",
    features: [
      "Interactive project gallery",
      "Design inspiration showcase",
      "Before/after comparisons",
      "Service category pages",
      "Quote request system",
      "Material specifications",
      "Modern UI with smooth animations",
      "WordPress content management"
    ],
    challenges: [
      "Gallery performance optimization",
      "Showcasing 3D ceiling designs",
      "Mobile-friendly gallery navigation",
      "Content management workflow"
    ],
    results: [
      "Increased project inquiries",
      "Better design showcasing",
      "Enhanced user engagement",
      "Streamlined content updates"
    ]
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description: "Modern personal portfolio website showcasing skills, projects, and professional experience. Built with React featuring smooth animations and responsive design.",
    fullDescription: "A sophisticated personal portfolio built entirely with React, featuring smooth animations powered by Framer Motion and modern UI design with Tailwind CSS. The portfolio showcases professional skills, project galleries, work experience, and contact information in an engaging, interactive format. The responsive design ensures optimal viewing across all devices, while performance optimization techniques ensure fast loading times.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Responsive Design", "Animations", "Modern UI"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    category: "React",
    liveUrl: "https://itsali.site/",
    features: [
      "Smooth scroll animations",
      "Interactive project showcases",
      "Skills visualization",
      "Experience timeline",
      "Contact form integration",
      "Modern glassmorphism design",
      "Responsive layout",
      "Performance optimized"
    ],
    challenges: [
      "Creating unique animations",
      "Performance optimization",
      "Mobile responsiveness",
      "Content organization"
    ],
    results: [
      "Enhanced professional presence",
      "Improved client engagement",
      "Better project showcasing",
      "Positive user feedback"
    ]
  },
  {
    id: "dekosmetiskelaeger",
    title: "Dekosmetiskelæger.dk",
    description: "Professional cosmetic clinic website with appointment booking system, treatment showcase, and multilingual support for Danish medical practice. Features advanced SEO optimization and performance tuning.",
    fullDescription: "A comprehensive website for a Danish cosmetic clinic that provides professional medical aesthetic treatments. The website features a sophisticated appointment booking system that allows patients to schedule consultations and treatments online. The multilingual support ensures accessibility for both Danish and international patients. The site showcases various cosmetic treatments with detailed information, before/after galleries, and doctor profiles. Advanced SEO optimization ensures high visibility in search results, while performance tuning guarantees fast loading times across all devices.",
    technologies: ["WordPress", "PHP", "Custom Themes", "Booking System", "Multilingual", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
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
    id: "lila-dene",
    title: "Lila Dene",
    description: "Elegant e-commerce website featuring fashion and lifestyle products. Custom WooCommerce integration with advanced product filtering and beautiful design.",
    fullDescription: "Lila Dene is an elegant e-commerce platform specializing in fashion and lifestyle products. The website features custom WooCommerce integration with advanced product filtering, size guides, and wishlist functionality. The beautiful design emphasizes product photography and creates a luxurious shopping experience. Secure payment processing and streamlined checkout ensure customer confidence and conversion.",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Custom Design", "Product Filtering", "Payment Integration"],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://liladene.com/",
    features: [
      "Custom WooCommerce integration",
      "Advanced product filtering",
      "Size guide functionality",
      "Wishlist and favorites",
      "Secure payment processing",
      "Product quick view",
      "Customer account management",
      "Luxury-focused design"
    ],
    challenges: [
      "Creating elegant product displays",
      "Implementing complex filtering",
      "Mobile shopping optimization",
      "Performance with large catalog"
    ],
    results: [
      "Improved shopping experience",
      "Higher conversion rates",
      "Enhanced product discovery",
      "Positive customer feedback"
    ]
  },
  {
    id: "msf-properties",
    title: "MSF Properties",
    description: "Comprehensive real estate platform featuring property listings, advanced search functionality, virtual tours, and integrated property management tools specifically designed for the UAE market.",
    fullDescription: "MSF Properties is a cutting-edge real estate platform designed specifically for the UAE market. The website features an extensive property database with advanced search and filtering capabilities, allowing users to find properties based on location, price, size, and amenities. Virtual tour integration provides immersive property viewing experiences, while the property management tools help real estate agents manage their listings efficiently. The platform includes mortgage calculators, property comparison tools, and detailed neighborhood information to assist buyers in making informed decisions.",
    technologies: ["WordPress", "Real Estate Plugin", "Custom Fields", "Property Search", "Maps Integration", "Virtual Tours"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
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
    id: "rpo-ai",
    title: "RPO.ai",
    description: "AI-powered recruitment platform featuring advanced candidate matching, automated workflows, and data analytics. Modern tech design with emphasis on AI capabilities and user experience.",
    fullDescription: "RPO.ai represents the future of recruitment technology with an AI-powered platform that revolutionizes candidate matching and hiring processes. The website showcases advanced algorithms that match candidates with positions based on skills, experience, and cultural fit. Automated workflows streamline the recruitment process for both recruiters and candidates, while comprehensive data analytics provide insights into hiring trends and success metrics. The modern tech design emphasizes the platform's AI capabilities while maintaining user-friendly navigation for all stakeholders.",
    technologies: ["WordPress", "AI Integration", "Data Analytics", "Automated Workflows", "Modern UI", "Tech Design"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
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
  },
  {
    id: "b9-energy",
    title: "B9 Energy",
    description: "Energy sector website showcasing renewable energy solutions, company services, and project portfolios. Features clean design with focus on sustainability and environmental impact.",
    fullDescription: "B9 Energy's website champions renewable energy solutions through a clean, environmentally-conscious design. The site showcases comprehensive renewable energy services including solar, wind, and energy storage solutions. Project portfolios demonstrate successful installations and their environmental impact, while service pages detail technical capabilities and consultation processes. The clean design reflects the company's commitment to sustainability, with green color schemes and imagery that reinforces environmental responsibility.",
    technologies: ["WordPress", "Custom Theme", "Portfolio Management", "Service Showcase", "Environmental Design"],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
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
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
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
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
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
    id: "cortechsols",
    title: "Cortechsols",
    description: "Technology solutions company website showcasing IT services, software development, and consulting offerings. Modern design with focus on technical expertise.",
    fullDescription: "Cortechsols presents cutting-edge technology solutions through a modern, professional website that showcases IT services, custom software development, and consulting expertise. The site features detailed service offerings, technology stack displays, and portfolio of successful implementations. The design emphasizes technical competence while remaining accessible to non-technical decision-makers.",
    technologies: ["WordPress", "Tech Theme", "Service Pages", "Portfolio", "Modern UI", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://www.cortechsols.com/",
    features: [
      "IT services showcase",
      "Technology stack displays",
      "Project portfolio",
      "Consulting service pages",
      "Client case studies",
      "Technical blog",
      "Contact and consultation forms",
      "Modern responsive design"
    ],
    challenges: [
      "Explaining technical services clearly",
      "Balancing technical depth with accessibility",
      "Showcasing diverse expertise",
      "Creating professional tech aesthetic"
    ],
    results: [
      "Improved lead generation",
      "Enhanced professional credibility",
      "Better service understanding",
      "Increased consultation requests"
    ]
  },
  {
    id: "fancy-moissanite",
    title: "Fancy Moissanite",
    description: "E-commerce jewelry website featuring moissanite products with WooCommerce integration, payment gateways, product customization, and advanced search functionality.",
    fullDescription: "Fancy Moissanite represents the pinnacle of e-commerce jewelry retail, specializing in high-quality moissanite gemstones and jewelry. The website features comprehensive WooCommerce integration with secure payment gateways, detailed product catalogs with high-resolution imagery, and advanced search functionality that helps customers find specific styles, cuts, and sizes. Product customization tools allow customers to create unique pieces, while educational content helps them understand moissanite quality and care. The site balances luxury aesthetics with user-friendly navigation.",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Payment Integration", "Product Customization", "Search Filters"],
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070",
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
    description: "Legal services website featuring attorney profiles, practice areas, legal resources, and client consultation booking. Professional design with local SEO optimization.",
    fullDescription: "The North Carolina Attorney website serves as a comprehensive resource for legal services in North Carolina. The site features detailed attorney profiles highlighting education, experience, and specializations, while practice area pages explain legal services in accessible terms. Legal resources provide valuable information to potential clients, and the consultation booking system streamlines the initial contact process. Local SEO optimization ensures visibility for location-specific legal searches, helping connect local clients with appropriate legal representation.",
    technologies: ["WordPress", "Legal Framework", "Attorney Directory", "Consultation Booking", "Legal Resources", "Local SEO"],
    imageUrl: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070",
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
    id: "hartsell-williams",
    title: "Hartsell & Williams",
    description: "Established law firm website with comprehensive attorney profiles, practice areas, and client resources. Professional design emphasizing experience and credibility.",
    fullDescription: "Hartsell & Williams law firm website showcases decades of legal experience through a professional, credible online presence. The site features comprehensive attorney biographies, detailed practice area information, and extensive client resources. The design emphasizes the firm's established reputation and professional expertise while remaining accessible and user-friendly.",
    technologies: ["WordPress", "Legal Theme", "Attorney Profiles", "Practice Areas", "Professional Design", "Client Portal"],
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://hwpalaw.com/",
    features: [
      "Comprehensive attorney biographies",
      "Detailed practice areas",
      "Client resource center",
      "Firm history and values",
      "Consultation scheduling",
      "News and insights blog",
      "Professional photography",
      "Mobile-responsive design"
    ],
    challenges: [
      "Showcasing firm heritage",
      "Organizing extensive information",
      "Creating professional credibility",
      "User-friendly navigation"
    ],
    results: [
      "Enhanced firm reputation online",
      "Increased qualified inquiries",
      "Better client information access",
      "Improved professional image"
    ]
  },
  {
    id: "agency-angle",
    title: "Agency Angle",
    description: "Creative agency website showcasing design services, portfolio projects, and client success stories. Features modern animations and interactive elements for enhanced user experience.",
    fullDescription: "Agency Angle represents creative excellence through a modern, animation-rich website that showcases design and marketing services. The site features an extensive portfolio of creative projects spanning branding, web design, and marketing campaigns. Interactive elements and smooth animations engage visitors while demonstrating the agency's creative capabilities. Client success stories provide concrete examples of results achieved, while service pages detail the agency's comprehensive creative offerings from concept to completion.",
    technologies: ["WordPress", "Creative Design", "Portfolio Showcase", "Animations", "Interactive Elements", "Client Stories"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://www.agencyangle.com/",
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
    id: "clear-lines",
    title: "Clear Lines",
    description: "Design agency website with minimalist aesthetic, showcasing creative projects and design services. Clean, modern interface with emphasis on visual storytelling.",
    fullDescription: "Clear Lines embodies minimalist design philosophy through a clean, modern website that lets the work speak for itself. The site showcases creative projects with emphasis on visual storytelling and clean aesthetics. Service offerings are presented clearly and concisely, while the portfolio demonstrates expertise across various design disciplines.",
    technologies: ["WordPress", "Minimalist Design", "Portfolio", "Creative Services", "Modern UI", "Visual Design"],
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://clearlinels.com/",
    features: [
      "Minimalist portfolio display",
      "Visual storytelling",
      "Service presentations",
      "Project case studies",
      "Clean navigation",
      "Typography focus",
      "Whitespace utilization",
      "Contact forms"
    ],
    challenges: [
      "Maintaining minimalist aesthetic",
      "Effective visual communication",
      "Balancing simplicity with functionality",
      "Portfolio organization"
    ],
    results: [
      "Strong brand identity",
      "Improved user focus",
      "Enhanced portfolio impact",
      "Positive client feedback"
    ]
  },
  {
    id: "galileo-protocol",
    title: "GALILEO Protocol",
    description: "Blockchain-based protocol website with sophisticated design, technical documentation, and integration with blockchain technologies. Features modern UI/UX and responsive design.",
    fullDescription: "GALILEO Protocol represents the future of blockchain technology with a sophisticated website that communicates complex technical concepts through elegant design. The site features comprehensive technical documentation, whitepaper integration, and detailed explanations of the protocol's functionality. Interactive elements help users understand blockchain concepts, while the modern UI/UX design ensures accessibility for both technical and non-technical audiences. The responsive design ensures optimal viewing across all devices, from desktop computers to mobile phones.",
    technologies: ["WordPress", "Blockchain Integration", "Custom Design", "Technical Documentation", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032",
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
    id: "k-tyson-law",
    title: "K Tyson Law",
    description: "Professional legal services website with attorney information, practice areas, and client consultation features. Modern, trustworthy design optimized for client engagement.",
    fullDescription: "K Tyson Law website presents professional legal services through a modern, trustworthy design that inspires client confidence. The site features comprehensive attorney information, detailed practice area descriptions, and streamlined consultation booking. The design balances professionalism with approachability, making legal services accessible to potential clients.",
    technologies: ["WordPress", "Legal Theme", "Consultation Forms", "Practice Areas", "Professional Design", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    category: "WordPress",
    liveUrl: "https://ktysonlaw.com/",
    features: [
      "Attorney profile",
      "Practice area pages",
      "Consultation booking",
      "Client testimonials",
      "Legal blog",
      "Professional photography",
      "Contact forms",
      "SEO optimization"
    ],
    challenges: [
      "Building trust online",
      "Clear service communication",
      "Professional brand presentation",
      "Local SEO optimization"
    ],
    results: [
      "Increased consultation requests",
      "Better client understanding",
      "Enhanced professional credibility",
      "Improved local visibility"
    ]
  },
  {
    id: "c-the-future",
    title: "C The Future",
    description: "Non-profit organization website focused on future initiatives and community programs. Clean design with emphasis on mission and impact.",
    fullDescription: "C The Future website champions non-profit initiatives through a clean, mission-focused design. The site showcases community programs, impact stories, and future initiatives while making it easy for supporters to get involved. Donation integration and volunteer signup features facilitate community engagement.",
    technologies: ["WordPress", "Non-profit Theme", "Donation Integration", "Event Management", "Community Features", "Impact Showcase"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    category: "WordPress",
    liveUrl: "https://cthefuture.org/",
    features: [
      "Mission statement showcase",
      "Program descriptions",
      "Impact stories",
      "Donation integration",
      "Volunteer signup",
      "Event calendar",
      "News and updates",
      "Contact forms"
    ],
    challenges: [
      "Communicating mission effectively",
      "Facilitating donations",
      "Engaging community support",
      "Showcasing impact"
    ],
    results: [
      "Increased community engagement",
      "Better donation conversion",
      "Enhanced program visibility",
      "Improved volunteer recruitment"
    ]
  },
  {
    id: "bright-plus-paints",
    title: "Bright Plus Paints",
    description: "Paint company website showcasing products, color palettes, and services. Vibrant design with product catalog and professional painting services information.",
    fullDescription: "Bright Plus Paints website brings color to life through a vibrant, engaging design that showcases paint products and professional services. The site features an extensive color palette viewer, product catalogs with specifications, and professional painting service information. The design uses color psychology to create an inspiring browsing experience.",
    technologies: ["WordPress", "Product Catalog", "Color Gallery", "Service Pages", "Visual Design", "E-commerce"],
    imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2074",
    category: "WordPress",
    liveUrl: "https://brightplus.site/",
    features: [
      "Interactive color palette",
      "Product catalog",
      "Service descriptions",
      "Project gallery",
      "Color inspiration",
      "Product specifications",
      "Quote request forms",
      "Vibrant visual design"
    ],
    challenges: [
      "Accurate color representation",
      "Organizing large product catalog",
      "Creating visual inspiration",
      "Mobile color viewing"
    ],
    results: [
      "Enhanced product discovery",
      "Improved customer engagement",
      "Better service understanding",
      "Increased quote requests"
    ]
  },
  {
    id: "prime-biome-health",
    title: "Prime Biome Health Store",
    description: "Health supplement e-commerce store with WooCommerce integration. Features product information, reviews, and secure checkout process.",
    fullDescription: "Prime Biome Health Store offers premium health supplements through a trustworthy e-commerce platform. The site features detailed product information backed by scientific research, customer reviews, and educational content about gut health. Secure checkout and subscription options make it easy for customers to maintain their health routine.",
    technologies: ["WordPress", "WooCommerce", "Health Products", "E-commerce", "Payment Integration", "Product Reviews"],
    imageUrl: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://primebiomehealth.store/",
    features: [
      "Product catalog",
      "Subscription options",
      "Customer reviews",
      "Educational content",
      "Secure checkout",
      "Account management",
      "Health blog",
      "Scientific backing information"
    ],
    challenges: [
      "Building health product trust",
      "Explaining scientific benefits",
      "Secure payment processing",
      "Subscription management"
    ],
    results: [
      "Increased customer confidence",
      "Higher subscription rates",
      "Better product understanding",
      "Improved customer retention"
    ]
  },
  {
    id: "femi-pro-health",
    title: "Femi Pro Health",
    description: "Women's health supplement store with detailed product information and educational resources. Clean, trustworthy design optimized for health-conscious customers.",
    fullDescription: "Femi Pro Health specializes in women's health supplements, offering a clean, trustworthy e-commerce experience. The site features comprehensive product information, educational resources about women's health, and a supportive community feel. The design emphasizes trust and empowerment.",
    technologies: ["WordPress", "WooCommerce", "Health Store", "Product Information", "Educational Content", "Secure Checkout"],
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070",
    category: "WordPress",
    liveUrl: "https://femiprohealth.store/",
    features: [
      "Women's health products",
      "Educational resources",
      "Product benefits information",
      "Customer testimonials",
      "Secure shopping",
      "Subscription options",
      "Health blog",
      "FAQ section"
    ],
    challenges: [
      "Sensitive health topic communication",
      "Building trust with female audience",
      "Product education",
      "Privacy and security"
    ],
    results: [
      "Strong customer trust",
      "Positive health outcomes feedback",
      "Good subscription retention",
      "Engaged community"
    ]
  },
  {
    id: "billionaire-suits",
    title: "Billionaire Suits",
    description: "Premium men's fashion e-commerce store specializing in luxury suits. Elegant design with high-quality product imagery and seamless shopping experience.",
    fullDescription: "Billionaire Suits delivers luxury menswear through an elegant e-commerce platform that showcases premium suits and formal wear. The site features high-quality product photography, detailed size guides, fabric information, and styling advice. The sophisticated design reflects the luxury brand positioning.",
    technologies: ["WordPress", "WooCommerce", "Fashion E-commerce", "Product Gallery", "Size Guide", "Premium Design"],
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080",
    category: "WordPress",
    liveUrl: "https://billionairesuit.store/",
    features: [
      "Luxury product displays",
      "Detailed size guides",
      "Fabric information",
      "Style advice",
      "Custom tailoring options",
      "Premium photography",
      "Secure checkout",
      "VIP customer service"
    ],
    challenges: [
      "Conveying luxury online",
      "Detailed size and fit information",
      "High-quality image presentation",
      "Premium customer experience"
    ],
    results: [
      "Strong luxury brand positioning",
      "Low return rates",
      "High customer satisfaction",
      "Premium price point acceptance"
    ]
  },
  {
    id: "js-health-store",
    title: "JS Health Store",
    description: "Health vitamins and supplements e-commerce platform with comprehensive product catalog and wellness resources. Modern design with focus on health and wellness.",
    fullDescription: "JS Health Store provides a comprehensive vitamins and supplements e-commerce experience with focus on holistic wellness. The site features detailed product information, wellness guides, and personalized recommendations. The modern design creates a trustworthy, health-focused shopping environment.",
    technologies: ["WordPress", "WooCommerce", "Vitamins Store", "Product Catalog", "Health Resources", "Shopping Cart"],
    imageUrl: "https://images.unsplash.com/photo-1550572017-4523f46a4bb4?q=80&w=2069",
    category: "WordPress",
    liveUrl: "https://jshealthvitamins.store/",
    features: [
      "Comprehensive product catalog",
      "Wellness guides",
      "Product recommendations",
      "Health blog",
      "Subscription services",
      "Customer reviews",
      "Nutrition information",
      "Secure shopping"
    ],
    challenges: [
      "Product catalog organization",
      "Health claims compliance",
      "Educational content creation",
      "Customer guidance"
    ],
    results: [
      "High customer satisfaction",
      "Strong subscription base",
      "Good repeat purchase rate",
      "Trusted health resource"
    ]
  },
  {
    id: "bag-elegance",
    title: "Bag Elegance Store",
    description: "Luxury bag e-commerce store featuring designer bags and accessories. Sophisticated design with product showcases and smooth checkout experience.",
    fullDescription: "Bag Elegance offers luxury bags and accessories through a sophisticated e-commerce platform that emphasizes product beauty and quality. The site features stunning product photography, detailed material information, and an elegant shopping experience that reflects the premium nature of the products.",
    technologies: ["WordPress", "WooCommerce", "Fashion E-commerce", "Product Gallery", "Luxury Design", "Payment Integration"],
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069",
    category: "WordPress",
    liveUrl: "https://bagelegance.site/",
    features: [
      "Luxury product galleries",
      "Material and care information",
      "Designer collections",
      "Wishlist functionality",
      "Gift wrapping options",
      "Premium packaging",
      "Secure checkout",
      "Style guides"
    ],
    challenges: [
      "Showcasing luxury products online",
      "High-quality image presentation",
      "Premium brand positioning",
      "Customer trust building"
    ],
    results: [
      "Strong luxury market position",
      "High average order value",
      "Excellent customer feedback",
      "Low return rates"
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