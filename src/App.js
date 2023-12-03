import HomePage from "./Page/Home/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBarLogin from "./Page/Home/Uitily/NavBarLogin";
import Footer from "./Page/Home/Uitily/Footer";
import Login from "./Page/Auth/Login";
import RegisterPage from './Page/Auth/RegisterPage'
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Auth/brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";


function App() {
  return (
    <div className="font" >
     <NavBarLogin/>
    <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/AllCategoryPage" element={<AllCategoryPage/>}/>
      <Route path="/AllBrandPage" element={<AllBrandPage/>}/>
      <Route path="/Products" element={<ShopProductsPage/>}/>
      <Route path="/Products/:id" element={<ProductDetailsPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
  
    
    </div>
  );

}

export default App;
