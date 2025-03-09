import "./App.css";

import DashBoard from "./pages/DashBoard";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
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

