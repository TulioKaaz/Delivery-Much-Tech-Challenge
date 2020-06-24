const apiHttpRequestService = require('./Services/apiHttpRequestService');
const textHandler = require('../helper/textHandler');

module.exports = {
  async recipeList(req, res) {
    const { i } = req.query;

    if (!i) {
      throw new Error('Missing Query Params');
    }

    const keywords = textHandler.transformTextInArray(i);

    if (keywords.length > 0 && keywords < 4) {
      throw new Error('Wrong params, max 3 parms!');
    }

    const getRecipsPuppyAPI = await apiHttpRequestService.requestRecipepuppyApi(
      keywords,
    );

    const recipes = await getRecipsPuppyAPI.results.map(recipe => {
      const cleanTitle = textHandler.clearText(recipe.title);
      const arrayOfIngredients = textHandler.transformTextInArray(
        recipe.ingredients,
      );
      const cleanArrayOfIngredients = arrayOfIngredients.map(ing =>
        textHandler.deleteSpaces(ing),
      );
      const sortIngredients = textHandler.alphabeticalOrder(
        cleanArrayOfIngredients,
      );
      return {
        title: cleanTitle,
        ingredients: sortIngredients,
        link: recipe.href,
      };
    });

    for (let initeration = 0; initeration < recipes.length; initeration++) {
      const gifRequest = await apiHttpRequestService.requestGiphyApi(
        recipes[initeration].title,
      );
      recipes[initeration].gif = gifRequest.data[0].images.original.url;
    }

    return res.status(200).json({ keywords, recipes });
  },
};
