import React from 'react'
import TypingH2 from '../Components/TypingH2';

import Layout1 from '../Components/Layout1';
import TimerPage from '../Components/TimerPage/TimerPage';
import DownloadSection from '../Components/DownloadSection/DownloadSection';
import Gallary from '../Components/Gallery/Gallery';
import FAQSection from '../Components/FAQSection';
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';

function Home() {
  return (
    <div>
        
      

      <Layout1 />
      {/* <HeroSection/> */}
      <TimerPage/>

      <DownloadSection/>
      <Gallary/>
      
       <FAQSection/>

       <Footer/>
    </div>
  )
}

export default Home