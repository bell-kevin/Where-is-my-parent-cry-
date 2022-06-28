function findChildren(dancingBrigade){
  let arr = dancingBrigade.split('').sort();
  let capitals = [];
  
  for (i = arr.length - 1; i >= 0; i--) {  //loop backwards to remove and iterate at same time
    if (arr[i] === arr[i].toUpperCase()) {
      capitals.push(arr.splice(i, 1).toString());
    }
  }
  for (i = 0; i < capitals.length; i++) {
      let capLetter = capitals[i].toLowerCase();
      if (arr.indexOf(capLetter) !== -1) {
        arr.splice(arr.indexOf(capLetter), 0, capitals[i]);
      }
  }
  return arr.join('');

};
