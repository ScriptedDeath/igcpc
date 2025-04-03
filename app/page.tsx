import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <Head>
        <title>IGCPC - International Generational Crisis Prevention Court</title>
        <meta name="description" content="Official IGCPC Website - Protecting Future Generations through Global Justice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full max-w-6xl py-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900">IGCPC</h1>
        <p className="mt-3 text-xl text-gray-600">International Generational Crisis Prevention Court</p>
      </header>

      <nav className="flex space-x-6 text-lg mb-12 text-blue-700 font-medium">
        <Link href="/about">About</Link>
        <Link href="/law">Laws</Link>
        <Link href="/register">Register</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <section className="max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Protecting Generations. Enforcing Sovereignty. Defining Justice.</h2>
        <p className="text-gray-700 text-lg">
          The IGCPC stands as a beacon for global justice and sovereignty enforcement, committed to eliminating intergenerational injustices and colonial legacies. We introduce reformed legal frameworks, protect emerging nations like Saltywolf Forest, and hold violators accountable under a globally recognized charter.
        </p>
        <div className="mt-8">
          <button
            onClick={() => router.push('/register')}
            className="px-8 py-3 rounded-xl bg-blue-700 text-white text-lg hover:bg-blue-800 transition duration-300"
          >
            Join the Movement
          </button>
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-center">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-2">Law Database</h3>
          <p className="text-gray-600 text-sm">Explore all classes under IDAA and IGCPC ruling (Class X, R, A, O, AR, etc.)</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-2">Supreme Court Access</h3>
          <p className="text-gray-600 text-sm">Apply for exceptions to Class X substances via IGCPC Supreme Court only</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold mb-2">Register a Nation</h3>
          <p className="text-gray-600 text-sm">Declare independence and submit your constitution for recognition</p>
        </div>
      </section>

      <footer className="mt-24 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} IGCPC. All rights reserved.
      </footer>
    </main>
  );
}
