import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import HomeCard from './HomeCard.jsx'
import Cart from './Cart.jsx'
import CheckOut from './CheckOut.jsx'
// import Footer from './Footer.jsx'
import BookDetail from './BookDetail.jsx';
import { Provider } from  'react-redux';
import store from './app/store.js'; 

// import ImageSlider from './ImageSlider'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <BrowserRouter>
  <NavBar></NavBar>
  {/* <ImageSlider /> */}
 <Routes>
   <Route path='/' element={<HomeCard></HomeCard>}/>
   <Route path='/user/book/detail/:id' element={<BookDetail></BookDetail>}/>
   <Route path='/cart' element ={<Cart></Cart>}></Route>
   <Route path='/CheckOut' element={<CheckOut></CheckOut>} ></Route>
 </Routes>
    
  {/* <Footer></Footer> */}

  </BrowserRouter>
  </Provider>
)