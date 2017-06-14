"use strict";
global.PACKAGE_NAME = 'Tookan';
const util = require('util');
var datetime = require('node-datetime');

const express = require('express'),
  bodyParser = require('body-parser'),
  RAPI = require('rapi-js-package'),
  fs = require('fs'),
  lib = require('./lib'),
  _ = lib.callback;

const PORT = process.env.PORT || 8080;
const app = express();

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
  cfile = fs.readFileSync('./control.json', 'utf-8');

let metadata = JSON.parse(mfile),
  control = JSON.parse(cfile);

app.use(bodyParser.json(({
  limit: '50mb'
})));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => {
  res.send(metadata);
});

for (let func in control) {
  let options = {
    query: {},
    hasSkip: true,
    parseUri: true,
    debug: false
  };

  let {
    method,
    args,
    values,
    url
  } = control[func];

  app.post(`/api/${PACKAGE_NAME}/${func}`, _(function*(req, res) {
    let opts = {};
    let r = {
      callback: "",
      contextWrites: {}
    };

    req.body.args = lib.clearArgs(req.body.args);

    //reverse compatibility and new parameters after marketplace refactoring

    if (typeof req.body.args.jobPickupCoordinate != 'undefined') {
      let coordinates = req.body.args.jobPickupCoordinate.split(',').map(val => Number(val) + 1);
      req.body.args.jobPickupLatitude = coordinates[0];
      req.body.args.jobPickupLongitude = coordinates[1];
    }

    if (typeof req.body.args.coordinate != 'undefined') {
      let coordinates = req.body.args.coordinate.split(',').map(val => Number(val) + 1);
      req.body.args.latitude = coordinates[0];
      req.body.args.longitude = coordinates[1];
    }

    if (typeof req.body.args.startDate != 'undefined') {
      let rawStartTime = datetime.create(req.body.args.startDate);
      req.body.args.startDate = rawStartTime.format('Y-m-d');
    }
    if (typeof req.body.args.endDate != 'undefined') {
      let rawEndTime = datetime.create(req.body.args.endDate);
      req.body.args.endDate = rawEndTime.format('Y-m-d');
    }

    function IsJsonString(str) {
      try {
        parsedString = JSON.parse(str);
      } catch (e) {
        return false;
      }
      return parsedString;
    }
    if (typeof req.body.args.tags != 'undefined') {
    let  tags = util.isArray(req.body.args.tags) ? req.body.args.tags.join() : req.body.args.tags;
      req.body.args.tags = IsJsonString(tags) ? IsJsonString(tags).join() : tags;
    }
    if (typeof req.body.args.dispatcherTeams != 'undefined') {
    let  dispatcherTeams = util.isArray(req.body.args.dispatcherTeams) ? req.body.args.dispatcherTeams.join() : req.body.args.dispatcherTeams;
      req.body.args.dispatcherTeams = IsJsonString(dispatcherTeams) ? IsJsonString(dispatcherTeams).join() : dispatcherTeams;
    }



    try {
      if (values) opts = lib.parseValues(values);
      for (let arg in args) {
        let argarr = arg.split('|');
        opts[args[arg] + '|' + argarr[0]] = req.body.args[argarr[1]];
      }

      options.body = opts;
      options.method = method;

      let result = yield new RAPI(url).request(options);

      r.callback = 'success';
      r.contextWrites['to'] = lib.success(result);
    } catch (e) {
      r.callback = 'error';
      r.contextWrites['to'] = lib.error(e);
    }

    res.status(200).send(r);
  }));
}

app.listen(PORT);
module.exports = app;
