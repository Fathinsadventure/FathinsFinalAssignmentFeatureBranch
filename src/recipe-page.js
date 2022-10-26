import axios from "axios"
import { createRecipeHeader, createRecipeIngredientList, createRecipePreparation, createRecipeImage, createNutrientsTable, createRecipeHealthLabels} from "./functions/create-recipe-page-data";

document.addEventListener('DOMContentLoaded', (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    event.preventDefault();

    async function createRecipeData() {
        try {
            const apiLink = "https://api.edamam.com/api/recipes/v2/";
            const respons = await axios.get(`${apiLink}${id}`, {
                params: {
                    type: "public",
                    app_id: "a768fd7d",
                    app_key: "3fe720fdb760d15962b3f8f17d39776f",

                }
            })
            console.log(respons.data);
            const selectedRecipe = respons.data.recipe;

            createRecipeHeader(selectedRecipe);
            createRecipeIngredientList(selectedRecipe);
            createRecipePreparation(selectedRecipe);
            createRecipeImage(selectedRecipe);
            createNutrientsTable(selectedRecipe);
            createRecipeHealthLabels(selectedRecipe);

        } catch (e) {
            console.error(e)
        }
    }
    createRecipeData();
});
