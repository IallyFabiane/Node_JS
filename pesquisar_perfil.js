const contacts = [ //array de objetos
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) { // função que testa se name corresponde a firstName e se prop é uma propriedade válida
   for (let x = 0; x < contacts.length; x++) { //percorrendo o array
      if (contacts[x].firstName === name) { // se o valor passado como argumento da função corresponder ao valor da propriedade firstname de algum objeto, esse valor é retornado
        if (contacts[x].hasOwnProperty(prop)) { //se a propriedade passada como argumento da unção existir, seu valor é retornado, caso não é retornado propriedade não encontrada
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  
  /* Se a segunda instrução if falhar, nenhuma propriedade será retornada. Se a primeira instrução if falhar, o loop for continua 
  para o próximo objeto na lista de contatos. Se o parâmetro firstName não corresponder ao objeto de contatos final,
  o loop for será encerrado e Nenhum contato desse tipo será retornado.
  */
console.log(lookUpProfile("Akira", "likes"));