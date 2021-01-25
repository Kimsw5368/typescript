interface INameable {
  name: string
}

function getName(o: INameable){
  return o != undefined ? o.name : 'unknown name'
}

console.log(getName({name: 'Jack'}))