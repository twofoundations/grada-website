'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface NewsletterFormData {
  email: string;
}

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-3 border border-white/30 bg-white/10 text-white placeholder:text-white/60 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
            placeholder="you@example.com"
            disabled={status === 'loading'}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
        >
          {status === 'loading' ? 'Subscribing...' : 'Keep me updated'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-300 text-center">
            Thanks for subscribing! Check your email.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-300 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

