import { constants } from '../utils/constants'
import { messages } from '../utils/messages'
import swal from 'sweetalert2'

function addressesURL(branch) {
  const URL = `https://raw.githubusercontent.com/${constants.organization}/${constants.repoName}/${branch}/${
    constants.addressesSourceFile
  }`
  return URL
}

function ABIURL(branch, contract) {
  const URL = `https://raw.githubusercontent.com/${constants.organization}/${constants.repoName}/${branch}/abis/${
    constants.ABIsSources[contract]
  }`
  return URL
}

function getABI(branch, contract) {
  let ABI = require(`../abis/${contract}.abi.json`)
  return ABI
}

function wrongRepoAlert(addr) {
  swal('Error!', messages.wrongRepo(addr), 'error')
}

module.exports = {
  addressesURL,
  ABIURL,
  getABI,
  wrongRepoAlert
}
