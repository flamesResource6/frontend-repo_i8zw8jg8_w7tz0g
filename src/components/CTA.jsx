import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Ready to accelerate with AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-700"
        >
          Tell us about your data, your workflows, and the outcomes you want. We'll show you what's possible.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid gap-3 sm:grid-cols-3 max-w-3xl"
        >
          <input type="text" placeholder="Name" className="rounded-full border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <input type="email" placeholder="Work email" className="rounded-full border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <button className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800">Request demo</button>
        </motion.form>

        <p className="mt-6 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  )
}
