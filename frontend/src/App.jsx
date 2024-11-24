
import './App.css'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <header style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1>PCEA Church App</h1>
          <p>Connecting faith, community, and technology.</p>
        </header>

        <main>
          <section style={{ marginBottom: "20px" }}>
            <h2>About Us</h2>
            <p>
              Welcome to the PCEA Church App! We aim to bring the Presbyterian Church of East Africa closer to our congregation and community through technology.
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Services</h2>
            <ul>
              <li>Sunday Service: 9:00 AM - 11:30 AM</li>
              <li>Bible Study: Wednesday 6:00 PM</li>
              <li>Youth Fellowship: Saturday 2:00 PM</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2>Contact Us</h2>
            <p>Email: contact@pceachurch.org</p>
            <p>Phone: +254 700 123 456</p>
          </section>
        </main>

        <footer style={{ textAlign: "center", marginTop: "20px" }}>
          <p>&copy; {new Date().getFullYear()} PCEA Church. All rights reserved.</p>
        </footer>
      </div>

    </>
  )
}

export default App
