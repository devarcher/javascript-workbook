// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getBeerLocations();
};

let categories = [];
let beers = [];

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getBeerLocations = () => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  // const apiCategory = `${proxy}http://api.brewerydb.com/v2/categories/?key=e65f7926d6ffd51706e8231e43b7cf78`;
  const apiBeers = `${proxy}http://api.brewerydb.com/v2/beers/?key=e65f7926d6ffd51706e8231e43b7cf78`;

  // fetch(apiCategory)
  //   .then(res => res.json())
  //   .then(data => {
  //     categories = data;
  //     displayCategories();
  //   });

  fetch(apiBeers)
    .then(res => res.json())
    .then(data => {
      beers = data;
      displayBeers();
    });
};

// const displayCategories = () => {
// console.log(categories);
// };

const displayBeers = () => {
  const lowHopBeers = [];
  const highHopBeers = [];

  // console.log(beers.data[0].abv);
  // console.log(beers.data.length);

  // Finding the low and high bitter beers and pushing them to appropriate array.
  for (let i = 0; i < beers.data.length; i++) {
    let ibuNum = parseInt(beers.data[i].ibu);
    // console.log(`ibuNum: `, ibuNum)
    if (ibuNum <= 30) {
      lowHopBeers.push(beers.data[i]);
    } else if (ibuNum > 30) {
      highHopBeers.push(beers.data[i]);
    }
  }

  console.log(`beers.data: `, beers.data);
  console.log(`lowHopBeers:`, lowHopBeers);
  console.log(`highHopBeers:`, highHopBeers);

  // Mapping the arrays and adding DOM elements
  lowHopBeers.map(beer => {
    const li = document.createElement("li");
    const heart = li.innerHTML("<i class='far fa-heart'></i>");


  });
};
