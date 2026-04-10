class CustomerFormHandler {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.messageBox = document.getElementById("messageBox");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        this.saveToLocalStorage();
        this.showMessage("Form submitted successfully!", "success");
        this.clearForm();
      }
    });

    this.form.addEventListener("input", (e) => {
      this.validateField(e.target);
    });
  }

  getFormData() {
  return {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    address: document.getElementById("address").value.trim(),
    aadhar: document.getElementById("aadhar").value.trim(),
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value,
    adults: document.getElementById("adults").value,
    purpose: document.getElementById("purpose").value.trim()
  };
}

  validateForm() {
    const data = this.getFormData();

    if (data.name.length < 3) return this.showMessage("Name must be at least 3 characters", "danger");
    if (!/^\d{10}$/.test(data.phone)) return this.showMessage("Phone must be 10 digits", "danger");
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return this.showMessage("Invalid email", "danger");
    if (data.address === "") return this.showMessage("Address required", "danger");
    if (!/^\d{12}$/.test(data.aadhar)) return this.showMessage("Aadhar must be 12 digits", "danger");

    const today = new Date().toISOString().split("T")[0];
    if (data.checkin < today || data.checkout < today) {
      return this.showMessage("Dates must be future", "danger");
    }

    if (data.adults <= 0) return this.showMessage("Invalid adults number", "danger");
    if (data.purpose.length === 0) return this.showMessage("Purpose required", "danger");

    return true;
  }

  validateField(field) {
    field.style.border = field.value ? "1px solid green" : "1px solid red";
  }

  saveToLocalStorage() {
    const data = this.getFormData();
    let users = JSON.parse(localStorage.getItem("customers")) || [];
    users.push(data);
    localStorage.setItem("customers", JSON.stringify(users));
  }

  clearForm() {
    this.form.reset();
  }

  showMessage(msg, type) {
    this.messageBox.innerHTML = `
      <div class="alert alert-${type}">${msg}</div>
    `;
  }
}

new CustomerFormHandler("customerForm");