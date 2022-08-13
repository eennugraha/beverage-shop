npx sequelize-cli model:generate --name drink --attributes name:string,price:integer,categoryId:integer

npx sequelize-cli model:generate --name ingredient --attributes name:string,stock:integer

npx sequelize-cli model:generate --name mix --attributes amount:integer,drinkId:integer,ingredientId:integer

npx sequelize-cli model:generate --name category --attributes name:string
