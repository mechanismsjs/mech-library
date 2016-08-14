describe("testing mechanism01", function() {
  it("should not wipeout Object prototype and be a mechanism", function() {
    var mech = m.library.mechanism01(1);
    expect(mech).to.have.property('toString');
    expect(m).to.not.eql(undefined);
    expect(m.library).to.not.eql(undefined);
    expect(m.library._).to.not.eql(undefined);
    expect(m.library._.Mechanism01).to.not.eql(undefined);
  });

  it("should have correct properties", function() {
    var mech = m.library.mechanism01(1);
    expect(mech.isMech).to.be.equal(true);
    expect(mech.data01).to.equal(1);
  });

  it("should set _parDir of child mechanisms to parent", function() {
    var mech1 = m.library.mechanism01(1);
    var mech4 = m.library.mechanism01(mech1);
    expect(mech1._parDir).to.equal(mech4);
  });

});
