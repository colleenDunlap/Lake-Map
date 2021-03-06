//Tests written by David Vitale. Taken from the format of the original hackathon test's app.js file in the test folder

const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
  it('Requesting any web page should return HTTP code 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /api', () => {
  it('The /api url temporarily represents where our Google Maps instance is stored. Test that that web page exists', (done) => {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

describe('GET /nonexistenturl', () => {
  it('Requesting a nonexisturl should return HTTP code 404', (done) => {
    request(app)
      .get('/thisdoesnotexist')
      .expect(404, done);
  });
});

describe('GET /contact', () => {
  it('The /contact url represents how to post points to the Db. Test that getting that web page exists', (done) => {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('POST /contact', () => {
  it('The /contact url represents how to post points to the Db. Test that posting to endpoint throws 403', (done) => {
    request(app)
      .post('/contact')
      .expect(403, done);
  });
});

var MongoClient = require('mongodb').MongoClient
, async = require('async')

var assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/', function(err, db) {

describe('Mongo', function() {
  describe('can connect to mongo', function() {
    it('Can connect to mongo', function() {
      assert.equal(err, null); //there should be no errors on connecting
    });
  });
});
})


MongoClient.connect('mongodb://localhost:27017/lakemapv02', function(err, db) {
describe('Database', function() {
  describe('can connect to our database', function() {
    it('Can connect to our database', function() {
      assert.equal(err, null); //there should be no errors on connecting
    });
  });
});
})

MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
describe('Database', function() {
  describe('can connect to database', function() {
    it('Can connect to database', function() {
      assert.equal(err, null); //there should be no errors on connecting
    });
  });
});
})



MongoClient.connect('mongodb://localhost:27017/lakemapv02', function(err, db) {

describe('Query db', function() {
  describe('Query collections', function() {
    it('assert collections are right', function() {
      //assert.equal(err, null); //there should be no errors on connecting
      //assert.notequal
      
//	db.collection('pins').then(function(data){
//	  assert.equal("0", data.toArray()[0].pin_id);
 //   });
  });
});
});
});
