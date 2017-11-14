var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message UBX-ESF_STATUS (0x10 0x10).
 */

var EsfStatus = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "ESF-STATUS";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

EsfStatus.prototype = Object.create(UBX.prototype);
EsfStatus.prototype.constructor = EsfStatus;

var numSens = new Parser()
  .uint8('sensStatus1')
  .uint8('sensStatus2')
  .uint8('freq')
  .uint8('faults');

EsfStatus.prototype.parser = new Parser()
  .uint32le('iTOW')
  .uint8('version')
  .uint8('reserved1a')
  .uint8('reserved1b')
  .uint8('reserved1c')
  .uint8('reserved1d')
  .uint8('reserved1e')
  .uint8('reserved1f')
  .uint8('reserved1g')
  .uint8('fusionMode')
  .uint8('reserved2a')
  .uint8('reserved2b')
  .uint8('numSens')
  .array('svs', {
      type: numSens,
      length: 'numSens'
  });

EsfStatus.prototype.fieldSpec = [];
EsfStatus.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
EsfStatus.prototype.fieldSpec.push(['version', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1a', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1b', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1c', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1d', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1e', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1f', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved1g', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['fusionMode', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['reserved2a', 'writeUInt8', 1]);
EsfStatus.prototype.fieldSpec.push(['numSens', 'writeUInt8', 1]);

module.exports = EsfStatus;
