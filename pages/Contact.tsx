
import React from 'react';
import { Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { CONTACT_CONFIG } from '../constants';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        CONTACT_CONFIG.serviceId,
        CONTACT_CONFIG.templateId,
        formRef.current,
        CONTACT_CONFIG.publicKey
      );
      setIsSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-slate-400">Have a question or want to work together? Send me a message!</p>
      </div>

      <div className="max-w-xl mx-auto">
        {isSuccess ? (
          <div className="glass-card rounded-2xl p-12 text-center animate-in zoom-in duration-300">
            <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full bg-[#121216] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full bg-[#121216] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-[#121216] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-12 flex justify-center items-center gap-8 text-slate-500">
          <a href="mailto:arnabbumba077@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} />
            <span>arnabbumba077@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
