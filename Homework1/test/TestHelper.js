const chai = require('chai');

global.chai = chai;
global.expect = chai.expect;

require('babel-register')({
  babelrc: false,
  presets: [
    [
      'env',
      {
        'modules': 'commonjs',
        'targets': {'node': '8.10'}
      }
    ]
  ]
});
