var packageJSON = require("../package.json");

describe("Riktige tester", function() {
	it("should respond with Riktig!", function(done) {
		if(packageJSON.devDependencies) {

			if (packageJSON.devDependencies["jasmine-node"]) {
				console.log("Riktig!");
				done();

			} else {
				if (packageJSON.devDependencies["jasmine"]) {
					done(new Error("Feil jasmine!"));
				} else {
					done(new Error("Fant ikke jasmine"));
				}
			}

		} else {
			done(new Error("Ingen devDependencies"));
		}
	});
});
