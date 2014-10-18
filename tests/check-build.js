var pkg = require('../package.json');

describe("the modules were built correctly", function() {
   it ("should have the libary", function() {
      expect(m).to.not.be.undefined;
      expect(m.library).to.not.be.undefined;
   });
   
   it ("should have the correct version", function() {
      expect(m.library._["version-" + pkg.namesub]).to.equal('0.1.4');
   });
});
