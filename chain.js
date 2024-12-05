const data = [{id: 1, name: 'Babla', address: 'Kochu khet'}];
// console.log(data[0].address)


const products = {
  count: 5000,
  data: [
    { id: 1, name: "Lenovo Laptop", price: 65000 },
    { id: 2, name: "macbook Laptop", price: 100000 },
  ],
};

// console.log(products.data[1].price)



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


/* const user3 = {
  id:102102,
  name: 'Jamal',
  'cell-no': 110,
  address: {
    city: 'Dhaka',
    moreInfo: {
      street: 'Jamal Kodu',
      Goli: 2
    },
    present: {
      city: 'New Khali',
      alaka: {
        city: 'BBaria'
      }
    }
  },
}

console.log(user3.address.jamal?.city) //Jamal er value pawa jay nai */

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




// console.log(apiResponse?.data?.user?.profile?.name);
// console.log(apiResponse?.data?.user?.age?.name)

const movie = {
  title: "Inception",
  details: {
    director: "Christopher Nolan",
    ratings: {
      imdb: 7.1
    },
  },
};
const imdbRating = movie?.details?.ratings?.imdb ?? "Rating Unavailable";
console.log('IMDB Rating: ',imdbRating)
