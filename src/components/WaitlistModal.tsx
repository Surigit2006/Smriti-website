import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePaletteAccent?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Writer & Creator');
  const [submitted, setSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#0F4C81', '#E87A90', '#16c847']
      });
    } catch (err) {
      // ignore
    }

    const assignedNumber = Math.floor(Math.random() * 300) + 120;
    setQueueNumber(assignedNumber);
    setSubmitted(true);
    localStorage.setItem('smriti_waitlist_email', email);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white border border-black/10 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#666055] hover:text-[#141414] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#0F4C81] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smriti Notes Priority Beta</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-archivo font-bold uppercase text-[#141414] tracking-tight">
              Experience notes without tabs.
            </h3>

            <p className="mt-2 text-sm text-[#666055] leading-relaxed">
              Join the priority list for upcoming cloud sync, ready-to-use templates, and the connected visual sticky notes canvas.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#141414] mb-1.5 font-mono">
                  Your Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-black/40" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF7F2] border border-black/10 text-sm text-[#141414] placeholder-black/40 focus:outline-none focus:border-[#0F4C81] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#141414] mb-1.5 font-mono">
                  Primary Focus
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-black/10 text-xs text-[#141414] focus:outline-none focus:border-[#0F4C81]"
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
                  className="w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-[#141414] hover:bg-[#0F4C81] shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Request Priority Invite</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#666055] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16c847]" />
                <span>Zero spam. No credit card. 100% private.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-[#16c847]/15 text-[#16c847] flex items-center justify-center mx-auto mb-4 border border-[#16c847]/30">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-archivo font-bold text-[#141414] uppercase">
              You're on the priority list!
            </h3>

            <p className="mt-2 text-sm text-[#666055] max-w-sm mx-auto">
              We saved your spot. You are <strong className="text-[#0F4C81]">#{queueNumber}</strong> in line for the next rollout batch.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-[#FAF7F2] border border-black/10 text-xs text-[#141414] font-mono text-center">
              Invite code reserved for: <span className="font-semibold">{email}</span>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Back to Exploring Smriti
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
