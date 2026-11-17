"use client";

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { MotionConfig } from 'framer-motion';
import {
  Code2, CheckCircle, ArrowRight,
  Zap, Database, RefreshCw, GitBranch, Globe, Server,
  Smartphone, Truck, CreditCard, BarChart, Settings,
  Target, Building, ShieldCheck, Clock, TrendingUp,
  Award, MessageCircle, Terminal, Cpu, CheckCircle2
} from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';

const FloatingButtons = dynamic(() => import('@/components/ui/FloatingButtons'), { ssr: false });
const Notification = dynamic(() => import('@/components/ui/Notification'), { ssr: false });

const supportedErpList = [
  {
    name: "SAP",
    badge: "ENTERPRISE_ERP",
    description: "SAP Business One ve S/4HANA sistemleri için gerçek zamanlı iki yönlü veri entegrasyonu.",
    features: ["SAP Business One (B1)", "SAP S/4HANA", "DI API & Service Layer", "B2B Bayi Portalları"],
    color: "from-blue-600 to-cyan-500",
    border: "border-blue-500/30 hover:border-blue-400",
  },
  {
    name: "Logo",
    badge: "LOCAL_LEADER",
    description: "Logo GO3, Tiger3 ve Enterprise sistemleri ile tam uyumlu otomatik sipariş ve stok köprüsü.",
    features: ["Logo GO3 / GO Wings", "Logo Tiger3 / Enterprise", "Logo Objects & REST", "E-Fatura & Cari Eşitleme"],
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30 hover:border-emerald-400",
  },
  {
    name: "Mikro",
    badge: "RETAIL_ERP",
    description: "Mikro v16 ve v18 veritabanları ile e-ticaret, depo ve muhasebe sistemleri arasında anlık senkronizasyon.",
    features: ["Mikro v16 / v17 / v18", "Mikro Fly & Jump", "SQL & Webhook Köprüsü", "Pazaryeri Sipariş Aktarımı"],
    color: "from-purple-600 to-indigo-600",
    border: "border-purple-500/30 hover:border-purple-400",
  },
  {
    name: "Özel ERP & SQL",
    badge: "CUSTOM_ADAPTER",
    description: "Eta, Link, Netsis veya şirketinize özel şirket içi veritabanları için özel API adaptörü geliştirme.",
    features: ["Netsis & Eta & Link", "MS SQL / PostgreSQL Bridge", "Özel Şirket İçi DB'ler", "Özelleştirilmiş Veri ETL"],
    color: "from-amber-500 to-orange-600",
    border: "border-amber-500/30 hover:border-amber-400",
  },
];

