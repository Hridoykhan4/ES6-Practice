// const data = [{id: 1, name: 'Babla', address: 'Kochu khet'}];
// console.log(data[0].address)

const products = {
  count: 5000,
  data: [
    { id: 1, name: "Lenovo Laptop", price: 65000 },
    { id: 2, name: "macbook Laptop", price: 100000 },
  ],
};
// Second Product Price
// console.log(products.data[1].price)

const user = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/1 South Side",
      second: "Block C Lane 2",
      third: "No Doraii",
    },
    city: "Dhaka",
  },
};

const user2 = {
  id: 2001,
  name: "Pori Bibir Majar",
  address: {
    city: "Chittagong",
    country: "Bangladesh",
  },
};

// console.log(user.address.street.second)
// console.log(user2.address.street?.city)

const apiResponse = {
  data: {
    user: {
      profile: {
        name: "Hridoy Khan",
      },
    },
  },
};

console.log(apiResponse?.data?.user?.profile?.name);
console.log(apiResponse?.data?.user?.age?.name)