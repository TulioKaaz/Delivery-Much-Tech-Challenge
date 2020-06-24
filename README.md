# Recipe Finder

API desenvolvida como uma Tech Challenge para empresa Delivery Much.

O Desafio consiste em construir uma API que recebe ingredientes como parâmetro de busca em uma chamada GET e retorna uma lista de receitas onde cada receita é constituída por 4 atributos.

  - Título da receita;
  - Lista de ingredientes;
  - Link para acessar a receita;
  - Link de um GIF para receita;
  
## Sobre

A aplicação foi desenvolvida em cima do do runtime de javascript [nodeJs](https://nodejs.org/en/), utilizando a biblioteca [express](https://expressjs.com/) para desenvolver a API, e a lib axios para facilitar fazer requisição nas APIs publicas.

Referente ao desenvolvimento, foi utilizada algumas libs como linter de código [Eslint](https://eslint.org/), nodemon para monitorar alteraçoes de código, [Jest](https://jestjs.io/) para criação de testes altomatizados.

## Getting Started

Para iniciar o projeto você deve ter instalado em sua maquina o docker e docker-compose.

### Instalação 

-- Começamos clonando o repositório rodando o comando no terminal.
<br/>
`git clone https://github.com/TulioCaz/Delivery-Much-Tech-Challenge.git`

-- Em seguida acessamos a pasta do projeto com o comando.
<br/>
`cd Delivery-Much-Tech-Challenge`

-- Abra a pasta em seu editor de texto e altere o arquivo .env.example para que .env e se necessário atualiza a variável GIF_API

-- Agora iremos buildar o projeto dentro do docker compose.
<br/>
`docker-compose build`

-- Agora rode o seguinte comando para startar o container.
<br/>
`docker-compose up`

### Testes unitários

A aplicação utiliza a lib de testes do Facebook [Jest](https://jestjs.io/), uma biblioteca excelente para o uso em diversos tipos de aplicação.
Para rodar os testes unitários na aplicação basta rodar o comando `npm run test`.

## Rotas e Exemplos

### Estrutura da Requisição

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

### GET /recipes

Exemplo: http://localhost:3000/recipes/?i=pasta,tomato,basil

```
{
  "keywords": [
    "pasta",
    "tomato",
    "basil"
  ],
  "recipes": [
    {
      "title": "Black Beans With Pasta",
      "ingredients": [
        "basil",
        "black beans",
        "corn",
        "green onion",
        "pasta",
        "pasta (in general)",
        "salsa",
        "soy sauce",
        "tomato"
      ],
      "link": "http://recipe.aol.com/recipe/black-beans-with-pasta/88138",
      "gif": "https://media2.giphy.com/media/mFdnWF1RTI7fi/giphy.gif?cid=5dffb14e57e4f5cc96b10cb5d86caaa2df6b452499c85ba4&rid=giphy.gif"
    },
    {
      "title": "Tuna-Pasta Salad",
      "ingredients": [
        "balsamic vinaigrette",
        "balsamic vinaigrette",
        "basil",
        "green onion",
        "olives",
        "pasta",
        "pasta",
        "pasta (in general)",
        "tomato",
        "tuna",
        "tuna",
        "zucchini"
      ],
      "link": "http://recipe.aol.com/recipe/tuna-pasta-salad/87329",
      "gif": "https://media1.giphy.com/media/YT8woTY5Zqs7iUo5BS/giphy.gif?cid=5dffb14ee3caf524ced59f30c201b6f3d7565950050b0128&rid=giphy.gif"
    },
    {
      "title": "Baked pasta shells filled with cheese",
      "ingredients": [
        "basil",
        "basil",
        "black pepper",
        "black pepper",
        "garlic",
        "mozzarella cheese",
        "mozzarella cheese",
        "olive oil",
        "parmesan cheese",
        "parmesan cheese",
        "pasta",
        "pasta (in general)",
        "ricotta cheese",
        "salsa",
21

        "salsa",
        "tomato"
      ],
      "link": "http://www.bbc.co.uk/food/recipes/database/bakedpastashellsfill_70348.shtml",
      "gif": "https://media2.giphy.com/media/SqHhJWGc14LYqag2ce/giphy.gif?cid=5dffb14e4175f3e3f55a359dfdc12b22de3508fe80ba9abd&rid=giphy.gif"
    },
    {
      "title": "Creamy Tomato & Basil Bow Tie Pasta",
      "ingredients": [
        "basil",
        "black pepper",
        "cottage cheese",
        "pasta",
        "tomato"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/creamy-tomato-basil-bow-54565.aspx",
      "gif": "https://media2.giphy.com/media/MUeQeEQaDCjE4/giphy.gif?cid=5dffb14e1b111fb5f06d6df88e21b065555cae0a08b70c65&rid=giphy.gif"
    },
    {
      "title": "Italian Pasta with Tomato & Basil",
      "ingredients": [
        "basil",
        "cheeses",
        "garlic",
        "olive oil",
        "pasta",
        "tomato"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/italian-pasta-tomato-basil-52280.aspx",
      "gif": "https://media1.giphy.com/media/WP2fBcVx8j3wGSbA1S/giphy.gif?cid=5dffb14ea3b9ad309f1a27fd48577173bef38c9e04e1ee84&rid=giphy.gif"
    },
    {
      "title": "No-Cook Fresh Tomato Sauce with Pasta",
      "ingredients": [
        "basil",
        "italian dressing",
        "pasta",
        "red onions",
        "romano cheese",
        "tomato"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/no-cook-fresh-tomato-sauce-64922.aspx",
      "gif": "https://media2.giphy.com/media/Z8blEZs9alp16/giphy.gif?cid=5dffb14e040e9940e9cd8ab6e45320027b1ee3a570e1ceeb&rid=giphy.gif"
    },
    {
      "title": "Countryside Italian Salad",
      "ingredients": [
        "bacon",
        "balsamic vinaigrette",
        "basil",
        "mozzarella cheese",
        "pasta",
        "tomato"
      ],
      "link": "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1855782",
      "gif": "https://media1.giphy.com/media/135E47VKw6TM6A/giphy.gif?cid=5dffb14ebe85d6ac3c160b1158229f26348ec7a86856eda3&rid=giphy.gif"
    },
    {
      "title": "Brie Pasta Recipe",
      "ingredients": [
        "basil",
        "brie cheese",
        "garlic",
21

        "olive oil",
        "pasta",
        "tomato"
      ],
      "link": "http://cookeatshare.com/recipes/brie-pasta-30746",
      "gif": "https://media3.giphy.com/media/p4idevU3yFGk4uKCzX/giphy.gif?cid=5dffb14e4edc882d0bc36470ccec6fdc5dd0bdc274caca7a&rid=giphy.gif"
    },
    {
      "title": "Fresh-from-the-Garden Tomato Pasta",
      "ingredients": [
        "balsamic vinaigrette",
        "basil",
        "garlic",
        "onions",
        "parmesan cheese",
        "pasta",
        "tomato"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/fresh-from-the-garden-tomato-pasta-65865.aspx",
      "gif": "https://media3.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5dffb14ec34c2ddedea70382f03683aaf52f48643dfe603f&rid=giphy.gif"
    },
    {
      "title": "VELVEETA® Easy Chicken Primavera",
      "ingredients": [
        "basil",
        "broccoli",
        "chicken",
        "pasta",
        "tomato",
        "velveeta cheese",
        "water"
      ],
      "link": "http://www.kraftfoods.com/kf/recipes/velveeta-easy-chicken-primavera-69172.aspx",
      "gif": "https://media1.giphy.com/media/jpnUo1K9G5nzUuFUQT/giphy.gif?cid=5dffb14e8ba322e37d997cc604105d4048afa7387ce0262f&rid=giphy.gif"
    }
  ]
}
```

## MIT License
´
This project is licensed under the MIT License - see the [LICENSE.md]() file for details


## Criado por

*Túlio Camargo de Azevedo*