const integrationAreas = [
  {
    icon: Globe,
    endpoint: "SYNC /marketplaces",
    title: "E-Ticaret & Pazaryeri",
    description: "Trendyol, Hepsiburada, Amazon ve Shopify sipariş ve stoklarının ERP'nizle anlık iki yönlü senkronizasyonu.",
    features: ["Otomatik Ürün & Fiyat", "Anlık Stok Düşümü", "Sipariş & Fatura Otomasyonu", "İptal/İade Takibi"]
  },
  {
    icon: Smartphone,
    endpoint: "PUSH /field-sales",
    title: "Mobil Saha Satış & B2B",
    description: "Saha plasiyerlerinizin ve B2B bayilerinizin doğrudan ERP stoklarına erişip sipariş girebileceği mobil çözümler.",
    features: ["Canlı Cari Ekstre", "Plasiyer Sipariş Girişi", "Barkodlu Stok Okuma", "Offline Çalışma Desteği"]
  },
  {
    icon: Truck,
    endpoint: "TX /carrier-api",
    title: "Kargo & Lojistik",
    description: "Yurtiçi, Aras, MNG, Sürat gibi kargo firmalarıyla barkod, takip kodu ve teslimat durumu entegrasyonu.",
    features: ["Otomatik Barkod Basımı", "Kargo Takip Senkronizasyonu", "Teslimat Bildirimleri", "İade Lojistik Yönetimi"]
  },
  {
    icon: CreditCard,
    endpoint: "SETTLE /payment-mesh",
    title: "Ödeme & Sanal POS",
    description: "İyzico, PayTR ve banka sanal POS'larıyla tahsilat işlemlerinin anında ERP cari hesaplarına işlenmesi.",
    features: ["Banka API Entegrasyonu", "Otomatik Tahsilat Kaydı", "B2B Kredi Kartı Tahsilatı", "3D Secure Doğrulama"]
  },
  {
    icon: BarChart,
    endpoint: "HOOK /crm-bi",
    title: "CRM & İş Zekası (BI)",
    description: "Müşteri ve satış verilerinin HubSpot, Zoho, PowerBI gibi sistemlere aktarılması ve raporlanması.",
    features: ["Müşteri Yaşam Döngüsü", "Satış Trend Analizi", "Otomatik Teklif & Sözleşme", "Yönetici KPI Dashboard"]
  },
  {
    icon: Server,
    endpoint: "GATEWAY /cloud-cluster",
    title: "Bulut & Mikroservis",
    description: "Yüksek hacimli veri akışlarını yöneten, kesintiyi önleyen kuyruk (RabbitMQ / Redis) ve API Gateway mimarisi.",
    features: ["Yüksek Hacimli İstek Kuyruğu", "Sıfır Veri Kaybı Garantisi", "Otomatik Hata İyileştirme", "Yedekli Bulut Sunucu"]
  },
];

