/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('featured', {
    title: 'Featured'
  });
};
