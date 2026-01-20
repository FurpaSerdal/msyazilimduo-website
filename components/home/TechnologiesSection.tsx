"use client";

import { motion } from 'framer-motion';

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Teknolojilerimiz</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım geliştirme</strong> süreçlerinde kullandığımız modern teknolojiler ve frameworkler
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {[
            { name: "React/Next.js", color: "bg-blue-100 text-blue-800" },
            { name: "TypeScript", color: "bg-indigo-100 text-indigo-800" },
            { name: "Node.js", color: "bg-green-100 text-green-800" },
            { name: ".NET Core", color: "bg-purple-100 text-purple-800" },
            { name: "Vue.js", color: "bg-emerald-100 text-emerald-800" },
            { name: "Angular", color: "bg-red-100 text-red-800" },
            { name: "Python", color: "bg-yellow-100 text-yellow-800" },
            { name: "AWS/Azure", color: "bg-orange-100 text-orange-800" },
            { name: "Docker", color: "bg-cyan-100 text-cyan-800" },
            { name: "PostgreSQL", color: "bg-blue-100 text-blue-800" },
            { name: "MongoDB", color: "bg-green-100 text-green-800" },
            { name: "React Native", color: "bg-indigo-100 text-indigo-800" },
            { name: "Flutter", color: "bg-sky-100 text-sky-800" },
            { name: "WordPress", color: "bg-gray-100 text-gray-800" },
            { name: "Shopify", color: "bg-emerald-100 text-emerald-800" },
            { name: "Laravel", color: "bg-red-100 text-red-800" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`${tech.color} rounded-lg p-3 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <span className="font-medium text-xs sm:text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
