function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll(".ranked-list")

  for (let i = 0; i < rankedLists.length; i++){
    let listChildren = rankedLists[i].children

    for (let j = 0; j < listChildren.length; j++){
      listChildren[j].innerHTML = parseInt(listChildren[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
