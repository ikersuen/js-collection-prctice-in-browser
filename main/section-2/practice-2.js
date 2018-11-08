'use strict';

function countSameElements(collection) {
  var output = [];
  var neverExist = true;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].includes('-')){
      var realContent = (collection[i].split('-'));
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
        if(output[j].key == collection[i]){
          output[j].count += 1;
          neverExist = false;
        }else{
          neverExist = true;
        }
      }
      if(neverExist){
        output.push({key:collection[i], count:1});
      }
    }
  }
  return output;
}
