'use strict'

const USD = superclass => class extends superclass {
  openUSDFutureOrders () {
    return this.signRequest(
      'GET',
      '/fapi/v1/openOrders'
    )
  }

  getUSDFutureAccount () {
    return this.signRequest(
      'GET',
      '/fapi/v2/account'
    )
  }
}
module.exports = USD
