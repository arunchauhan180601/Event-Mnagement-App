import { createContext, useState, useEffect } from "react";


// import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {


  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }

  return cart;

};

const ShopContextProvider = ({ children }) => {



  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());


  useEffect(() => {
    fetch("http://localhost:3000/allProducts")
      .then((res) => res.json())
      .then((data) => setAll_product(data))

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:3000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json"
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data))
    }
  }, [])

  const contextValue = all_product;


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => {
  //     const updatedCart = { ...prev };
  //     updatedCart[itemId] = prev[itemId] + 1;

  //     if (localStorage.getItem("auth-token")) {
  //       fetch("http://localhost:3000/addtocart", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json", // Changed to application/json
  //           "auth-token": `${localStorage.getItem("auth-token")}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ "itemId": itemId }) // Send itemId as JSON
  //       })
  //         .then((res) => {
  //           if (!res.ok) {
  //             throw new Error('Network response was not ok');
  //           }
  //           return res.json(); // Expect JSON response
  //         })
  //         .then((data) => {
  //           console.log(data); // Handle the success response
  //         })
  //         .catch((error) => {
  //           console.error('There was a problem with the fetch operation:', error);
  //         });
  //     }

  //     return updatedCart;
  //   });
  // };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = (prev[itemId] || 0) + 1; // Ensure correct count for item

      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:3000/addtocart", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId })
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json(); // Expect JSON response
          })
          .then((data) => {
            console.log(data); // Log the response for debugging

            // Check if the response is as expected
            if (data.success) {
              // Optionally handle successful response
              console.log("Item added to cart successfully");
            } else {
              // Handle case where item wasn't added successfully
              console.error("Failed to add item:", data.message);
            }
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }

      return updatedCart; // Return updated cart state
    });
  };



  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      const newQuantity = prev[itemId] - 1;
      updatedCart[itemId] = newQuantity > 0 ? newQuantity : 0;

      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:3000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "itemId": itemId })
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = (cartItems, contextValue) => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const quantity = cartItems[itemId]; // Quantity of the item in the cart
      const item = contextValue[itemId]; // Retrieve item from context

      // Debugging output
      console.log(`Processing itemId: ${itemId}, quantity: ${quantity}`);

      if (item) {
        if (item.price) {
          totalAmount += item.price * quantity; // Calculate total
        } else {
          console.warn(`Item with ID ${itemId} does not have a price property.`);
        }
      } else {
        console.warn(`Item with ID ${itemId} not found in contextValue.`);
      }
    }

    console.log(`Total cart amount: ${totalAmount}`);
    return totalAmount;
  };



  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  return (
    <ShopContext.Provider
      value={{ contextValue, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
