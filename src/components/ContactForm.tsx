
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="sr-only">Contact Form</h3>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address <span className="text-destructive" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-mussko-500 focus:border-transparent transition-all"
          placeholder="your@email.com"
          aria-required="true"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-destructive" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-mussko-500 focus:border-transparent resize-none transition-all"
          placeholder="How can we help you?"
          aria-required="true"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-mussko-600 text-white rounded-lg font-medium hover:bg-mussko-700 focus:outline-none focus:ring-2 focus:ring-mussko-500 focus:ring-offset-2 transition-all duration-200 button-shine disabled:opacity-70"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
