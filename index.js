function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}


function increaseRankBy(n){
 const list = document.querySelectAll('.ranked-list');
 for (let i = 0; i < list.length; i++){
   list[i].innerHTML = list[i].innerHTML + parseInt(n);
 }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
