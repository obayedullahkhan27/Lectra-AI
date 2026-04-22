'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-10 max-w-sm w-full text-center animate-fade-in">
        
        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-[#663820]/10">
            <Loader2 className="w-10 h-10 text-[#663820] animate-spin" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Synthesizing Your Book
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Please wait while we process your PDF and prepare your interactive
          literary experience.
        </p>

        {/* Progress feel (fake loader bar for UX) */}
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#663820] animate-loading-bar"></div>
        </div>

        {/* Small note */}
        <p className="text-xs text-gray-400 mt-4">
          AI is working on your request...
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-loading-bar {
          width: 40%;
          animation: loading 1.2s infinite ease-in-out;
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(200%); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;