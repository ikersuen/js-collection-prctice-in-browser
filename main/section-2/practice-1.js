'use strict';

function countSameElements(collection) {
    var output = [];
    var neverExist = true;
    for (var i = 0; i < collection.length; i++) {
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
    return output;
}
