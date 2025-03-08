import "./App.css";
import HeaderDashboard from "./components/dashboard/headerFooter/HeaderDashboard";
import Footer from "./components/dashboard/headerFooter/Footer";
import DashBoard from "./pages/DashBoard";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from 'sonner'

function App() {
  return (
    <>
          <div>
          <Toaster richColors closeButton/>
          
        </div>

      <div className=" overflow-hidden">
        <AnimatePresence>
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className=" w-screen bg-slate-700/20 md:mb-20 pt-6"
          >
            <HeaderDashboard />
          </motion.header>

          <motion.div id="app " className="overflow-x-hidden md:p-4 h-screen">
            <div className="scale-90">
              <DashBoard />
            </div>
          </motion.div>

          <Footer />
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
