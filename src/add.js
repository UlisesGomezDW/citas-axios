import axios from "axios";
let buttonAdd = document.getElementById("Add-Button");
//Agregamos datos
buttonAdd.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let documents = document.getElementById("document").value;
  let birthdate = document.getElementById("date").value;
  let city = document.getElementById("city").value;
  let neighborhood = document.getElementById("neigh").value;
  let cellphone = document.getElementById("phone").value;
  let dates = {
    name,
    lastName,
    documents,
    birthdate,
    city,
    neighborhood,
    cellphone
  };
  let URL = "backend";
  axios
    .post(URL, dates)
    .then(() => alert("Los datos se agregaron"))
    .catch(() => alert("Error"));
});
