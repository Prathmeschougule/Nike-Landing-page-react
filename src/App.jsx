import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import Herosection from './component/Herosection'
import OfferSection from './component/OfferSection'
import TrendingSection from './component/TrendingSection'
import NewYearSection from './component/NewYearSection'
import Footer from './component/Footer'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className='max-w-[1200px] mx-auto w-full '>

        <Header />
        <OfferSection />
        <Main />
        <Herosection />
        <TrendingSection />
        <NewYearSection />
        <Card/>
        <Footer/>

      </div>

    </>
  )
}

export default App
