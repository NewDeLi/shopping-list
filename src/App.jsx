
import './App.css'
import { ShoppingItem } from './components/ShoppingItem'
import { useEffect, useState } from 'react'

export function App() {
  const [shoppingBacklog, setShoppingBacklog] = useState([])
    const [shoppingList, setShoppingList] = useState([]);
  console.log(shoppingBacklog)
    useEffect(() => {
        const url = "https://fetch-me.vercel.app/shopping-list.json"
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setShoppingBacklog(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
        
    }, []);
  return (
    <div className="App">
      <ShoppingItem shoppingBacklog={shoppingBacklog} handleClick= {(name, id) => {
      
            const newShoppingItem = {
                id,
                name,
            };
            setShoppingBacklog([...shoppingBacklog, newShoppingItem]) }}/>
      
    </div>
  )
};

