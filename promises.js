console.log("Script is attached");
// create a promise
let OrderPlaced = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Order is conformed");
  }, 4000);
  resolve("Your order is processing , please wait for few moments ");
});
OrderPlaced.then((message) => {
  console.log(message);
});
