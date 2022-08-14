<a name="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">Beverage Shop</h3>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#entity-relationship-diagram">Entity Relationship Diagram</a>
    </li>
    <li><a href="#database-creation-&-migration">Database Creation & Migration</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#documentation">Documentation</a></li>
  </ol>
</details>

## About The Project

[![Beverage Shop][product-screenshot]](https://example.com)

Aplikasi Beverage Shop adalah aplikasi untuk mengelola data toko minuman. Aplikasi ini dapat membantu pemilik toko minuman dalam mengelola data minuman yang dimiliki, sehingga dapat lebih terorganisir.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Postgres
- Node.js
- Express
- Sequelize ORM
- EJS
- Bootstrap
- CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Entity Relationship Diagram

[![PBeverage Shop][product-erd]](https://example.com)

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Database Creation & Migration

```sh
npx sequelize-cli model:generate --name category --attributes name:string

npx sequelize-cli model:generate --name drink --attributes name:string,price:integer,categoryId:integer

npx sequelize-cli model:generate --name ingredient --attributes name:string,stock:integer

npx sequelize-cli model:generate --name mix --attributes amount:integer,drinkId:integer,ingredientId:integer
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Endpoints

This is an example of how to list things you need to use the software and how to install them.

| Method | Route                   | Keterangan                                                                               |
| ------ | ----------------------- | ---------------------------------------------------------------------------------------- |
| GET    | /                       | Menampilkan home                                                                         |
| GET    | /ingredients            | Menampilkan semua ingredient yang ada dalam database                                     |
| GET    | /ingredients/add        | Menampilkan halaman form untuk menambahkan data ingredients                              |
| POST   | /ingredients/add        | Menerima data yang dikirim dari halaman `/ingredients/add` dengan melakukan _insertion_  |
| GET    | /ingredients/edit/:id   | Menampilkan halaman form untuk mengedit data ingredients berdasarkan id                  |
| POST   | /ingredients/edit/:id   | Menerima data yang dikirim dari halaman `/ingredients/edit/:id` untuk melakukan _update_ |
| GET    | /ingredients/delete/:id | Melakukan _delete_ data ingredient berdasarkan `id` yang dikirimkan                      |
| GET    | /drinks                 | Menampilkan semua drink yang ada dalam database                                          |
| GET    | /drinks/add             | Menampilkan halaman form untuk menambahkan data drink                                    |
| POST   | /drinks/add             | Menerima data yang dikirim dari halaman `/drinks/add` dengan melakukan _insertion_       |
| GET    | /drinks/edit/:id        | Menampilkan halaman form untuk mengedit data drinks berdasarkan id                       |
| POST   | /drinks/edit/:id        | Menerima data yang dikirim dari halaman `/drinks/edit/:id` untuk melakukan _update_      |
| GET    | /ingredients/delete/:id | Melakukan _delete_ data drink berdasarkan `id` yang dikirimkan                           |
| GET    | /drinks/:id/ingredients | Menampilkan semua ingredients yang dimiliki suatu drink berdasarkan id                   |
| GET    | /categories             | Menampilkan semua category yang ada dalam database                                       |
| GET    | /categories/add         | Menampilkan halaman form untuk menambahkan data category                                 |
| POST   | /categories/add         | Menerima data yang dikirim dari halaman `/categories/add` dengan melakukan _insertion_   |
| GET    | /categories/edit/:id    | Menampilkan halaman form untuk mengedit data categories berdasarkan id                   |
| POST   | /categories/edit/:id    | Menerima data yang dikirim dari halaman `/categories/edit/:id` untuk melakukan _update_  |
| GET    | /ingredients/delete/:id | Melakukan _delete_ data category berdasarkan `id` yang dikirimkan                        |
| GET    | /mixes                  | Menampilkan semua mix yang ada dalam database                                            |
| GET    | /mixes/add              | Menampilkan halaman form untuk menambahkan data mix                                      |
| POST   | /mixes/add              | Menerima data yang dikirim dari halaman `/mixes/add` dengan melakukan _insertion_        |
| GET    | /mixes/edit/:id         | Menampilkan halaman form untuk mengedit data mixes berdasarkan id                        |
| POST   | /mixes/edit/:id         | Menerima data yang dikirim dari halaman `/mixes/edit/:id` untuk melakukan _update_       |
| GET    | /ingredients/delete/:id | Melakukan _delete_ data mix berdasarkan `id` yang dikirimkan                             |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Documentation

- GET '/'

  ```sh
  // request
  localhost:3000/

  // response
  Home Page
  ```

---

Ingredients

- GET '/ingredients'

  ```sh
  // request
  localhost:3000/ingredients

  // response
    [
        {
            "id": 1,
            "name": "Water",
            "stock": 1000,
            "createdAt": "2022-08-14T08:24:40.041Z",
            "updatedAt": "2022-08-14T08:24:40.041Z"
        },
        {
            "id": 2,
            "name": "Ice",
            "stock": 1000,
            "createdAt": "2022-08-14T08:24:50.092Z",
            "updatedAt": "2022-08-14T08:24:50.092Z"
        }
    ]
  ```

- GET '/ingredients/add'

  ```sh
  // request
  localhost:3000/ingredients/add

  // response
  Ingredient Add Page
  ```

- POST '/ingredients/add'

  ```sh
  // request
  localhost:3000/ingredients/add

  name: 'Orange',
  stock: 123

  // response
    {
    "id": 14,
    "name": "Orange",
    "stock": 150,
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/ingredients/edit/:id'

  ```sh
  // request
  localhost:3000/ingredients/edit/:14

  name: 'Jeruk',
  stock: 150

  // response
    {
    "id": 14,
    "name": "Jeruk",
    "stock": 150,
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/ingredients/delete/:id'

  ```sh
  // request
  localhost:3000/ingredients/delete/:14

  // response
  {
    message: 'Ingredient with id: 14 has been deleted!'
  }
  ```

  ***

  category

- GET '/categories'

  ```sh
  // request
  localhost:3000/categories

  // response
    [
        {
            "id": 1,
            "name": "Coffee",
            "createdAt": "2022-08-14T08:24:40.041Z",
            "updatedAt": "2022-08-14T08:24:40.041Z"
        },
        {
            "id": 2,
            "name": "Tea",
            "createdAt": "2022-08-14T08:24:50.092Z",
            "updatedAt": "2022-08-14T08:24:50.092Z"
        }
    ]
  ```

- GET '/categories/add'

  ```sh
  // request
  localhost:3000/categories/add

  // response
  Category Add Page
  ```

- POST '/categories/add'

  ```sh
  // request
  localhost:3000/categories/add

  name: 'Juice'

  // response
    {
    "id": 3,
    "name": "Juice",
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/categories/edit/:id'

  ```sh
  // request
  localhost:3000/categories/edit/:3

  name: 'Shakes'

  // response
    {
    "id": 3,
    "name": "Shakes",
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/categories/delete/:id'

  ```sh
  // request
  localhost:3000/categories/delete/:3

  // response
  {
    message: 'Category with id: 3 has been deleted!'
  }
  ```

---

drink

- GET '/drinks'

  ```sh
  // request
  localhost:3000/drinks

  // response
    [
        {
            "id": 1,
            "name": "Caramel Latte",
            "price": 25000,
            "categoryId": 1,
            "createdAt": "2022-08-14T08:24:40.041Z",
            "updatedAt": "2022-08-14T08:24:40.041Z"
        },
        {
            "id": 2,
            "name": "Ices Tea",
            "price": 15000,
            "categoryId": 2,
            "createdAt": "2022-08-14T08:24:50.092Z",
            "updatedAt": "2022-08-14T08:24:50.092Z"
        }
    ]
  ```

- GET '/drinks/add'

  ```sh
  // request
  localhost:3000/drinks/add

  // response
  Drink Add Page
  ```

- POST '/drinks/add'

  ```sh
  // request
  localhost:3000/drinks/add

  name: 'Lemon Tea',
  price: 17000,
  categoryId: 2

  // response
    {
    "id": 3,
    "name": "Lemon Tea",
    "price": 17000,
    "categoryId": 2,
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/drinks/edit/:id'

  ```sh
  // request
  localhost:3000/drinks/edit/:3

  name: 'Apple Juice',
  price: 18000,
  categoryId: 3

  // response
    {
    "id": 3,
    "name": "Apple Juice",
    "price": 18000,
    "categoryId": 3,
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/drinks/delete/:id'

  ```sh
  // request
  localhost:3000/drinks/delete/:3

  // response
  {
    message: 'Category with id: 3 has been deleted!'
  }
  ```

---

mix

- GET '/mixes'

  ```sh
  // request
  localhost:3000/mixes

  // response
    [
        {
            "id": 1,
            "amount": 2,
            "drinkId": 1,
            "ingredientId": 1,
            "createdAt": "2022-08-14T08:24:40.041Z",
            "updatedAt": "2022-08-14T08:24:40.041Z"
        },
        {
            "id": 2,
            "name": 1,
            "price": 1,
            "ingredientId": 3,
            "createdAt": "2022-08-14T08:24:50.092Z",
            "updatedAt": "2022-08-14T08:24:50.092Z"
        }
    ]
  ```

- GET '/mixes/add'

  ```sh
  // request
  localhost:3000/mixes/add

  // response
  Mix Add Page
  ```

- POST '/mixes/add'

  ```sh
  // request
  localhost:3000/mixes/add

  amount: 2,
  drinkId: 1,
  ingredientId: 5

  // response
    {
    "id": 3,
    "amount": 2,
    "drinkId": 1,
    "ingredientId": 5,
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/mixes/edit/:id'

  ```sh
  // request
  localhost:3000/mixes/edit/:3

  amount: 3,
  drinkId: 1,
  ingredientId: 6

  // response
    {
    "id": 3,
    "amount": 3,
    "drinkId": 1,
    "ingredientId": 6,
    "updatedAt": "2022-08-14T14:10:53.393Z",
    "createdAt": "2022-08-14T14:10:53.393Z"
    }
  ```

- GET '/mixes/delete/:id'

  ```sh
  // request
  localhost:3000/mixes/delete/:3

  // response
  {
    message: 'Category with id: 3 has been deleted!'
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: public/screenshot-homepage.png
[product-erd]: public/erd.png
