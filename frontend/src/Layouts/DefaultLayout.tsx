
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-screen'><Outlet /></main>
      <Footer />
    </div>
  )
}

export default DefaultLayout