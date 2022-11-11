import './App.css'
import './consts/fonts.scss'
import './consts/colors.scss'
import Card from './components/Card'
import ProductMobile from "../images/image-product-mobile.jpg";

function App() {
  return (
    <div className="App">
      <Card
      img={ProductMobile}
      type='perfume'
      title='Gabrielle Essence Eau De Parfum'
      description='A floral solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL'
      originalPrice={169.99}
      discountedPrice={149.99}
      available={true}
      />
    </div>
  )
}

export default App
