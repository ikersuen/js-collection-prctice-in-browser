'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(n => collectionB.includes(n));
}
