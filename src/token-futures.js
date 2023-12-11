'use strict'

const APIBase = require('./APIBase')
const modules = require('./futures-modules')
const { flowRight } = require('./helpers/utils')

class Futures extends flowRight(...Object.values(modules))(APIBase) {
  constructor (apiKey = '', apiSecret = '', options = {}) {
    options.baseURL = options.baseURL || 'https://dapi.binance.com'
    super({
      apiKey,
      apiSecret,
      ...options
    })
  }
}

module.exports = Futures
