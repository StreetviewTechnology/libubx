var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message NAV_POS_PVT (0x01 0x07).
 *
 * Navigation position velocity time Solution
 *
 * Fields in the UBX payload (`ubx.fields`):
 * @field iTOW number (unsigned 32-bit int, 4 bytes) GPS Time of Week
 * @field {number} year      Year (UTC)
 * @field {number} month     Month, range 1..12 (UTC)
 * @field {number} day       Day of month, range 1..31 (UTC)
 * @field {number} hour      Hour of day, range 0..23 (UTC)
 * @field {number} min       Minute of hour, range 0..59 (UTC)
 * @field {number} sec       Seconds of minute, range 0..60 (UTC)
 * @field {number} valid     Validity Flags (see graphic below)
 * @field {number} tAcc      Time accuracy estimate (UTC)
 * @field {number} nano      Fraction of second, range -1e9 .. 1e9 (UTC)
 * @field {number} fixType   GNSSfix Type, range 0..5
 *                            0x00 = No Fix
 *                            0x01 = Dead Reckoning only
 *                            0x02 = 2D-Fix
 *                            0x03 = 3D-Fix
 *                            0x04 = GNSS + dead reckoning combined
 *                            0x05 = Time only fix
 *                            0x06..0xff: reserved
 * @field {number} flags     Fix Status Flags (see graphic below)
 * @field {number} flags2    Additional flags (see graphic below)
 * @field {number} numSV     Number of satellites used in Nav Solution
 * @field {number} lon       Longitude
 * @field {number} lat       Latitude
 * @field {number} height    Height above ellipsoid
 * @field {number} hMSL      Height above mean sea level
 * @field {number} hAcc      Horizontal accuracy estimate
 * @field {number} vAcc      Vertical accuracy estimate
 * @field {number} velN      NED north velocity
 * @field {number} velE      NED east velocity
 * @field {number} velD      NED down velocity
 * @field {number} gSpeed    Ground Speed (2-D)
 * @field {number} headMot   Heading of motion (2-D)
 * @field {number} sAcc      Speed accuracy estimate
 * @field {number} headAcc   Heading accuracy estimate (both motion and vehicle)
 * @field {number} pDOP      Position DOP
 * @field {number} reserved1a     Reserved
 * @field {number} reserved1b     Reserved
 * @field {number} reserved1c     Reserved
 * @field {number} reserved1d     Reserved
 * @field {number} reserved1e     Reserved
 * @field {number} reserved1f     Reserved
 * @field {number} headVeh        Heading of vehicle (2-D)
 * @field {number} magDec         Magnetic declination
 * @field {number} magAcc         Magnetic declination accuracy
 *
 * @param ubx An UBX object with a payload to be decoded.
 */
var NavPVT = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "NAV-PVT";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

NavPVT.prototype = Object.create(UBX.prototype);
NavPVT.prototype.constructor = NavPVT;
NavPVT.prototype.parser = new Parser()
  .uint32le('iTOW')
  .uint16le('year')
  .uint8('month')
  .uint8('day')
  .uint8('hour')
  .uint8('min')
  .uint8('sec')
  .uint8('valid')
  .uint32le('tAcc')
  .int32le('nano')
  .uint8('fixType')
  .uint8('flags')
  .uint8('flags2')
  .uint8('numSV')
  .int32le('lon')
  .int32le('lat')
  .int32le('height')
  .int32le('hMSL')
  .uint32le('hAcc')
  .uint32le('vAcc')
  .int32le('velN')
  .int32le('velE')
  .int32le('velD')
  .int32le('gSpeed')
  .int32le('headMot')
  .uint32le('sAcc')
  .uint32le('headAcc')
  .uint16le('pDOP')
  .uint8('reserved1a')
  .uint8('reserved1b')
  .uint8('reserved1c')
  .uint8('reserved1d')
  .uint8('reserved1e')
  .uint8('reserved1f')
  .int32le('headVeh')
  .int16le('magDec')
  .uint16le('magAcc')
  ;

NavPVT.prototype.fieldSpec = [];
NavPVT.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['year', 'writeUInt16LE', 2]);
NavPVT.prototype.fieldSpec.push(['month', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['day', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['hour', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['min', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['sec', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['valid', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['tAcc', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['nano', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['fixType', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['flags', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['flags2', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['numSV', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['lon', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['lat', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['height', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['hMSL', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['hAcc', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['vAcc', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['velN', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['velE', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['velD', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['gSpeed', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['headMot', 'writeInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['sAcc', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['headAcc', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['pDOP', 'writeUInt16LE', 2]);
NavPVT.prototype.fieldSpec.push(['reserved1a', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['reserved1b', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['reserved1c', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['reserved1d', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['reserved1e', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['reserved1f', 'writeUInt8', 1]);
NavPVT.prototype.fieldSpec.push(['headVeh', 'writeUInt32LE', 4]);
NavPVT.prototype.fieldSpec.push(['magDec', 'writeInt16LE', 2]);
NavPVT.prototype.fieldSpec.push(['magAcc', 'writeUInt16LE', 2]);

module.exports = NavPVT;
