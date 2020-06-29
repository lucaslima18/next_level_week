//verbose da mais mensagens no terminal
const sqlite3 = require("sqlite3").verbose()


//iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//
// utilizar o objeto de banco de dados para as operaçõelse
// serialize --> roda uma sequência de código
// db.serialize(() => {
//   criar uma tabela
//   db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           image TEXT,
//           name TEXT,
//           address TEXT,
//           address2 TEXT,
//           state TEXT,
//           city TEXT,
//           items TEXT
//       );
//   `)
//
//   inserir dados na tabela
//   const query = `
//       INSERT INTO places (
//           image,
//           name,
//           address,
//           address2,
//           state,
//           city,
//           items
//
//       ) VALUES (?,?,?,?,?,?,?);
//   `
//
//   const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Sata Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão"
//   ]
//
//   aqui usamos uma callback function que é uma função chamada quando retornar a resposta
//   this referencia o retorno do run (não pode ser chamada quando utiliza-se arrow function)
//   function afterInsertData(err) {
//     if(err) {
//       return console.log(err)
//     }
//
//     console.log("cadastrado com sucesso")
//     console.log(this)
//   }
//   db.run(query, values, afterInsertData)
//
//   consultar dados da tabela
//   rows são as linhas do banco
//   db.all(`SELECT * FROM places`, function(err, rows) {
//     if(err) {
//       console.log(err)
//     }
//
//     console.log("Aqui estão seus registros: ")
//     console.log(rows)
//   })
//
//   deletar um dado da tabela
//   db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
//     if(err) {
//       console.log(err)
//     }
//
//     console.log("Registros deletados com sucesso")
//   })
//
// })
