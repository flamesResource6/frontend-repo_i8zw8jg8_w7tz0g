import { motion } from 'framer-motion'
import { Cpu, Bot, Database, Workflow } from 'lucide-react'

const products = [
  {
    icon: Cpu,
    name: 'Data Pipelines',
    desc: 'Stream, clean, and enrich market and enterprise data in real-time with scalable pipelines.',
  },
  {
    icon: Bot,
    name: 'AI Agents',
    desc: 'Deploy autonomous agents that analyze, decide, and act across your stack securely.',
  },
  {
    icon: Database,
    name: 'Knowledge Graph',
    desc: 'Connect internal and external sources into a unified, queryable knowledge layer.',
  },
  {
    icon: Workflow,
    name: 'Automation Studio',
    desc: 'Design complex, multi-step workflows with human-in-the-loop controls.',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Products</h2>
          <p className="mt-4 text-gray-700">From data ingestion to decisioning and execution, TradeStream powers your full AI lifecycle.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 text-white grid place-content-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
