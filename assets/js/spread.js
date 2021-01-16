/*
    Operador Spread é usado para complementação (extende) de um array e principalmente
    de um objeto(mais usado), exemplo:
*/
//Array
/*
let item1 = [ 1, 2, 3, 4, 5 ];

let item2 = [ ...item1, 6, 7, 8, 9, 10 ];

console.log(item2);
*/

//Objeto
/*
let info = {
    nome: 'Beltrano',
    idade: 89,
};

let info2 = {
    ...info,
    cidade: 'Fictícia',
    estado: 'Tremenber',
    pais: 'Sokvia'
};

console.log(info2);
*/

//Usando em uma função
function addInfo(info) {
    let novasInfo = {
        ...info,
        status: 90,
        token: 'asdkjfakd93934jke',
        data_cadastro: '23-21-60'    
    };
    return novasInfo;
};

console.log(addInfo({nome: 'Cicrano', sobrenome:'De Paula'}));