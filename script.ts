//imports the products file
import products from './products';

//calculates the cost based on the product name and shipping address
function calculateCost(productName: string, shippingAddress: string): void {
//uses the filter method to search through the products array to find the product that has the same name as the productName variable
  let product = products.filter(product => product.name === productName)[0];
  //logs the product to the console
  console.log(product);

  //creates variables and assigns them to the type number
  let shipping: number;
  let taxPercent: number;
  let taxTotal: number;
  let total: number;
    //displays a message if the product is on pre-order
  if (product.preOrder === true) {
    console.log("This product is on pre-order it will ship out when the product is in stock.");
  } 
  //displays a message if the product is not on pre-order
  else {
    console.log("Your product will be shipped soon!");
  }
//if the product price is greater than or equal to 25 display a message
  if (product.price >= 25) {
    console.log('You qualify for free shipping. Your shipping cost is now free!');
    //sets the shipping cost to 0
    shipping = 0;
  } else {
    console.log('Your shipping price is $5. Spend $25 to earn free shipping!'); 
    //sets the shipping cost to $5
    shipping = 5; 
  }
  //sets the tax percentage to 10% if the shipping address is in New York by using the match method
  if (shippingAddress.match('New York')) {
    taxPercent = 0.1; 
//if the address string does not contain 'New York' the else statement sets the tax percentage to 5% 
  } else {
    taxPercent = 0.05;
  }
//calculates the tax total by multiply the price of the product by the tax percentage set by the address
  taxTotal = product.price * taxPercent;
  //calculates the total cost by adding product.price, taxTotal, and shipping
  total = product.price + taxTotal + shipping;
//logs variables to the console
  console.log('Shipping Address:', shippingAddress);
  console.log('Tax Percentage:', taxPercent);
  console.log('Tax Total:', taxTotal);
  console.log('Total Cost:', total);
}

//inputs the product name
let productName: string = 'beanie';
//inputs the address
let shippingAddress: string = 'my address';

//calculates the cost of ordered product based on the input variables productName and shippingAddress
calculateCost(productName, shippingAddress);

