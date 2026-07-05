import { Project, Sponsor, Scheme, Announcement } from './types';

export const INITIAL_SPONSORS: Sponsor[] = [
  {
    id: 's1',
    name: 'V.O. Chidambaranar Port Authority',
    logo: '⚓',
    totalContribution: 45000000, // INR 4.5 Crores
    projectsPledged: 4,
    tier: 'Platinum'
  },
  {
    id: 's2',
    name: 'Southern Petrochemical Industries Corporation (SPIC)',
    logo: '🧪',
    totalContribution: 32000000, // INR 3.2 Crores
    projectsPledged: 3,
    tier: 'Platinum'
  },
  {
    id: 's3',
    name: 'NLC Tamilnadu Power Limited (NTPL)',
    logo: '⚡',
    totalContribution: 25000000, // INR 2.5 Crores
    projectsPledged: 2,
    tier: 'Gold'
  },
  {
    id: 's4',
    name: 'Tuticorin Thermal Power Station (TTPS)',
    logo: '🏭',
    totalContribution: 18000000, // INR 1.8 Crores
    projectsPledged: 2,
    tier: 'Gold'
  },
  {
    id: 's5',
    name: 'Coastal Salt Industries Ltd.',
    logo: '🧂',
    totalContribution: 8000000, // INR 80 Lakhs
    projectsPledged: 1,
    tier: 'Silver'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Smart Classrooms & STEM Labs in Government Schools',
    category: 'Education',
    description: 'Upgrading 25 government high schools in Thoothukudi block with modern interactive touchscreens, computer labs, and science kits to enhance learning outcomes.',
    targetBudget: 15000000, // 1.5 Crores
    pledgedAmount: 15000000,
    location: 'Thoothukudi, Kovilpatti, and Tiruchendur Blocks',
    status: 'Ongoing',
    beneficiaries: 'Over 8,500 students annually',
    implementingAgency: 'Department of School Education'
  },
  {
    id: 'p2',
    title: 'Modern Cold Storage & Ice Plant for Traditional Fishermen',
    category: 'Fisheries',
    description: 'Establishing a solar-powered 10-ton cold storage unit and flake ice machine at Therespuram landing center to prevent post-harvest loss for traditional fishers.',
    targetBudget: 12000000, // 1.2 Crores
    pledgedAmount: 8000000,
    location: 'Therespuram Fishing Harbor, Thoothukudi',
    status: 'Pledged',
    beneficiaries: '1,200+ active traditional fishing families',
    implementingAgency: 'Department of Fisheries'
  },
  {
    id: 'p3',
    title: 'Coastal Mangrove Restoration & Bioshield Plantation',
    category: 'Environment',
    description: 'Planting 100,000 mangrove saplings along the coastal stretches of Punnakayal and Pazhayakayal to restore marine biodiversity and protect against storm surges.',
    targetBudget: 5000000, // 50 Lakhs
    pledgedAmount: 5000000,
    location: 'Pazhayakayal Estuary',
    status: 'Completed',
    beneficiaries: 'Coastal communities & marine ecosystem',
    implementingAgency: 'Tamil Nadu Forest Department'
  },
  {
    id: 'p4',
    title: 'District Hospital Pediatric Ward & Neo-natal Intensive Care Equipment',
    category: 'Healthcare',
    description: 'Donating high-end incubators, pediatric ventilators, and patient monitors to the Thoothukudi Government Medical College Hospital.',
    targetBudget: 20000000, // 2 Crores
    pledgedAmount: 18000000,
    location: 'Government Medical College Hospital, Thoothukudi',
    status: 'Ongoing',
    beneficiaries: '5,000+ children admitted annually',
    implementingAgency: 'Health & Family Welfare Department'
  },
  {
    id: 'p5',
    title: 'Solar High-Mast Street Lighting in Coastal Villages',
    category: 'Infrastructure',
    description: 'Installing 150 eco-friendly automatic solar-powered high-mast lights in poorly lit streets of fishing hamlets to ensure safety of women and fish vendors.',
    targetBudget: 8000000, // 80 Lakhs
    pledgedAmount: 4000000,
    location: 'Inacio Puram, Lions Town, and coastal hamlets',
    status: 'Proposed',
    beneficiaries: '35,000+ residents'
  },
  {
    id: 'p6',
    title: 'Advanced Marine Safety Kits & GPS Transponders',
    category: 'Fisheries',
    description: 'Equipping traditional country boats with ISRO-enabled emergency distress transponders, life jackets, and dual-band marine walkie-talkies.',
    targetBudget: 10000000, // 1 Crore
    pledgedAmount: 10000000,
    location: 'Entire Thoothukudi Coastal Line',
    status: 'Completed',
    beneficiaries: '2,500 traditional crafts',
    implementingAgency: 'Department of Fisheries'
  }
];

export const FISHERIES_SCHEMES: Scheme[] = [
  {
    id: 'fs1',
    title: 'Traditional Craft Mechanization Subsidy',
    targetGroup: 'Traditional Fishermen / Country Boat Owners',
    benefit: 'Up to 40% subsidy for purchasing energy-efficient Outboard Motors (OBM) or Inboard Engines.',
    allocation: '₹2.5 Crores via Joint CSR pool',
    status: 'Active Applications Open'
  },
  {
    id: 'fs2',
    title: 'Pearl City Fisherwomen Co-operative Support Scheme',
    targetGroup: 'Registered Fisherwomen Self-Help Groups (SHGs)',
    benefit: 'Interest-free micro-credit loans up to ₹50,000 for purchasing insulated fish vending boxes and dynamic weighing scales.',
    allocation: '₹1.2 Crores total budget',
    status: 'Active - Apply via Collectorate'
  },
  {
    id: 'fs3',
    title: 'Co-management Safety Insurance Coverage',
    targetGroup: 'Active Fishers in Deep Sea / Traditional sector',
    benefit: 'Special top-up accidental insurance cover up to ₹5,000,000 funded entirely by port-related corporate contributions.',
    allocation: 'Fully funded',
    status: 'Annual Renewal Active'
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'a1',
    date: 'July 5, 2026',
    text: 'Thoothukudi District Administration launches the digital CSR Portal to streamline corporate sponsorships and prioritize developmental projects.',
    category: 'General'
  },
  {
    id: 'a2',
    date: 'July 2, 2026',
    text: 'Honorable Fisheries Minister announces a joint CSR fund of ₹5 Crores dedicated exclusively to coastal village infrastructure development.',
    category: 'Fisheries'
  },
  {
    id: 'a3',
    date: 'June 28, 2026',
    text: 'District Collector urges all registered industries to register on the CSR portal and submit their annual expenditure declarations before August.',
    category: 'Collector'
  }
];
