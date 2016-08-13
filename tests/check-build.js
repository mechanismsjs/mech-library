var pkg = require('../package.json');

describe("the modules were built correctly", function() {
	it("should have the libary", function() {
		expect(m).to.not.eql(undefined);
		expect(m.library).to.not.eql(undefined);
	});

	it("should have the correct version and set your new library to that version", function() {
		expect(m.library._["version-" + pkg.namesub]).to.equal('0.2.1');
	});
});
