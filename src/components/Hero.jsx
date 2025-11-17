import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900"
          >
            AI Data & Automation Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg text-gray-700"
          >
            TradeStream helps teams design, deploy, and scale AI-driven workflows that connect your data to real business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800">
              Get a demo
            </a>
            <a href="#products" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:bg-white">
              Explore products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-600"
          >
            {[
              'Banks',
              'Brokerages',
              'Funds',
              'Fintech',
            ].map((c) => (
              <div key={c} className="text-sm">{c}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
