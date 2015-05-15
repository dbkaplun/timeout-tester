/**
 * TimeoutController
 *
 * @description :: Server-side logic for managing timeouts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var DEFAULT_DURATION = 1000;

module.exports = {
  timeout: function (req, res) {
    setTimeout(function () {
      res.send(req.body || req.query.body);
    }, req.query.duration || DEFAULT_DURATION);
  }
};
