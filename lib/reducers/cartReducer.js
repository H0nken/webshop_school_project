//hårdkodade
export const CART_ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
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
    case 'remove':
      return { ...state, mode: action.payload }
    case 'remove_all':
      return { ...state, mode: action.payload }
    default:
      return { ...state }

  }
}