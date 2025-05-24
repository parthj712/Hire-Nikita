
import './App.css';

import { motion } from 'framer-motion';
import Resume from './comp/Resume';


const pageVariants = {
  initial: { opacity: 0, y: -50 },  // Start slightly above the screen
  animate: { opacity: 1, y: 0 },    // Animate to original position
  exit: { opacity: 0, y: 50 },      // Exit by sliding down
};

function App() {


  return (
    <div className="App">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <Resume/>

      </motion.div>
    </div>
  );
}

export default App;
