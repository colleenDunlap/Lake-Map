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
