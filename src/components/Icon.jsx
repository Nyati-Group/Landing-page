import {
  Calculator, CalendarCheck, DraftingCompass, FileSearch, HardHat, Headset, LayoutDashboard,
  ListChecks, MessageSquareText, PhoneCall, Radar, Scale, ShieldCheck, ShoppingCart, Sparkles,
} from 'lucide-react'

// Icons referenced by name in data/departments.js. Import + add here when using a new one.
const icons = {
  Calculator, CalendarCheck, DraftingCompass, FileSearch, HardHat, Headset, LayoutDashboard,
  ListChecks, MessageSquareText, PhoneCall, Radar, Scale, ShieldCheck, ShoppingCart, Sparkles,
}

export default function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Sparkles
  return <Cmp {...props} />
}
