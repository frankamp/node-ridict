node-ridict
===========

Node module for analyzing text with the Regressive Imagery Dictionary.

Install using npm:

npm install ridict


## Example:

Run test/test.js to see one way to use it.

## Quick Example:

```js
var ridict = require('ridict');
var data = "Madam Speaker, Mr. Vice President, Members of Congress, the First Lady of the United States--she's around here somewhere: I have come here tonight not only to address the distinguished men and women in this great Chamber, but to speak frankly and directly to the men and women who sent us here.";
var res = ridict.matches(data);
```
From this example you get back an object with keys for each facet of the RID, the values are the counts within the text.

The results of the above should be:

```js
{ ORALITY: 4,
  ANALITY: 0,
  SEX: 0,
  TOUCH: 1,
  TASTE: 0,
  ODOR: 0,
  GEN_SENSATION: 0,
  SOUND: 0,
  VISION: 1,
  COLD: 1,
  HARD: 0,
  SOFT: 1,
  PASSIVITY: 0,
  VOYAGE: 0,
  RANDOM_MOVEMENT: 0,
  DIFFUSION: 0,
  CHAOS: 0,
  UNKNOW: 0,
  TIMELESSNES: 0,
  COUNSCIOUS: 1,
  BRINK_PASSAGE: 0,
  NARCISSISM: 0,
  CONCRETENESS: 8,
  ASCEND: 0,
  HEIGHT: 2,
  DESCENT: 0,
  DEPTH: 0,
  FIRE: 1,
  WATER: 1,
  ABSTRACT_THOUGHT: 1,
  SOCIAL_BEHAVIOR: 3,
  INSTRU_BEHAVIOR: 0,
  RESTRAINT: 0,
  ORDER: 1,
  TEMPORAL_REPERE: 1,
  MORAL_IMPERATIVE: 0,
  POSITIVE_AFFECT: 0,
  ANXIETY: 0,
  SADNESS: 0,
  AFFECTION: 0,
  AGGRESSION: 0,
  EXPRESSIVE_BEH: 0,
  GLORY: 1 }
  ```
