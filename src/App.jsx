import NavBar from "./Components/NavBar/NavBar"
import DaisyNav from "./Components/DaisyNav/DaisyNav"
import PriceOptions from "./Components/PriceOptions/PriceOptions"
import LineChart from "./Components/LineChart/LineChart"

function App() {

  return (
    <div>
      <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
      
      
    </div>
  )
}

export default App
