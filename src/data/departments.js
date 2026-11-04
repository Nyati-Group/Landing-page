// Single source of truth for the landing page.
// To add an app: append { name, url, icon } to a department's `apps`.
// Leave `url` empty ('') to show the app as "Coming soon".
// `icon` is any lucide-react icon name: https://lucide.dev/icons

export const departments = [
  {
    id: 'compliance',
    name: 'Compliance',
    description: 'Regulatory tracking, documentation and compliance automation.',
    icon: 'ShieldCheck',
    apps: [
      { name: 'Task Management', url: 'https://task-nyaticompliance.ai.studio', icon: 'ListChecks' },
      { name: 'Department Dashboard', url: 'https://nyati-compliance-department-dashboa.vercel.app/', icon: 'LayoutDashboard' },
      { name: 'Compliance Chatbot', url: 'https://aicomplianceassistant.ai.studio', icon: 'MessageSquareText' },
      { name: 'Compliance Calendar & Tracking', url: '', icon: 'CalendarCheck' },
      { name: 'Regulatory Updates & Intelligence', url: '', icon: 'Radar' },
      { name: 'Document Intelligence', url: 'https://docscomparisontool.vercel.app/login', icon: 'FileSearch' },
    ],
  },
  {
    id: 'procurement',
    name: 'Procurement',
    description: 'Vendor, purchasing and procurement workflow tools.',
    icon: 'ShoppingCart',
    apps: [
      { name: 'Task Management', url: 'https://nyati-procurementtask.ai.studio', icon: 'ListChecks' },
      { name: 'Department Dashboard', url: 'https://nyati-procurement-department-dashbo.vercel.app/', icon: 'LayoutDashboard' },
    ],
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Site execution, project tracking and feasibility analysis.',
    icon: 'HardHat',
    apps: [
      { name: 'Department Dashboard', url: 'https://nyati-contruction-department-dashbo.vercel.app/', icon: 'LayoutDashboard' },
      { name: 'Task Management', url: 'https://nyati-constuction-task.ai.studio', icon: 'ListChecks' },
      { name: 'Feasibility Report', url: 'https://feasibility-calculator.ai.studio', icon: 'Calculator' },
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture & Sanctioning',
    description: 'Design coordination and approvals workflow.',
    icon: 'DraftingCompass',
    apps: [
      { name: 'Task Management', url: 'https://nyati-architecturetask.ai.studio', icon: 'ListChecks' },
    ],
  },
]
