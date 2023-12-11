'use strict'

const APIBase = require('./APIBase')
const { flowRight } = require('./helpers/utils')

const OptionModules = superclass => class extends superclass {
  openOptionsPositions () {
    return this.signRequest(
      'GET',
      '/eapi/v1/position'
    )
  }

  getOptionsAccount () {
    return this.signRequest(
      'GET',
      '/eapi/v1/account'
    )
  }
}

class Options extends flowRight(...Object.values({ OptionModules }))(APIBase) {
  constructor (apiKey = '', apiSecret = '', options = {}) {
    options.baseURL = options.baseURL || 'https://eapi.binance.com'
    super({
      apiKey,
      apiSecret,
      ...options
    })
  }
}

module.exports = Options
