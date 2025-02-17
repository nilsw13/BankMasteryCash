import HeaderDashboard from "@/components/dashboard/header/HeaderDashboard"
import ChartSection from "@/components/dashboard/sections/ChartSection"

import { AnimatePresence, motion } from "framer-motion"

import AmountCardsSection from "@/components/dashboard/sections/AmountCardsSection"


function DashBoard() {
    return (
      // Conteneur principal - définit la structure globale
      <div className="min-h-screen  p-4 md:p-8">



        {/* Section header */}

        <AnimatePresence>
          <motion.header
            initial={{opacity : 0}}
            animate={{opacity : 100}}
            exit={{opacity : 0}}
            transition={{duration : 2}}
          className="mb-32">

             <HeaderDashboard/>

          </motion.header>
        </AnimatePresence>



  
        {/* Section Cartes de montants */}
        <section className="mb-8 ">
          <div >
            <AmountCardsSection />
          </div>
        </section>



  
        {/* Section Graphiques */}
        <section className="mb-8 ">
          <ChartSection/>
        </section>






      </div>
    );
  }

export default DashBoard