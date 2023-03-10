var n1 = 0;
let n2 = 10;
const n3 = 20;

//diferença entre const e var
//As declarações de var tem escopo global ou de função, 
//enquanto as declarações de let e de const têm escopo de bloco. 
//Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo. 
//As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.

console.log(n1)
//para que serve o console.log e como usá-lo
//log é uma função que imprime um texto no console (no caso do JavaScript 
//será possível visualizar através da ferramenta do desenvolvedor)

n1 = n2;
console.log(n1)

n1 = n3
console.log(n1);
