const expect = require("chai").expect;
const sinon = require("sinon");
var prom = require("../src/prom.js");

const getSpy = sinon.stub(prom, "get").returns(Promise.resolve([10]));

describe("test 1", function() {
  it("should return 10", function() {
    return prom.then(val => expect(val).to.be.equal(10));
  });
});

describe("test 2", function() {
  it("should return 10", function(done) {
    prom.then(val => expect(val).to.be.equal(10)).then(done());
  });
});

describe("test 3", function() {
  it("should return 10", function(done) {
    prom.then(val => expect(val).to.be.equal(110)).then(() => done(), done);
  });
});

describe("test 4", function() {
  it("should return 10", function(done) {
    prom.then(val => expect(val).to.be.equal(10)).then(x => done(), done);
  });
});

describe("test 5", function() {
  it("should return 10", function(done) {
    prom.then(val => expect(val).to.be.equal(10)).then(function() {
      done();
      //return done;
    });
  });
});
