import NavBar from "./Components/NavBar/NavBar"
import DaisyNav from "./Components/DaisyNav/DaisyNav"
import PriceOptions from "./Components/PriceOptions/PriceOptions"
import LineChart from "./Components/LineChart/LineChart"
import Phones from "./Components/Phones/Phones"

function App() {

  return (
    <div>
      <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>  
      
    </div>
  )
}

export default App
