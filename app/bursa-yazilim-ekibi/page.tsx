"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';
import { 
  ArrowRight, CheckCircle, Code2, Smartphone, Globe, 
  Database, Cloud, Shield, Award, Users, Star,
  Phone, Mail, Github, Linkedin, Briefcase, GraduationCap
} from 'lucide-react';

export default function BursaYazilimEkibiPage() {
  const teamMembers = [
    {
      name: "Senior Full-Stack Developer",
      role: "Lead Developer",
      expertise: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
      experience: "8+ Yıl",
      projects: "50+ Proje",
      icon: Code2,
    },
    {
      name: "Mobile Developer",
      role: "iOS & Android Uzmanı",
      expertise: ["React Native", "Flutter", "Swift", "Kotlin"],
      experience: "6+ Yıl",
      projects: "30+ Uygulama",
      icon: Smartphone,
    },
    {
      name: "UI/UX Designer",
      role: "Tasarım Uzmanı",
      expertise: ["Figma", "Adobe XD", "Responsive Design", "User Research"],
      experience: "5+ Yıl",
      projects: "70+ Tasarım",
      icon: Globe,
    },
    {
      name: "DevOps Engineer",
      role: "Altyapı ve Güvenlik",
      expertise: ["AWS", "Docker", "CI/CD", "Kubernetes", "Security"],
      experience: "7+ Yıl",
      projects: "40+ Deploy",
      icon: Cloud,
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "NestJS", "Python", "PostgreSQL"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
    { category: "DevOps", items: ["AWS", "Docker", "CI/CD", "Linux", "Nginx"] },
  ];

  const achievements = [
    { value: "50+", label: "Tamamlanan Proje", icon: Briefcase },
    { value: "8+", label: "Yıl Ortalama Tecrübe", icon: GraduationCap },
    { value: "40+", label: "Mutlu Müşteri", icon: Users },
    { value: "%98", label: "Müşteri Memnuniyeti", icon: Star },
  ];

  return (
    <>
      <Navigation activeSection="home" scrollToSection={() => {}} />
      <main className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-2.5 rounded-full mb-6 border border-indigo-200/50 shadow-md"
          >
            <Users className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-700 font-semibold text-sm">Deneyimli Yazılım Uzmanları</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bursa Yazılım Ekibi
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              MSYazılımDuo
            </span>
          </motion.h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Bursa yazılım ekibi</strong> olarak 8+ yıllık deneyime sahip uzmanlarımızla 
            web, mobil ve kurumsal yazılım projeleri geliştiriyoruz. Full-stack developer, 
            mobile developer ve UI/UX uzmanlarından oluşan <strong>Bursa yazılım takımımız</strong> 
            ile projelerinizi başarıyla tamamlıyoruz.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/#contact"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Ekibimizle Çalışın</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+905355297508"
              className="group border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Arayın</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {achievements.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-white to-indigo-50/50 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Ekip Üyelerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her biri alanında uzman, <strong>Bursa yazılım geliştiricileri</strong> ile çalışın
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <member.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {member.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {member.projects}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Teknik Yeteneklerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern teknolojiler ve frameworkler ile <strong>Bursa yazılım ekibi</strong> olarak hizmet veriyoruz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Neden Bursa Yazılım Ekibimiz?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Award,
                title: "Deneyimli Kadro",
                description: "Her biri 5-8+ yıl tecrübeli yazılım uzmanları",
              },
              {
                icon: Shield,
                title: "Güvenli Geliştirme",
                description: "En son güvenlik standartları ve best practices",
              },
              {
                icon: Users,
                title: "İletişim Odaklı",
                description: "Şeffaf süreç ve düzenli raporlama",
              },
              {
                icon: Code2,
                title: "Modern Teknolojiler",
                description: "React, Next.js, Node.js ile güncel çözümler",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:scale-105 transition-all"
          >
            <span>Projenizia Başlayalım</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Bursa Yazılım Ekibi ile İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Projeleriniz için <strong>Bursa yazılımcı</strong> ekibimiz ile çalışmak ister misiniz? 
            Hemen bizimle iletişime geçin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="tel:+905355297508"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>+90 535 529 7508</span>
            </Link>
            <Link
              href="mailto:info@msduoyazilim.com"
              className="group border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>info@msduoyazilim.com</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
    <Footer scrollToSection={() => {}} setShowWhatsappModal={() => {}} />
    </>
  );
}
