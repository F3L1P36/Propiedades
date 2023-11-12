import{ Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import SigUp from './pages/SigUp';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SigUp/>}/>
      <Route path='/profile' element={<Profile/>}/>

      
    </Routes>
    </BrowserRouter>
  )
}
