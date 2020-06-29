function getFirstSelector(selector) {
  return document.querySelector(selector);
}
/*
function nestedTarget(){
  var container = document.querySelector('#nested .target');
  return document.querySelector('#nested .target');
}
*/
function nestedTarget(){
  var container = document.querySelector('#nested');
  return container.querySelector('.target');
}

function increaseRankBy(n){
 const list = document.querySelectorAll('.ranked-list');

 for (let i = 0; i < list.length; i++){
   list[i].innerHTML = parseInt(list[i].innerHTML) + n;
 }
}

/*
function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  let start = 1

  expect(children.length).to.equal(2);
  for (let i = 0, l = children.length; i < l; i++) {
    parseInt(children[i].innerHTML) = start + i + parseInt(n);
  }

  children = secondList.children
  start = 12

  expect(children.length).to.equal(3);
  for (let i = 0, l = children.length; i < l; i++) {
    parseInt(children[i].innerHTML) = start + i + parseInt(n);
  }
}
*/

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
