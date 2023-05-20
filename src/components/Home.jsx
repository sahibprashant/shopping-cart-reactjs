import Filters from './Filters'
import ProductCard from "./ProductCard";
import { cartContext } from "../context/Context";

const Home = () => {
  const { state: { products },
    filterState: { sort, fastDelivery, outOfStock, rating, searchQuery } } = cartContext();

  const transformedProducts = () => {
    let filteredProducts = [...products];

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) => {
        return (sort === 'lowToHigh' ? a.price - b.price : b.price - a.price);
      })
    }

    if (fastDelivery) {
      filteredProducts = filteredProducts.filter((item) => item.fastDelivery);
    }

    if (!outOfStock) {
      filteredProducts = filteredProducts.filter((item) => item.inStock);
    }

    if (rating) {
      filteredProducts = filteredProducts.filter((item) => item.rating >= rating);
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return filteredProducts;
  }
  return (
    <div className="homeContainer">
      <Filters />
      <div className="productsContainer">
        {
          transformedProducts().map((prod) => {
            return <ProductCard key={prod.id} data={prod} />
          })
        }
      </div>
    </div>
  );
};

export default Home;
