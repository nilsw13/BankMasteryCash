
import './App.css'
import HeaderDashboard from './components/dashboard/header/HeaderDashboard'
import Footer from './components/footer/Footer'
import DashBoard from './pages/DashBoard'
import {motion, AnimatePresence} from 'framer-motion'

function App() {


  return (
    <>    

    <AnimatePresence>

    <motion.header
            initial={{opacity : 0}}
            animate={{opacity : 100}}
            exit={{opacity : 0}}
            transition={{duration : 2}}
          className=" w-screen bg-slate-700/20 mb-20 pt-6   ">

             <HeaderDashboard/>

          </motion.header>

       <motion.div 
       
       id='app ' className='overflow-x-hidden p-4 h-screen' >

          <div className='scale-90' >


          <DashBoard/>
          
          </div>
      </motion.div>
      <Footer/>
      </AnimatePresence>
    </>
  )
}

export default App
