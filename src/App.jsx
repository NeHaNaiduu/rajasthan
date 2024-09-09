import './App.css'
import Blueline from './components/Blueline'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'
import GetCustomized from './components/GetCustomized'
import Heading from './components/Heading'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import UsefulTools from './components/UsefulTools'

function App() {

  return (
    <div className='w-full flex-col items-center justify-between'>
      <div className='top-bar'>
        <Blueline/>
        <Navbar/>
      </div>
      <div className='information'>
        <Enquiry/>
        {/* <Heading/> */}
        <div className='main flex items-start justify-between'>
          <Sidebar/>
          <MainContent/>
        </div>
      </div>
      <div className='w-full'>
        {/* <UsefulTools/> */}
        <GetCustomized/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
