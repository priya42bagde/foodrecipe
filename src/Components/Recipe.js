import React from 'react'
import RecipeItem from "./RecipeItem"

function Recipe(props) {
    const { recipe } = props
    return (
        <div className="rows">
            {recipe.map(rec => <RecipeItem
                key={Math.random() * 100}
                name={rec.recipe.label}
                share={rec.recipe.shareAs}
                ur={rec.recipe.uri}
                navigate ={rec.recipe.url}
                image={rec.recipe.image}
                ingredientLines={rec.recipe.ingredientLines}
                calories={rec.recipe.calories}
                dietLabels={rec.recipe.dietLabels}
                dishType={rec.recipe.dishType}
            />)}
        </div>
    )
}

export default Recipe
