'use strict'

const E = require('./E')

class E_LOCAL_STORAGE_VALUE extends E {
  constructor (node) {
    super(node)
  }

  activate () {
    this.node.name = this.node.getAttribute('name')
    this.node.value = () => {
      return localStorage.getItem(
        this.node.getAttribute('data-key')
      )
    }
  }
}

module.exports = E_LOCAL_STORAGE_VALUE
