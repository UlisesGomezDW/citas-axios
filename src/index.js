import axios from "axios";
async function getDates() {
  let URL = "https://api.github.com/users";
  let consult = await axios.get(URL);
  if (consult.status === 200) {
    let response = consult.data;
    let table = document.getElementById("table-contents");
    table.innerHTML = "";
    response.forEach(data => {
      table.innerHTML = `<tr>
      <td>${data.name}</td>
      </tr>`;
    });
  } else {
    let table = document.getElementById("table-contents");
    table.innerHTML = `<tr>
      <td>Error</td>
      </tr>`;
  }
}
getDates();
