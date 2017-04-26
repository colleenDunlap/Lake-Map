const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_PASSWORD
  }
});

/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = (req, res) => {


  
  console.log(req.body);
  req.assert('name', 'Event cannot be blank').notEmpty();
  req.assert('latitude', 'Latitude cannot be blank').notEmpty();
  req.assert('longitude', 'Longitude cannot be blank').notEmpty();
  req.assert('message', 'Description cannot be blank').notEmpty();
  
  
  const errors = req.validationErrors();
  
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/contact');
  }
  const newPin = {
    pin_name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.message
    };

  var MongoClient = require('mongodb').MongoClient
        , async = require('async')

        MongoClient.connect('mongodb://localhost:27017/lakemapv02', function(err, db) {
                db.collection('pins', function(err, coll){
                        console.log("Inserting this pin!")
			coll.insert(newPin)
                        });
                });

  res.redirect('/contact')
//               res.end(JSON.stringify(data));
  
  /*
  const mailOptions = {
    to: 'colleen.dunlap@marquette.edu',
    from: `${req.body.name} <${req.body.message}>`,
    subject: 'Contact Form | Hackathon Starter',
    text: req.body.latitude
  };
*/

  /*transporter.sendMail(newPin, (err) => {
    if (err) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/contact');
    }
    req.flash('success', { msg: 'Email has been sent successfully!' });
    res.redirect('/contact');
  });*/
};
