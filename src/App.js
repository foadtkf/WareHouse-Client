import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import NotFound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageServices from './components/ManageServices/ManageServices';
import AddService from './components/AddService/AddService';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path="/manageservice" element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }>
      </Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
