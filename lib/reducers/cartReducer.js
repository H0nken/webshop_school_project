//hårdkodade
export const CART_ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove_last',
  REMOVE_ALL: 'remove_all'
}


//state är det som ligger som cart, action är vad vi skickar in att vi ska göra
//det är bara här vi kan ändra statet
//returnerar en ny kopia på state 
export function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      let tempCart = state
      tempCart.cartItems.push(action.payload)
      //spread operator (...state) så att vi returnerar en kopia på statet, med sakerna efter kommatecken ändrade
      return {
        ...state, cartItems: tempCart.cartItems
      }
    }
    case 'remove_last': {
      /* TODO */
      let tempCart = state
      tempCart.cartItems.pop()
      return { ...state, cartItems: tempCart.cartItems }
    }

    case 'remove_all':
      return { ...state, cartItems: [] }
    default:
      return { ...state }

  }
}