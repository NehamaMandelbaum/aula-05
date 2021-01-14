// Neste exercicio temos um Array e um Objeto que já estão criados;
// para completar o exercicio você terá de manipular esse Array e percorrer o Objeto utilizando for in;
// Passos
// 1. Remova o ultimo item do Array
// 2. Você deve percorrer as chaves de um objeto utilizando o "for in"
// 2.1 Para cada chave do objeto, você deve inseri-la no Array
/**
* EXEMPLO de como deve ficar ao final:
* list = ['Javascript', 'Java', 'HTML', 'SQL']; Olá olá olá
*/
const list = ['Javascript', 'Delete me']
const languages = {
  'Java': true,
  'HTML': true,
  'SQL': true
}
list.pop()
for (var chave in languages){
  list.push(chave)
}
console.log(list)