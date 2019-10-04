// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getBeerLocations();
};

let categories = [];
let beers = [];

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getBeerLocations = () => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const apiCategory = `${proxy}http://api.brewerydb.com/v2/categories/?key=e65f7926d6ffd51706e8231e43b7cf78`;
  const apiBeers = `${proxy}http://api.brewerydb.com/v2/beers/?key=e65f7926d6ffd51706e8231e43b7cf78`;

  fetch(apiCategory)
    .then(res => res.json())
    .then(data => {
      categories = data;
      displayCategories();
    });

  fetch(apiBeers)
    .then(res => res.json())
    .then(data => {
      beers = data.filter(id => id === 2);
      console.log(beers)
    });
};

const displayCategories = () => {
  console.log(categories);
};

const displayBeers = (irishBeers) => {
  console.log(beers);
  console.log(irishBeers);
};
