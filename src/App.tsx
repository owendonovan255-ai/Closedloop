import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  DollarSign,
  Filter,
  Gauge,
  Inbox,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  Pause,
  Play,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';

type Status = 'At risk' | 'Follow-up due' | 'Won' | 'Lost' | 'Queued';
type Page =
  | 'overview'
  | 'opportunities'
  | 'queue'
  | 'customers'
  | 'automation'
  | 'revenue'
  | 'settings';

type Opportunity = {
  id: number;
  customer: string;
  service: string;
  trade: 'Roofing' | 'HVAC' | 'Plumbing' | 'Electrical';
  value: number;
  status: Status;
  daysSinceContact: number;
  lastContact: string;
  source: string;
  reason: string;
  nextAction: string;
  email: string;
  sms: string;
};

const seedOpportunities: Opportunity[] = [
  {
    id: 1,
    customer: 'Mason & Carter',
    service: 'Full roof replacement',
    trade: 'Roofing',
    value: 18400,
    status: 'At risk',
    daysSinceContact: 8,
    lastContact: 'Sep 26',
    source: 'Website',
    reason: 'Estimate sent 8 days ago with no response.',
    nextAction: 'Follow up with a concise estimate check-in.',
    email:
      'Hi Mason, just checking in on the roof replacement estimate we sent over last week. I wanted to see if you had any questions I can clear up before you decide on next steps.',
    sms: 'Hi Mason, just checking in on the roof replacement estimate. Any questions I can clear up for you?',
  },
  {
    id: 2,
    customer: 'Jordan Ellis',
    service: 'AC replacement',
    trade: 'HVAC',
    value: 12900,
    status: 'Follow-up due',
    daysSinceContact: 5,
    lastContact: 'Sep 29',
    source: 'Google',
    reason: 'High-value estimate has been inactive for 5 days.',
    nextAction: 'Send a friendly decision-stage follow-up.',
    email:
      'Hi Jordan, wanted to follow up on the AC replacement options we discussed. Happy to answer anything or adjust the recommendation if your needs changed.',
    sms: 'Hi Jordan, following up on the AC replacement options. Happy to answer any questions.',
  },
  {
    id: 3,
    customer: 'Parker Home Group',
    service: 'Gutter + fascia repair',
    trade: 'Roofing',
    value: 7600,
    status: 'At risk',
    daysSinceContact: 11,
    lastContact: 'Sep 23',
    source: 'Referral',
    reason: 'Referral lead has gone quiet after estimate review.',
    nextAction: 'Re-open conversation before competitor selection.',
    email:
      'Hi Parker, I wanted to circle back on the gutter and fascia repair estimate. We can still hold the current scope while you compare options. Let me know what would help you make a decision.',
    sms: 'Hi Parker, circling back on the gutter/fascia estimate. What would help you make a decision?',
  },
  {
    id: 4,
    customer: 'Northstar Property',
    service: 'Commercial boiler service',
    trade: 'HVAC',
    value: 21800,
    status: 'At risk',
    daysSinceContact: 6,
    lastContact: 'Sep 28',
    source: 'Existing customer',
    reason: 'Commercial quote is waiting on a decision.',
    nextAction: 'Check if budget or scheduling is the blocker.',
    email:
      'Hi Northstar team, checking in on the boiler service quote. Is there anything around budget, timing, or scope that we can clarify to help you move forward?',
    sms: 'Hi Northstar, checking in on the boiler service quote. Any budget or timing questions?',
  },
  {
    id: 5,
    customer: 'Harper Family',
    service: 'Panel upgrade',
    trade: 'Electrical',
    value: 9400,
    status: 'Follow-up due',
    daysSinceContact: 4,
    lastContact: 'Sep 30',
    source: 'Google',
    reason: 'Estimate is in the decision window.',
    nextAction: 'Send a low-pressure reminder and clear next step.',
    email:
      'Hi Harper, just checking whether you had a chance to review the panel upgrade estimate. We can answer questions or adjust timing around your schedule whenever you’re ready.',
    sms: 'Hi Harper, checking whether you had a chance to review the panel upgrade estimate.',
  },
  {
    id: 6,
    customer: 'Olivia Stone',
    service: 'Water heater replacement',
    trade: 'Plumbing',
    value: 4200,
    status: 'Won',
    daysSinceContact: 1,
    lastContact: 'Oct 3',
    source: 'Website',
    reason: 'Customer approved the replacement.',
    nextAction: 'Schedule installation.',
    email:
      'Thanks Olivia — we have your approval and are ready to schedule the installation.',
    sms: 'Thanks Olivia — we have your approval. We’ll get your installation scheduled.',
  },
  {
    id: 7,
    customer: 'Cedar Ridge HOA',
    service: 'Roof maintenance plan',
    trade: 'Roofing',
    value: 15600,
    status: 'At risk',
    daysSinceContact: 9,
    lastContact: 'Sep 25',
    source: 'Outbound',
    reason: 'Decision maker has not replied to proposal.',
    nextAction: 'Send a decision-maker-friendly summary.',
    email:
      'Hi Cedar Ridge team, wanted to make it easy to review the roof maintenance proposal. The scope is still available as quoted, and I can summarize the key cost and timing points if useful.',
    sms: 'Hi Cedar Ridge, following up on the roof maintenance proposal. Happy to summarize the key points.',
  },
  {
    id: 8,
    customer: 'Liam Bennett',
    service: 'EV charger installation',
    trade: 'Electrical',
    value: 5800,
    status: 'Follow-up due',
    daysSinceContact: 3,
    lastContact: 'Oct 1',
    source: 'Website',
    reason: 'New lead has not received a second touch.',
    nextAction: 'Send a quick next-step message.',
    email:
      'Hi Liam, wanted to follow up on the EV charger installation request. We can help confirm the best setup and get you on the schedule when you’re ready.',
    sms: 'Hi Liam, following up on the EV charger installation request. Ready for next steps?',
  },
  {
    id: 9,
    customer: 'Wells Family',
    service: 'Burst pipe restoration',
    trade: 'Plumbing',
    value: 6800,
    status: 'Won',
    daysSinceContact: 1,
    lastContact: 'Oct 3',
    source: 'Emergency',
    reason: 'Customer accepted scope.',
    nextAction: 'Dispatch crew.',
    email: 'We’ve got your approval and are dispatching the crew now.',
    sms: 'We have your approval — crew is being dispatched.',
  },
  {
    id: 10,
    customer: 'Briarwood Estates',
    service: 'HVAC maintenance contract',
    trade: 'HVAC',
    value: 11200,
    status: 'At risk',
    daysSinceContact: 7,
    lastContact: 'Sep 27',
    source: 'Referral',
    reason: 'Proposal was opened but no reply followed.',
    nextAction: 'Reference service continuity and timing.',
    email:
      'Hi Briarwood team, checking in on the HVAC maintenance proposal. We can line up the first service window around your current schedule if you’d like to keep things moving.',
    sms: 'Hi Briarwood, checking in on the HVAC maintenance proposal. We can work around your schedule.',
  },
  {
    id: 11,
    customer: 'Stonebridge Dental',
    service: 'Electrical rewiring',
    trade: 'Electrical',
    value: 17300,
    status: 'Lost',
    daysSinceContact: 13,
    lastContact: 'Sep 21',
    source: 'Referral',
    reason: 'Customer selected another provider.',
    nextAction: 'Archive opportunity.',
    email:
      'Thank you for the update. We’ll close the estimate for now and are here if anything changes.',
    sms: 'Thanks for the update. We’ll close this out for now.',
  },
  {
    id: 12,
    customer: 'Carter Residence',
    service: 'Skylight replacement',
    trade: 'Roofing',
    value: 6200,
    status: 'Follow-up due',
    daysSinceContact: 4,
    lastContact: 'Sep 30',
    source: 'Website',
    reason: 'Estimate is awaiting homeowner decision.',
    nextAction: 'Send a clear one-sentence check-in.',
    email:
      'Hi Carter, just checking in on the skylight replacement estimate. Are you still considering the project this month?',
    sms: 'Hi Carter, are you still considering the skylight replacement this month?',
  },
  {
    id: 13,
    customer: 'Oak & Main Retail',
    service: 'Drain line repair',
    trade: 'Plumbing',
    value: 8300,
    status: 'At risk',
    daysSinceContact: 10,
    lastContact: 'Sep 24',
    source: 'Google',
    reason: 'Commercial repair estimate has gone stale.',
    nextAction: 'Confirm urgency and operating constraints.',
    email:
      'Hi Oak & Main, checking in on the drain line repair estimate. We can work around operating hours if scheduling is the main concern.',
    sms: 'Hi Oak & Main, checking in on the drain line repair quote. Can we work around your operating hours?',
  },
  {
    id: 14,
    customer: 'Reed & Sons',
    service: 'Heat pump upgrade',
    trade: 'HVAC',
    value: 14900,
    status: 'Queued',
    daysSinceContact: 6,
    lastContact: 'Sep 28',
    source: 'Website',
    reason: 'Follow-up has been approved and queued.',
    nextAction: 'Await customer response.',
    email:
      'Hi Reed & Sons, following up on the heat pump upgrade estimate. Let us know if there is anything we can clarify for you.',
    sms: 'Hi Reed & Sons, following up on the heat pump upgrade estimate.',
  },
  {
    id: 15,
    customer: 'Maple Street Homes',
    service: 'Whole-home surge protection',
    trade: 'Electrical',
    value: 3600,
    status: 'At risk',
    daysSinceContact: 9,
    lastContact: 'Sep 25',
    source: 'Referral',
    reason: 'Customer stopped responding after quote.',
    nextAction: 'Re-open with a low-pressure reminder.',
    email:
      'Hi Maple Street, just making sure the surge protection quote didn’t get buried. Happy to answer any questions or adjust timing if needed.',
    sms: 'Hi Maple Street, making sure the surge protection quote didn’t get buried.',
  },
  {
    id: 16,
    customer: 'Avery Kitchens',
    service: 'Commercial sink plumbing',
    trade: 'Plumbing',
    value: 5300,
    status: 'Follow-up due',
    daysSinceContact: 5,
    lastContact: 'Sep 29',
    source: 'Website',
    reason: 'Estimate awaiting decision.',
    nextAction: 'Ask whether scope or timing needs adjustment.',
    email:
      'Hi Avery Kitchens, checking in on the sink plumbing estimate. Would a scope or timing adjustment help you move forward?',
    sms: 'Hi Avery Kitchens, checking in on the sink plumbing estimate. Would a timing change help?',
  },
  {
    id: 17,
    customer: 'Summit Apartments',
    service: 'Roof coating program',
    trade: 'Roofing',
    value: 22600,
    status: 'At risk',
    daysSinceContact: 12,
    lastContact: 'Sep 22',
    source: 'Outbound',
    reason: 'High-value commercial proposal has gone quiet.',
    nextAction: 'Escalate with a concise executive summary.',
    email:
      'Hi Summit Apartments team, I wanted to make one clean follow-up on the roof coating proposal. If useful, I can send a one-page summary of scope, timing, and expected maintenance impact.',
    sms: 'Hi Summit Apartments, checking in on the roof coating proposal. Can I send a one-page scope/timing summary?',
  },
  {
    id: 18,
    customer: 'Nolan Family',
    service: 'Main sewer replacement',
    trade: 'Plumbing',
    value: 11800,
    status: 'Won',
    daysSinceContact: 2,
    lastContact: 'Oct 2',
    source: 'Emergency',
    reason: 'Customer approved replacement.',
    nextAction: 'Confirm crew schedule.',
    email:
      'Thanks Nolan — we have your approval and will confirm the crew schedule shortly.',
    sms: 'Thanks Nolan — approved. We’ll confirm the crew schedule.',
  },
  {
    id: 19,
    customer: 'Westlake Office',
    service: 'Lighting retrofit',
    trade: 'Electrical',
    value: 20700,
    status: 'At risk',
    daysSinceContact: 7,
    lastContact: 'Sep 27',
    source: 'Outbound',
    reason: 'Proposal is waiting on internal approval.',
    nextAction: 'Offer a concise scope and scheduling recap.',
    email:
      'Hi Westlake team, checking in on the lighting retrofit proposal. I can send a short recap of scope, schedule, and next steps for internal approval if helpful.',
    sms: 'Hi Westlake, checking in on the lighting retrofit. Happy to send a short scope/schedule recap.',
  },
  {
    id: 20,
    customer: 'Greenfield Home',
    service: 'Attic insulation + ventilation',
    trade: 'Roofing',
    value: 7100,
    status: 'Follow-up due',
    daysSinceContact: 4,
    lastContact: 'Sep 30',
    source: 'Google',
    reason: 'Estimate is in the decision window.',
    nextAction: 'Confirm whether the project is still active.',
    email:
      'Hi Greenfield, just checking whether the attic insulation and ventilation project is still on your radar for this season.',
    sms: 'Hi Greenfield, is the attic insulation project still on your radar this season?',
  },
  {
    id: 21,
    customer: 'Parkline Medical',
    service: 'Boiler replacement',
    trade: 'HVAC',
    value: 24500,
    status: 'At risk',
    daysSinceContact: 8,
    lastContact: 'Sep 26',
    source: 'Referral',
    reason: 'Large estimate has not moved after review.',
    nextAction: 'Surface timing and approval blockers.',
    email:
      'Hi Parkline team, checking in on the boiler replacement proposal. Is there anything around budget, timing, or approval that we can help resolve?',
    sms: 'Hi Parkline, checking in on the boiler replacement proposal. Any budget or timing blockers?',
  },
  {
    id: 22,
    customer: 'Miller Residence',
    service: 'Recessed lighting install',
    trade: 'Electrical',
    value: 2900,
    status: 'Lost',
    daysSinceContact: 15,
    lastContact: 'Sep 19',
    source: 'Website',
    reason: 'Project paused by homeowner.',
    nextAction: 'Archive opportunity.',
    email:
      'No problem — we’ll close this out for now. Reach out if you decide to revisit it.',
    sms: 'No problem — we’ll close this out for now. Reach out if you revisit it.',
  },
];

const customers = [
  {
    name: 'Mason & Carter',
    type: 'Residential',
    value: 18400,
    lastContact: 'Sep 26',
    jobs: 2,
  },
  {
    name: 'Jordan Ellis',
    type: 'Residential',
    value: 12900,
    lastContact: 'Sep 29',
    jobs: 1,
  },
  {
    name: 'Northstar Property',
    type: 'Commercial',
    value: 21800,
    lastContact: 'Sep 28',
    jobs: 4,
  },
  {
    name: 'Cedar Ridge HOA',
    type: 'Commercial',
    value: 15600,
    lastContact: 'Sep 25',
    jobs: 3,
  },
  {
    name: 'Harper Family',
    type: 'Residential',
    value: 9400,
    lastContact: 'Sep 30',
    jobs: 1,
  },
  {
    name: 'Briarwood Estates',
    type: 'Commercial',
    value: 11200,
    lastContact: 'Sep 27',
    jobs: 5,
  },
  {
    name: 'Parkline Medical',
    type: 'Commercial',
    value: 24500,
    lastContact: 'Sep 26',
    jobs: 2,
  },
];

const navItems: { id: Page; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'opportunities', label: 'Opportunities', icon: Target },
  { id: 'queue', label: 'Follow-up Queue', icon: Inbox },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'revenue', label: 'Revenue', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const money = (n: number) => '$' + n.toLocaleString('en-US');

