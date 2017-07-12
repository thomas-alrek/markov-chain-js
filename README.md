# MarkovChain

This is a JS implementation of a Markov Chain text generator.

It can be used for implementing name generators, placeholder text and more.

See the [documentation](DOCUMENTATION.md) for detailed instructions.

If you want to contribute, please check out the [contribution guide](CONTRIBUTING.md).

# Installation

If you are running in a node environment, you can install the pacakge from NPM.

```bash
npm install markov-chain-js
```

If you just want to use it standalone, you can use the compiled and minified version in dist.

# Usage

```javascript
const MarkovChain = require('markov-chain-js')

const options = {
  source: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer nec odio.
Praesent libero.
Sed cursus ante dapibus diam.
Sed nisi.
Nulla quis sem at nibh elementum imperdiet.`,
  order: 3
}

let myGenerator = new MarkovChain(options)

myGenerator.generate() // Outputs e.g: 'Sed nibh element libero'
```

Licensed under the [MIT](LICENSE) license.


Copyright Thomas Alrek &copy; 2017
