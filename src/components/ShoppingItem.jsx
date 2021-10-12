
//create call back function onListItemUpdate to handle click event on span-tag/shoppingitem
export function ShoppingItem({ shoppingItem, onListItemUpdate }) {
  return ( 
      <span className="list-item" onClick={() => onListItemUpdate(shoppingItem)}>
      {shoppingItem.name}
    </span>
  )};