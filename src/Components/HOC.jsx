import React from "react";
import './style.css';


const products = [
  { productName: "Redmi Note 8", price: 'Rs.10,999' },
  { productName: "Samsung Galaxy F22", price: "Rs.11,499" },
  { productName: "Infinix HOT play", price: "Rs.8,199" },
  { productName: "Realme C31", price: "Rs.8,299" },
  { productName: "Lenovo Vibe K5 Note", price: "Rs.12,499" },
  { productName: "Lenovo K10 Note", price: "Rs.16,949" },
];
const SeachingProduct = (WrappedComponent) => {
  class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
      };
    }
    updateSearch = (e) => {
      this.setState({ search: e.target.value });
    };
    filterProducts = () => {
      return products.filter((product) =>
        product.productName.toLowerCase().includes(this.state.search)
      );
    };
    render() {
      const updatedProducts = this.filterProducts();
      return (
        <div>
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts}></WrappedComponent>
        </div>
      );
    }
  }
  return Search;
};
export default SeachingProduct;
