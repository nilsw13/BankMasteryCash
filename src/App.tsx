
import './App.css'
import DashBoard from './pages/DashBoard'
import {motion, AnimatePresence} from 'framer-motion'

function App() {


  return (
    <>    

    <AnimatePresence>


       <motion.div 
       
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
