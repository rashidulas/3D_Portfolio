import { Hero } from "../components";
import { About, Contact, Experience, Navbar, Works, StarsCanvas } from "../components";

const HomePage = () => {
  return (
    <div>
      <div className='relative z-0'>
         <Hero />
         <StarsCanvas />
      </div>
       {/* <About />
       <Experience />
       <Tech />
       <Works /> */}
       {/* <Feedbacks /> */}
       {/* <div className='relative z-0'>
         <Contact />
         <StarsCanvas />
       </div> */}

    </div>
  )
}

export default HomePage
