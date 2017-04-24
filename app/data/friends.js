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
  }],

  // function to sterilize inputs and add to friends array
  addTo: function(input){
    // figure out nearest friend
    var nearest = {
      difference : 100,
      index : 0
    }
    for(i=0; i<this.list.length; i++){
      var diff;
      for(j=0; j<10; j++){
        diff += Math.abs( this.list[i].scores[j] - input.body.j );
      }
      if(diff < nearest.difference){
        nearest.index = i;
      }
    }

    // push data to list
    this.list.push(input);

    console.log(this.list[nearest.index]);
    // return nearest friend
    return this.list[nearest.index];
  }
};