//What actions can my cart perform

//use cases

//add item
async function addItem(userCart, item) {
    userCart.push(item)
}

//calculate the total value
async function calculateTotal(userCart) {
    console.log("\n Shopee Cart Total Is:")
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(`Total: ${result}`)
}

//delete item from the cart
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

//display the cart
async function displayCart(userCart) {
    console.log("\n Shopee Cart List:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    });
}

//remove 1 item
async function removeItem(userCart, item) {

    //1.  find the item index
const indexFound = userCart.findIndex((p) => p.name === item.name)

//2. if the item is not found
if (indexFound == -1){
    console.log("item nao encontrado")
    return
}

//3. If item > 1, subtract 1 item
if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
    return
}

//4. If Item = 1, delete the item
if (userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
    return
}

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}