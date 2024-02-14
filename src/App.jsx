import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SuiteTable from './components/SuiteTable'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <div className="appContainer" style={{display:"flex",flexDirection:"column", backgroundColor:"grey"}}>
        <Header />
      <SuiteTable />
      </div>
    </>
  )
}

export default App
