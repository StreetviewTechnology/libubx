/*
 * Copyright (C) 2016 Swift Navigation Inc.
 * Contact: Swift Navigation <dev@swiftnav.com>
 *
 * This source is subject to the license found in the file 'LICENSE' which must
 * be be distributed together with this source. All other rights reserved.
 *
 * THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
 * EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
 */

const ubx = require('./../src/msg');
const t = require('chai');

describe('Check parsing of navigation message', function () {
  it('Validate HNR_PVT', function () {
    const expected = {iTOW: 464158350, year: 2017, month: 7, day: 14, hour: 8, min: 55, sec: 40, valid: 55, nano: 350000000, fixType: 3, flags: 29, reserved1a: 174, reserved1b: 13, lon: 86512809, lat: 500011519, height: 173312, hMSL: 125718, gSpeed: 8, speed: 8, headMot: 13865006, headVeh: 13865006, hAcc: 984, vAcc: 1274, sAcc: 77, headAcc: 3142};
    const packet = textPacketToBinary('B5 62 28 00 48 00 8E 7E AA 1B E1 07 07 0E 08 37 28 37 80 93 DC 14 03 1D AE 0D A9 14 28 05 FF 91 CD 1D 00 A5 02 00 16 EB 01 00 08 00 00 00 08 00 00 00 2E 90 D3 00 2E 90 D3 00 D8 03 00 00 FA 04 00 00 4D 00 00 00 46 0C 00 00 00 00 00 00 71 31');
    const packetParsed = ubx.decode(packet);
    t.assert(JSON.stringify(packetParsed.fields) === JSON.stringify(expected));
  });

  it('Validate NAV_ATT', function () {
    const expected = {iTOW: 465572000, version: 0, reserved1a: 0, reserved1b: 0, reserved1c: 0, roll: 0, pitch: -7204944, heading: 13865005, accRoll: 2000000, accPitch: 17241892, accHeading: 16745020};
    const packet = textPacketToBinary('B5 62 01 05 20 00 A0 10 C0 1B 00 00 00 00 00 00 00 00 B0 0F 92 FF 2D 90 D3 00 80 84 1E 00 24 17 07 01 3C 82 FF 00 B3 A8');
    const packetParsed = ubx.decode(packet);
    t.assert(JSON.stringify(packetParsed.fields) === JSON.stringify(expected));
  });

  it('Validate NAV_SAT', function () {
    const packet = textPacketToBinary('B5 62 01 35 28 01 30 4C C7 1B 01 18 00 00 00 02 2D 26 45 00 DD FF 5F 19 00 00 00 06 26 09 1E 00 00 00 57 19 00 00 00 0C 2A 23 5C 00 FE FF 5F 19 00 00 00 0E 1F 1B 04 01 32 00 5F 19 00 00 00 18 28 06 99 00 67 FF 57 19 00 00 00 19 33 4A 4C 00 1E 00 5F 19 00 00 00 1A 00 06 1B 01 00 00 11 12 00 00 00 1D 31 44 D7 00 22 00 5F 19 00 00 00 1F 1C 2D 2D 01 3C 00 5F 19 00 00 00 20 2C 11 F0 00 FF FF 5F 19 00 00 01 78 28 1C D2 00 00 00 17 19 00 00 01 7B 2D 1D 97 00 00 00 17 19 00 00 01 7F 00 12 7E 00 00 00 00 12 00 00 01 80 00 01 66 00 00 00 00 12 00 00 01 88 2D 21 B9 00 00 00 27 07 00 00 06 06 00 04 26 01 00 00 11 12 00 00 06 07 13 0C 55 01 8E 00 13 19 00 00 06 08 1A 03 1B 00 00 00 14 12 00 00 06 0E 00 27 81 00 00 00 20 12 00 00 06 0F 2A 50 67 00 FD FF 1F 19 00 00 06 10 00 21 3D 01 00 00 11 12 00 00 06 11 2D 4D 9E 00 DE FF 1F 19 00 00 06 12 2C 1C CC 00 0D 00 1F 19 00 00 06 18 28 29 27 00 17 00 1F 19 00 00 B6 E7');
    const packetParsed = ubx.decode(packet);
    t.assert(packetParsed.fields.numSvs === 24);
  });

  it('Validate NAV_POS_PVT', function () {
    const expected = {iTOW:465572000, year:0, month:0, day:0, hour:0, min:0, sec:0, valid:0, tAcc:0, nano:0, fixType:0, flags:0, flags2:0, numSV:0, lon:0, lat:0, height:0, hMSL:0, hAcc:0, vAcc:0, velN:0, velE:0, velD:0, gSpeed:0, headMot:0, sAcc:0, headAcc:0, pDOP:0, reserved1a:0, reserved1b:0, reserved1c:0, reserved1d:0, reserved1e:0, reserved1f:0, headVeh:0, magDec:0, magAcc:0};
    const packet = textPacketToBinary('B5 62 01 07 5C 00 A0 10 C0 1B 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 EF D4');
    const packetParsed = ubx.decode(packet);
    t.assert(JSON.stringify(packetParsed.fields) === JSON.stringify(expected));
  });

  it('Validate NAV_STATUS', function () {
    const expected = {iTOW: 465572000, gpsFix:1, flags:2, fixStat:3, flags2:4, ttff:5, msss:6};
    const packet = textPacketToBinary('B5 62 01 03 10 00 A0 10 C0 1B 01 02 03 04 05 00 00 00 06 00 00 00 B4 E0');
    const packetParsed = ubx.decode(packet);
    t.assert(JSON.stringify(packetParsed.fields) === JSON.stringify(expected));
  });

  it('Validate ESF_STATUS', function () {
    const packet = textPacketToBinary('B5 62 10 10 2C 00 F0 FE FE 0C 02 24 02 00 00 00 00 00 00 00 00 07 85 04 0A 00 8C 04 0A 00 8D 04 0A 00 21 00 8E 04 0A 00 90 04 0A 00 91 04 0A 00 92 04 0A 00 B4 D5');
    const packetParsed = ubx.decode(packet);
    t.assert(packetParsed.fields.numSens === 7);   
  });
});

function textPacketToBinary(text) {
  return Buffer.from(text.replace(/ /g, ''), 'hex');
}
