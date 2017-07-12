<a name="MarkovChain"></a>

## MarkovChain
Class for generating Markov chains

**Kind**: global class  

* [MarkovChain](#MarkovChain)
    * [new MarkovChain(options)](#new_MarkovChain_new)
    * [.serialize()](#MarkovChain+serialize) ⇒ <code>string</code>
    * [.init(source)](#MarkovChain+init)
    * [.generate()](#MarkovChain+generate) ⇒ <code>String</code>
    * [.iterator()](#MarkovChain+iterator) ⇒ <code>Iterator</code>

<a name="new_MarkovChain_new"></a>

### new MarkovChain(options)
Create a MarkovChain.

If you have a precomputed lookup table, you only have to supply
order, begginings, and lookupTable.

Otherwise, you can just supply the source and order parameters to generate them.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.max | <code>Number</code> | Maximum iterations for the generator. |
| options.order | <code>Number</code> | Token size. |
| options.source | <code>String</code> | Source text to generate chain from. |
| options.beginnings | <code>Array</code> | Possible beginnings. |
| options.lookupTable | <code>Object</code> | Lookup table for the chain. |

<a name="MarkovChain+serialize"></a>

### markovChain.serialize() ⇒ <code>string</code>
Returns a JSON string with the generated tables.
This can later be used to instantiate a new MarkovChain object.

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
**Returns**: <code>string</code> - The JSON data  
<a name="MarkovChain+init"></a>

### markovChain.init(source)
Initializes the chain, and instantiates the generator function
You usually don't need to call this manually. It gets called at
class instantiation.

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  

| Param | Type |
| --- | --- |
| source | <code>String</code> | 

<a name="MarkovChain+generate"></a>

### markovChain.generate() ⇒ <code>String</code>
Generates a string based source data

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
<a name="MarkovChain+iterator"></a>

### markovChain.iterator() ⇒ <code>Iterator</code>
Used to create the iterator function.
This gets called automatically at class instatiation.

**Kind**: instance method of [<code>MarkovChain</code>](#MarkovChain)  
