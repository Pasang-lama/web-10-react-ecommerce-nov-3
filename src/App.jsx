import Banner from "./component/banner/Banner"
import Categorycard from "./component/category/Categorycard"
import Footer from "./component/layouts/Footer"
import Header from "./component/layouts/Header"
import Product from "./component/product/Product"

function App() {
  return (
    <>
      <Header />
      <section className="banner-section">
        <Banner />

      </section>

      <section className="my-5 container">
        <p className="text-center">MADE THE HARD WAY</p>
        <h2 className="text-center" >FEATURED CATEGORIES</h2>
        <p className="text-center">
          Basel & Co. is a powerful eCommerce theme for WordPress. Visit our shop page to see all main features for Your Store
        </p>
        <div className="category-wrapper">
          <Categorycard />
        </div>
      </section>

      <Product />
      <Footer />
    </>
  )
}

export default App
