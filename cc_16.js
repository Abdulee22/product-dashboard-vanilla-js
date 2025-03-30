// Task 2: Fetch Products with .then() //
function fetchProductsThen() {
fetch("https://www.course-api.com/javascript-store-products")
.then(response => response.json()) // Convert the response to JSON 
.then(products => {
console.log("Products fetched with .then():");
products.forEach(product => console.log(product.fields.name));}) // Loged name      
.catch(error => handleError(error));}// Handle any fetch errors  

// Task 3: Fetch Products with async/await //
async function fetchProductsAsync() {
try {
const response = await fetch('https://www.course-api.com/javascript-store-products');
if (!response.ok) {
throw new Error('Network response was not ok');}
const data = await response.json();// Convert the response to JSON format
displayProducts(data);}// // Display the fetched products on the page
 catch (error) {
 handleError(error);}} // Handling any errors

 // Task 4: Display the Products //
function displayProducts(products) {
 const container = document.getElementById('product-container');
container.innerHTML = ''; // Clears content
        
const productsToShow = products.slice(0, 5);// Only show first 5 products
        
productsToShow.forEach(product => {
const productElement = document.createElement('div');
 productElement.className = 'product'; // Create and append HTML elements for each product
          
productElement.innerHTML = `
     <img src="${product.fields.image[0].url}" alt="${product.fields.name}" width="200">
    <h3>${product.fields.name}</h3>
     <p>$${(product.fields.price / 100).toFixed(2)}</p> `; // Inner HTML with information 
          
container.appendChild(productElement);});}
    
    