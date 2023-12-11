'use strict'

const Token = superclass => class extends superclass {
  openTokenFutureOrders () {
    return this.signRequest(
      'GET',
      '/dapi/v1/openOrders'
    )
  }

  getTokenFutureAccount () {
    return this.signRequest(
      'GET',
      '/dapi/v1/account'
    )
  }
}
module.exports = Token
