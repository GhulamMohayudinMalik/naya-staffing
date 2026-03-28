export interface SubIndustry {
  name: string;
  slug: string;
  description: string;
  keyRoles: string[];
}

export interface Industry {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  subIndustries: SubIndustry[];
}

// Helper to generate a slug from a name
const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const createSubIndustry = (name: string, description: string, keyRoles: string[]): SubIndustry => ({
  name,
  slug: generateSlug(name),
  description,
  keyRoles,
});

export const industriesData: Industry[] = [
  {
    name: "Information Technology",
    slug: "information-technology",
    tagline: "Architecting the Digital Future",
    description: "In the rapidly evolving tech landscape, having the right talent is the difference between leading the market and falling behind. We connect visionary companies with elite software engineers, cybersecurity experts, and cloud architects capable of building the next generation of digital infrastructure.",
    subIndustries: [
      createSubIndustry("Software Development", "From full-stack engineers to specialized AI infrastructure developers, we source the talent that writes the code powering tomorrow's enterprises.", ["Full Stack Developer", "Backend Engineer", "Frontend Architect", "Mobile Developer"]),
      createSubIndustry("Cybersecurity", "Protecting digital assets requires specialized knowledge. We find the security analysts, penetration testers, and compliance experts who keep your data safe.", ["Security Engineer", "Penetration Tester", "CISO", "Compliance Analyst"]),
      createSubIndustry("Cloud Computing", "Navigate the complexities of AWS, Azure, and GCP with certified cloud architects and DevOps engineers who optimize scalable infrastructure.", ["Cloud Architect", "DevOps Engineer", "SRE", "Cloud Migration Specialist"]),
    ]
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    tagline: "Empowering World-Class Patient Care",
    description: "The healthcare industry demands precision, empathy, and absolute excellence. From the boardroom to the operating room, we provide specialized staffing solutions that ensure medical facilities operate at their highest potential and deliver unmatched patient outcomes.",
    subIndustries: [
      createSubIndustry("Nursing & Allied Health", "Connecting compassionate, highly skilled RNs, LPNs, and allied health professionals with top-tier medical facilities.", ["Registered Nurse", "Physical Therapist", "Radiology Tech", "Medical Assistant"]),
      createSubIndustry("Health Informatics", "Bridging the gap between clinical care and data management to optimize health systems and patient records.", ["Clinical Data Analyst", "Health Informatics Specialist", "EHR Consultant", "HIM Director"]),
      createSubIndustry("Medical Devices", "Staffing the innovators and engineers behind life-saving technologies, from R&D to regulatory affairs.", ["Biomedical Engineer", "Regulatory Affairs Specialist", "Quality Assurance Tech", "Medical Device Sales"]),
    ]
  },
  {
    name: "Industrial",
    slug: "industrial",
    tagline: "Building the Engine of the Economy",
    description: "The industrial sector is the backbone of global commerce. We staff the manufacturing plants, logistics networks, and operational hubs that keep products moving and economies thriving, matching skilled labor and management to complex industrial challenges.",
    subIndustries: [
      createSubIndustry("Manufacturing Operations", "Providing the leadership and technical talent necessary to optimize production lines and implement lean manufacturing.", ["Plant Manager", "Production Supervisor", "Manufacturing Engineer", "Operations Director"]),
      createSubIndustry("Logistics & Supply Chain", "Navigating global bottlenecks by placing strategic supply chain planners, logistics coordinators, and warehouse leaders.", ["Supply Chain Manager", "Logistics Analyst", "Warehouse Supervisor", "Procurement Specialist"]),
      createSubIndustry("Quality Assurance", "Ensuring every product meets rigorous standards through specialized QA technicians and quality control managers.", ["QA Manager", "Quality Control Inspector", "Continuous Improvement Manager", "Six Sigma Black Belt"]),
    ]
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    tagline: "Curating Exceptional Guest Experiences",
    description: "Service is an art form. We specialize in finding the hospitality professionals who elevate guest experiences, from executive management in luxury hotels to the culinary masterminds defining fine dining.",
    subIndustries: [
      createSubIndustry("Hotel Management", "Leadership talent that drives high occupancy rates, operational excellence, and five-star guest satisfaction ratings.", ["General Manager", "Director of Operations", "Front Office Manager", "Revenue Manager"]),
      createSubIndustry("Event Planning", "Creative and organized professionals capable of orchestrating flawless corporate events, conferences, and luxury weddings.", ["Event Director", "Conference Manager", "Catering Sales Manager", "Event Coordinator"]),
      createSubIndustry("Culinary Arts", "Sourcing the creative talent in the kitchen, from innovative Executive Chefs to meticulous Food & Beverage Directors.", ["Executive Chef", "F&B Director", "Sous Chef", "Pastry Chef"]),
    ]
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    tagline: "The Talent Behind the Strategy",
    description: "Consulting, finance, and legal sectors run purely on the intellectual capital of their people. We source the brilliant minds and strategic thinkers who provide high-level advisory and specialized professional services to global corporations.",
    subIndustries: [
      createSubIndustry("Financial Services", "Placing the quants, analysts, and wealth managers who drive strategic financial growth and navigate complex markets.", ["Financial Analyst", "Wealth Manager", "Investment Banker", "Risk Compliance Officer"]),
      createSubIndustry("Legal Staffing", "Connecting top-tier law firms and corporate legal departments with elite attorneys, paralegals, and legal support staff.", ["Corporate Counsel", "Litigation Attorney", "Paralegal", "Legal Operations Manager"]),
      createSubIndustry("HR Consulting", "Finding the human capital experts who define company culture, manage talent acquisition, and oversee complex organizational changes.", ["HR Director", "Compensation & Benefits Manager", "OD Consultant", "Talent Acquisition Lead"]),
    ]
  },
  {
    name: "Education",
    slug: "education",
    tagline: "Shaping the Minds of Tomorrow",
    description: "Whether in traditional academia or the booming EdTech sector, we place the leaders, educators, and innovators responsible for developing curricula, guiding institutions, and leveraging technology to transform learning.",
    subIndustries: [
      createSubIndustry("K-12 Administration", "Staffing the principals, superintendents, and administrative leaders who create thriving educational environments for younger students.", ["School Principal", "Superintendent", "Special Education Director", "Curriculum Coordinator"]),
      createSubIndustry("Higher Ed Faculty", "Connecting prestigious universities with distinguished professors, researchers, and academic deans.", ["University Dean", "Adjunct Professor", "Director of Admissions", "Research Fellow"]),
      createSubIndustry("EdTech Specialists", "The intersection of education and technology. We place the instructional designers and technologists building the platforms of the future.", ["Instructional Designer", "EdTech Product Manager", "LMS Administrator", "E-Learning Developer"]),
    ]
  },
  {
    name: "Insurance",
    slug: "insurance",
    tagline: "Managing Risk in a Complex World",
    description: "The insurance industry is evolving rapidly with InsurTech and new risk models. We provide the specialized analytical and client-facing talent needed to manage risk, process claims efficiently, and develop innovative coverage products.",
    subIndustries: [
      createSubIndustry("Actuarial Services", "The mathematical minds that analyze statistical data to forecast risk and liability for pricing insurance policies.", ["Chief Actuary", "Pricing Actuary", "Risk Analyst", "Catastrophe Modeler"]),
      createSubIndustry("Claims Management", "Detail-oriented professionals who ensure accurate, fair, and efficient processing of complex insurance claims.", ["Claims Director", "Field Adjuster", "SIU Investigator", "Claims Examiner"]),
      createSubIndustry("Risk Underwriting", "Strategic decision-makers evaluating complex commercial and personal risks to protect the bottom line.", ["Commercial Underwriter", "Underwriting Manager", "Brokerage Director", "Risk Control Consultant"]),
    ]
  },
  {
    name: "Reliable Retail",
    slug: "reliable-retail",
    tagline: "Driving Commerce on Every Channel",
    description: "From brick-and-mortar flagships to global e-commerce titans, retail requires agile, customer-centric talent. We source the exact mix of store leadership, merchandisers, and digital operators needed to thrive in modern retail.",
    subIndustries: [
      createSubIndustry("Store Leadership", "Dynamic managers who drive sales, inspire floor teams, and curate the in-store customer experience.", ["District Manager", "Store Manager", "Visual Merchandiser", "Loss Prevention Manager"]),
      createSubIndustry("Merchandising", "The strategic buyers and planners who ensure the right products hit the right markets at the perfect price points.", ["Buyer", "Merchandise Planner", "Category Manager", "Inventory Analyst"]),
      createSubIndustry("E-commerce Ops", "Digital native talent managing online storefronts, digital fulfillment, and omnichannel consumer journeys.", ["E-Commerce Director", "Digital Operations Manager", "Fulfillment Center Manager", "Omnichannel Strategist"]),
    ]
  },
  {
    name: "Construction",
    slug: "construction",
    tagline: "Building the Skyline",
    description: "Commercial and residential construction requires a massive coordination of highly specialized skills. We provide the engineering minds, project leaders, and skilled tradesmen necessary to bring monumental architectural visions to life, safely and on schedule.",
    subIndustries: [
      createSubIndustry("Project Management", "The leaders on the ground and in the office who keep multimillion-dollar projects on budget and on deadline.", ["Senior Project Manager", "Construction Superintendent", "Estimator", "Scheduler"]),
      createSubIndustry("Civil Engineering", "The foundational experts who design, build, and maintain public and private infrastructure.", ["Civil Engineer", "Structural Engineer", "Geotechnical Engineer", "Transportation Planner"]),
      createSubIndustry("Skilled Trades", "Connecting critical projects with licensed, elite tradesmen capable of executing complex electrical, plumbing, and mechanical systems.", ["Master Electrician", "HVAC Technician", "Foreman", "Heavy Equipment Operator"]),
    ]
  },
  {
    name: "Marketing",
    slug: "marketing",
    tagline: "Capturing the Cultural Zeitgeist",
    description: "In a world of infinite noise, the best brands cut through. We source the creative visionaries, digital strategists, and performance marketers who build lasting brand equity and drive measurable revenue growth.",
    subIndustries: [
      createSubIndustry("Digital Strategy", "The architects of the online brand presence, leveraging data and platforms to craft high-conversion digital funnels.", ["Digital Marketing Director", "SEO/SEM Strategist", "Social Media Director", "Growth Marketing Lead"]),
      createSubIndustry("Content Creation", "The storytellers. We place the copywriters, video producers, and graphic designers who create compelling brand narratives.", ["Creative Director", "Copywriter", "Video Producer", "Art Director"]),
      createSubIndustry("Performance Marketing", "Data-obsessed marketers managing multi-million dollar ad spends to acquire customers at the optimal CAC.", ["Performance Marketing Manager", "Media Buyer", "Marketing Analyst", "Affiliate Manager"]),
    ]
  },
  {
    name: "Sales",
    slug: "sales",
    tagline: "Accelerating Global Revenue",
    description: "Revenue is the lifeblood of any organization. We connect ambitious, high-growth companies with elite sales closers, strategic account managers, and visionary sales leadership capable of crushing quotas and scaling operations.",
    subIndustries: [
      createSubIndustry("Enterprise Sales", "The heavy hitters. Reps capable of navigating complex, multi-stakeholder procurement cycles to land six and seven-figure deals.", ["Enterprise Account Executive", "VP of Sales", "Strategic Partnerships Lead", "Sales Engineer"]),
      createSubIndustry("Account Management", "The relationship builders who decrease churn, identify upsell opportunities, and turn clients into dedicated evangelists.", ["Key Account Manager", "Customer Success Director", "Client Partner", "Renewals Manager"]),
      createSubIndustry("Business Development", "The frontline warriors identifying new markets, qualifying leads, and keeping the top of the funnel consistently full.", ["BDR Manager", "SDR", "Head of Business Development", "Market Research Analyst"]),
    ]
  }
];

// Utility functions for dynamic routing lookups
export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industriesData.find(ind => ind.slug === slug);
};

export const getSubIndustryBySlug = (industrySlug: string, subIndustrySlug: string): SubIndustry | undefined => {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return undefined;
  return industry.subIndustries.find(sub => sub.slug === subIndustrySlug);
};
