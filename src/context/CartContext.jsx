import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {
    const [cartList, setCartList] = useState([])

    // Añadir a carrito FUNCIONA
    const addToCart = (product, quantity)=> {
        if(!inCart(product.id)) {
            setCartList(prev => [... prev, {...product, quantity}])
        } else {
            console.error('El producto ya fue entregado')
        }
        // setCartList([
        //     ... cartList,
        //     newProduct
        // ])
    }

    const removeItem = (productId) => {
        const cartUpdate = cartList.filter(product => product.id !== productId)
        setCartList(cartUpdate)
    }

    //Vaciar Carrito FUNCIONA
    const emptyCart = () => {
        setCartList([])
    }

    const inCart = (productId) => {
        return cartList.some(product => product.id === productId)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            inCart,
            removeItem

        }}>
            {children}
        </CartContext.Provider>
    )
}

// 1. create context
// 2. provider <AppContext.Provider>
//3. value para intectar cosas en el contexto
// useContext(contexto-a-usar) para hacer el 
// reemplazo en los componentes donde los estaba llamando