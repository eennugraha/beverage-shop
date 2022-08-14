<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Beverage Shop</h3>
</div>

<!-- TABLE OF CONTENTS -->
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
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Beverage Shop][product-screenshot]](https://example.com)

5W1H

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

<!-- GETTING STARTED -->

## Entity Relationship Diagram

[![PBeverage Shop][erd]](https://example.com)

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

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
    "name": "Orange",
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

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[product-screenshot]: public/screenshot-homepage.png
[product-screenshot]: public/erd.png
