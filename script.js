// Total shopping cost
let totalCost = 0;

// Add item function
function addItem(){

    // Get input values
    const itemName =
        document.getElementById("itemName").value;

    const category =
        document.getElementById("category").value;

    const price = parseFloat(
        document.getElementById("price").value
    );

    const quantity = parseInt(
        document.getElementById("quantity").value
    );

    const discount = parseFloat(
        document.getElementById("discount").value
    ) || 0;

    // Validation
    if(
        itemName.trim() === "" ||
        isNaN(price) ||
        isNaN(quantity)
    ){
        alert("Please fill all fields correctly!");
        return;
    }

    // Calculations
    let subtotal = price * quantity;

    let discountAmount =
        subtotal * (discount / 100);

    let finalPrice =
        subtotal - discountAmount;

    // Add to total cost
    totalCost += finalPrice;

    // Get table body
    const table =
        document.getElementById("shoppingbody");

    // Create row
    const row =
        document.createElement("tr");

    row.innerHTML = `
        <td>
            <button onclick="markAsBought(this)">
                Bought
            </button>
        </td>

        <td>${itemName}</td>

        <td>${category}</td>

        <td>€ ${price.toFixed(2)}</td>

        <td>${quantity}</td>

        <td>${discount}%</td>

        <td>€ ${finalPrice.toFixed(2)}</td>
    `;

    // Add row to table
    table.appendChild(row);

    // Update total display
    document.getElementById("total").innerText =
        totalCost.toFixed(2);

    // Clear input fields
    clearInputs();
}

// Mark item as bought
function markAsBought(button){

    // Get row
    const row =
        button.parentElement.parentElement;

    // Add bought class
    row.classList.add("bought");

    // Change button text
    button.innerText = "Bought ✓";

    // Disable button
    button.disabled = true;
}

// Clear all inputs
function clearInputs(){

    document.getElementById("itemName").value = "";

    document.getElementById("price").value = "";

    document.getElementById("quantity").value = "";

    document.getElementById("discount").value = "";

    document.getElementById("category").selectedIndex = 0;
}