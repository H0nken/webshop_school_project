import { createContext, useReducer } from "react"
import { cartReducer } from '../../lib/reducers/cartReducer'


//skapar ett "context", dvs ett globalt State
export const CartContext = createContext()

//tar in children
const CartProvider = ({ children }) => {
  //dispatch är en typ av setter
  const [cart, cartDispatch] = useReducer(cartReducer, {
    user: "putRandomStringHere",
    cartItems: []
  })

  //wrappa sig själv runt children, dvs hela sidan
  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider