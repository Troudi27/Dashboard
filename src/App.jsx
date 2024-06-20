import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"

function App() {
  
  return (
    <div className="App dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New  inputs={userInputs} title="Add New User"/>} />
          </Route>
          <Route path="/products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New  inputs={productInputs} title="Add New Product"/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
