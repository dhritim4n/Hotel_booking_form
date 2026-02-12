import Book_hotel from "./components/Book_hotel"
import Hotel_hero from "./components/Hotel_hero"
import Layout from "./components/ui/Layout"
import About from "./components/About"

function App() {


  return (
    <>
      <Layout> 
        <Hotel_hero />
        <Book_hotel />
        <About />
      </Layout>
    </>
  )
}

export default App
