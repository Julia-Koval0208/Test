import './App.css'
import FeaturesList from '../FeaturesList'
import HeroImage from '../HeroImage'
import WhyChooseUsSection from '../WhyChooseUsSection'
import '../fonts/Gilroy/Gilroy.css'

function App() {
    return (
        <body className='body'>
        <div className='main'>
        <HeroImage />   
        <WhyChooseUsSection />
        <FeaturesList />
        </div>
        </body>
    )
}

export default App
