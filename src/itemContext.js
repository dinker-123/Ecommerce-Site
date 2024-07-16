import React, { createContext, useState, useContext,useEffect } from "react";
import CartModal from "./components/cardModel/cardModel";
import { ItemList } from "./components/items/items";
const itemContext = createContext();


function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [total , setTotal] =useState(0);
  const [range, setRange] = useState(1000);
  const [search, setSearch] = useState('');
  const [selectedCategory,setSelectedCategory]=useState('');
  
  useEffect(() => {
    async function fetchData() {
     const data = await ItemList();
     setData(data);
    }
    fetchData();
   }, []);
    
   if (!data) {
    return <div>Loading...</div>;
   }

   const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
 
const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const handleBuy = (item) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item }]);
      setValue(value + 1);
      setTotal(total + item.price);
    } else {
      const itemToRemove = cart[index];
      cart.splice(index, 1);
      setCart([...cart]);
      setValue(value - 1);
      setTotal(parseFloat((total - itemToRemove.price).toFixed(2)));
    }
  };

  const handleRemove = (item) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      const itemToRemove = cart[index];
      cart.splice(index, 1);
      setCart([...cart]);
      setValue(value - 1);
      setTotal(parseFloat((total - itemToRemove.price).toFixed(2)));
    }
  };

  const handleRange = (e) => {
    setRange(e.target.value);
  };
  
  
  const HandlePay = (value)=>{
      setCart([]);
      setValue(0);
      setTotal(0);
     
  }
  const toggle = () => {
    setShowCart(!showCart);
  };

  const close = () => {
    setShowCart(false);
  };

  return (
    <itemContext.Provider
      value={{ handleBuy, cart, toggle, close, value, total,data , search,handleSearch,selectedCategory,handleCategoryFilter, handleRemove,HandlePay,handleRange,range}}>
      {cart.length > 0 && showCart && <CartModal cart={cart} toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export default CustomItemContext;
export { useValue }; 