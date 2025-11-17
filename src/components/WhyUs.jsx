import { motion } from 'framer-motion'
import { ShieldCheck, Gauge, Lock, Cable } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SOC2-ready security, role-based access, and audit trails across every action.',
  },
  {
    icon: Gauge,
    title: 'Performance at scale',
    desc: 'Low-latency streaming and batch processing built for the most demanding workloads.',
  },
  {
    icon: Lock,
    title: 'Data privacy first',
    desc: 'Your data stays yours. VPC/VNet deploy options and zero-retention controls.',
  },
  {
    icon: Cable,
    title: 'Plugs into your stack',
    desc: 'Native connectors for data warehouses, message buses, ERPs, CRMs, and trading systems.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Why TradeStream</h2>
            <p className="mt-4 text-gray-700">We combine deep financial markets expertise with cutting-edge AI engineering to deliver reliable automation where it matters most.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-content-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-indigo-50 via-purple-50 to-rose-50 p-8">
            <div className="prose prose-indigo max-w-none">
              <h3 className="text-gray-900">Where we help</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Trade surveillance, TCA, and market microstructure analytics</li>
                <li>Client reporting, onboarding, and KYC processes</li>
                <li>Research workflow acceleration and synthesis</li>
                <li>Operational automations across finance back-office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
