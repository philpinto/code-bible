var fs = require("fs");

fs.appendFile("log.txt", "WAZZZAP", function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Yo Mama");

});

