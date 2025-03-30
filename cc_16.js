// Task 2: Fetch Products with .then() //
function fetchProductsThen() {
fetch("https://www.course-api.com/javascript-store-products")
.then(response => response.json()) // Convert the response to JSON 
.then(products => {
console.log("Products fetched with .then():");
products.forEach(product => console.log(product.fields.name));}) // Loged name      
.catch(error => handleError(error));}// Handle any fetch errors  