let products = [];
let editIndex = null;

function displayProducts(list = products) {
  let tbody = document.querySelector("#ptable tbody");
  tbody.innerHTML = "";
  list.forEach((prod, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${prod.name}</td>
        <td>${prod.price}</td>
        <td>${prod.category}</td>
        <td>${prod.desc}</td>
        <td><span class="btn-delete" onclick="deleteProduct(${i})">Delete</span></td>
        <td><span class="btn-update" onclick="editProduct(${i})">Update</span></td>
      </tr>
    `;
  });
}

function addProduct() {
  let name = document.getElementById("pname").value;
  let price = document.getElementById("pprice").value;
  let category = document.getElementById("pcategory").value;
  let desc = document.getElementById("pdesc").value;

  if (name && price && category) {
    let product = { name, price, category, desc };
    if (editIndex === null) {
      products.push(product);
    } else {
      products[editIndex] = product;
      editIndex = null;
    }
    clearForm();
    displayProducts();
  } else {
    alert("Please fill all required fields!");
  }
}

function deleteProduct(i) {
  products.splice(i, 1);
  displayProducts();
}

function editProduct(i) {
  let p = products[i];
  document.getElementById("pname").value = p.name;
  document.getElementById("pprice").value = p.price;
  document.getElementById("pcategory").value = p.category;
  document.getElementById("pdesc").value = p.desc;
  editIndex = i;
}

function searchProduct() {
  let term = document.getElementById("search").value.toLowerCase();
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term) ||
    p.desc.toLowerCase().includes(term)
  );
  displayProducts(filtered);
}

function clearForm() {
  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
  document.getElementById("pcategory").value = "";
  document.getElementById("pdesc").value = "";
}