import Header from "./components/HeaderResponsive/HeaderResponsive.jsx"
import PortfolioProvider from './contexts/PortfolioContexto'
import Rotas from "./routes/Rotas"
import "./styles/app.css"

import 'react-loading-skeleton/dist/skeleton.css'

function App() {

 

  return (
    <>

      <PortfolioProvider>

        <Header />
        
        <Rotas />

      </PortfolioProvider>


    </>
  )
}

export default App
