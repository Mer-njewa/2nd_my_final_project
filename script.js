let totalCost = 0;

function addItem(){

    // Get input values
    const itemName = document.getElementById("itemName").value;

    const category = document.getElementById("category").value;

    const price = parseFloat(
        document.getElementById("price").value
    );

    const quantity = parseInt(
        document.getElementById("quantity").value
    );

    const discount = parseFloat(
        document.getElementById("discount").value
    );

    // Validation
    if(
        itemName === "" ||
        isNaN(price) ||
        isNaN(quantity) ||
        isNaN(discount)
    ){
        alert("Please fill all fields!");
        return;
    }

    // Multiplication
    let subtotal = price * quantity;

    // Discount calculation
    let discountAmount = subtotal * (discount / 100);
// Total shopping cost
let totalCost = 0;

// Add item function
function addItem(){

    // Get values
    const itemName = document.getElementById("itemName").value;

    const category = document.getElementById("category").value;

    const price = parseFloat(
        document.getElementById("price").value
    );

    const quantity = parseInt(
        document.getElementById("quantity").value
    );

    const discount = parseFloat(
        document.getElementById("discount").value
    );

    // Validation
    if(
        itemName.trim() === "" ||
        isNaN(price) ||
        isNaN(quantity) ||
        isNaN(discount)
    ){
        alert("Please fill all fields!");
        return;
    }

    // Multiplication
    let subtotal = price * quantity;

    // Discount calculation
    let discountAmount = subtotal * (discount / 100);

    // Subtraction
    let finalPrice = subtotal - discountAmount;

    // Addition to total
    totalCost += finalPrice;

    // Create row
    const table = document.getElementById("shoppingTable");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${itemName}</td>
        <td>${category}</td>
        <td>€ ${price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${discount}%</td>
        <td>€ ${finalPrice.toFixed(2)}</td>
    `;

    // Add row
    table.appendChild(row);

    // Update total
    document.getElementById("total").innerText =
        totalCost.toFixed(2);

    // Clear inputs
    clearInputs();
}

// Clear form inputs
function clearInputs(){

    document.getElementById("itemName").value = "";

    document.getElementById("price").value = "";

    document.getElementById("quantity").value = "";

    document.getElementById("discount").value = "";

    document.getElementById("category").selectedIndex = 0;
}
    // Subtraction
    let finalPrice = subtotal - discountAmount;

    // Addition to total cost
    totalCost += finalPrice;

    // Create new row
    const table = document.getElementById("shoppingTable");

    const row = table.insertRow();

    row.innerHTML = `
        <td>${itemName}</td>
        <td>${category}</td>
        <td>${price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${discount}%</td>
        <td>${finalPrice.toFixed(2)}</td>
    `;

    // Update total
    document.getElementById("total").innerText =
        totalCost.toFixed(2);

    // Clear inputs
    document.getElementById("itemName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("discount").value = "";
}