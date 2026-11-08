import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [copiedKey, setCopiedKey] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    purpose: 'Policy Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 2200);
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.purpose} — ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Japhet,\n\n${formData.message}\n\n--\nName: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInquiry Type: ${formData.purpose}`
    );
    window.location.href = `mailto:japhet.benefoh@fishcom.gov.gh?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Policy & Research Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 leading-tight mb-4">
            Connect for Research, Policy Dialogue & Consultations
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Open to doctoral research opportunities, international blue economy collaborations, GESI technical consultations, and ECOWAS coastal policy dialogues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Verified Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-serif text-stone-900 dark:text-stone-100 mb-1">
                Direct Contact Channels
              </h3>

              {/* Official Email */}
              <div className="p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>Official State Email</span>
                  </span>
                  <button
                    onClick={() => handleCopy('japhet.benefoh@fishcom.gov.gh', 'official-email')}
                    className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    {copiedKey === 'official-email' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:japhet.benefoh@fishcom.gov.gh"
                  className="font-mono text-xs text-stone-900 dark:text-stone-100 hover:underline font-medium break-all"
                >
                  japhet.benefoh@fishcom.gov.gh
                </a>
              </div>

              {/* Personal / Academic Email */}
              <div className="p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>Direct / Academic Email</span>
                  </span>
                  <button
                    onClick={() => handleCopy('jcanbenefoh10@gmail.com', 'personal-email')}
                    className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    {copiedKey === 'personal-email' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:jcanbenefoh10@gmail.com"
                  className="font-mono text-xs text-stone-900 dark:text-stone-100 hover:underline font-medium break-all"
                >
                  jcanbenefoh10@gmail.com
                </a>
              </div>

              {/* Telephone */}
              <div className="p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                  <span className="font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>Telephone & WhatsApp</span>
                  </span>
                  <button
                    onClick={() => handleCopy('+233538000121', 'phone')}
                    className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="tel:+233538000121"
                  className="font-mono text-xs text-stone-900 dark:text-stone-100 hover:underline font-medium"
                >
                  +233 538 000 121
                </a>
              </div>

              {/* Physical Location */}
              <div className="p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>Headquarters & Station</span>
                </div>
                <div className="text-xs text-stone-800 dark:text-stone-200">
                  Fisheries Commission, Ministry of Fisheries and Aquaculture Development, Accra, Ghana
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch / Inquiry Composer */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 md:p-8 shadow-xs">
            <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-2">
              Send an Inquiry or Research Proposition
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mb-6 leading-relaxed">
              Fill in your details below to launch a pre-formatted message directly to Japhet Benefoh’s official desk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Prof. / Dr. / Ms. / Mr."
                    className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 rounded focus:outline-hidden focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="University, NGO, or Agency"
                    className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 rounded focus:outline-hidden focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@institution.org"
                    className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 rounded focus:outline-hidden focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 rounded focus:outline-hidden focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100"
                  >
                    <option value="Doctoral / Graduate Research Supervision">Doctoral / Graduate Research Supervision</option>
                    <option value="Policy Brief & Technical Consultation">Policy Brief & Technical Consultation</option>
                    <option value="GESI & Fisheries Data Collaboration">GESI & Fisheries Data Collaboration</option>
                    <option value="Academic Conference / Speaking Invitation">Academic Conference / Speaking Invitation</option>
                    <option value="ECOWAS Blue Economy Dialogue">ECOWAS Blue Economy Dialogue</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                  Message / Brief Outline
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the scope of your inquiry, prospective research collaboration, or policy review timeline..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 rounded focus:outline-hidden focus:ring-1 focus:ring-amber-500 text-stone-900 dark:text-stone-100 leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 rounded hover:bg-stone-800 dark:hover:bg-amber-500 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>

                {submitted && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 animate-in fade-in">
                    <Check className="w-3.5 h-3.5" />
                    <span>Email client initiated with formatted dispatch.</span>
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
