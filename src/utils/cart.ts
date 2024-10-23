export const addToCart = (item, quantity) => {
  const cartData = localStorage.getItem("cart");
  const cart = cartData ? JSON.parse(cartData) : [];

  const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

  if (existingItemIndex >= 0) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartItems = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

export const setCartItems = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const removeCartItem = (id) => {
  const currentCart = getCartItems();
  const updatedCart = currentCart.filter(item => item.id !== id);
  setCartItems(updatedCart);
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
