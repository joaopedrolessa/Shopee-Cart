import * as cartservice from './services/cart.js'
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = []

console.log("Wlcome to the your Shopee Cart!")
 //create 2 items
const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

//add 2 items to the cart
await cartservice.addItem(myCart, item1)
await cartservice.addItem(myCart, item2)

await cartservice.removeItem(myCart, item2)
await cartservice.removeItem(myCart, item2)

//display items in the console
await cartservice.displayCart(myCart)

//apagar itens
// await cartservice.deleteItem(myCart, item2.name)
// await cartservice.deleteItem(myCart, item1.name)


await cartservice.calculateTotal(myCart)