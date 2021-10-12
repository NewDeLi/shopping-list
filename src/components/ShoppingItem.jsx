
import styled from "styled-components";

//create call back function onListItemUpdate to handle click event on span-tag/shoppingitem
export function ShoppingItem({ shoppingItem, onListItemUpdate, isSelected }) {

  return ( 
    <ListItem isSelected={isSelected} onClick={() => onListItemUpdate(shoppingItem)}>
      {shoppingItem.name}
    </ListItem>
  )
};

//styled components
const ListItem = styled.span`
padding: .3rem;
margin: .5rem;
background-color: ${({ isSelected }) => (isSelected ? "lightgray" : "hotpink")};
`


 