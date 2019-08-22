'use strict'

const { browserified } = require('@page-libs/cutie')
const { CreatedOptions } = browserified(require('@cuties/object'))
const { ParsedJSON } = browserified(require('@cuties/json'))
const { ResponseFromAjaxRequest, ResponseBody } = require('@page-libs/ajax')
const { UnwrappedChildrenOfParent, ElementWithInnerHTML } = require('@page-libs/dom')
const AttributeWithAppliedLocalStorageVariables = require('./../async/AttributeWithAppliedLocalStorageVariables')
const AttributeWithAppliedMemoryStorageVariables = require('./../async/AttributeWithAppliedMemoryStorageVariables')
const HTMLTunedElement = require('./../objects/HTMLTunedElement')

class EHTML extends HTMLTunedElement {
  constructor () {
    super()
  }

  static get observedAttributes () {
    return ['data-src', 'data-headers']
  }

  render () {
    new UnwrappedChildrenOfParent(
      new ElementWithInnerHTML(
        this, new ResponseBody(
          new ResponseFromAjaxRequest(
            new CreatedOptions(
              'url', new AttributeWithAppliedLocalStorageVariables(
                new AttributeWithAppliedMemoryStorageVariables(
                  this.getAttribute('data-src')
                )
              ),
              'method', 'GET',
              'headers', new ParsedJSON(
                new AttributeWithAppliedLocalStorageVariables(
                  new AttributeWithAppliedMemoryStorageVariables(
                    this.getAttribute('data-headers') || '{}'
                  )
                )
              )
            )
          )
        )
      )
    ).call()
  }
}

window.customElements.define('e-html', EHTML)