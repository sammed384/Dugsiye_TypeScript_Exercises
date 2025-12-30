
import ProductCard from './ProductCard';
import Welcome from './Welcome';
import Welcome2 from './Welcome2';

function App() {


  return (
    <>
      <Welcome username="Samatar" isPremium={true} />
      <Welcome2 username="Mohamed" isPremium={false} />
      <ProductCard
        name="PC"
        price={1000}
        description="description of PC"
      />
      <ProductCard
        name="Mouse"
        price={20}
      />
      <ProductCard
        name="Flash"
        price="free"
      />
    </>
  )
}

export default App
