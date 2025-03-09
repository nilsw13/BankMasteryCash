import "./App.css";
import HeaderDashboard from "./components/dashboard/headerFooter/HeaderDashboard";
import Footer from "./components/dashboard/headerFooter/Footer";
import DashBoard from "./pages/DashBoard";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Toaster richColors closeButton />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            id="app "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" min-h-screen bg-[#0a0b14] text-white overflow-hidden"
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;

//<motion.header className=" w-screen bg-slate-700/20 md:mb-20 pt-6">
//<HeaderDashboard />
//</motion.header>
