'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var output = [];
  var neverExist = true;
  for (var i = 0; i < collectionA.length; i++) {
    if (collectionA[i].includes('-')){
      var realContent = (collectionA[i].split('-'));
      for (var j = 0; j < output.length; j++) {
        if(output[j].key == realContent[0]){
          neverExist = false;
        }else{
          neverExist = true;
        }
      }
      if(neverExist){
        output.push({key:realContent[0], count:parseInt(realContent[1])});
      }else{
        output.count += parseInt(realContent[1]);
        neverExist = true;
      }
    }else{
      for (var j = 0; j < output.length; j++) {
        if(output[j].key == collectionA[i]){
          output[j].count += 1;
          neverExist = false;
        }else{
          neverExist = true;
        }
      }
      if(neverExist){
        output.push({key:collectionA[i], count:1});
      }
    }
  }

  for(var k = 0; k < output.length; k++){
    for(var i = 0; i < objectB.value.length; i++){
      if(objectB.value[i] == output[k].key){
        output[k].count = output[k].count - Math.floor( output[k].count / 3);
      }
    }
  }

  return output;
}
