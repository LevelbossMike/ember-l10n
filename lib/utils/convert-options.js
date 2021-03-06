// jscs:disable
/* jshint node:true */

'use strict';

module.exports = [
  {
    name: 'convert-from',
    type: String,
    aliases: ['i'],
    default: './translations',
    description: 'Directory of PO file to convert',
    validInConfig: true
  },
  {
    name: 'convert-to',
    type: String,
    aliases: ['o'],
    default: './public/assets/locales',
    description: 'Directory to write JSON files to',
    validInConfig: true
  },
  {
    name: 'fingerprint-map',
    type: String,
    aliases: ['f'],
    default: './app/utils/l10n-fingerprint-map.js',
    description: 'Path to the fingerprint-map file. Set to false to deactivate fingerprinting',
    validInConfig: true
  },
  {
    name: 'language',
    type: String,
    aliases: ['l'],
    default: 'en',
    description: 'Target language for PO to JSON conversion',
    validInConfig: true
  },
  {
    name: 'gettextjs-path',
    type: String,
    default: './node_modules/gettext.js/bin/po2json',
    description: 'The path where gettext.js is available',
    validInConfig: true
  }
];
