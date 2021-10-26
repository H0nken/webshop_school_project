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
  console.log(state, action.type)
  switch (action.type) {
    case 'add': {
      console.log('"added" this to cart:', action.payload)
      console.log('cart is now: ', state)
      return { ...state, mode: action.payload }
    }
    case 'remove':
      return { ...state, mode: action.payload }
    case 'remove_all':
      return { ...state, mode: action.payload }
    default:
      return { ...state }

  }
}