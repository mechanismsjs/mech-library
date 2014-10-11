describe("the modules were built correctly", function() {
   it ("should have the libary", function() {
      expect(m.library).to.not.eql(undefined);
   });

   it ("should have the correct version", function() {
      expect(m.library.version).to.equal('0.1.2');
   });
});
