/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-8">
        <Image
          className="dark:invert"
          src="/your-logo.svg" // Add your logo here
          alt="Your Logo"
          width={180}
          height={180}
        />
        <h1 className="text-4xl font-bold mt-4">Welcome to My Next.js App</h1>
        <p className="text-lg mt-2">
          This is a modern web application built with Next.js. Let's build something amazing!
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <div className="flex gap-4">
          <a
            className="rounded-full bg-blue-700 hover:bg-blue-800 text-sm sm:text-base py-2 px-6 transition-colors"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Next.js
          </a>
          <a
            className="rounded-full bg-teal-700 hover:bg-teal-800 text-sm sm:text-base py-2 px-6 transition-colors"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy with Vercel
          </a>
        </div>
      </main>

      <footer className="text-center mt-16">
        <p className="text-sm">
          &copy; 2025 My Next.js App | Made with ❤️ using Next.js
        </p>
      </footer>
    </div>
  );
}
