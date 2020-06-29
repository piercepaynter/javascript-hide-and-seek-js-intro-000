function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
 const list = document.querySelectorAll('ul.ranked-list li');

 for (let i = 0; i < list.length; i++){
   list[i].innerHTML = parseInt(list[i].innerHTML) + n;
 }
}

/*
function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
*/
function deepestChild(){
  const container = document.querySelector('#grand-node');
  var children = container.querySelectorAll('div');

  return children[children.length-1];
}
