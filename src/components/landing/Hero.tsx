import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, FileText, Github } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center mb-16 gap-20">
        <div className="lg:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Master you finances with precision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-xl"
          >
            This demo was created with Spring Framework and ReactJS as part of a
            technical exercise. Explore this interface to visualize financial
            management in action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row  gap-3"
          >
            <div className="flex flex-col md:flex-row gap-1 text-blue-400">
              <Github />
              <a href="">Source code</a>
            </div>
            <div className="flex flex-col md:flex-row gap-1 text-pink-300 ">
              <FileText />
              <a href="https://github.com/Christophe-008/Bank-Mastery-Cash/blob/main/etape.md">Exercise instructions</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to={"/dashboard"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                Access Dashboard
                <ArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative cursor-pointer">
            <div className="p-[3px] rounded-2xl">
              <div className="bg-[#0f1120] rounded-xl overflow-hidden">
                <div className="relative pt-[59.99%]">
                  <img
                    src="/public/preview.png"
                    alt="Bank Mastery Dashboard Preview"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;
