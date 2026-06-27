export interface SubIndustry {
  name: string;
  slug: string;
  description: string;
  keyRoles: string[];
  images: string[];
}

export interface Industry {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  subIndustries: SubIndustry[];
}

const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const createSubIndustry = (name: string, description: string, keyRoles: string[], images: string[]): SubIndustry => ({
  name,
  slug: generateSlug(name),
  description,
  keyRoles,
  images,
});

export const industriesData: Industry[] = [
  {
    name: "Information Technology",
    slug: "information-technology",
    tagline: "Architecting the Digital Future",
    description: "In the rapidly evolving tech landscape, having the right talent is the difference between leading the market and falling behind. We connect visionary companies with elite software engineers, cybersecurity experts, and cloud architects capable of building the next generation of digital infrastructure.",
    subIndustries: [
      createSubIndustry("Software Development", "From full-stack engineers to specialized AI infrastructure developers, we source the talent that writes the code powering tomorrow's enterprises.", ["Full Stack Developer", "Backend Engineer", "Frontend Architect", "Mobile Developer"], ["/images/software-development/software-development-1.webp","/images/software-development/software-development-2.webp","/images/software-development/software-development-3.webp","/images/software-development/software-development-4.webp","/images/software-development/software-development-5.webp"]),
      createSubIndustry("Cybersecurity", "Protecting digital assets requires specialized knowledge. We find the security analysts, penetration testers, and compliance experts who keep your data safe.", ["Security Engineer", "Penetration Tester", "CISO", "Compliance Analyst"], ["/images/cyber-security/cyber-security-1.webp","/images/cyber-security/cyber-security-2.webp","/images/cyber-security/cyber-security-3.webp","/images/cyber-security/cyber-security-4.webp"]),
      createSubIndustry("Cloud Computing", "Navigate the complexities of AWS, Azure, and GCP with certified cloud architects and DevOps engineers who optimize scalable infrastructure.", ["Cloud Architect", "DevOps Engineer", "SRE", "Cloud Migration Specialist"], ["/images/cloud-computing/cloud-computing-1.webp","/images/cloud-computing/cloud-computing-2.webp","/images/cloud-computing/cloud-computing-3.webp"]),
    ]
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    tagline: "Empowering World-Class Patient Care",
    description: "The healthcare industry demands precision, empathy, and absolute excellence. From the boardroom to the operating room, we provide specialized staffing solutions that ensure medical facilities operate at their highest potential and deliver unmatched patient outcomes.",
    subIndustries: [
      createSubIndustry("Nursing & Allied Health", "Connecting compassionate, highly skilled RNs, LPNs, and allied health professionals with top-tier medical facilities.", ["Registered Nurse", "Physical Therapist", "Radiology Tech", "Medical Assistant"], ["/images/nursing-allied-health/nursing-allied-health-1.webp","/images/nursing-allied-health/nursing-allied-health-2.webp","/images/nursing-allied-health/nursing-allied-health-3.webp","/images/nursing-allied-health/nursing-allied-health-4.webp"]),
      createSubIndustry("Health Informatics", "Bridging the gap between clinical care and data management to optimize health systems and patient records.", ["Clinical Data Analyst", "Health Informatics Specialist", "EHR Consultant", "HIM Director"], []),
      createSubIndustry("Medical Devices", "Staffing the innovators and engineers behind life-saving technologies, from R&D to regulatory affairs.", ["Biomedical Engineer", "Regulatory Affairs Specialist", "Quality Assurance Tech", "Medical Device Sales"], ["/images/medical-devices/medical-devices-1.webp","/images/medical-devices/medical-devices-2.webp","/images/medical-devices/medical-devices-3.webp","/images/medical-devices/medical-devices-4.webp","/images/medical-devices/medical-devices-5.webp"]),
    ]
  },
  {
    name: "Industrial",
    slug: "industrial",
    tagline: "Building the Engine of the Economy",
    description: "The industrial sector is the backbone of global commerce. We staff the manufacturing plants, logistics networks, and operational hubs that keep products moving and economies thriving, matching skilled labor and management to complex industrial challenges.",
    subIndustries: [
      createSubIndustry("Manufacturing Operations", "Providing the leadership and technical talent necessary to optimize production lines and implement lean manufacturing.", ["Plant Manager", "Production Supervisor", "Manufacturing Engineer", "Operations Director"], ["/images/manufacturing-operations/manufacturing-operations-1.webp","/images/manufacturing-operations/manufacturing-operations-2.webp","/images/manufacturing-operations/manufacturing-operations-3.webp","/images/manufacturing-operations/manufacturing-operations-4.webp"]),
      createSubIndustry("Logistics & Supply Chain", "Navigating global bottlenecks by placing strategic supply chain planners, logistics coordinators, and warehouse leaders.", ["Supply Chain Manager", "Logistics Analyst", "Warehouse Supervisor", "Procurement Specialist"], ["/images/logistics-supply-chain/logistics-supply-chain-1.webp","/images/logistics-supply-chain/logistics-supply-chain-2.webp","/images/logistics-supply-chain/logistics-supply-chain-3.webp"]),
      createSubIndustry("Quality Assurance", "Ensuring every product meets rigorous standards through specialized QA technicians and quality control managers.", ["QA Manager", "Quality Control Inspector", "Continuous Improvement Manager", "Six Sigma Black Belt"], ["/images/quality-assurance/quality-assurance-1.webp","/images/quality-assurance/quality-assurance-2.webp","/images/quality-assurance/quality-assurance-3.webp","/images/quality-assurance/quality-assurance-4.webp","/images/quality-assurance/quality-assurance-5.webp"]),
    ]
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    tagline: "Curating Exceptional Guest Experiences",
    description: "Service is an art form. We specialize in finding the hospitality professionals who elevate guest experiences, from executive management in luxury hotels to the culinary masterminds defining fine dining.",
    subIndustries: [
      createSubIndustry("Hotel Management", "Leadership talent that drives high occupancy rates, operational excellence, and five-star guest satisfaction ratings.", ["General Manager", "Director of Operations", "Front Office Manager", "Revenue Manager"], ["/images/hotel-management/hotel-management-1.webp","/images/hotel-management/hotel-management-2.webp","/images/hotel-management/hotel-management-3.webp","/images/hotel-management/hotel-management-4.webp","/images/hotel-management/hotel-management-5.webp","/images/hotel-management/hotel-management-6.webp","/images/hotel-management/hotel-management-7.webp","/images/hotel-management/hotel-management-8.webp"]),
      createSubIndustry("Event Planning", "Creative and organized professionals capable of orchestrating flawless corporate events, conferences, and luxury weddings.", ["Event Director", "Conference Manager", "Catering Sales Manager", "Event Coordinator"], ["/images/event-planning/event-planning-1.webp","/images/event-planning/event-planning-2.webp","/images/event-planning/event-planning-3.webp","/images/event-planning/event-planning-4.webp","/images/event-planning/event-planning-5.webp","/images/event-planning/event-planning-6.webp","/images/event-planning/event-planning-7.webp","/images/event-planning/event-planning-8.webp","/images/event-planning/event-planning-9.webp"]),
      createSubIndustry("Culinary Arts", "Sourcing the creative talent in the kitchen, from innovative Executive Chefs to meticulous Food & Beverage Directors.", ["Executive Chef", "F&B Director", "Sous Chef", "Pastry Chef"], ["/images/culinary-arts/culinary-arts-1.webp","/images/culinary-arts/culinary-arts-2.webp","/images/culinary-arts/culinary-arts-3.webp","/images/culinary-arts/culinary-arts-4.webp","/images/culinary-arts/culinary-arts-5.webp"]),
    ]
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    tagline: "The Talent Behind the Strategy",
    description: "Consulting, finance, and legal sectors run purely on the intellectual capital of their people. We source the brilliant minds and strategic thinkers who provide high-level advisory and specialized professional services to global corporations.",
    subIndustries: [
      createSubIndustry("Financial Services", "Placing the quants, analysts, and wealth managers who drive strategic financial growth and navigate complex markets.", ["Financial Analyst", "Wealth Manager", "Investment Banker", "Risk Compliance Officer"], ["/images/financial-services/financial-services-1.webp","/images/financial-services/financial-services-2.webp","/images/financial-services/financial-services-3.webp","/images/financial-services/financial-services-4.webp","/images/financial-services/financial-services-5.webp"]),
      createSubIndustry("Legal Staffing", "Connecting top-tier law firms and corporate legal departments with elite attorneys, paralegals, and legal support staff.", ["Corporate Counsel", "Litigation Attorney", "Paralegal", "Legal Operations Manager"], ["/images/legal-staffing/legal-staffing-1.webp","/images/legal-staffing/legal-staffing-2.webp","/images/legal-staffing/legal-staffing-3.webp","/images/legal-staffing/legal-staffing-4.webp","/images/legal-staffing/legal-staffing-5.webp","/images/legal-staffing/legal-staffing-6.webp"]),
      createSubIndustry("HR Consulting", "Finding the human capital experts who define company culture, manage talent acquisition, and oversee complex organizational changes.", ["HR Director", "Compensation & Benefits Manager", "OD Consultant", "Talent Acquisition Lead"], ["/images/hr-consulting/hr-consulting-1.webp","/images/hr-consulting/hr-consulting-2.webp","/images/hr-consulting/hr-consulting-3.webp","/images/hr-consulting/hr-consulting-4.webp","/images/hr-consulting/hr-consulting-5.webp"]),
    ]
  },
  {
    name: "Education",
    slug: "education",
    tagline: "Shaping the Minds of Tomorrow",
    description: "Whether in traditional academia or the booming EdTech sector, we place the leaders, educators, and innovators responsible for developing curricula, guiding institutions, and leveraging technology to transform learning.",
    subIndustries: [
      createSubIndustry("K-12 Administration", "Staffing the principals, superintendents, and administrative leaders who create thriving educational environments for younger students.", ["School Principal", "Superintendent", "Special Education Director", "Curriculum Coordinator"], ["/images/k12-administrator/k12-administrator-1.webp","/images/k12-administrator/k12-administrator-2.webp","/images/k12-administrator/k12-administrator-3.webp","/images/k12-administrator/k12-administrator-4.webp","/images/k12-administrator/k12-administrator-5.webp","/images/k12-administrator/k12-administrator-6.webp","/images/k12-administrator/k12-administrator-7.webp","/images/k12-administrator/k12-administrator-8.webp"]),
      createSubIndustry("Higher Ed Faculty", "Connecting prestigious universities with distinguished professors, researchers, and academic deans.", ["University Dean", "Adjunct Professor", "Director of Admissions", "Research Fellow"], ["/images/higher-ed-faculty/higher-ed-faculty-1.webp","/images/higher-ed-faculty/higher-ed-faculty-2.webp","/images/higher-ed-faculty/higher-ed-faculty-3.webp","/images/higher-ed-faculty/higher-ed-faculty-4.webp","/images/higher-ed-faculty/higher-ed-faculty-5.webp"]),
      createSubIndustry("EdTech Specialists", "The intersection of education and technology. We place the instructional designers and technologists building the platforms of the future.", ["Instructional Designer", "EdTech Product Manager", "LMS Administrator", "E-Learning Developer"], ["/images/edtech-specialist/edtech-specialist-1.webp","/images/edtech-specialist/edtech-specialist-2.webp","/images/edtech-specialist/edtech-specialist-3.webp","/images/edtech-specialist/edtech-specialist-4.webp","/images/edtech-specialist/edtech-specialist-5.webp","/images/edtech-specialist/edtech-specialist-6.webp"]),
    ]
  },
  {
    name: "Insurance",
    slug: "insurance",
    tagline: "Managing Risk in a Complex World",
    description: "The insurance industry is evolving rapidly with InsurTech and new risk models. We provide the specialized analytical and client-facing talent needed to manage risk, process claims efficiently, and develop innovative coverage products.",
    subIndustries: [
      createSubIndustry("Actuarial Services", "The mathematical minds that analyze statistical data to forecast risk and liability for pricing insurance policies.", ["Chief Actuary", "Pricing Actuary", "Risk Analyst", "Catastrophe Modeler"], ["/images/actuarial-services/actuarial-services-1.webp","/images/actuarial-services/actuarial-services-2.webp","/images/actuarial-services/actuarial-services-3.webp","/images/actuarial-services/actuarial-services-4.webp"]),
      createSubIndustry("Claims Management", "Detail-oriented professionals who ensure accurate, fair, and efficient processing of complex insurance claims.", ["Claims Director", "Field Adjuster", "SIU Investigator", "Claims Examiner"], ["/images/claim-management/claim-management-1.webp","/images/claim-management/claim-management-2.webp","/images/claim-management/claim-management-3.webp"]),
      createSubIndustry("Risk Underwriting", "Strategic decision-makers evaluating complex commercial and personal risks to protect the bottom line.", ["Commercial Underwriter", "Underwriting Manager", "Brokerage Director", "Risk Control Consultant"], ["/images/risk-underwriting/risk-underwriting-1.webp","/images/risk-underwriting/risk-underwriting-2.webp","/images/risk-underwriting/risk-underwriting-3.webp"]),
    ]
  },
  {
    name: "Retail & E-Commerce",
    slug: "retail-e-commerce",
    tagline: "Driving Commerce on Every Channel",
    description: "From brick-and-mortar flagships to global e-commerce titans, retail requires agile, customer-centric talent. We source the exact mix of store leadership, merchandisers, and digital operators needed to thrive in modern retail.",
    subIndustries: [
      createSubIndustry("Store Leadership", "Dynamic managers who drive sales, inspire floor teams, and curate the in-store customer experience.", ["District Manager", "Store Manager", "Visual Merchandiser", "Loss Prevention Manager"], ["/images/store-leadership/store-leadership-1.webp","/images/store-leadership/store-leadership-2.webp","/images/store-leadership/store-leadership-3.webp","/images/store-leadership/store-leadership-4.webp","/images/store-leadership/store-leadership-5.webp"]),
      createSubIndustry("Merchandising", "The strategic buyers and planners who ensure the right products hit the right markets at the perfect price points.", ["Buyer", "Merchandise Planner", "Category Manager", "Inventory Analyst"], ["/images/merchandising/merchandising-1.webp","/images/merchandising/merchandising-2.webp","/images/merchandising/merchandising-3.webp","/images/merchandising/merchandising-4.webp"]),
      createSubIndustry("E-commerce Ops", "Digital native talent managing online storefronts, digital fulfillment, and omnichannel consumer journeys.", ["E-Commerce Director", "Digital Operations Manager", "Fulfillment Center Manager", "Omnichannel Strategist"], ["/images/ecommerce-operations/ecommerce-operations-1.webp","/images/ecommerce-operations/ecommerce-operations-2.webp","/images/ecommerce-operations/ecommerce-operations-3.webp","/images/ecommerce-operations/ecommerce-operations-4.webp"]),
    ]
  },
  {
    name: "Construction",
    slug: "construction",
    tagline: "Building the Skyline",
    description: "Commercial and residential construction requires a massive coordination of highly specialized skills. We provide the engineering minds, project leaders, and skilled tradesmen necessary to bring monumental architectural visions to life, safely and on schedule.",
    subIndustries: [
      createSubIndustry("Project Management", "The leaders on the ground and in the office who keep multimillion-dollar projects on budget and on deadline.", ["Senior Project Manager", "Construction Superintendent", "Estimator", "Scheduler"], ["/images/project-management/project-management-1.webp","/images/project-management/project-management-2.webp","/images/project-management/project-management-3.webp","/images/project-management/project-management-4.webp","/images/project-management/project-management-5.webp"]),
      createSubIndustry("Civil Engineering", "The foundational experts who design, build, and maintain public and private infrastructure.", ["Civil Engineer", "Structural Engineer", "Geotechnical Engineer", "Transportation Planner"], ["/images/civil-engineering/civil-engineering-1.webp","/images/civil-engineering/civil-engineering-2.webp","/images/civil-engineering/civil-engineering-3.webp","/images/civil-engineering/civil-engineering-4.webp","/images/civil-engineering/civil-engineering-5.webp","/images/civil-engineering/civil-engineering-6.webp"]),
      createSubIndustry("Skilled Trades", "Connecting critical projects with licensed, elite tradesmen capable of executing complex electrical, plumbing, and mechanical systems.", ["Master Electrician", "HVAC Technician", "Foreman", "Heavy Equipment Operator"], ["/images/skilled-trades/skilled-trades-1.webp","/images/skilled-trades/skilled-trades-2.webp","/images/skilled-trades/skilled-trades-3.webp","/images/skilled-trades/skilled-trades-4.webp","/images/skilled-trades/skilled-trades-5.webp"]),
    ]
  },
  {
    name: "Sales & Marketing",
    slug: "sales-marketing",
    tagline: "Capturing Markets & Accelerating Revenue",
    description: "In a world of infinite noise, the best brands cut through and convert. We source the creative visionaries, digital strategists, and elite sales closers who build brand equity and drive measurable revenue growth.",
    subIndustries: [
      createSubIndustry("Digital Strategy & Marketing", "Architects of online brand presence, leveraging data and platforms to craft high-conversion digital funnels.", ["Digital Marketing Director", "SEO/SEM Strategist", "Growth Marketing Lead", "Content Director"], ["/images/digital-strategy/digital-strategy-1.webp","/images/digital-strategy/digital-strategy-2.webp","/images/digital-strategy/digital-strategy-3.webp","/images/digital-strategy/digital-strategy-4.webp","/images/digital-strategy/digital-strategy-5.webp", ...["/images/content-generation/content-generation-1.webp","/images/content-generation/content-generation-2.webp","/images/content-generation/content-generation-3.webp","/images/content-generation/content-generation-4.webp","/images/content-generation/content-generation-5.webp"], ...["/images/performance-marketing/performance-marketing-1.webp","/images/performance-marketing/performance-marketing-2.webp","/images/performance-marketing/performance-marketing-3.webp","/images/performance-marketing/performance-marketing-4.webp"]]),
      createSubIndustry("Enterprise Sales", "Elite reps capable of navigating complex procurement cycles to land six and seven-figure deals.", ["Enterprise Account Executive", "VP of Sales", "Strategic Partnerships Lead", "Sales Engineer"], ["/images/enterprise-sales/enterprise-sales-1.webp","/images/enterprise-sales/enterprise-sales-2.webp","/images/enterprise-sales/enterprise-sales-3.webp", ...["/images/business-development/business-development-1.webp","/images/business-development/business-development-2.webp","/images/business-development/business-development-3.webp","/images/business-development/business-development-4.webp","/images/business-development/business-development-5.webp"]]),
      createSubIndustry("Account Management", "Relationship builders who decrease churn, identify upsell opportunities, and turn clients into dedicated evangelists.", ["Key Account Manager", "Customer Success Director", "Client Partner", "Renewals Manager"], ["/images/accounting-management/accounting-management-1.webp","/images/accounting-management/accounting-management-2.webp","/images/accounting-management/accounting-management-3.webp","/images/accounting-management/accounting-management-4.webp"]),
    ]
  }
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industriesData.find(ind => ind.slug === slug);
};

export const getSubIndustryBySlug = (industrySlug: string, subIndustrySlug: string): SubIndustry | undefined => {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return undefined;
  return industry.subIndustries.find(sub => sub.slug === subIndustrySlug);
};
