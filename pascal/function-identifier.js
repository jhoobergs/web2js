'use strict';

module.exports = class FunctionIdentifier {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name;
  }  
};