import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home from "./components/Home";
import AddPatient from "./components/AddPatient"
import AddClinicals from "./components/AddClinicals"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addPatient" element={<AddPatient/>} />
          <Route path="/addClinicals/:patientId" element={<AddClinicals/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
