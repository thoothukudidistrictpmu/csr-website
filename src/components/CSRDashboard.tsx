import React from 'react';
import { Project, Sponsor, Announcement } from '../types';
import { 
  TrendingUp, 
  Users, 
  FolderGit2, 
  MapPin, 
  BookOpen, 
  ShieldAlert, 
  DollarSign, 
  Coins,
  ChevronRight, 
  Search, 
  Filter, 
  CheckCircle, 
  Calendar,
  AlertCircle,
  FileText,
  PlusCircle,
  Clock,
  Briefcase,
  Share2,
  Building,
  Anchor,
  Globe
} from 'lucide-react';

interface CSRDashboardProps {
  projects: Project[];
  sponsors: Sponsor[];
  announcements: Announcement[];
  onOpenSponsors: () => void;
  onOpenCollector: () => void;
  onQuickPledge: (projectId: string, amount: number) => void;
}

export const CSRDashboard: React.FC<CSRDashboardProps> = ({
  projects,
  sponsors,
  announcements,
  onOpenSponsors,
  onOpenCollector,
  onQuickPledge
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState<string>('All');
  const [statusFilter, setStatusFilter] = React.useState<string>('All');
  const [pledgeAmounts, setPledgeAmounts] = React.useState<{ [key: string]: string }>({});

  // Stats calculation
  const totalTarget = projects.reduce((acc, p) => acc + p.targetBudget, 0);
  const totalPledged = projects.reduce((acc, p) => acc + p.pledgedAmount, 0);
  const fundingPercentage = totalTarget > 0 ? (totalPledged / totalTarget) * 100 : 0;
  
  const activeSponsorsCount = sponsors.length;
  const projectsOngoing = projects.filter(p => p.status === 'Ongoing').length;
  const projectsCompleted = projects.filter(p => p.status === 'Completed').length;

  const categories = ['All', 'Education', 'Fisheries', 'Healthcare', 'Environment', 'Infrastructure'];
  const statuses = ['All', 'Proposed', 'Pledged', 'Ongoing', 'Completed'];

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Education': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Fisheries': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'Healthcare': return 'bg-red-100 text-red-800 border-red-200';
      case 'Environment': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Proposed': return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">Proposed</span>;
      case 'Pledged': return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Pledged</span>;
      case 'Ongoing': return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100 animate-pulse">Ongoing</span>;
      case 'Completed': return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">✓ Completed</span>;
    }
  };

  const handlePledgeSubmit = (projectId: string) => {
    const amountStr = pledgeAmounts[projectId];
    if (!amountStr) return;
    const amount = parseFloat(amountStr);
    if (!isNaN(amount) && amount > 0) {
      onQuickPledge(projectId, amount);
      setPledgeAmounts(prev => ({ ...prev, [projectId]: '' }));
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans" id="csr-dashboard-panel">
      {/* Dynamic District News Banner Ticker */}
      <div className="bg-blue-900 text-white text-xs border-b border-blue-950 overflow-hidden relative py-2.5 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
          <span className="font-bold uppercase tracking-wider bg-yellow-400 text-blue-950 px-2 py-0.5 rounded text-[10px] shrink-0 animate-pulse">
            Live Bulletins
          </span>
          <div className="flex-1 overflow-hidden whitespace-nowrap relative h-4">
            <div className="absolute flex gap-16 animate-marquee">
              {announcements.map((a, idx) => (
                <span key={a.id} className="text-slate-100 text-[11px] font-medium">
                  📢 <strong className="text-white mr-1">[{a.category}]</strong> {a.text} ({a.date})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Primary Dashboard Header */}
      <div className="bg-white border-b border-slate-100 pt-8 pb-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-2.5 py-1 rounded">
                  Active Platform
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-mono font-medium text-slate-500">
                  Thoothukudi CSR ID: #2026-CSR-D1
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
                District CSR Management Portal
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                A joint administrative dashboard tracking corporate pledge allocations and district developmental schemes.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://thoothukudi-district-administration.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200 font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow"
              >
                <Globe className="w-4 h-4 text-emerald-700 animate-pulse" /> Visit Public Website
              </a>
              <button
                onClick={onOpenSponsors}
                className="bg-white hover:bg-slate-50 text-blue-900 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-200 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Building className="w-4 h-4 text-blue-800" /> Corporate Sponsors
              </button>
              <button
                onClick={onOpenCollector}
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center gap-2 shadow-sm hover:shadow"
              >
                <PlusCircle className="w-4 h-4 text-yellow-300" /> New CSR Request
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Stat 1 */}
            <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase block tracking-wider">Total Fund Target</span>
                <span className="text-xl font-bold text-slate-800 font-mono">
                  ₹{(totalTarget / 10000000).toFixed(2)} Cr
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase block tracking-wider">Total Pledged</span>
                <span className="text-xl font-bold text-slate-800 font-mono">
                  ₹{(totalPledged / 10000000).toFixed(2)} Cr
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-amber-100 text-amber-900 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase block tracking-wider">Active Sponsors</span>
                <span className="text-xl font-bold text-slate-800 font-mono">
                  {activeSponsorsCount} Corporations
                </span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/80 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-sky-100 text-sky-900 rounded-xl">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase block tracking-wider">Completed / Ongoing</span>
                <span className="text-xl font-bold text-slate-800 font-mono">
                  {projectsCompleted} / {projectsOngoing} Projects
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Funding Meter */}
          <div className="mt-6 bg-blue-50/40 p-4 rounded-2xl border border-blue-100/60">
            <div className="flex justify-between text-xs font-semibold text-blue-900 mb-1.5">
              <span>District Target Progress</span>
              <span>{fundingPercentage.toFixed(1)}% Subscribed</span>
            </div>
            <div className="w-full bg-slate-200 h-3.5 rounded-full overflow-hidden flex shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 h-full rounded-full transition-all duration-700 shadow"
                style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-medium">
              <span>₹0.00 Pledged</span>
              <span>Goal: ₹{(totalTarget / 10000000).toFixed(2)} Crores</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Filters column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-5">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider border-b border-slate-50 pb-2 flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-950" /> Filter Projects
            </h3>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search location or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Development Category</label>
              <div className="flex flex-wrap lg:flex-col gap-1.5">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all ${
                      categoryFilter === cat 
                        ? 'bg-blue-900 text-white border-blue-900 font-semibold shadow-sm' 
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Funding Status</label>
              <div className="flex flex-wrap lg:flex-col gap-1.5">
                {statuses.map(st => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all ${
                      statusFilter === st 
                        ? 'bg-blue-900 text-white border-blue-900 font-semibold shadow-sm' 
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats list / Local Authority guide */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-5 rounded-2xl text-white shadow-md relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
              <Anchor className="w-40 h-40 transform translate-x-8 translate-y-8" />
            </div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-yellow-300">Need CSR Support?</h4>
            <p className="text-xs text-blue-100 mt-2 leading-relaxed">
              Local schools, fishermen unions, panchayat councils and public wellness hubs in Thoothukudi district can submit detailed proposals. Submissions will be listed for corporate sponsor review on this active portal.
            </p>
            <button
              onClick={onOpenCollector}
              className="mt-4 bg-white text-blue-900 font-bold text-xs py-2 px-3.5 rounded-lg flex items-center gap-1.5 hover:bg-yellow-300 hover:text-blue-950 transition-all shadow-sm"
            >
              Submit Proposal Forms <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Projects Directory column */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Showing {filteredProjects.length} matching CSR projects
            </span>
            <div className="h-px bg-slate-200 flex-1 mx-4" />
          </div>

          {filteredProjects.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
              <AlertCircle className="w-10 h-10 text-slate-300" />
              <h4 className="font-bold text-slate-700 text-sm">No Projects Found</h4>
              <p className="text-xs text-slate-500 max-w-sm">
                No active development projects match your search keywords or filter options. Reset filters to see all listed proposals.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('All');
                  setStatusFilter('All');
                }}
                className="mt-2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-1.5 px-3.5 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => {
                const percentage = project.targetBudget > 0 ? (project.pledgedAmount / project.targetBudget) * 100 : 0;
                const progressWidth = Math.min(percentage, 100);

                return (
                  <div 
                    key={project.id} 
                    className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Category & Status Header */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                        {getStatusBadge(project.status)}
                      </div>

                      {/* Project Title */}
                      <h4 className="font-bold text-slate-800 text-base leading-snug tracking-tight hover:text-blue-900 cursor-pointer">
                        {project.title}
                      </h4>
                      
                      {/* Project Description */}
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Location & Beneficiaries Info */}
                      <div className="space-y-1.5 mt-4 pt-3.5 border-t border-slate-50 text-[11px] text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate"><strong className="text-slate-700 font-semibold">Location:</strong> {project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span><strong>Beneficiaries:</strong> {project.beneficiaries}</span>
                        </div>
                        {project.implementingAgency && (
                          <div className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span><strong>Agency:</strong> {project.implementingAgency}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Funding Gauge Container */}
                    <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-500">Pledge Progress</span>
                          <span className="text-blue-900">{percentage.toFixed(0)}% Funded</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className="bg-blue-900 h-full rounded-full transition-all duration-500" 
                            style={{ width: `${progressWidth}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] font-mono mt-1 text-slate-600">
                          <span>₹{(project.pledgedAmount).toLocaleString('en-IN')} Pledged</span>
                          <span className="font-semibold text-slate-800">Target: ₹{(project.targetBudget).toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      {/* Inline Pledging Action */}
                      {project.status !== 'Completed' && (
                        <div className="flex items-center gap-1.5 bg-slate-50/50 p-1.5 rounded-xl border border-slate-100">
                          <input
                            type="number"
                            placeholder="Amount (INR)"
                            value={pledgeAmounts[project.id] || ''}
                            onChange={(e) => setPledgeAmounts({ ...pledgeAmounts, [project.id]: e.target.value })}
                            className="w-full text-xs px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                          />
                          <button
                            onClick={() => handlePledgeSubmit(project.id)}
                            className="bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs px-3 py-1.5 rounded-lg shrink-0 transition-colors"
                          >
                            Pledge
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
