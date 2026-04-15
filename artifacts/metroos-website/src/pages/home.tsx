import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Zap, Activity, ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-white/80 backdrop-blur-md border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/icon.png" alt="MetroOS Icon" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-foreground">MetroOS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("product")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Product</button>
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</button>
        </div>

        <Button 
          onClick={() => scrollTo("contact")}
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
        >
          Join Pilot
        </Button>
      </div>
    </nav>
  );
};

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fdf8fa]">
    <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div className="absolute top-[-10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-[-10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <HeroBackground />
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Starting in Nairobi
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              The Operating System for <span className="text-primary">African Transit</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-medium leading-relaxed">
              Payments, intelligence, and electric infrastructure for the continent's moving cities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg shadow-xl shadow-primary/25 transition-all hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Pilot <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full h-14 px-8 text-lg border-2 hover:bg-muted/50 transition-all"
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="product" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeIn} className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Nairobi Moves 2 Million People Daily. <br/>
              <span className="text-muted-foreground">No One Knows How.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { num: "40k+", label: "Matatus", sub: "across 500+ SACCOs" },
              { num: "$500M", label: "Annual Revenue", sub: "with up to 30% leakage" },
              { num: "Zero", label: "Real-time Data", sub: "for urban planning" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="p-8 rounded-3xl bg-[#fdf8fa] border border-primary/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <div className="text-5xl md:text-6xl font-black text-primary font-mono tracking-tighter mb-4">{stat.num}</div>
                <div className="text-xl font-bold text-foreground mb-1">{stat.label}</div>
                <div className="text-muted-foreground">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Three Layers. One Platform.</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Infrastructure built for the realities of African transit.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <CreditCard className="h-8 w-8 text-[#fdf8fa]" />,
                title: "Payments",
                desc: "Contextual NFC cards, rugged driver terminals, and automated, transparent settlements for SACCOs."
              },
              {
                icon: <Activity className="h-8 w-8 text-[#fdf8fa]" />,
                title: "Intelligence",
                desc: "Real-time route optimization, predictive demand mapping, and comprehensive SACCO fleet dashboards."
              },
              {
                icon: <Zap className="h-8 w-8 text-[#fdf8fa]" />,
                title: "Energy",
                desc: "EV charging infrastructure, strategic fleet financing, and intelligent grid management for the electric transition."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section id="about" className="py-24 bg-[#fdf8fa]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Built Different</h2>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-medium">
              Others imposed top-down mandates. <br className="hidden md:block"/>
              <span className="text-foreground">We empower drivers and SACCOs with genuine earnings increases and operational transparency.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Traction / CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            {...fadeIn}
            className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-primary to-[#4a1c7d] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-20 opacity-10">
              <TrendingUp className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Piloting in Nairobi</h2>
              <p className="text-xl text-white/90 mb-10 max-w-xl">
                Currently in discussions with professional SACCOs for our Q1 2026 pilot program. Be the first to know.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-14 rounded-full px-6 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white focus-visible:border-white text-lg"
                />
                <Button className="h-14 rounded-full px-8 bg-white text-primary hover:bg-white/90 text-lg font-semibold shrink-0">
                  Get Pilot Updates
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-foreground text-white/60 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="MetroOS" className="h-8 brightness-0 invert opacity-80" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <a href="mailto:metroostech@gmail.com" className="hover:text-white transition-colors">metroostech@gmail.com</a>
              <a href="https://linkedin.com/company/metroos-technologies" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="mt-8 text-center md:text-left text-sm text-white/40">
            &copy; 2026 MetroOS Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
