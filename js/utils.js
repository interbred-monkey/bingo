// function to shuffle the array
Object.defineProperty(Array.prototype, "shuffle", {
  enumerable: false,
  value: function() {

    var new_arr   = [],
        arr_size  = this.length,
        arr_copy  = JSON.parse(JSON.stringify(this));

    // loop the length of the array
    for (var i = 0; i < arr_size; i++) {

      // reverse so we don't alter the index we are using 
      // splice one out so it gets smaller
      // and add it to a new array of numbers
      new_arr.push(arr_copy.reverse().splice(Math.floor(Math.random() * (arr_copy.length - 1)), 1)[0]);

    }

    // return our shuffled array
    return new_arr;

  }
})