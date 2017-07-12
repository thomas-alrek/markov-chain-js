/**
 * @file Markov Chain implementation
 * @copyright Thomas Alrek 2017
 * @author Thomas Alrek <thomas@alrek.no>
 */

/**
 * Class for generating Markov chains
 **/
class MarkovChain {
  /**
   * Create a MarkovChain.
   *
   * If you have a precomputed lookup table, you only have to supply
   * order, begginings, and lookupTable.
   *
   * Otherwise, you can just supply the source and order parameters to generate them.
   *
   * @param {Object} options
   * @param {Number} options.max Maximum iterations for the generator.
   * @param {Number} options.order Token size.
   * @param {String} options.source Source text to generate chain from.
   * @param {Array}  options.beginnings Possible beginnings.
   * @param {Object} options.lookupTable Lookup table for the chain.
   */
  constructor (options = {}) {
    this.max = 20
    this.order = 3
    this.beginnings = []
    this.lookupTable = {}
    Object.assign(this, typeof options === 'string' ? JSON.parse(options) : options)
    this.init(options.source || '')
  }

  /**
   * Returns a JSON string with the generated tables.
   * This can later be used to instantiate a new MarkovChain object.
   *
   * @return {string} The JSON data
   */
  serialize () {
    return JSON.stringify({
      max: this.max,
      order: this.order,
      beginnings: this.beginnings.slice(),
      lookupTable: JSON.parse(JSON.stringify(this.lookupTable))
    })
  }

  /**
   * Initializes the chain, and instantiates the generator function
   * You usually don't need to call this manually. It gets called at
   * class instantiation.
   *
   * @param {String} source
   */
  init (source = '') {
    if (!this.beginnings.length && !Object.keys(this.lookupTable).length) {
      let sources = source.split('\n')
      for (let text of sources) {
        for (let i = 0; i <= text.length - this.order; i++) {
          let gram = text.substring(i, i + this.order)
          if (i === 0) {
            this.beginnings.push(gram)
          }
          if (!this.lookupTable[gram]) {
            this.lookupTable[gram] = []
          }
          this.lookupTable[gram].push(text.charAt(i + this.order))
        }
      }
    }
    this._generator = this.iterator(this.max)
  }

  /**
   * Generates a string based source data
   *
   * @return {String}
   */
  generate () {
    return this._generator.next().value
  }

  /**
   * Used to create the iterator function.
   * This gets called automatically at class instatiation.
   *
   * @return {Iterator}
   */
  *iterator () {
    while (1) {
      let gram = this.beginnings[Math.floor(Math.random() * this.beginnings.length)]
      let output = gram
      for (let i = 0; i < this.max; i++) {
        let options = this.lookupTable[gram]
        if (!options) {
          break
        }
        let next = options[Math.floor(Math.random() * options.length)]
        output += next
        gram = output.substring(output.length - this.order, output.length)
      }
      yield output
    }
  }
}

module.exports = MarkovChain
