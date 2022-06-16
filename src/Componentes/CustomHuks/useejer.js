
const arra=[
    "https://rickandmortyapi.com/api/character/37", 
    "https://rickandmortyapi.com/api/character/91"
, "https://rickandmortyapi.com/api/character/176"
, "https://rickandmortyapi.com/api/character/183"
   ,"https://rickandmortyapi.com/api/character/195"]

const useejer = arra=> {
    let e =[]
    for(let i=0;i<arra.length;i++){

      let ar=arra[i].substr(-3)
      let le={link:arra[i],id:ar}
      
      e.push(le)
    }
 return {e}
}

// function accion(la){

//    let ar=la.substr(-3)
// return ar
// }

const h=useejer(arra)
// const far=accion(arra)
// console.log(far)
console.log(h)
