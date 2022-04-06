# CNU Cookbook

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## API Documentation

Documentation of API used for this project.

API URL: **https://exercise.cngroup.dk/api**

### Types

Types are derived from the API results, some field might be missing!

#### Recipe

```
{
  _id: Int,
  title: string !required,
  preparationTime: Int,
  servingCount: Int,
  directions: string
  ingredients: Array[Ingredient],
  slug: string,
  lastModifiedDate: Date,
  isMarkdown: Boolean
  sideDish: string
  __v: Int
}
```

#### Ingredient

```
{
  _id: Int,
  name: string,
  amount: Int,
  amountUnit: string,
  isGroup: Boolean
}
```

### Endpoints

#### /recipes

- Method: **GET**
- Returns: List all available recipes

#### /recipes/:slug

- Method: **GET**
- :slug can be replaced with :id
- Returns: All information available about recipe (based on slug or id)

#### /recipes/ingredients

- Method: **GET**
- Returns: List of all ingredients avaliabel, lists only their names in string array.

#### /recipes/side-dishes

- Method: **GET**
- Returns: List of all side-dishes, string array.

#### /recipes

- Method: **POST**
- Content-type: application/json
- Creates a new recipe
- Required fields and default values:

  ```
  {
    title: String, //required field for user
    preparationTime: Int,
    servingCount: Int,
    sideDish: String,
    directions: String,
    ingredients: Array<{
        amount: Int,
        amountUnit: String,
        isGroup: Boolean,
        name: String,
    }>
  }
  ```

- Returns: Simplified recipe object, same that is returned in recipe list or error.

#### /recipes/:id

- Method: **POST**
- Content-type: application/json
- Edits an existing recipe
- Only edited fields can be sent
- Returns: Simplified recipe object, same that is returned in recipe list or error.

#### /recipes/:id

- Method: **DELETE**
- Deletes existing recipe
- Returns: 200 OK


### EMAIL ZADANIE TEXT

Zadanie domacej ulohy - Povinna cast

 

RecipeEdit - vytvorit formular pre editaciu receptu

snazte sa mysliet komponentovo ako sme si to ukazali na workshope (napr. RecipeList atd.)
ako vyzeraju data si mozete pozriet tu https://exercise.cngroup.dk/api/recipes, pripadne priamo cez URL. https://exercise.cngroup.dk/api/recipes/kure-na-paprice
ingrediencie su zlozitejsia zalezitost (pridanie/odobratia do/z array), rozhodne sa na tom nezaseknite a urobte vsetko ostatne (povinne)
API je pripravene tak ze ak nastavite hodnoty tym properties, ktore mu poslete (tzn. ak mu v POST na "/recipes/:slug" poslete iba { title: ‘New Title’ }, tak sa nastavi len title a ostane ostanu rovnake 
ako sme spominali bolo by vhodne si vybrat jeden recept ktory budete editovat (resp testovat na nom) aby ste si navzajom nemenili data
ak by vam dosli pouzitelne recepty, tak databaza sa obnovuje kazdy den rano
 

RecipeList

upravit cas na hodiny a minuty
zobrazit side dish 
klikatelny cely item v liste
 

RecipeDetail

vypis ingrediencii (mysliet komponentovo) 
vypis directions (pozrite si index parameter v metode map)
 

Nepovinne

Zoradenie receptov v zozname podla casu (preparationTime). 
Ak sa vam podari urobit editaciu ingrediencii tak mozete dorobit moznost radenia drag'n'drop (viz https://exercise.cngroup.dk/recept/babovka/upravit)
V detaile je taktiez mozne menit pocet porcii a na zaklade toho preratat mnozstvo pre jednotlive ingrediencie (viz https://exercise.cngroup.dk/recept/chilli-con-carne-rychle)
Kreativite sa medze nekladu takze ak budete chciet dorobit nieco vlastne kludne to tam pridajte.
 

 

Všetky údaje o receptoch sa získavajú z rozhrania API.

Dostupné API na https://exercise.cngroup.dk/api:

GET /recipes – recipe list
GET /recipes/:slug - recipe detail
POST /recipes - create recipe
POST /recipes/:slug - update recipe
DELETE /recipes/:slug – delete recipe
GET /recipes/ingredients – ingredient list
GET /recipes/side-dishes – side dish list
 

Ak si potrebujete vyskúšať tieto API endpointy odporúčame použiť https://www.postman.com/  

 

Inšpiráciu nájdete na stránke https://exercise.cngroup.dk/. Vaším cieľom nie je pokryť všetky funkcie za každú cenu. Referenčná aplikácia je len príkladom toho, ako by mohol vyzerať výsledok. Predstavivosti a kreativite sa medze nekladú! Na návrh aplikácie môžete použiť predinštalované knižnice Reactstrap alebo si môžete vytvoriť návrh s vlastnými komponentmi CSS a komponentmi - je to len na Vás.

 

Svoju aplikáciu môžete odoslať dvoma spôsobmi:

- Zabaľte celú aplikáciu do súboru ZIP a pošlite na email belisova@cngroup.dk  so svojím menom bez node_modules.

- Ak máte skúsenosti so systémom Git, vytvorte si úložisko na GitHub, GitLab atď., nahrajte doň svoju aplikáciu a pošlite nám mailom odkaz na úložisko alebo vám môžeme poskytnúť prístup.

 

DOLEZITA INFORMACIA: Deadline na odovzdanie úlohy je do polnoci 20.4. (20.4.2022 23:59:59). Termin prezentacii bude online 25.4. Bližšie o prezentáciách Vás budeme informovať neskôr.

 

V prípade, že sa niekde zaseknete kontaktujte kolegov cez slack.

 

Užitočné odkazy:

- https://beta.reactjs.org/

- https://reactstrap.github.io/

- https://axios-http.com/
