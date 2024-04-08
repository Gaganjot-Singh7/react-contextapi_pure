import ComA from "./comp/ComA"
import {contextCreated,villageContext} from "./context/Context.jsx";
import "./index.css";
function App() {


  return (
    <>
    <div className="center">Context API using CreateContext,Provider,consumer</div>
    
    <div className="data">
    <contextCreated.Provider value={'Gaganjot singh'}>
      <villageContext.Provider value={"passiawal"}>
      <ComA/>
      </villageContext.Provider>
    
      </contextCreated.Provider>
    </div>
    </>
  )
}

export default App
