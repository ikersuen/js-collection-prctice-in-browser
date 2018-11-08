'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(n => objectB.value.includes(n));
}
