import { addressesURL, wrongRepoAlert } from './helpers'
// const local = {
//     VOTING_TO_CHANGE_KEYS_ADDRESS: '0xc05fca516a563c9d065f79199a243551020730e6',
//     VOTING_TO_CHANGE_MIN_THRESHOLD_ADDRESS: '0xfef099f0aa5edf3d3d4e3519fe94aa72ca779e5a',
//     VOTING_TO_CHANGE_PROXY_ADDRESS: '0xec7a17ce76181f39b7f256e7ea3d8f88a445c99d',
//     BALLOTS_STORAGE_ADDRESS: '0x572bc8320f6956e646d3a0256dc9688d49bf34ce',
//     METADATA_ADDRESS: '0xd669393fde81d81997959e06562e3826bea2b1ca',
//     POA_ADDRESS: '0x2f1b5e6c9d4013664a7f119a40b093395a26b7a0',
// }

let ADDRESSES = {}

async function getContractsAddresses(branch) {
  const addr = addressesURL(branch)
  let response
  try {
    response = await fetch(addr)
  } catch (e) {
    return wrongRepoAlert(addr)
  }

  const contracts = require('../contracts.json')

  ADDRESSES = contracts
}

function networkAddresses() {
  return ADDRESSES
}

module.exports = {
  getContractsAddresses,
  networkAddresses
}
