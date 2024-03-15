"use client"
import { useState } from 'react';
import { cn } from '@/utils/cn'

const ButtonLead = ({ className }) => {
  const [email, setEmail] = useState('');

  const handleJoinWaitlist = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Handle success - maybe clear the form or show a message
        setEmail('');
      } else {
        // Handle error - maybe show an error message
      }
    } catch (error) {
      // Handle error - maybe show an error message
      console.error('Error joining waitlist:', error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tom@cruise.com"
        className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button
        onClick={handleJoinWaitlist}
        className={cn("bg-purple-600 text-white px-6 py-2 rounded-md flex items-center hover:bg-purple-700", className)}
      >
        Join Waitlist →
      </button>
    </div>
  );
};

export default ButtonLead;
