import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Mail, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePaletteAccent?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  activePaletteAccent = '#6366f1',
}) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Writer & Creator');
  const [submitted, setSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Trigger celebratory confetti blast
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#38bdf8']
      });
    } catch (err) {
      // ignore if confetti fails
    }

    const assignedNumber = Math.floor(Math.random() * 400) + 120;
    setQueueNumber(assignedNumber);
    setSubmitted(true);
    localStorage.setItem('smriti_waitlist_email', email);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smriti 2.0 Early Access</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Experience notes without tabs.
            </h3>

            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Join the beta to get early access to Smriti Notes, the 162-palette system, and the upcoming connected sticky notes canvas.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="suriya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  What do you primarily do?
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option>Writer & Creator</option>
                  <option>Software Engineer / Architect</option>
                  <option>Student & Researcher</option>
                  <option>Product & Design Lead</option>
                  <option>Executive & Deep Thinker</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 shadow-lg shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Request Early Beta Invite</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam. No credit card required. Private & local.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              You are on the priority list!
            </h3>

            <p className="mt-2 text-sm text-slate-300 max-w-sm mx-auto">
              We saved your spot. You are <strong className="text-amber-400">#{queueNumber}</strong> in line for the next rollout batch.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono text-center">
              Invite code sent to: <span className="text-white font-semibold">{email}</span>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors"
            >
              Back to Exploring Smriti
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

