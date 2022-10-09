var sellingPrice = 199;
var listingPrice = 799;
var discountPercentage = ((listingPrice - sellingPrice)/listingPrice) * 100;

var displayDiscountPercentage = Math.round(discountPercentage);

console.log(displayDiscountPercentage + "% off");