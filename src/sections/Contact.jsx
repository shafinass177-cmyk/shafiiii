import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please include a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E8590C', '#FF9F1C', '#FFFFFF', '#10B981']
        });
      } catch (err) {
        // Fallback gracefully
      }

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-[400px] h-[400px] bg-brand-amber/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="GET IN TOUCH"
          title="LET'S WORK TOGETHER"
          subtitle="Have an ambitious project, an internship opportunity, or want to collaborate? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info, Socials, Resume Button (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white">
                START A CONVERSATION
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                I'm currently available for freelance client projects, engineering internships, and creative design collaborations. Let's build something exceptional together.
              </p>

              {/* Contact Details Cards */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel hover:border-brand-orange/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-zinc-500">Email Me At</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-brand-orange transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel">
                  <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-zinc-500">Based In</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">
                      Thejus Engineering College • Kerala, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-xs font-mono uppercase text-zinc-500 mb-3">
                LOOKING FOR CURRICULUM VITAE?
              </p>
              <MagneticButton
                href={personalInfo.resumeUrl}
                download="Shafi-Resume.pdf"
                onClick={(e) => {
                  // Fallback alert if mock pdf
                  if (personalInfo.resumeUrl === '#resume') {
                    e.preventDefault();
                    window.print();
                  }
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white hover:bg-brand-orange-dark shadow-orange-glow transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Download Shafi's Resume</span>
              </MagneticButton>
            </div>

            {/* Social Network Channels */}
            <div>
              <p className="text-xs font-mono uppercase text-zinc-500 mb-3">
                CONNECT ON SOCIAL CHANNELS
              </p>
              <div className="flex items-center gap-3">
                <MagneticButton
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-brand-orange hover:border-brand-orange transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </MagneticButton>

                <MagneticButton
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-brand-orange hover:border-brand-orange transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </MagneticButton>

                <MagneticButton
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-brand-orange hover:border-brand-orange transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </MagneticButton>

                <MagneticButton
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-brand-orange hover:border-brand-orange transition-colors"
                  aria-label="Twitter / X Profile"
                >
                  <Twitter className="w-5 h-5" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Floating Labels & Validation (Cols 6-12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display text-3xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-zinc-600 dark:text-zinc-300 max-w-md">
                  Thank you for reaching out. Shafi will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-brand-orange transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Floating Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full px-5 pt-6 pb-2 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border text-zinc-900 dark:text-white placeholder-transparent focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-zinc-200 dark:border-zinc-700/80 focus:border-brand-orange'
                    }`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 top-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-sans peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-mono peer-focus:text-brand-orange"
                  >
                    Your Name *
                  </label>
                  {errors.name && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Floating Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full px-5 pt-6 pb-2 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border text-zinc-900 dark:text-white placeholder-transparent focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-zinc-200 dark:border-zinc-700/80 focus:border-brand-orange'
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 top-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-sans peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-mono peer-focus:text-brand-orange"
                  >
                    Email Address *
                  </label>
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject Selector Field */}
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  >
                    <option value="Project Inquiry">Freelance Project Inquiry</option>
                    <option value="Internship Offer">Internship / Job Opportunity</option>
                    <option value="Design Collaboration">Design Collaboration</option>
                    <option value="Just Saying Hi">General Hello / Question</option>
                  </select>
                </div>

                {/* Message Floating Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full px-5 pt-6 pb-2 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border text-zinc-900 dark:text-white placeholder-transparent focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-zinc-200 dark:border-zinc-700/80 focus:border-brand-orange'
                    }`}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-5 top-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-sans peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-mono peer-focus:text-brand-orange"
                  >
                    Tell me about your project or idea *
                  </label>
                  {errors.message && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1.5 ml-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-orange to-brand-amber text-white hover:brightness-110 shadow-orange-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

