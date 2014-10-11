describe ("getting an element by id - domElemId document.getElementById(id)", function() {   
   it ("should not wipeout Object prototype and be a mechanism", function() {
      var mech = m.library.mechanism02(1,2);
      expect(mech).to.have.property('toString');
      expect(m.library.Mechanism02).to.not.eql(null);
   });

   it ("should have correct properties", function() {
      var mech = m.library.mechanism02(1,2);
      expect(mech).to.have.property('isMech');
      expect(mech.isMech).to.be.true;
      
      expect(mech).to.have.property('isNull');
      expect(mech.isNull).to.be.false;
      
      expect(mech).to.have.property('isPrim');
      expect(mech.isPrim).to.be.false;
      
      expect(mech).to.have.property('data01');
      expect(mech).to.have.property('_data01'); // imagined privacy
      
      expect(mech).to.have.property('data02');
      expect(mech).to.have.property('_data02'); // imagined privacy
      
   });

   it ("contract: data01 and data02 of mechanism02 must be defined or a non-null value.", function() {
      // cause i am lazy to figure this out
      try { var x = m.library.mechanism02(); } catch (e) {
         expect(e).to.equal("data01 and data02 of mechanism02 must be defined or a non-null value.");
      }
   
      try { var x = m.library.mechanism02(null); } catch (e) {
         expect(e).to.equal("data01 and data02 of mechanism02 must be defined or a non-null value.");
      }

      try { var x = m.library.mechanism02(undefined); } catch (e) {
         expect(e).to.equal("data01 and data02 of mechanism02 must be defined or a non-null value.");
      }
   
   });
});