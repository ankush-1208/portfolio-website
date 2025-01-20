'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xnnnejjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="mt-8 print:hidden">
      <h2 className="text-xl font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            required
            className="min-h-[100px]"
          />
        </div>
        <Button type="submit">Send Message</Button>
        {status && (
          <p className={status.includes('success') ? 'text-green-600' : 'text-red-600'}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
} 