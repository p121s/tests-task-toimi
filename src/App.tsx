import { Route, Routes } from "react-router-dom";
import { AllCargo } from "./components/AllCargo/AllCargo.component";
import { HeaderWithMenu } from "./components/HeaderWithMenu/HeaderWithMenu.component";


const App: React.FC = () => (
  <Routes>
    <Route path='/' element={<HeaderWithMenu/>}>
      <Route path='all-cargo' element={<AllCargo />} />
    </Route>
  </Routes>
);

export default App;
