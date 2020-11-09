import  hotPotato from "./queue/hotPotato";

const names= ['John','Jack','Camela','Ingrid','Carl'];
const result = hotPotato(names,7);

result.eliminatedList.forEach(name=>{
    console.log(`${name}被淘汰了`);
})
console.log(`胜利者,${result.winner}`)
