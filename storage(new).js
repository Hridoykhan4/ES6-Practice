const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;

  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = "";
  valueInput.value = "";
};

const person = {
  name: "Jamal",
  age: 22,
  25: "summer",
  address: "Dhaka",
};

for (const element in person) {
  console.log(`${element}: ${person[element]}`);
}
