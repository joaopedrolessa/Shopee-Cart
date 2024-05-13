import * as cartservice from './services/cart.js'
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = []

console.log("Wlcome to the your Shopee Cart!")
 //criar 2 intens
const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

//add 2 itens no carrinho
await cartservice.addItem(myCart, item1)
await cartservice.addItem(myCart, item2)

await cartservice.removeItem(myCart, item2)
await cartservice.removeItem(myCart, item2)

//demostra os itens no console
await cartservice.displayCart(myCart)

//apagar itens
// await cartservice.deleteItem(myCart, item2.name)
// await cartservice.deleteItem(myCart, item1.name)


await cartservice.calculateTotal(myCart)