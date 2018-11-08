'use strict';

function countSameElements(collection) {
  var output = [];
  var neverExist = true;
  for (var i = 0; i < collection.length; i++) {
      if (collection[i].includes('-')){
        var realContent = (collection[i].split('-'));
        var notExist = true;
        for (var j = 0; j < output.length; j++) {
          if(output[j].name == realContent[0]){
            output[j].summary += parseInt(realContent[1]);
            notExist = false;
          }else{
            notExist = true;
          }
        }
        if(notExist){
          output.push({name:realContent[0], summary:parseInt(realContent[1])});
        }
      }else if(collection[i].includes(':')){
        var realContent = (collection[i].split(':'));
        var notExist = true;
        for (var j = 0; j < output.length; j++) {
          if(output[j].name == realContent[0]){
            output[j].summary += parseInt(realContent[1]);
            notExist = false;
          }else{
            notExist = true;
          }
        }
        if(notExist){
          output.push({name:realContent[0], summary:parseInt(realContent[1])});
        }
      }else if(collection[i].includes('[')){
        var realContent = (collection[i].split('['));
        var notExist = true;
        for (var j = 0; j < output.length; j++) {
          if(output[j].name == realContent[0]){
            output[j].summary += parseInt(realContent[1].split(']')[0]);
            notExist = false;
          }else{
            notExist = true;
          }
        }
        if(notExist){
          output.push({name:realContent[0], summary:parseInt(realContent[1])});
        }
      }else{
      neverExist = true;
      for (var j = 0; j < output.length; j++) {
        if(output[j].name == collection[i]){
          output[j].summary += 1;
          neverExist = false;
        }else{
          neverExist = true;
        }
      }
      if(neverExist){
        output.push({name:collection[i], summary:1});
      }
    }
  }
  return output;
}
