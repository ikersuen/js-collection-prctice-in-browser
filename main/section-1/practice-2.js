'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(n => collectionB.every(subCollection => subCollection.includes(n)));
}
