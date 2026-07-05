import React from 'react';
import { X, Building2, Anchor, Award, ShieldAlert, FileSpreadsheet, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Sponsor, Project, Scheme } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyHeadsModal: React.FC<ModalProps & { sponsors: Sponsor[]; onAddPledge: (sponsorId: string, amount: number) => void }> = ({
  isOpen,
  onClose,
  sponsors,
  onAddPledge
}) => {
  const [selectedSponsor, setSelectedSponsor] = React.useState<string>(sponsors[0]?.id || '');
  const [pledgeAmount, setPledgeAmount] = React.useState<string>('5000000'); // Default 50 Lakhs
  const [pledgeSuccess, setPledgeSuccess] = React.useState<boolean>(false);

  if (!isOpen) return null;

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSponsor && pledgeAmount) {
      onAddPledge(selectedSponsor, parseFloat(pledgeAmount));
      setPledgeSuccess(true);
      setTimeout(() => {
        setPledgeSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        id="company-heads-modal"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 flex justify-between items-center relative">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Building2 className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Company Heads & Corporate Leaders</h3>
              <p className="text-xs text-blue-200">Driving Thoothukudi Development through CSR</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Welcome Message */}
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">Official Welcome Address</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              We extend a hearty welcome to the CEOs, Managing Directors, and CSR Heads of all registered public and private sector enterprises in Thoothukudi. Your financial pledges and project execution support are instrumental in reshaping the public infrastructure and coastal economy of our district.
            </p>
          </div>

          {/* Leaders Contribution Standings */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" /> Active Corporate Partners Leaderboard
            </h4>
            <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
              {sponsors.map((sponsor, index) => (
                <div key={sponsor.id} className="p-4 flex items-center justify-between hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-5">
                      #{index + 1}
                    </span>
                    <span className="text-2xl" role="img" aria-label="Sponsor Logo">
                      {sponsor.logo}
                    </span>
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">
                        {sponsor.name}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800 mt-1">
                        {sponsor.tier} Partner
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-blue-900 block text-sm">
                      ₹{(sponsor.totalContribution / 10000000).toFixed(2)} Cr
                    </span>
                    <span className="text-xs text-slate-500">
                      {sponsor.projectsPledged} Projects Pledged
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro pledge simulation */}
          <div className="border border-yellow-200/60 bg-yellow-50/30 p-5 rounded-xl">
            <h4 className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" /> CSR Contribution Pledge Simulator
            </h4>
            <p className="text-xs text-slate-600 mb-4">
              Simulate pledging corporate CSR funds to live projects. Pledging raises the target budget bars on the main portal in real time!
            </p>

            <form onSubmit={handlePledgeSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Select Corporation</label>
                  <select 
                    value={selectedSponsor}
                    onChange={(e) => setSelectedSponsor(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                  >
                    {sponsors.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Simulate Pledge Amount (INR)</label>
                  <select
                    value={pledgeAmount}
                    onChange={(e) => setPledgeAmount(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                  >
                    <option value="1000000">₹10 Lakhs (₹1,000,000)</option>
                    <option value="2500000">₹25 Lakhs (₹2,500,000)</option>
                    <option value="5000000">₹50 Lakhs (₹5,000,000)</option>
                    <option value="10000000">₹1 Crore (₹10,000,000)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-medium text-xs py-2 px-4 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Submit Mock Pledge
                </button>
              </div>

              {pledgeSuccess && (
                <div className="bg-emerald-50 text-emerald-800 text-xs p-3 rounded-lg border border-emerald-100 flex items-center gap-2 mt-2 animate-fade-in">
                  <span className="font-bold">Success!</span> Pledge added to the local store and totals updated. Explore the projects dashboard to see the progress!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FisheriesMinisterModal: React.FC<ModalProps & { schemes: Scheme[] }> = ({
  isOpen,
  onClose,
  schemes
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        id="fisheries-minister-modal"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-sky-800 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Anchor className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Honorable Fisheries Minister</h3>
              <p className="text-xs text-blue-200">Marine Welfare & Coastal Infrastructure Development</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Welcome Message */}
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">Ministerial Message</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              &quot;Thoothukudi is the historic Pearl Fishery capital of Tamil Nadu. Our fishermen are the backbone of our maritime economy. Through the district CSR portal, we are aligning corporate funding to construct state-of-the-art cold storage hubs, solar high-mast lighting at landing harbors, and provide essential GPS-navigators to every country craft. We welcome you to collaborate on our flagship coastal welfare goals.&quot;
            </p>
            <p className="text-xs font-bold text-slate-500 mt-2 text-right">— Department of Fisheries, Govt of Tamil Nadu</p>
          </div>

          {/* Active Welfare Schemes */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-sky-600" /> Port & Coastal Welfare Joint CSR Schemes
            </h4>
            
            <div className="space-y-4">
              {schemes.map((scheme) => (
                <div key={scheme.id} className="border border-slate-100 hover:border-blue-100 rounded-xl p-4 bg-slate-50/30 hover:bg-white transition-all shadow-sm">
                  <div className="flex justify-between items-start gap-4">
                    <h5 className="font-bold text-slate-800 text-sm">{scheme.title}</h5>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {scheme.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div>
                      <span className="font-medium text-slate-400 block uppercase tracking-wider text-[9px]">Target Beneficiaries</span>
                      <p className="font-medium text-slate-700 mt-0.5">{scheme.targetGroup}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-400 block uppercase tracking-wider text-[9px]">CSR Pool Allocation</span>
                      <p className="font-medium text-slate-700 mt-0.5">{scheme.allocation}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs bg-blue-50/50 p-2 rounded-lg border border-blue-50 text-slate-700">
                    <span className="font-bold text-blue-900 mr-1">Scheme Benefit:</span>
                    {scheme.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DistrictCollectorModal: React.FC<ModalProps & { onAddProject: (project: Omit<Project, 'id' | 'pledgedAmount' | 'status'>) => void }> = ({
  isOpen,
  onClose,
  onAddProject
}) => {
  const [formData, setFormData] = React.useState({
    title: '',
    category: 'Education' as Project['category'],
    description: '',
    targetBudget: '',
    location: '',
    beneficiaries: '',
    implementingAgency: ''
  });
  const [success, setSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.targetBudget && formData.location) {
      onAddProject({
        title: formData.title,
        category: formData.category,
        description: formData.description,
        targetBudget: parseFloat(formData.targetBudget),
        location: formData.location,
        beneficiaries: formData.beneficiaries || 'General Public of Thoothukudi',
        implementingAgency: formData.implementingAgency || 'District Administration'
      });
      setSuccess(true);
      setFormData({
        title: '',
        category: 'Education',
        description: '',
        targetBudget: '',
        location: '',
        beneficiaries: '',
        implementingAgency: ''
      });
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        id="district-collector-modal"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <FileSpreadsheet className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">District Collectorate Hub</h3>
              <p className="text-xs text-blue-200">District Development, Administration & CSR Approvals</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Welcome message */}
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-slate-600 text-sm leading-relaxed">
            <span className="font-bold text-blue-900 uppercase block tracking-wider text-xs mb-1">Administrative Message</span>
            We welcome developmental project proposals from local panchayats, school headmasters, health officers, and community welfare trusts. Submit your priority proposals using the form below. Once scrutinized by the District CSR Advisory Board, they will be listed on this public portal for corporate pledging.
          </div>

          {/* Guidelines info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 border border-slate-100 rounded-xl bg-slate-50/40">
              <span className="font-bold text-slate-700 text-xs block mb-1">🎯 CSR Priority Sectors</span>
              <ul className="space-y-1 text-xs text-slate-600">
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Smart Schools & IT Education</li>
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Marine & Fisherman safety tools</li>
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> High-impact Healthcare amenities</li>
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Solid waste and port-village cleaning</li>
              </ul>
            </div>
            <div className="p-3.5 border border-slate-100 rounded-xl bg-slate-50/40">
              <span className="font-bold text-slate-700 text-xs block mb-1">🏢 Proposal Assessment Criteria</span>
              <ul className="space-y-1 text-xs text-slate-600">
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Clear impact on vulnerable groups</li>
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Transparent cost-breakdown</li>
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Feasibility under local government action</li>
                <li className="flex items-center gap-1"><ChevronRight className="w-3 h-3 text-blue-600" /> Sustainability post implementation</li>
              </ul>
            </div>
          </div>

          {/* CSR Proposal Form */}
          <div className="border border-indigo-100 bg-indigo-50/20 p-5 rounded-2xl relative">
            <h4 className="font-bold text-indigo-900 text-sm uppercase tracking-wide mb-4">
              Submit New Development Proposal to Collector
            </h4>

            {success ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm">Proposal Successfully Submitted!</h5>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Your developmental proposal has been registered in the district local storage. It is now listed on the main dashboard under the status <span className="font-semibold">&quot;Proposed&quot;</span>. Corporate heads can now pledge funds to it!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="e.g., Construction of RO Water Plant"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Development Sector *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value as Project['category']})}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                    >
                      <option value="Education">Education</option>
                      <option value="Fisheries">Fisheries</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Environment">Environment</option>
                      <option value="Infrastructure">Infrastructure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Target Location in Thoothukudi District *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="e.g., Keelavaippar Village, Vilathikulam Block"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Estimated Budget (INR) *</label>
                    <input
                      type="number"
                      required
                      value={formData.targetBudget}
                      onChange={(e) => setFormData({...formData, targetBudget: e.target.value})}
                      placeholder="e.g., 500000"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Target Beneficiaries</label>
                    <input
                      type="text"
                      value={formData.beneficiaries}
                      onChange={(e) => setFormData({...formData, beneficiaries: e.target.value})}
                      placeholder="e.g., 400 rural school girls"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Detailed Description & Impact Statement *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe what the project will accomplish, why it is needed, and how corporate sponsorship will be utilized."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Implementing Government Agency</label>
                  <input
                    type="text"
                    value={formData.implementingAgency}
                    onChange={(e) => setFormData({...formData, implementingAgency: e.target.value})}
                    placeholder="e.g., Block Development Officer (BDO) or PWD"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-blue-500 bg-white"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-indigo-900 hover:bg-indigo-800 text-white font-medium text-xs py-2.5 px-5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
                  >
                    <FileSpreadsheet className="w-4 h-4" /> Register & List Proposal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
