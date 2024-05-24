import logo from "./logo.svg";
import "./App.css";
import ClientForm from "./component/clientform/ClientForm";
import ClientList from "./component/clientlist/ClientList";
import YourComponent from "./component/testtt";
import NewClientForm from "./component/warshat/warshat";
import HsabatForm from "./component/hesabat/hesabat";
import Warshat from "./component/warshat/warshat";
import Nopage from "./component/nopage/nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import ClientAccounts from "./component/hesablist/hesablist";
import Management from "./component/managment/management";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Warshat />} />
          <Route path="ClientList" element={<ClientList />} />
          <Route path="NewClientForm" element={<NewClientForm />} />
          <Route path="HsabatForm" element={<HsabatForm />} />
          <Route path="ClientForm" element={<ClientForm />} />
          <Route path="ClientAccounts" element={<ClientAccounts />} />
          <Route path="newadd" element={<ClientAccounts />} />

          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
