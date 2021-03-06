'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./server/knexfile.js')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex
