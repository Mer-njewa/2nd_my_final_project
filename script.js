let totalCost = 0;

function addItem() {

    // Get values
    const itemName = document.getElementById("itemName").value;
    const category = document.getElementById("category").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const discount = parseFloat(document.getElementById("discount").value) || 0;

    // Validation
    if (
        itemName.trim() === "" ||
        isNaN(price) ||
        isNaN(quantity)
    ) {
        alert("Please fill all fields correctly!");
        return;
    }

    // Calculations
    let subtotal = price * quantity;
    let discountAmount = subtotal * (discount / 100);
    let finalPrice = subtotal - discountAmount;

    // Add to total
    totalCost += finalPrice;

    // Create table row
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

    // Add row to table
    table.appendChild(row);

    // Update total
    document.getElementById("total").innerText =
        totalCost.toFixed(2);

    // Clear inputs
    clearInputs();
}

// Clear form inputs
function clearInputs() {

    document.getElementById("itemName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("category").selectedIndex = 0;
}