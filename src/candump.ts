import * as can from 'socketcan';

var channel = can.createRawChannel("vcan0", true /* ask for timestamps */);
channel.start();

function toHex(num: number) {
  return ("00000000" + num.toString(16)).slice(-8);
}

function dumpPacket(msg: any) {
  console.log('(' + (msg.ts_sec + msg.ts_usec / 1000000).toFixed(6) + ') ' +
    toHex(msg.id).toUpperCase() + '#' + msg.data.toString('hex').toUpperCase());
}

channel.addListener("onMessage", dumpPacket);
