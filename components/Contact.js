import React, { useState } from 'react';
import { SectionId } from '../types.js';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Let's Create Together</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            Ready to start your next project? Drop me a line.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-green-50 border border-green-100 rounded-3xl p-12 text-center animate-fadeIn shadow-lg shadow-green-500/5">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-slate-600">Thanks for reaching out. I'll be in touch shortly.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-sm text-slate-500 hover:text-brand-purple font-medium underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition-all placeholder:text-slate-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition-all placeholder:text-slate-400"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition-all placeholder:text-slate-400"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition-all resize-none placeholder:text-slate-400"
                placeholder="How can I help you?"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-brand-purple transition-all shadow-lg hover:shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;