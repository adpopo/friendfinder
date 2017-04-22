module.exports = {
  // array of friends
  list : [{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }]

  // function to sterilize inputs and add to friends array
  addTo: function(input){
    // sterilize input
    var scrubbed;

    // push if successful
    this.list.push(scrubbed);
  }
};