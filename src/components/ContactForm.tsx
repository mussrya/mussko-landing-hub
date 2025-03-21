
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    // We still want to show the submitting state for better UX
    setIsSubmitting(true);
    
    // The form will be handled by Formspree, but we'll still show a toast
    // after a short delay to improve UX
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form 
      action="https://formspree.io/f/mvgkkvzw" 
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6 animate-slide-up" 
      style={{ animationDelay: '0.3s', animationFillMode: 'both' }} 
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title" className="sr-only">Contact Form</h3>
      
      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address <span className="text-destructive" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-mussko-500 focus:border-transparent transition-all"
          placeholder="your@email.com"
          aria-required="true"
        />
      </div>
      
      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-destructive" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
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
