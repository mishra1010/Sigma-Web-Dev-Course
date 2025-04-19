import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/card'

function App() {
 

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title = "Card1" description="Card 1 desc" />
        <Card title = "Card2" description="Card 2 desc" />
        <Card title = "Card3" description="Card 3 desc" />
        <Card title = "Card4" description="Card 4 desc" />
        
      </div>
      <Footer />
    </>
  )
}

export default App
