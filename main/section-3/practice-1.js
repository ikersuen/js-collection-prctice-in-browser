'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const newCollectionA = collectionA.slice();
  for(var k = 0; k < collectionA.length; k++){
    for(var i = 0; i < objectB.value.length; i++){
      if(objectB.value[i] == collectionA[k].key){
        newCollectionA[k].count = newCollectionA[k].count - 1;
      }
    }
  }
  return newCollectionA;
}