function App() {
  const [page, setPage] = useState<Page>(
    () => (window.location.hash.replace('#', '') as Page) || 'overview'
  );
  const [landing, setLanding] = useState(
    () => window.location.hash !== '#demo'
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [opportunities, setOpportunities] = useState(seedOpportunities);
  const [selected, setSelected] = useState<Opportunity | null>(null);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'All' | Status>('All');
  const [toast, setToast] = useState('');
  const [automationRunning, setAutomationRunning] = useState(false);
  const [automationStep, setAutomationStep] = useState(0);
  const [autoEnabled, setAutoEnabled] = useState(true);
  const [approvalEnabled, setApprovalEnabled] = useState(true);
  const [tone, setTone] = useState('Friendly & direct');

  const go = (next: Page) => {
    setLanding(false);
    setPage(next);
    window.location.hash = next;
    setMobileOpen(false);
  };

  const openLanding = () => {
    setLanding(true);
    setPage('overview');
    window.location.hash = '';
  };

  useEffect(() => {
    const onHash = () => {
      const value = window.location.hash.replace('#', '');
      if (value === 'demo') {
        setLanding(false);
        setPage('overview');
      } else if (value === '') {
        setLanding(true);
      } else if (navItems.some(n => n.id === value)) {
        setLanding(false);
        setPage(value as Page);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const stats = useMemo(() => {
    const atRisk = opportunities
      .filter(o => o.status === 'At risk')
      .reduce((a, o) => a + o.value, 0);
    const due = opportunities.filter(o => o.status === 'Follow-up due').length;
    const won = opportunities.filter(o => o.status === 'Won').length;
    const queued = opportunities.filter(o => o.status === 'Queued').length;
    return { atRisk, due, won, queued };
  }, [opportunities]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return opportunities.filter(o => {
      const matchesSearch =
        !q ||
        [o.customer, o.service, o.trade, o.source].some(v =>
          v.toLowerCase().includes(q)
        );
      const matchesTab = tab === 'All' || o.status === tab;
      return matchesSearch && matchesTab;
    });
  }, [opportunities, search, tab]);

  const recover = (opp: Opportunity) => {
    setSelected(opp);
  };

  const updateStatus = (id: number, status: Status) => {
    setOpportunities(items =>
      items.map(o => (o.id === id ? { ...o, status } : o))
    );
    setSelected(s => (s && s.id === id ? { ...s, status } : s));
  };

  const approveQueue = () => {
    if (!selected) return;
    updateStatus(selected.id, 'Queued');
    setToast('Follow-up queued — demo action only');
  };

  const markBooked = () => {
    if (!selected) return;
    updateStatus(selected.id, 'Won');
    setToast('Opportunity marked booked — demo state updated');
  };

  const pause = () => {
    if (!selected) return;
    updateStatus(selected.id, 'Lost');
    setToast('Opportunity paused — demo state updated');
  };

  const runAutomation = () => {
    if (automationRunning) return;
    setAutomationRunning(true);
    setAutomationStep(1);
    window.setTimeout(() => setAutomationStep(2), 550);
    window.setTimeout(() => setAutomationStep(3), 1050);
    window.setTimeout(() => setAutomationStep(4), 1600);
    window.setTimeout(() => {
      setAutomationRunning(false);
      setToast('8 follow-ups queued in demo mode');
      setOpportunities(items =>
        items.map((o, index) =>
          index < 8 && (o.status === 'At risk' || o.status === 'Follow-up due')
            ? { ...o, status: 'Queued' }
            : o
        )
      );
    }, 2000);
  };

  if (landing) {
    return (
      <div className="marketing">
        <header className="marketing-nav">
          <button
            className="brand brand-button"
            onClick={openLanding}
            aria-label="QuoteVoro home"
          >
            <span className="brand-mark">
              <span></span>
              <span></span>
            </span>
            <span>QuoteVoro</span>
          </button>
          <div className="marketing-nav-links">
            <button
              onClick={() =>
                document
                  .getElementById('how')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              How it works
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('roi')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              ROI
            </button>
            <button
              className="nav-demo-btn"
              onClick={() => {
                window.location.hash = 'demo';
                setLanding(false);
              }}
            >
              Open demo <ArrowRight size={15} />
            </button>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse"></span> Revenue recovery for
                home-service businesses
              </div>
              <h1>
                Recover the jobs your business is <em>leaving behind.</em>
              </h1>
              <p className="hero-lead">
                QuoteVoro finds stale leads and unsold estimates, prioritizes
                the money at risk, and gives your team the next best action.
              </p>
              <div className="hero-actions">
                <button
                  className="primary-btn"
                  onClick={() => {
                    window.location.hash = 'demo';
                    setLanding(false);
                  }}
                >
                  See the live demo <ArrowRight size={17} />
                </button>
                <button
                  className="ghost-btn"
                  onClick={() =>
                    document
                      .getElementById('how')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  See how it works
                </button>
              </div>
              <div className="hero-note">
                <Check size={15} /> Built for roofing · HVAC · plumbing ·
                electrical
              </div>
            </div>

            <div className="hero-visual">
              <div className="demo-window">
                <div className="window-top">
                  <div className="window-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <span>QuoteVoro · Summit Roofing & Exteriors</span>
                  <span className="demo-pill">DEMO</span>
                </div>
                <div className="mini-dashboard">
                  <div className="mini-sidebar">
                    <div className="mini-logo">
                      <span className="brand-mark small">
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <span className="mini-active">
                      <LayoutDashboard size={13} />
                    </span>
                    <span>
                      <Target size={13} />
                    </span>
                    <span>
                      <Inbox size={13} />
                    </span>
                    <span>
                      <Zap size={13} />
                    </span>
                  </div>
                  <div className="mini-main">
                    <div className="mini-title-row">
                      <div>
                        <small>OVERVIEW</small>
                        <strong>Good morning, Summit</strong>
                      </div>
                      <span className="mini-dot">● Live demo</span>
                    </div>
                    <div className="mini-cards">
                      <div>
                        <span>Revenue at risk</span>
                        <b>$84.6k</b>
                        <small>17 opportunities</small>
                      </div>
                      <div>
                        <span>Recovered this month</span>
                        <b>$31.4k</b>
                        <small>7 jobs won</small>
                      </div>
                      <div>
                        <span>Follow-ups due</span>
                        <b>8</b>
                        <small>Today</small>
                      </div>
                    </div>
                    <div className="mini-alert">
                      <div>
                        <span className="orange-dot"></span>
                        <strong>$18,400</strong>
                      </div>
                      <p>Mason & Carter · Full roof replacement</p>
                      <button
                        onClick={() => {
                          window.location.hash = 'demo';
                          setLanding(false);
                        }}
                      >
                        Recover
                      </button>
                    </div>
                    <div className="mini-bars">
                      <i style={{ height: '36%' }}></i>
                      <i style={{ height: '52%' }}></i>
                      <i style={{ height: '44%' }}></i>
                      <i style={{ height: '68%' }}></i>
                      <i style={{ height: '59%' }}></i>
                      <i style={{ height: '82%' }}></i>
                      <i style={{ height: '74%' }}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-one">
                <span>⚡</span>
                <div>
                  <b>Priority detected</b>
                  <small>8 days since last contact</small>
                </div>
              </div>
              <div className="floating-card floating-two">
                <TrendingUp size={17} />
                <div>
                  <b>$31,400 recovered</b>
                  <small>Illustrative demo data</small>
                </div>
              </div>
            </div>
          </section>

          <section id="how" className="section how-section">
            <div className="section-head">
              <span className="section-label">THE LOOP</span>
              <h2>Find it. Fix it. Close it.</h2>
              <p>
                One focused workflow built around the opportunities your team is
                already paying to acquire.
              </p>
            </div>
            <div className="three-grid">
              <article>
                <div className="step-num">01</div>
                <Target size={24} />
                <h3>Find the leaks</h3>
                <p>
                  Surface stale leads, unsold estimates, and follow-ups that
                  slipped through the cracks.
                </p>
              </article>
              <article>
                <div className="step-num">02</div>
                <Sparkles size={24} />
                <h3>Make the next move</h3>
                <p>
                  See why each opportunity is flagged and get a clear,
                  personalized recovery action.
                </p>
              </article>
              <article>
                <div className="step-num">03</div>
                <Zap size={24} />
                <h3>Close the loop</h3>
                <p>
                  Queue approved outreach, track responses, and turn forgotten
                  opportunities back into jobs.
                </p>
              </article>
            </div>
          </section>

          <section id="roi" className="section roi-section">
            <div className="roi-panel">
              <div>
                <span className="section-label">ILLUSTRATIVE DEMO DATA</span>
                <h2>Make the invisible revenue leak impossible to ignore.</h2>
                <p>
                  QuoteVoro puts a dollar value on the opportunities your team
                  should not forget.
                </p>
              </div>
              <div className="roi-metrics">
                <div>
                  <span>Opportunity value</span>
                  <b>$184k</b>
                </div>
                <div>
                  <span>Currently at risk</span>
                  <b>$84.6k</b>
                </div>
                <div>
                  <span>Recovered</span>
                  <b>$31.4k</b>
                </div>
              </div>
              <button
                className="inverse-btn"
                onClick={() => {
                  window.location.hash = 'demo';
                  setLanding(false);
                }}
              >
                Show me what QuoteVoro would recover <ArrowRight size={17} />
              </button>
            </div>
          </section>

          <section className="section quote-section">
            <div className="quote-mark">“</div>
            <blockquote>
              Your team did the hard work to win the lead. QuoteVoro makes sure
              the follow-up doesn’t die.
            </blockquote>
          </section>
        </main>
        <footer className="marketing-footer">
          <span>© 2026 QuoteVoro</span>
          <span>Demo mode · sample data only</span>
        </footer>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className={mobileOpen ? 'sidebar mobile-open' : 'sidebar'}>
        <div className="sidebar-top">
          <button className="brand brand-button" onClick={openLanding}>
            <span className="brand-mark">
              <span></span>
              <span></span>
            </span>
            <span>QuoteVoro</span>
          </button>
          <button className="close-mobile" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <div className="workspace-switcher">
          <div className="avatar">SR</div>
          <div>
            <b>Summit Roofing</b>
            <small>Demo workspace</small>
          </div>
          <ChevronDown size={15} />
        </div>
        <nav>
          <span className="nav-caption">WORKSPACE</span>
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={page === item.id ? 'side-link active' : 'side-link'}
                onClick={() => go(item.id)}
              >
                <Icon size={17} />
                <span>{item.label}</span>
                {item.id === 'queue' && stats.queued > 0 ? (
                  <span className="nav-count">{stats.queued}</span>
                ) : null}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="support-card">
            <div>
              <CircleHelp size={17} />
              <span>Need a hand?</span>
            </div>
            <small>Demo walkthrough</small>
          </div>
          <div className="demo-disclaimer">
            <span></span>
            <div>
              <b>Demo mode</b>
              <small>Sample data only</small>
            </div>
          </div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="hamburger" onClick={() => setMobileOpen(true)}>
              <Menu size={20} />
            </button>
            <span className="crumb">Summit Roofing & Exteriors</span>
            <ChevronDown size={14} />
          </div>
          <div className="topbar-right">
            <span className="demo-tag">DEMO MODE</span>
            <button className="icon-btn">
              <Bell size={17} />
            </button>
            <div className="top-avatar">OW</div>
          </div>
        </header>

        <main className="content">
          {page === 'overview' && (
            <OverviewPage
              opportunities={opportunities}
              stats={stats}
              recover={recover}
              go={go}
              runAutomation={runAutomation}
            />
          )}
          {page === 'opportunities' && (
            <OpportunitiesPage
              opportunities={filtered}
              all={opportunities}
              search={search}
              setSearch={setSearch}
              tab={tab}
              setTab={setTab}
              recover={recover}
            />
          )}
          {page === 'queue' && (
            <QueuePage
              opportunities={opportunities}
              runAutomation={runAutomation}
              automationRunning={automationRunning}
              automationStep={automationStep}
              recover={recover}
            />
          )}
          {page === 'customers' && <CustomersPage />}
          {page === 'automation' && (
            <AutomationPage
              enabled={autoEnabled}
              setEnabled={setAutoEnabled}
              approvalEnabled={approvalEnabled}
              setApprovalEnabled={setApprovalEnabled}
              runAutomation={runAutomation}
              automationRunning={automationRunning}
              automationStep={automationStep}
            />
          )}
          {page === 'revenue' && <RevenuePage opportunities={opportunities} />}
          {page === 'settings' && (
            <SettingsPage
              tone={tone}
              setTone={setTone}
              autoEnabled={autoEnabled}
              setAutoEnabled={setAutoEnabled}
            />
          )}
        </main>
      </div>

      {selected && (
        <OpportunityDrawer
          opportunity={selected}
          close={() => setSelected(null)}
          approveQueue={approveQueue}
          markBooked={markBooked}
          pause={pause}
        />
      )}
      {toast && (
        <div className="toast">
          <Check size={16} />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}

function PageHeader({
  label,
  title,
  subtitle,
  action,
}: {
  label: string;
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
  tone = 'green',
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof DollarSign;
  tone?: string;
}) {
  return (
    <div className="metric-card">
      <div className={'metric-icon ' + tone}>
        <Icon size={18} />
      </div>
      <span>{label}</span>
      <b>{value}</b>
      <small>{detail}</small>
    </div>
  );
}

function OverviewPage({
  opportunities,
  stats,
  recover,
  go,
  runAutomation,
}: {
  opportunities: Opportunity[];
  stats: { atRisk: number; due: number; won: number; queued: number };
  recover: (o: Opportunity) => void;
  go: (p: Page) => void;
  runAutomation: () => void;
}) {
  const top = opportunities
    .filter(o => o.status === 'At risk' || o.status === 'Follow-up due')
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  return (
    <div>
      <PageHeader
        label="OVERVIEW"
        title="Your revenue leak, in focus."
        subtitle="A clear view of which opportunities need attention before they go cold."
        action={
          <button className="primary-btn small" onClick={runAutomation}>
            <Zap size={15} /> Automate today
          </button>
        }
      />
      <div className="metric-grid">
        <MetricCard
          label="Revenue at risk"
          value="$84,600"
          detail="17 recoverable opportunities"
          icon={DollarSign}
          tone="orange"
        />
        <MetricCard
          label="Recovered this month"
          value="$31,400"
          detail="7 jobs won · illustrative"
          icon={TrendingUp}
        />
        <MetricCard
          label="Follow-ups due today"
          value="8"
          detail="Priority queue"
          icon={Clock3}
          tone="purple"
        />
        <MetricCard
          label="Conversion momentum"
          value="+18%"
          detail="Vs. previous demo period"
          icon={Gauge}
          tone="blue"
        />
      </div>
      <div className="dashboard-grid">
        <section className="panel chart-panel">
          <div className="panel-head">
            <div>
              <b>Recovery momentum</b>
              <span>Illustrative demo data</span>
            </div>
            <button className="text-btn" onClick={() => go('revenue')}>
              View revenue <ArrowRight size={14} />
            </button>
          </div>
          <div className="chart-area">
            <div className="chart-labels">
              <span>$40k</span>
              <span>$30k</span>
              <span>$20k</span>
              <span>$10k</span>
              <span>$0</span>
            </div>
            <div className="chart-bars">
              {[32, 44, 36, 58, 48, 76, 66, 86, 74, 94, 82, 100].map((h, i) => (
                <div key={i} className="chart-bar" style={{ height: h + '%' }}>
                  <span></span>
                </div>
              ))}
            </div>
          </div>
          <div className="chart-legend">
            <span>
              <i className="legend-dot"></i>Recovered
            </span>
            <span>
              <i className="legend-dot risk"></i>At risk
            </span>
            <span>Last 12 periods</span>
          </div>
        </section>
        <section className="panel side-panel">
          <div className="panel-head">
            <div>
              <b>Automation health</b>
              <span>Current demo configuration</span>
            </div>
            <div className="health-dot"></div>
          </div>
          <div className="health-score">
            <div>
              <strong>92</strong>
              <span>/ 100</span>
            </div>
            <div className="ring">
              <div></div>
            </div>
          </div>
          <div className="health-row">
            <span>Stale opportunities scanned</span>
            <b>23</b>
          </div>
          <div className="health-row">
            <span>Eligible today</span>
            <b>8</b>
          </div>
          <div className="health-row">
            <span>Approval required</span>
            <b>On</b>
          </div>
          <button
            className="secondary-btn full"
            onClick={() => go('automation')}
          >
            Tune automation <Settings size={15} />
          </button>
        </section>
      </div>
      <section className="panel opportunity-panel">
        <div className="panel-head">
          <div>
            <b>Today's highest-value opportunities</b>
            <span>Prioritized by value + inactivity</span>
          </div>
          <button className="text-btn" onClick={() => go('opportunities')}>
            View all <ArrowRight size={14} />
          </button>
        </div>
        <div className="opportunity-list">
          {top.map(o => (
            <OpportunityRow
              key={o.id}
              opportunity={o}
              onClick={() => recover(o)}
            />
          ))}
        </div>
      </section>
      <div className="overview-footer">
        <div>
          <Sparkles size={17} />
          <div>
            <b>QuoteVoro has one job:</b>
            <span>
              make sure promising opportunities don't disappear into the cracks.
            </span>
          </div>
        </div>
        <button className="secondary-btn" onClick={() => go('queue')}>
          Open follow-up queue <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

function OpportunityRow({
  opportunity: o,
  onClick,
}: {
  opportunity: Opportunity;
  onClick: () => void;
}) {
  return (
    <button className="opportunity-row" onClick={onClick}>
      <div className="opp-avatar">
        {o.customer
          .split(' ')
          .map(x => x[0])
          .join('')
          .slice(0, 2)}
      </div>
      <div className="opp-main">
        <b>{o.customer}</b>
        <span>
          {o.service} · {o.trade}
        </span>
      </div>
      <div className="opp-age">
        <span className={o.status === 'At risk' ? 'status risk' : 'status due'}>
          {o.status}
        </span>
        <small>{o.daysSinceContact}d inactive</small>
      </div>
      <div className="opp-value">
        <b>{money(o.value)}</b>
        <span>{o.source}</span>
      </div>
      <span className="recover-link">
        Recover <ArrowRight size={14} />
      </span>
    </button>
  );
}

function OpportunitiesPage({
  opportunities,
  all,
  search,
  setSearch,
  tab,
  setTab,
  recover,
}: {
  opportunities: Opportunity[];
  all: Opportunity[];
  search: string;
  setSearch: (v: string) => void;
  tab: 'All' | Status;
  setTab: (v: 'All' | Status) => void;
  recover: (o: Opportunity) => void;
}) {
  const atRiskValue = all
    .filter(o => o.status === 'At risk')
    .reduce((a, o) => a + o.value, 0);
  const tabs: ('All' | Status)[] = [
    'All',
    'At risk',
    'Follow-up due',
    'Won',
    'Lost',
    'Queued',
  ];
  return (
    <div>
      <PageHeader
        label="OPPORTUNITIES"
        title="Every opportunity has a next move."
        subtitle="Search the pipeline, surface the money at risk, and take action from one place."
        action={
          <div className="header-stat">
            <span>At-risk value</span>
            <b>{money(atRiskValue)}</b>
          </div>
        }
      />
      <div className="panel table-panel">
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={16} />
            <input
              placeholder="Search customer, job or source"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <Filter size={15} /> Filters
          </button>
        </div>
        <div className="tabs">
          {tabs.map(t => (
            <button
              key={t}
              className={tab === t ? 'tab active' : 'tab'}
              onClick={() => setTab(t)}
            >
              {t}
              <span>
                {t === 'All'
                  ? all.length
                  : all.filter(o => o.status === t).length}
              </span>
            </button>
          ))}
        </div>
        <div className="table-wrap">
          <div className="table-head">
            <span>Customer</span>
            <span>Opportunity</span>
            <span>Status</span>
            <span>Value</span>
            <span></span>
          </div>
          {opportunities.map(o => (
            <div className="table-row" key={o.id}>
              <div className="customer-cell">
                <div className="opp-avatar">
                  {o.customer
                    .split(' ')
                    .map(x => x[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <b>{o.customer}</b>
                  <small>{o.trade}</small>
                </div>
              </div>
              <div>
                <b>{o.service}</b>
                <small>{o.daysSinceContact} days since contact</small>
              </div>
              <div>
                <span
                  className={
                    'status ' +
                    (o.status === 'At risk'
                      ? 'risk'
                      : o.status === 'Follow-up due'
                        ? 'due'
                        : o.status === 'Won'
                          ? 'won'
                          : o.status === 'Queued'
                            ? 'queued'
                            : 'lost')
                  }
                >
                  {o.status}
                </span>
              </div>
              <div className="table-value">
                <b>{money(o.value)}</b>
                <small>{o.source}</small>
              </div>
              <button className="row-action" onClick={() => recover(o)}>
                {o.status === 'Won' ? 'View' : 'Recover'}{' '}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
        <div className="table-foot">
          <span>
            Showing {opportunities.length} of {all.length} opportunities
          </span>
          <span>Demo data · sample records only</span>
        </div>
      </div>
    </div>
  );
}

function QueuePage({
  opportunities,
  runAutomation,
  automationRunning,
  automationStep,
  recover,
}: {
  opportunities: Opportunity[];
  runAutomation: () => void;
  automationRunning: boolean;
  automationStep: number;
  recover: (o: Opportunity) => void;
}) {
  const queue = opportunities
    .filter(
      o =>
        o.status === 'At risk' ||
        o.status === 'Follow-up due' ||
        o.status === 'Queued'
    )
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);
  return (
    <div>
      <PageHeader
        label="FOLLOW-UP QUEUE"
        title="Know what deserves attention now."
        subtitle="A prioritized queue built around urgency, value, and the next best action."
        action={
          <button
            className="primary-btn small"
            onClick={runAutomation}
            disabled={automationRunning}
          >
            <Zap size={15} />{' '}
            {automationRunning ? 'Running…' : 'Automate today’s follow-ups'}
          </button>
        }
      />
      {automationRunning && <AutomationProgress step={automationStep} />}
      <div className="queue-summary">
        <div>
          <span>Priority actions</span>
          <b>8</b>
          <small>Due today</small>
        </div>
        <div>
          <span>Value in queue</span>
          <b>$84.6k</b>
          <small>Illustrative</small>
        </div>
        <div>
          <span>Avg. inactivity</span>
          <b>7.4d</b>
          <small>Across priority set</small>
        </div>
      </div>
      <section className="panel queue-panel">
        {queue.map((o, i) => (
          <div key={o.id} className="queue-row">
            <div className="queue-rank">{String(i + 1).padStart(2, '0')}</div>
            <div className="opp-avatar">
              {o.customer
                .split(' ')
                .map(x => x[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div className="queue-info">
              <div>
                <b>{o.customer}</b>
                <span>{o.service}</span>
              </div>
              <small>
                <strong>Why now:</strong> {o.reason}
              </small>
            </div>
            <div className="queue-value">
              <b>{money(o.value)}</b>
              <span>{o.daysSinceContact}d inactive</span>
            </div>
            <button
              className="secondary-btn compact"
              onClick={() => recover(o)}
            >
              Review <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

function AutomationProgress({ step }: { step: number }) {
  const steps = [
    'Scanning 23 opportunities',
    'Found 8 eligible',
    'Generated 8 personalized drafts',
    'Queued 8 for approval',
  ];
  return (
    <div className="automation-progress">
      {steps.map((s, i) => (
        <div
          key={s}
          className={step >= i + 1 ? 'progress-step done' : 'progress-step'}
        >
          <span>{step >= i + 1 ? <Check size={13} /> : i + 1}</span>
          {s}
        </div>
      ))}
    </div>
  );
}

function CustomersPage() {
  const [q, setQ] = useState('');
  const filtered = customers.filter(
    c =>
      c.name.toLowerCase().includes(q.toLowerCase()) ||
      c.type.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <PageHeader
        label="CUSTOMERS"
        title="The relationship behind the opportunity."
        subtitle="Customer context helps your team follow up like a human, not a sequence."
      />
      <div className="panel table-panel">
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={16} />
            <input
              placeholder="Search customers"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
        </div>
        <div className="customer-grid">
          {filtered.map(c => (
            <div key={c.name} className="customer-card">
              <div className="customer-card-top">
                <div className="opp-avatar">
                  {c.name
                    .split(' ')
                    .map(x => x[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <MoreHorizontal size={18} />
              </div>
              <b>{c.name}</b>
              <span>
                {c.type} · {c.jobs} jobs
              </span>
              <div className="customer-value">
                <span>Tracked value</span>
                <b>{money(c.value)}</b>
              </div>
              <small>Last contact · {c.lastContact}</small>
              <button className="secondary-btn full">
                Open customer <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutomationPage({
  enabled,
  setEnabled,
  approvalEnabled,
  setApprovalEnabled,
  runAutomation,
  automationRunning,
  automationStep,
}: {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
  approvalEnabled: boolean;
  setApprovalEnabled: (v: boolean) => void;
  runAutomation: () => void;
  automationRunning: boolean;
  automationStep: number;
}) {
  return (
    <div>
      <PageHeader
        label="AUTOMATION"
        title="Let the routine follow-up happen on time."
        subtitle="Keep the rules simple, visible, and under your control."
        action={
          <button
            className="primary-btn small"
            onClick={runAutomation}
            disabled={automationRunning}
          >
            <Play size={15} />{' '}
            {automationRunning ? 'Running…' : 'Run automation now'}
          </button>
        }
      />
      {automationRunning && <AutomationProgress step={automationStep} />}
      <section className="automation-hero panel">
        <div className="automation-head">
          <div className="ai-icon">
            <Sparkles size={20} />
          </div>
          <div>
            <span className="section-label">RULE 01</span>
            <h2>Follow up before the opportunity goes cold</h2>
            <p>
              One simple sequence that keeps revenue from disappearing into
              inactivity.
            </p>
          </div>
          <span className="live-switch">
            <i></i>Live in demo
          </span>
        </div>
        <div className="flow">
          <div className="flow-node">
            <span>WHEN</span>
            <b>Estimate is more than 3 days old</b>
          </div>
          <div className="flow-line"></div>
          <div className="flow-node">
            <span>AND</span>
            <b>Customer has not replied</b>
          </div>
          <div className="flow-line"></div>
          <div className="flow-node">
            <span>THEN</span>
            <b>Create personalized follow-up</b>
          </div>
          <div className="flow-line"></div>
          <div className="flow-node">
            <span>THEN</span>
            <b>Queue for approval</b>
          </div>
          <div className="flow-line"></div>
          <div className="flow-node stop">
            <span>STOP</span>
            <b>Customer replies or books</b>
          </div>
        </div>
        <div className="automation-controls">
          <ToggleRow
            label="Scan stale estimates automatically"
            detail="Keep a rolling watch on inactive opportunities."
            checked={enabled}
            setChecked={setEnabled}
          />
          <ToggleRow
            label="Require approval before outreach"
            detail="No message is sent without a human approval step."
            checked={approvalEnabled}
            setChecked={setApprovalEnabled}
          />
          <div className="rule-setting">
            <div>
              <b>Delay before second touch</b>
              <small>Recommended window</small>
            </div>
            <select defaultValue="3 days">
              <option>3 days</option>
              <option>5 days</option>
              <option>7 days</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToggleRow({
  label,
  detail,
  checked,
  setChecked,
}: {
  label: string;
  detail: string;
  checked: boolean;
  setChecked: (v: boolean) => void;
}) {
  return (
    <div className="toggle-row">
      <div>
        <b>{label}</b>
        <small>{detail}</small>
      </div>
      <button
        className={checked ? 'toggle on' : 'toggle'}
        onClick={() => setChecked(!checked)}
        aria-pressed={checked}
      >
        <span></span>
      </button>
    </div>
  );
}

function RevenuePage({ opportunities }: { opportunities: Opportunity[] }) {
  const total = opportunities.reduce((a, o) => a + o.value, 0);
  const won = opportunities
    .filter(o => o.status === 'Won')
    .reduce((a, o) => a + o.value, 0);
  const atRisk = opportunities
    .filter(o => o.status === 'At risk')
    .reduce((a, o) => a + o.value, 0);
  return (
    <div>
      <PageHeader
        label="REVENUE"
        title="Put a number on the leak."
        subtitle="A clean view of potential, risk, and the value your recovery motion can influence."
      />
      <div className="revenue-kpis">
        <div className="revenue-kpi">
          <span>Potential opportunity</span>
          <b>{money(total)}</b>
          <small>Demo data</small>
        </div>
        <div className="revenue-kpi risk-kpi">
          <span>Currently at risk</span>
          <b>{money(atRisk)}</b>
          <small>17 opportunities</small>
        </div>
        <div className="revenue-kpi">
          <span>Booked</span>
          <b>{money(won)}</b>
          <small>7 jobs</small>
        </div>
        <div className="revenue-kpi">
          <span>Recovered this month</span>
          <b>$31,400</b>
          <small>Illustrative</small>
        </div>
      </div>
      <div className="revenue-grid">
        <section className="panel funnel-panel">
          <div className="panel-head">
            <div>
              <b>Recovery funnel</b>
              <span>Illustrative demo data</span>
            </div>
          </div>
          <div className="funnel">
            <div style={{ width: '100%' }}>
              <span>$184k total opportunity value</span>
              <b>$184k</b>
            </div>
            <div style={{ width: '69%' }}>
              <span>$84.6k currently at risk</span>
              <b>$84.6k</b>
            </div>
            <div style={{ width: '46%' }}>
              <span>$31.4k recovered</span>
              <b>$31.4k</b>
            </div>
            <div style={{ width: '29%' }}>
              <span>7 jobs won</span>
              <b>7</b>
            </div>
          </div>
        </section>
        <section className="panel source-panel">
          <div className="panel-head">
            <div>
              <b>Recovery by source</b>
              <span>Sample attribution</span>
            </div>
          </div>
          <div className="source-list">
            {[
              ['Website', 36],
              ['Google', 28],
              ['Referral', 22],
              ['Existing customer', 14],
            ].map(([name, pct]) => (
              <div key={name as string}>
                <div>
                  <span>{name}</span>
                  <b>{pct}%</b>
                </div>
                <div className="source-bar">
                  <i style={{ width: pct + '%' }}></i>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="panel opportunity-panel">
        <div className="panel-head">
          <div>
            <b>Top recovery opportunities</b>
            <span>Ranked by value at risk</span>
          </div>
        </div>
        <div className="top-recovery">
          {opportunities
            .filter(o => o.status === 'At risk')
            .sort((a, b) => b.value - a.value)
            .slice(0, 6)
            .map(o => (
              <div key={o.id}>
                <div className="opp-avatar">
                  {o.customer
                    .split(' ')
                    .map(x => x[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <b>{o.customer}</b>
                  <span>{o.service}</span>
                </div>
                <strong>{money(o.value)}</strong>
                <small>{o.daysSinceContact}d inactive</small>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

function SettingsPage({
  tone,
  setTone,
  autoEnabled,
  setAutoEnabled,
}: {
  tone: string;
  setTone: (v: string) => void;
  autoEnabled: boolean;
  setAutoEnabled: (v: boolean) => void;
}) {
  return (
    <div>
      <PageHeader
        label="SETTINGS"
        title="Keep the system in your voice."
        subtitle="Demo-only controls for the business profile and recovery workflow."
      />
      <div className="settings-grid">
        <section className="panel settings-card">
          <div className="panel-head">
            <div>
              <b>Business profile</b>
              <span>How the demo represents your company</span>
            </div>
          </div>
          <label>
            Business name
            <input value="Summit Roofing & Exteriors" readOnly />
          </label>
          <label>
            Primary trade
            <input value="Roofing" readOnly />
          </label>
          <label>
            Default tone
            <select value={tone} onChange={e => setTone(e.target.value)}>
              <option>Friendly & direct</option>
              <option>Professional & concise</option>
              <option>Warm & consultative</option>
            </select>
          </label>
          <button className="secondary-btn" onClick={() => setTone(tone)}>
            <Check size={15} /> Saved in demo
          </button>
        </section>
        <section className="panel settings-card">
          <div className="panel-head">
            <div>
              <b>Automation defaults</b>
              <span>Safe, visible starting points</span>
            </div>
          </div>
          <ToggleRow
            label="Stale opportunity scanning"
            detail="Surface follow-up candidates daily."
            checked={autoEnabled}
            setChecked={setAutoEnabled}
          />
          <ToggleRow
            label="Approval before outreach"
            detail="Recommended for every new workspace."
            checked={true}
            setChecked={() => {}}
          />
          <div className="settings-note">
            <Bell size={16} />
            <div>
              <b>Demo environment</b>
              <span>
                No real email, SMS, CRM, or customer data is connected.
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function OpportunityDrawer({
  opportunity,
  close,
  approveQueue,
  markBooked,
  pause,
}: {
  opportunity: Opportunity;
  close: () => void;
  approveQueue: () => void;
  markBooked: () => void;
  pause: () => void;
}) {
  const [channel, setChannel] = useState<'Email' | 'SMS'>('Email');
  const [message, setMessage] = useState(
    channel === 'Email' ? opportunity.email : opportunity.sms
  );
  useEffect(() => {
    setMessage(channel === 'Email' ? opportunity.email : opportunity.sms);
  }, [channel, opportunity]);
  return (
    <div className="drawer-backdrop" onClick={close}>
      <aside className="drawer" onClick={e => e.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <span className="section-label">RECOVERY REVIEW</span>
            <h2>{opportunity.customer}</h2>
            <p>
              {opportunity.service} · {opportunity.trade}
            </p>
          </div>
          <button className="icon-btn" onClick={close}>
            <X size={18} />
          </button>
        </div>
        <div className="drawer-metrics">
          <div>
            <span>Estimate</span>
            <b>{money(opportunity.value)}</b>
          </div>
          <div>
            <span>Inactive</span>
            <b>{opportunity.daysSinceContact}d</b>
          </div>
          <div>
            <span>Status</span>
            <span
              className={
                'status ' +
                (opportunity.status === 'At risk'
                  ? 'risk'
                  : opportunity.status === 'Queued'
                    ? 'queued'
                    : 'due')
              }
            >
              {opportunity.status}
            </span>
          </div>        </div>
        <section className="drawer-section">
          <div className="drawer-section-title">
            <b>Why this is flagged</b>
            <span>Priority</span>
          </div>
          <div className="flag-reason">
            <Clock3 size={17} />
            <p>{opportunity.reason}</p>
          </div>
        </section>
        <section className="drawer-section">
          <div className="drawer-section-title">
            <b>Opportunity timeline</b>
            <span>Latest activity</span>
          </div>
          <div className="timeline">
            <div>
              <span></span>
              <div>
                <b>Estimate sent</b>
                <small>
                  {opportunity.lastContact} · {money(opportunity.value)}
                </small>
              </div>
            </div>
            <div>
              <span></span>
              <div>
                <b>No response recorded</b>
                <small>{opportunity.daysSinceContact} days of inactivity</small>
              </div>
            </div>
            <div>
              <span></span>
              <div>
                <b>QuoteVoro flag</b>
                <small>Recommended recovery action available now</small>
              </div>
            </div>
          </div>
        </section>
        <section className="drawer-section">
          <div className="drawer-section-title">
            <b>Suggested follow-up</b>
            <span>AI-style demo draft</span>
          </div>
          <div className="channel-tabs">
            <button
              className={channel === 'Email' ? 'active' : ''}
              onClick={() => setChannel('Email')}
            >
              <MessageSquareText size={14} /> Email
            </button>
            <button
              className={channel === 'SMS' ? 'active' : ''}
              onClick={() => setChannel('SMS')}
            >
              <MessageSquareText size={14} /> SMS
            </button>
          </div>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <small className="demo-copy">
            Draft generated from sample opportunity context. Demo only — nothing
            is sent.
          </small>
        </section>
        <div className="drawer-actions">
          <button className="primary-btn full" onClick={approveQueue}>
            <Check size={16} /> Approve & queue
          </button>
          <div className="drawer-secondary">
            <button className="secondary-btn" onClick={markBooked}>
              <DollarSign size={15} /> Mark booked
            </button>
            <button className="ghost-btn" onClick={pause}>
              <Pause size={15} /> Pause
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
