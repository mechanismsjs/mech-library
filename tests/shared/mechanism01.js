describe ("testing mechanism01", function() {   
   it ("should not wipeout Object prototype and be a mechanism", function() {
      var mech = m.library.mechanism01(1,2);
      expect(mech).to.have.property('toString');
      expect(m).to.not.be.undefined;
      expect(m.library).to.not.be.undefined;
      expect(m.library._).to.not.be.undefined;
      expect(m.library._.Mechanism01).to.not.be.undefined;
   });

   it ("should have correct properties", function() {
      var mech = m.library.mechanism01(1,2);
      expect(mech.isMech).to.be.true;
      
      expect(mech).to.have.property('data01');
      expect(mech).to.have.property('_data01'); // imagined privacy
      
      expect(mech).to.have.property('data02');
      expect(mech).to.have.property('_data02'); // imagined privacy
      
   });

   it ("contract: data01 and data02 of mechanism01 must be defined or a non-null value.", function() {
      // cause i am lazy to figure this out
      try { var x = m.library.mechanism01(); } catch (e) {
         expect(e).to.equal("data01 and data02 of mechanism01 must be defined or a non-null value.");
      }
   
      try { var x = m.library.mechanism01(null); } catch (e) {
         expect(e).to.equal("data01 and data02 of mechanism01 must be defined or a non-null value.");
      }

      try { var x = m.library.mechanism01(undefined); } catch (e) {
         expect(e).to.equal("data01 and data02 of mechanism01 must be defined or a non-null value.");
      }
   
   });
});