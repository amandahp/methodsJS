/** o método indexOf() volta a posição de uma substring dentro de uma string ou a posição de um elemento dentro de uma array */

function findingPosition (item, thing) {
    return item.indexOf(thing)
    
}

let elementsArray = ['Amanda', 'Luiza', 8, false]

let coisa = 'Amanda'


console.log(`O elemento de index ${findingPosition(elementsArray,coisa )} é o tipo ${typeof coisa}`);