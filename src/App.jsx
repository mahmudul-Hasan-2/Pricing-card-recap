import './App.css'
import Cards from './Components/Cards/Cards';

const pricingData = [
  {
    id: 1,
    name: "Starter",
    price: 0,
    desc: "Best for learning and personal use",
    features: [
      "1 User Account",
      "5GB Secure Storage",
      "1 Website",
      "Basic Dashboard",
      "Email Support",
      "Weekly Backup",
      "Standard Performance",
      "Limited Customization",
      "Community Forum Access",
      "Shared Hosting",
      "Basic Security",
      "No Custom Domain",
      "No API Access",
      "Watermark Branding"
    ],
    limitations: [
      "No Priority Support",
      "Limited Speed",
      "No Advanced Analytics"
    ],
    btn: "Get Started"
  },

  {
    id: 2,
    name: "Growth",
    price: 19,
    desc: "For freelancers and small businesses",
    features: [
      "5 User Accounts",
      "50GB High-Speed Storage",
      "5 Websites",
      "Advanced Dashboard",
      "Email + Chat Support",
      "Daily Backup",
      "Improved Performance",
      "Custom Domain",
      "Basic API Access",
      "Analytics Dashboard",
      "Integration Support",
      "Remove Branding",
      "SSL Security",
      "SEO Tools",
      "Mobile Optimization"
    ],
    limitations: [
      "No Dedicated Manager",
      "Limited Integrations",
      "No Custom Infrastructure"
    ],
    btn: "Upgrade"
  },

  {
    id: 3,
    name: "Scale",
    price: 49,
    desc: "Perfect for startups and growing teams",
    features: [
      "20 User Accounts",
      "200GB Cloud Storage",
      "20 Websites",
      "Full Dashboard Access",
      "Priority Support (24/7)",
      "Real-time Backup",
      "High Performance Servers",
      "Multiple Custom Domains",
      "Full API Access",
      "Advanced Analytics",
      "Team Collaboration Tools",
      "Role Management",
      "Security Monitoring",
      "CDN Integration",
      "Automation Tools",
      "Performance Insights",
      "Custom Workflows"
    ],
    limitations: [
      "No Dedicated Infrastructure",
      "Limited SLA Guarantee"
    ],
    btn: "Get Started"
  },

  {
    id: 4,
    name: "Enterprise",
    price: 99,
    desc: "Advanced solution for large organizations",
    features: [
      "Unlimited Users",
      "Unlimited Storage",
      "Unlimited Websites",
      "Custom Dashboard",
      "Dedicated Account Manager",
      "Instant 24/7 Support",
      "Global Real-time Backup",
      "Enterprise Performance",
      "Unlimited Domains",
      "Custom API Development",
      "AI Analytics System",
      "Advanced Integrations",
      "Team & Access Control",
      "Security Compliance",
      "Private Cloud Hosting",
      "Custom CDN Setup",
      "Performance Optimization",
      "Service Level Agreement (SLA)",
      "Onboarding & Training",
      "White-label Solution",
      "Custom Branding",
      "Priority Feature Access"
    ],
    limitations: [
      "Custom Pricing Required for Add-ons"
    ],
    btn: "Contact Sales"
  }
];

function App() {

  return (
    <>
      <Cards pricingData={pricingData}></Cards>
    </>
  )
}

export default App
