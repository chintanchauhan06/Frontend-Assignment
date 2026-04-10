class SubmissionViewer {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("customers")) || [];
    this.tableBody = document.getElementById("tableBody");
    this.noData = document.getElementById("noData");

    this.render(this.data);

    document.getElementById("search").addEventListener("input", (e) => {
      this.search(e.target.value);
    });
  }

  render(data) {
    this.tableBody.innerHTML = "";

    if (data.length === 0) {
      this.noData.textContent = "No data found";
      return;
    }

    this.noData.textContent = "";

    data.forEach((item, index) => {
      this.tableBody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.phone}</td>
          <td>${item.email}</td>
          <td>${item.checkin}</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="viewer.delete(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  search(query) {
    const filtered = this.data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.checkin.includes(query)
    );
    this.render(filtered);
  }

  delete(index) {
    this.data.splice(index, 1);
    localStorage.setItem("customers", JSON.stringify(this.data));
    this.render(this.data);
  }
}

const viewer = new SubmissionViewer();