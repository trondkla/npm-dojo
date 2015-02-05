var fs = require("fs");

if(fs.existsSync("bower_components/jquery/src/jquery.js")) {
   console.log("Riktig!");
} else {
   console.log("Jquery har ikke blitt installert via bower");
}
