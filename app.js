document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const code = document.getElementById("customerCode").value.trim();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const balance = parseInt(document.getElementById("customerBalance").value) || 0;

  const customer = { code, name, phone, address, balance };

  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  // بررسی تکراری نبودن کد مشتری
  if (customers.find(c => c.code === code)) {
    alert("کد مشتری تکراری است!");
    return;
  }

  customers.push(customer);
  localStorage.setItem("customers", JSON.stringify(customers));

  document.getElementById("customerForm").reset();
  showCustomers();
});

function showCustomers() {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  const list = document.getElementById("customerList");
  list.innerHTML = "";

  customers.forEach(c => {
    const li = document.createElement("li");
    li.textContent = ${c.code} - ${c.name} (${c.balance.toLocaleString()} ریال);
    list.appendChild(li);
  });
}

showCustomers();
