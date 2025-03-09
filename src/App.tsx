import "./App.css";
import HeaderDashboard from "./components/dashboard/headerFooter/HeaderDashboard";
import Footer from "./components/dashboard/headerFooter/Footer";
import DashBoard from "./pages/DashBoard";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "sonner";

function App() {
  return (
    <>
      <div>
        <Toaster richColors closeButton />
      </div>

      <motion.div 
       initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
      className=" overflow-hidden">
        <AnimatePresence>
          <motion.header
          
            className=" w-screen bg-slate-700/20 md:mb-20 pt-6"
          >
            <HeaderDashboard />
          </motion.header>

          <motion.div id="app " className="overflow-x-hidden overflow-y-hidden  h-screen">
            <div className="container mx-auto px-4 py-12">
              <DashBoard />
            </div>
          </motion.div>

          <Footer />
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;
