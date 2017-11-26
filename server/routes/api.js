let path = require('path');
require("console-stamp")(console, { pattern: "yyyy/mm/dd HH:MM:ss" });

let express = require('express');
let router = express.Router();

let Drink = require('../models/Drink');
let Member = require('../models/Member');
let TastingSession = require('../models/TastingSession');
let Vote = require('../models/Vote');

Drink.methods([ 'get', 'put', 'post', 'delete' ]);
Member.methods([ 'get', 'put', 'post', 'delete' ]);
TastingSession.methods([ 'get', 'put', 'post', 'delete' ]);
Vote.methods([ 'get', 'put', 'post', 'delete' ]);

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

Member.route('addToSession.post', function (req, res, next) {
  Member.create({name: req.body.member.name},
    function (err, user) {
      if (err) console.error("addMemberToSession, error: " + err);
      addToSession(user._id);
    });
    function addToSession(userId) {
      TastingSession.findByIdAndUpdate(
        req.body.sessionId,
        {$push: {"members": userId}},
        {safe: true, upsert: true, new: true},
        function(err, session){
          if (err) console.error("addToSession, error " + err);
          res.send(session)
        });
      }
    });

    TastingSession.after('post', function(req, res, next) {
      TastingSession.findByIdAndUpdate(
        res.locals.bundle._id,
        {$set: {"creator": req.body.memberId}},
        {safe: true, upsert: true, new: true},
        function(err, session){
          if (err) console.error("Failed to set member as creator, error " + err);
          res.locals.bundle.creator = req.body.memberId
          next();
        });
      });

      TastingSession.route('active.get', function (req, res, next) {
        TastingSession.find({}, function(err, sessions) {
          var activeSessions = [];
          sessions.forEach(function(session) {
            if (session.isActive) {
              activeSessions.push(session)
            }
          });
          res.send(activeSessions);
        });
      });

      Drink.register(router, '/drink');
      Member.register(router, '/member');
      TastingSession.register(router, '/tastingsession');
      Vote.register(router, '/vote')

      //Return router:
      module.exports = router;
