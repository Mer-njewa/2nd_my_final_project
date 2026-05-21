// ===============================
// SMART SHOPPING PLANNER
// ===============================

let totalCost = 0;

let shoppingItems =
    JSON.parse(localStorage.getItem("shoppingItems")) || [];


// ===============================
// ADD ITEM
// ===============================

function addItem() {

    const itemName =
        document.getElementById("itemName").value.trim();

    const category =
        document.getElementById("category").value;

    const price =
        parseFloat(document.getElementById("price").value);

    const quantity =
        parseInt(document.getElementById("quantity").value);

    const discount =
        parseFloat(document.getElementById("discount").value);

    // Validation
    if (
        itemName === "" ||
        isNaN(price) ||
        isNaN(quantity) ||
        isNaN(discount)
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Price Calculation
    const subtotal = price * quantity;

    const discountAmount =
        subtotal * (discount / 100);

    const finalPrice =
        subtotal - discountAmount;

    // Create Item Object
    const item = {
        itemName,
        category,
        price,
        quantity,
        discount,
        finalPrice,
        bought: false
    };

    // Save Item
    shoppingItems.push(item);

    localStorage.setItem(
        "shoppingItems",
        JSON.stringify(shoppingItems)
    );

    // Refresh UI
    displayItems();

    // Clear Form
    clearInputs();
}


// ===============================
// DISPLAY ITEMS
// ===============================

function displayItems() {

    const tableBody =
        document.getElementById("shoppingBody");

    tableBody.innerHTML = "";

    totalCost = 0;

    shoppingItems.forEach((item, index) => {

        totalCost += item.finalPrice;

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${item.itemName}</td>

            <td>${item.category}</td>

            <td>€${item.price.toFixed(2)}</td>

            <td>${item.quantity}</td>

            <td>${item.discount}%</td>

            <td>€${item.finalPrice.toFixed(2)}</td>

            <td>
                <input
                    type="checkbox"
                    ${item.bought ? "checked" : ""}
                    onchange="toggleBought(${index})"
                >
            </td>

            <td>
                <button onclick="editItem(${index})">
                    Edit
                </button>

                <button onclick="removeItem(${index})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);

    });

    // Update Total
    document.getElementById("total").innerText =
        totalCost.toFixed(2);

    analyzeSpending();
}


// ===============================
// REMOVE ITEM
// ===============================

function removeItem(index) {

    shoppingItems.splice(index, 1);

    localStorage.setItem(
        "shoppingItems",
        JSON.stringify(shoppingItems)
    );

    displayItems();
}


// ===============================
// EDIT ITEM
// ===============================

function editItem(index) {

    const item = shoppingItems[index];

    document.getElementById("itemName").value =
        item.itemName;

    document.getElementById("category").value =
        item.category;

    document.getElementById("price").value =
        item.price;

    document.getElementById("quantity").value =
        item.quantity;

    document.getElementById("discount").value =
        item.discount;

    // Remove old item
    shoppingItems.splice(index, 1);

    localStorage.setItem(
        "shoppingItems",
        JSON.stringify(shoppingItems)
    );

    displayItems();
}


// ===============================
// TOGGLE BOUGHT
// ===============================

function toggleBought(index) {

    shoppingItems[index].bought =
        !shoppingItems[index].bought;

    localStorage.setItem(
        "shoppingItems",
        JSON.stringify(shoppingItems)
    );
}


// ===============================
// SEARCH ITEMS
// ===============================

function searchItems() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const rows =
        document.querySelectorAll("#shoppingBody tr");

    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        row.style.display =
            text.includes(input)
                ? ""
                : "none";

    });
}


// ===============================
// CHECK BUDGET
// ===============================

function checkBudget() {

    const budget =
        parseFloat(
            document.getElementById("budget").value
        );

    if (isNaN(budget)) {

        alert("Please enter a valid budget.");
        return;
    }

    if (totalCost > budget) {

        alert("⚠ Budget exceeded!");

    } else {

        alert("✅ You are within budget.");
    }
}


// ===============================
// ANALYZE SPENDING
// ===============================

function analyzeSpending() {

    let categories = {};

    shoppingItems.forEach(item => {

        if (!categories[item.category]) {

            categories[item.category] = 0;
        }

        categories[item.category] +=
            item.finalPrice;

    });

    let maxCategory = "";
    let maxValue = 0;

    for (let category in categories) {

        if (categories[category] > maxValue) {

            maxValue =
                categories[category];

            maxCategory =
                category;
        }
    }

    document.getElementById("mostCategory").innerText =
        maxCategory
            ? `Most spending on: ${maxCategory}`
            : "";
}


// ===============================
// DARK MODE
// ===============================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}


// ===============================
// CLEAR INPUTS
// ===============================

function clearInputs() {

    document.getElementById("itemName").value = "";

    document.getElementById("price").value = "";

    document.getElementById("quantity").value = "";

    document.getElementById("discount").value = "";
}


// ===============================
// LOAD SAVED ITEMS
// ===============================

displayItems();
