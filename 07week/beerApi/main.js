// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getBeerLocations();
};

let beers = [];

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getBeerLocations = () => {
  const proxy = "https://cors-anywhere.herokuapp.com/";

  // const api = ;
  fetch(api)
    .then(res => res.json())
    .then(data => {
      beers = data;
      console.log(beers);
    });
};

// displayBeers = () => {
//   console.log(beers);
// };

// displayBeers();
