
import './App.css'
import DashBoard from './pages/DashBoard'
import {motion, AnimatePresence} from 'framer-motion'

function App() {


  return (
    <>    

    <AnimatePresence>


       <motion.div 
        initial={{opacity : 0}}
        animate={{opacity : 100}}
        exit={{opacity : 0}}
        transition={{duration : 3}}
       id='app ' className='overflow-x-hidden p-4 ' >

          <div className='scale-90' >


          <DashBoard/>
          </div>
      </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
