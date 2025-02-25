import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Adventure Awaits</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Embark on a journey of discovery with our immersive interactive site. Explore new worlds, meet
          like-minded adventurers, and unlock hidden treasures along the way. Are you ready to start your quest?
        </p>
        <a
          href="#explore"
          className="text-lg bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-full text-white transition duration-300 transform hover:scale-105"
        >
          Start Your Adventure
        </a>
      </motion.section>

      {/* Interactive Section */}
      <motion.section 
        id="explore" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/adventure1.jpg" alt="Adventure 1" width={500} height={300} className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Forest Quest</h3>
          <p className="mt-2">A journey through dense forests where secrets lie hidden beneath the leaves.</p>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/adventure2.jpg" alt="Adventure 2" width={500} height={300} className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Mountain Trek</h3>
          <p className="mt-2">Climb towering peaks to uncover breathtaking views and ancient relics.</p>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/adventure3.jpg" alt="Adventure 3" width={500} height={300} className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Ocean Dive</h3>
          <p className="mt-2">Dive deep into the mysteries of the ocean, filled with vibrant marine life.</p>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Ready for the Ultimate Adventure?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of adventurers already exploring our interactive worlds. It’s time to discover what lies
          beyond the horizon.
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-xl transition duration-300 hover:bg-yellow-600"
        >
          Join the Adventure
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400">
        <p>&copy; 2025 Adventure Awaits. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
