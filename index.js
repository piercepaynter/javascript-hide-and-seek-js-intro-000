function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

/*
function increaseRankBy(n){
 const list = document.querySelectAll('.ranked-list');
 for (let i = 0; i < list.length; i++){
   list[i].innerHTML = list[i].innerHTML + parseInt(n);
 }
}
*/
function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  let start = 1

  expect(children.length).to.equal(2);
  for (let i = 0, l = children.length; i < l; i++) {
    expect(parseInt(children[i].innerHTML)).to.equal(start + i + 3)
  }

  children = secondList.children
  start = 12

  expect(children.length).to.equal(3);
  for (let i = 0, l = children.length; i < l; i++) {
    expect(parseInt(children[i].innerHTML)).to.equal(start - i + 3)
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
