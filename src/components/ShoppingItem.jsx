import { useEffect, useState } from 'react'

export function ShoppingItem({shoppingBacklog, handleClick}) {



  return ( 
      <section className="backlog">
        {shoppingBacklog.map(shoppingBacklog => (
            <span onClick={(event) => {
               const newItem= event.target.name
                handleClick(newItem);
                console.log('yaay')
          }} key={shoppingBacklog.id}> {shoppingBacklog.name}</span>
        ))}
      </section>
  )};