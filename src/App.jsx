
import { ShoppingItem } from './components/ShoppingItem'
import { useEffect, useState } from 'react'
import { useLocalStorageState } from './utils/localStorage';
import styled from 'styled-components';



export function App() {
  //create two useStates to have an iterable array for backlog and shoppinglist
  const [shoppingBacklog, setShoppingBacklog] = useLocalStorageState('backlog',[])
  const [shoppingList, setShoppingList] = useLocalStorageState('shoppinglist',[]);
  
  //use useEffect to fetch data from api, in react side effects
  //are only usable with useEffect
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
  // create movetolist function to move elements 
  //from backlog array to shoplist array and update backlog array
  const moveToList = (itemToMove) => {
    setShoppingList([...shoppingList, itemToMove]);
    const remainingBacklog = shoppingBacklog.filter(
      (item) => item.id !== itemToMove.id
    );
    setShoppingBacklog(remainingBacklog)
  };
  // create movetobacklogt function to move elements 
  //from shoplist array to backlog array and update shoplist array
  const moveItemBacklog = (itemToMove) => {
    setShoppingBacklog([...shoppingBacklog, itemToMove])
    const remainingShopping = shoppingList.filter(
      (item => item.id !== itemToMove.id)
    );
    setShoppingList(remainingShopping);
  }


  return (
    <div className="App">
      <h1>DeLi Einkaufsliste</h1>
      <h2>Backlog</h2>
     <Backlog>
        {shoppingBacklog.map(item => (
          <ShoppingItem
            isSelected={false}
            key={item.id} shoppingItem={item}
            onListItemUpdate={moveToList} />
        ))}
      </Backlog>
      <h2>Einkaufsliste</h2>
      <section className="shopping-list">
        {shoppingList.map(item=> (
          <ShoppingItem
            isSelected={true}
            key={item.id}
            shoppingItem={item}
            onListItemUpdate={moveItemBacklog}
          />
        ))}
      </section>
    </div>
  )
};
  //style components

const Backlog = styled.section`
display: flex;
flex-wrap: wrap;
`



