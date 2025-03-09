import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  ChartArea,
  ChartBar,
  CreditCard,
  EarthIcon,
  File,
  FileText,
  FolderOpen,
  Github,
  IdCardIcon,
  Linkedin,
  PiggyBank,
  TrendingUp,
  User2Icon,
} from "lucide-react";
import Header from "@/components/landing/Header";
import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Specs from "@/components/landing/Specs";
import Separator from "@/components/landing/Separator";

function Landing() {
  const stacks = [
    {
      name: (
        <p className="bg-green-500/40 text-green-400 rounded-lg p-1 pl-2 pr-2 text-xs">
          Spring Framework
        </p>
      ),
    },
    {
      name: (
        <p className="bg-red-400/40 text-red-300 rounded-lg p-1 pl-2 pr-2 text-xs">
          Java
        </p>
      ),
    },
    {
      name: (
        <p className="bg-blue-600/40 text-blue-500 rounded-lg p-1 pl-2 pr-2 text-xs">
          React
        </p>
      ),
    },
    {
      name: (
        <p className="bg-yellow-600/40 text-yellow-500 rounded-lg p-1 pl-2 pr-2 text-xs">
          Javascript
        </p>
      ),
    },

    {
      name: (
        <p className="bg-purple-600/40 text-purple-500 rounded-lg p-1 pl-2 pr-2 text-xs">
          TypeScript
        </p>
      ),
    },
    {
      name: (
        <p className="bg-indigo-600/40 text-indigo-500 rounded-lg p-1 pl-2 pr-2 text-xs">
          Tailwind CSS
        </p>
      ),
    },
  ];

  const links = [
    {
      id: 1,
      name: <p className="text-gray-600">Github</p>,
      link: "https://github.com/nilsw13",
      icon: <Github className="text-gray-600" />,
    },

    {
      id: 2,
      name: <p className="text-green-600">Portfolio</p>,
      link: "https://nilswenting.com",
      icon: <FolderOpen className="text-green-600" />,
    },

    {
      id: 3,
      name: <p className="text-blue-600">Linkedin</p>,
      link: "https://linkedin.com/in/nils-wenting-332348281",
      icon: <Linkedin className="text-blue-600" />,
    },
  ];

  return (
    <motion.div
      key="landing"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -50,
        transition: { duration: 0.5 },
      }}
      className="container mx-auto px-4 py-12"
    >
      <Header />

      <Hero />

      <Specs />

      <Separator />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <div className="w-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 border border-blue-500/30">
          <div className="grid grid-cols-10">
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-6">
              <span className="text-3xl font-bold">NW</span>
            </div>
            <div className="col-span-8 ">
              <Card className="bg-transparent border-none">
                <CardTitle>
                  <div className="flex align-middle items-center gap-4 ">
                    <h3 className="text-white text-2xl">
                      Full Stack Developper
                    </h3>
                    <div className="flex bg-blue-500 p-1 rounded-md">
                      <Briefcase className="text-white w-3 h-3 mr-1" />
                      <p className="text-xs text-white">
                        Looking for Apprenticeship
                      </p>
                    </div>
                  </div>
                </CardTitle>

                <p className="text-gray-300">
                  {" "}
                  Passionate about web development and new technologies, I am
                  looking for an apprenticeship opportunity to apply my skills
                  and continue learning in a professional environment.
                </p>

                <div className="flex gap-3 mt-3">
                  {stacks.map((stack) => stack.name)}
                </div>

                <div className="flex gap-3 mt-6">
                  {links.map((l) => (
                    <div key={l.id}>
                      <a href={l.link}>
                        <Button className="bg-card hover:bg-card cursor-pointer">
                          {l.icon}
                          {l.name}
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Landing;
