export interface Project {
  id: string;
  title: string;
  category: 'Fisheries' | 'Education' | 'Environment' | 'Infrastructure' | 'Healthcare';
  description: string;
  targetBudget: number;
  pledgedAmount: number;
  location: string;
  status: 'Proposed' | 'Pledged' | 'Ongoing' | 'Completed';
  beneficiaries: string;
  implementingAgency?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string; // Tailwinds class or avatar representation
  totalContribution: number;
  projectsPledged: number;
  tier: 'Platinum' | 'Gold' | 'Silver';
}

export interface Scheme {
  id: string;
  title: string;
  targetGroup: string;
  benefit: string;
  allocation: string;
  status: string;
}

export interface Announcement {
  id: string;
  date: string;
  text: string;
  category: 'General' | 'Fisheries' | 'Collector' | 'Sponsor';
}
