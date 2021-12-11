import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/welcome' element={<Welcome/>}>
            {/* <Welcome /> */}
          </Route>
          <Route path='/products' exact element={<Products/>}>
            {/* <Products /> */}
          </Route>
          <Route path='/products/:productId' element={<ProductDetail/>}>
            {/* <ProductDetail /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
