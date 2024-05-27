const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) {
    return console.log("There is an error");
  }
});

fs.readFile("welcome.txt", function (err, data) {
  if (err) {
    return console.log("error received");
  }
  console.log(data.toString());
});
