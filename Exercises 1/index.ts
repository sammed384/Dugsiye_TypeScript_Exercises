let productName : string = "pc";
let price : number = 1000;
let discountAvailable  : boolean = true;

// wrong value
console.log(productName.toFixed(2));
console.log(price.toUpperCase);
console.log(discountAvailable.toLowerCase);

// fix the error
console.log(productName.toUpperCase);
console.log(price.toFixed(2);
console.log(discountAvailable);

// Fix this Broken JavaScript
function getDiscount(price: number, discount: number): number {
    return price - price * discount;
  }
  
//   Replace any with a safer approach and prevent the crash.
function printLength(x: unknown) {
    if (typeof x === "string") {
        console.log(x.length);
      }
    
  }
  