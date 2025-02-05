import { networkAddresses } from './addresses'
import helpers from './helpers'
import { constants } from '../utils/constants'

export default class BallotsStorage {
  async init({ web3, netId }) {
    const { BALLOTS_STORAGE_ADDRESS } = networkAddresses()
    console.log('Ballots Storage address', BALLOTS_STORAGE_ADDRESS)

    const ballotsStorageAbi = await helpers.getABI(constants.NETWORKS[netId].BRANCH, 'BallotsStorage')

    this.instance = new web3.eth.Contract(ballotsStorageAbi, BALLOTS_STORAGE_ADDRESS)
  }

  areKeysBallotParamsValid({ ballotType, affectedKeyType, affectedKey, miningKey }) {
    if (!this.instance.methods.areKeysBallotParamsValid) {
      return null
    }
    return this.instance.methods.areKeysBallotParamsValid(ballotType, affectedKeyType, affectedKey, miningKey).call()
  }
}
