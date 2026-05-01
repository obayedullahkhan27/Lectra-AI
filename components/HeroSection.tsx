import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    title: 'Upload PDF',
    description: 'Add your book file',
  },
  {
    title: 'AI Processing',
    description: 'We analyze the content',
  },
  {
    title: 'Voice Chat',
    description: 'Discuss with AI',
  },
]

const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30" />

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 p-6 md:p-10 items-center">

          {/* Left */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Your Library, Reimagined
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Turn your books into interactive AI conversations.
              <br className="hidden md:block" />
              Read, listen, and discuss like never before.
            </p>

            <Link
              href="/books/new"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
            >
              <span className="text-xl">+</span>
              Add new book
            </Link>
          </div>

          {/* Center Illustration */}
          <div className="flex justify-center">
            <Image
              src="/assets/hero-illustration.png"
              alt="Books illustration"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Right Steps */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200">
            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-semibold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection