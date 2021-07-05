import React, { Component } from "react";
import Cleint from "shopify-buy";

const shopContext = React.createContext();

const client = Cleint.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export default class shopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckOut(localStorage.checkout_id);
    } else {
      this.createCheckOut();
    }
  }

  createCheckOut = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };
  fetchCheckOut = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ checkout: checkout });
  };
  addItemToCheckOut = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemToAdd
    );
    this.setState({ checkout: checkout });

    this.openCart();
  };
  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
  };
  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    console.log(products);
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    console.log(product);
    this.setState({ product: product });
  };
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };
  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };
  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };
  render() {
    return (
      <shopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckOut: this.addItemToCheckOut,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </shopContext.Provider>
    );
  }
}

const shopConsumer = shopContext.Consumer;
export { shopContext, shopConsumer };