export default function EntegrasyonPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  const sendWhatsAppMessage = useCallback(() => {
    const message = whatsappMessage || 'Merhaba, ERP entegrasyon hizmetleriniz hakkında bilgi almak istiyorum.';
    const phoneNumber = '905355297508';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setShowWhatsappModal(false);
    setWhatsappMessage('');
  }, [whatsappMessage]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          erpSystem: formData.get('erpSystem'),
          message: formData.get('message'),
          source: 'entegrasyon',
          location: 'Bursa',
        }),
      });

      if (!response.ok) throw new Error('Gönderim başarısız');

      setNotification({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! Mühendislerimiz en kısa sürede teknik analiz ile iletişime geçecektir.',
      });
      form.reset();
    } catch {
      setNotification({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan WhatsApp üzerinden iletişime geçin.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-50 overflow-x-clip text-slate-900" suppressHydrationWarning>
        {notification && (
          <Notification notification={notification} onClose={() => setNotification(null)} />
        )}

        <FloatingButtons
          showWhatsappModal={showWhatsappModal}
          whatsappMessage={whatsappMessage}
          setWhatsappMessage={setWhatsappMessage}
          setShowWhatsappModal={setShowWhatsappModal}
          sendWhatsAppMessage={sendWhatsAppMessage}
        />

        <Navigation contactTargetId="iletisim" />

        {/* ================= HERO SECTION (DEVELOPER STUDIO AESTHETIC) ================= */}
        <section className="relative z-10 overflow-hidden bg-[#050811] text-white pt-28 sm:pt-34 pb-16 sm:pb-22 border-b border-slate-800">
          {/* Cyber Background Patterns */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
            <div className="absolute -top-32 left-1/3 w-[580px] h-[580px] bg-blue-600/20 rounded-full blur-[130px]" />
            <div className="absolute top-28 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050811] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
              {/* Left Column */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Terminal Pill */}
                <div className="inline-flex items-center gap-2.5 bg-slate-900/90 text-cyan-300 px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 border border-cyan-500/30 shadow-lg shadow-cyan-950/30">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wide">
                    ~/msduoyazilim <span className="text-slate-500">$</span> erp-bridge --sync --bursa
                  </span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
                </div>

                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold mb-5 sm:mb-6 text-white leading-[1.12] tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    ERP Entegrasyon
                  </span>
                  <br />
                  <span className="text-2xl sm:text-4xl xl:text-[2.65rem] text-slate-100 font-bold inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start mt-1">
                    <span>Profesyonel Çözümler &amp; API Köprüsü</span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Bursa&apos;da işletmenizin <strong className="text-white font-semibold">SAP, Logo, Mikro</strong> gibi ERP sistemlerini web platformları, mobil uygulamalar, e-ticaret pazaryerleri ve kargo API&apos;leri ile gerçek zamanlı entegre ediyor; <span className="text-cyan-300 font-mono text-sm">sıfır veri kaybı</span> ve tam otomasyonla operasyonel verimliliğinizi maksimuma çıkarıyoruz.
                </p>

                <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start items-center">
                  <a
                    href="#iletisim"
                    className="w-full sm:w-auto group bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2.5 text-base border border-cyan-400/30 active:scale-95"
                  >
                    <Cpu className="w-5 h-5 text-cyan-100" />
                    <span>Ücretsiz Entegrasyon Analizi</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                  </a>

                  <button
                    onClick={() => setShowWhatsappModal(true)}
                    className="w-full sm:w-auto group border border-emerald-500/40 bg-slate-900/90 backdrop-blur-sm text-emerald-300 px-7 py-3.5 rounded-xl font-semibold hover:border-emerald-400 hover:bg-emerald-950/50 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base shadow-sm hover:shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform stroke-[2.25]" />
                    <span>WhatsApp Mühendislik Hattı</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Çift Yönlü Real-Time Sync
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Zero Data Loss Garantisi
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    Yerinde Bursa Desteği
                  </span>
                </div>
              </div>

              {/* Right Column: Live ERP Bridge Visual Panel */}
              <div className="lg:col-span-5">
                <div className="relative w-full max-w-lg mx-auto select-none">
                  <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-500/25 rounded-3xl blur-xl pointer-events-none" />

                  <div className="relative bg-[#070B14] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
                    {/* Window Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                        <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
                        <span className="ml-2 font-mono text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                          erp-bridge.daemon
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[11px] text-emerald-400 font-semibold">SYNC_OK</span>
                      </div>
                    </div>

                    {/* Window Body: Real-Time Stream */}
                    <div className="p-4 sm:p-5 space-y-4">
                      {/* Code Snippet */}
                      <div className="rounded-xl bg-slate-950 p-3.5 sm:p-4 font-mono text-[11px] leading-relaxed border border-slate-800/80">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1.5 mb-2 border-b border-slate-800">
                          <span>{"// Real-Time Transaction Adapter"}</span>
                          <span className="text-cyan-400">REST &amp; Webhook</span>
                        </div>
                        <p className="text-slate-400">
                          <span className="text-pink-400">const</span> adapter = <span className="text-cyan-300">createErpBridge</span>({'{'}
                        </p>
                        <p className="pl-4 text-slate-300">
                          target: <span className="text-amber-300">&apos;SAP_B1 | LOGO_TIGER | MIKRO&apos;</span>,
                        </p>
                        <p className="pl-4 text-slate-300">
                          mode: <span className="text-emerald-300">&apos;BIDIRECTIONAL_REALTIME&apos;</span>,
                        </p>
                        <p className="pl-4 text-slate-300">
                          resilience: <span className="text-indigo-300">&apos;REDIS_RETRY_QUEUE&apos;</span>,
                        </p>
                        <p className="text-slate-400">{'}'});</p>
                        <p className="text-emerald-400 mt-2 font-semibold">
                          &gt; 2,410 transactions processed (0 errors)
                        </p>
                      </div>

                      {/* Visual Flow Modules */}
                      <div className="space-y-2">
                        {[
                          { label: "Pazaryeri & E-Ticaret Siparişleri", stat: "14ms Sync", color: "text-cyan-400" },
                          { label: "Logo / SAP / Mikro Stok & Cari Eşitleme", stat: "Zero-Loss", color: "text-emerald-400" },
                          { label: "Kargo Takip & E-Fatura Kesimi", stat: "Automated", color: "text-indigo-400" },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono"
                          >
                            <span className="text-slate-300 truncate">{item.label}</span>
                            <span className={`font-semibold ${item.color} flex-shrink-0 ml-2`}>{item.stat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Status Strip */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 font-mono text-[10px] text-slate-400">
                        <span>LATENCY: 14ms</span>
                        <span>QUEUE: 0 PENDING</span>
                        <span className="text-cyan-400">SLA: 99.98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core ERP Stack Bar */}
            <div className="mb-12 rounded-2xl bg-slate-900/75 border border-slate-800/90 px-4 py-3.5 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  ERP_ADAPTERS //
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { label: "SAP B1 & S/4HANA", tag: "Enterprise" },
                    { label: "Logo GO3 & Tiger3", tag: "Full-Sync" },
                    { label: "Mikro v16 & Fly", tag: "SQL/API" },
                    { label: "REST & GraphQL Webhooks", tag: "Engine" },
                    { label: "RabbitMQ & Redis", tag: "Queue" },
                    { label: "PostgreSQL & MS SQL", tag: "Databases" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/40 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Telemetry Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: "100+", label: "Entegrasyon Sistemi", code: "ACTIVE_PIPELINE", icon: GitBranch, gradient: "from-cyan-400 to-blue-400" },
                { value: "SAP & Logo", label: "Tam Sertifikalı ERP", code: "ERP_CONNECTORS", icon: Database, gradient: "from-indigo-400 to-purple-400" },
                { value: "%99.9", label: "Sistem Başarı Oranı", code: "ZERO_DATA_LOSS", icon: CheckCircle, gradient: "from-emerald-400 to-teal-400" },
                { value: "7/24", label: "Mühendislik Desteği", code: "SLA_MONITORING", icon: Clock, gradient: "from-amber-400 to-orange-400" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col items-center text-center group"
                >
                  <div className="w-full flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {stat.code}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                      <stat.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-mono`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-300 font-medium text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ERP AÇIKLAMA VE MİMARİ ================= */}
        <section className="py-20 px-4 sm:px-6 bg-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-blue-600" />
                <span>&lt;Mimari Yaklaşımımız /&gt;</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                ERP Entegrasyonu Nedir ve Nasıl Çalışır?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-4xl mx-auto">
                ERP entegrasyonu; işletmenizin ERP sistemini (SAP, Logo, Mikro vb.) e-ticaret siteleriniz, pazaryerleri, mobil saha satış ekipleriniz ve muhasebe yazılımlarınızla birbirine bağlayarak <strong>çift yönlü veri akışını otomatikleştiren</strong> yüksek performanslı yazılım köprüsüdür.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-blue-600 font-semibold">{"// DATA_SYNC_ENGINE"}</span>
                      <h3 className="text-xl font-bold text-slate-900">Gerçek Zamanlı Veri Senkronizasyonu</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Farklı platformlar arasında milisaniyeler seviyesinde veri eşitlemesi yaparak manuel Excel aktarımlarını ve tutarsız stok riskini tamamen ortadan kaldırıyoruz.
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-slate-200">
                    {["Anlık Stok & Fiyat Eşitleme", "Canlı Sipariş & İade Aktarımı", "Cari Bakiye & Ekstre Entegrasyonu", "E-Fatura & E-İrsaliye Otomasyonu"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-indigo-600 font-semibold">{"// AUTOMATION_WORKFLOW"}</span>
                      <h3 className="text-xl font-bold text-slate-900">Uçtan Uca Süreç Otomasyonu</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Müşterinin e-ticaretten verdiği siparişten kargo barkodunun basımına, faturanın kesilmesinden depodaki stok düşümüne kadar tüm zinciri insansız yürütüyoruz.
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-slate-200">
                    {["Otomatik Kargo Takip Kodu Ataması", "Kusursuz Fatura & Tahsilat Kaydı", "Kuyruk Mimarisiyle Sıfır Veri Kaybı", "Yönetici Canlı Telemetri & Hata Bildirimi"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DESTEKLENEN ERP SİSTEMLERİ ================= */}
        <section className="py-20 px-4 sm:px-6 bg-[#060A14] text-white relative z-10 border-y border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-3">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>&lt;Desteklenen ERP Sistemleri /&gt;</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white tracking-tight">
                Bursa İşletmelerinin Kullandığı ERP Sistemleri
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
                Bursa&apos;daki fabrika, toptancı ve e-ticaret işletmelerinin kullandığı başlıca ERP sistemleri için native API ve veritabanı entegrasyon çözümleri sunuyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedErpList.map((erp, index) => (
                <div
                  key={index}
                  className={`bg-slate-900/85 backdrop-blur-md rounded-2xl p-6 border ${erp.border} shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${erp.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                        <Database className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {erp.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{erp.name}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">{erp.description}</p>

                    <ul className="space-y-2 mb-6 pt-3 border-t border-slate-800">
                      {erp.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span className="text-slate-200 text-xs font-mono">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#iletisim"
                    className="w-full py-2 px-3 rounded-lg bg-slate-950 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-800 transition-colors"
                  >
                    <span>{erp.name} Entegrasyonu İste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ENTEGRASYON ALANLARI ================= */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>&lt;Geniş Entegrasyon Yelpazesi /&gt;</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                Entegrasyon Alanlarımız
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
                ERP sisteminizi dijital dünyanın tüm kanallarıyla konuşur hale getiriyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationAreas.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Endpoint Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-950 text-slate-300 border-b border-slate-800 font-mono text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-cyan-400 font-semibold">{service.endpoint}</span>
                      </div>
                      <span className="text-slate-500">v3.0</span>
                    </div>

                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md mb-4">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>

                      <ul className="space-y-2 pt-3 border-t border-slate-100">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-700 text-xs sm:text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <a
                      href="#iletisim"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                    >
                      <span>Bu Entegrasyonu Başlat</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SÜREÇ (AGILE & DEVOPS LIFECYCLE) ================= */}
        <section className="py-20 px-4 sm:px-6 bg-white relative z-10 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
                <GitBranch className="w-3.5 h-3.5 text-purple-600" />
                <span>&lt;4 Adımda Canlı Entegrasyon /&gt;</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                Entegrasyon Sürecimiz
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
                Bursa&apos;daki işletmeniz için şeffaf, planlı ve sıfır veri kaybı garantili entegrasyon yaşam döngüsü
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  branch: "stage/schema-map",
                  title: "Analiz & Şema Eşleme",
                  desc: "Mevcut ERP veri yapınız, cari/stok tablolarınız ve hedef sistem gereksinimleri incelenir.",
                  icon: Settings,
                  cmd: "$ erp analyze --schema"
                },
                {
                  step: "02",
                  branch: "feat/api-adapter",
                  title: "API & Adaptör Geliştirme",
                  desc: "İki yönlü REST/Webhook adaptörleri, kuyruk mekanizmaları ve güvenlik katmanı kodlanır.",
                  icon: Code2,
                  cmd: "$ erp build --bidirectional"
                },
                {
                  step: "03",
                  branch: "test/stress-test",
                  title: "Test & Stres Testi",
                  desc: "Simülasyon ortamında binlerce işlemle veri tutarlılığı, hata yönetimi ve hız test edilir.",
                  icon: Target,
                  cmd: "$ erp test --zero-loss"
                },
                {
                  step: "04",
                  branch: "release/live-sla",
                  title: "Canlıya Alma & 7/24 Destek",
                  desc: "Sistem canlıya alınır, personel eğitimi verilir ve 7/24 teknik monitoring devri başlar.",
                  icon: CheckCircle,
                  cmd: "$ erp deploy --prod --monitor"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded font-semibold">
                        {item.branch}
                      </span>
                      <span className="font-mono text-xs font-bold bg-slate-900 text-cyan-400 px-2 py-0.5 rounded">
                        #{item.step}
                      </span>
                    </div>

                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-cyan-300 border border-slate-800 truncate">
                    {item.cmd}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= NEDEN MSDUOYAZILIM ================= */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50 relative z-10 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>&lt;Neden msduoyazilim? /&gt;</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                Bursa&apos;da Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
                Bursa sanayi ve ticaret dinamiklerini iyi bilen yerel yazılım mühendisliği ekibimizle fark yaratıyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building,
                  title: "Bursa'da Yüz Yüze Yerel Destek",
                  description: "Uzaktan çağrı merkezleri yerine Bursa'da ofisinize gelip sistemlerinizi yerinde analiz eden mühendis ekibi."
                },
                {
                  icon: ShieldCheck,
                  title: "Güvenli Mimari & Sıfır Veri Kaybı",
                  description: "Şifrelenmiş veri iletimi, kuyruk mekanizmaları ve ani kesintilerde bile veriyi kurtaran sağlam mimari."
                },
                {
                  icon: Clock,
                  title: "7/24 SLA & Hızlı Müdahale",
                  description: "Kritik satış veya sevkiyat anında yaşanabilecek aksaklıklara anında müdahale eden SLA teknik destek hattı."
                },
                {
                  icon: TrendingUp,
                  title: "Ölçeklenebilir & Yüksek Hızlı Kod",
                  description: "Günde yüz binlerce siparişi sorunsuz aktaran modern Next.js, Node.js ve Redis destekli altyapı."
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= İLETİŞİM FORMU (TERMINAL BOX) ================= */}
        <section id="iletisim" className="py-20 px-4 sm:px-6 bg-slate-900 text-white relative z-10 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-3">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>&lt;Entegrasyon Analizi /&gt;</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white tracking-tight">
                Ücretsiz ERP Entegrasyon Analizi İsteyin
              </h2>
              <p className="text-slate-300 text-base max-w-2xl mx-auto">
                ERP sisteminizi ve entegre etmek istediğiniz platformları yazın, mühendislerimiz 24 saat içinde net yol haritası ve teklifle dönüş yapsın.
              </p>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
                </div>
                <span className="font-mono text-xs text-slate-400">erp-analysis-request.ts</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                        Ad Soyad <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="İsminiz"
                        required
                        className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                        Telefon Numarası <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0535 529 75 08"
                        required
                        className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                        E-posta Adresi <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ornek@sirketiniz.com"
                        required
                        className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                        Şirket / Firma Adı
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Şirket adınız (Bursa)"
                        className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="erpSystem" className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                      Kullandığınız ERP Sistemi <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="erpSystem"
                      name="erpSystem"
                      required
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    >
                      <option value="">Seçiniz</option>
                      <option value="sap">SAP (Business One / S4HANA)</option>
                      <option value="logo">Logo (GO3 / Tiger3 / Enterprise)</option>
                      <option value="mikro">Mikro (v16 / v18 / Fly / Jump)</option>
                      <option value="netsis">Netsis</option>
                      <option value="eta">Eta</option>
                      <option value="link">Link</option>
                      <option value="diger">Diğer / Özel Şirket İçi ERP</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                      Entegrasyon İhtiyacınız &amp; Detaylar <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="ERP sisteminizi hangi platformlarla entegre etmek istiyorsunuz? (e-ticaret, mobil saha satış, pazaryerleri, kargo, sanal POS vb.)"
                      required
                      rows={4}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed border border-cyan-400/30"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>İletiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Terminal className="w-4 h-4 text-cyan-200" />
                        <span>Ücretsiz Entegrasyon Analizi İste</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer setShowWhatsappModal={setShowWhatsappModal} />
      </div>
    </MotionConfig>
  );
}
