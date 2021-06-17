import React from 'react'

function RecipeItem(props) {
    const { name, image, ingredientLines, share, ur, navigate, calories, dietLabels, dishType } = props
    return (
        <div className="card py-2 text-center" style={{ border: "1px solid ", margin:"10px", padding:"10px" }}>
            <div className="card body">
                <h4>{name}</h4>
                <img src={image} className="img-fluid w-10 mx-auto rounded-circle" /><hr />
                <div><h6>Calories: </h6>{calories}</div>
                <ul className="list-group list-group-flush">
                    {dietLabels.map(dietLabel => <li className="list-group-item"> <h6>DietLabels: </h6> {dietLabel}</li>)}
                </ul>
                <ul className="list-group list-group-flush"> <h6>DishType: </h6>
                    {dishType}
                </ul>
                <ul className="list-group list-group-flush"> <h6>Ingredients: </h6>
                    {ingredientLines.map(ingredient => <div>{ingredient}</div>)}
                </ul>
                <h6>Cooking instructions: </h6><a href={navigate}>Process</a> 
                <h6>More details:</h6><a href={ur}>Edamam Website</a>
                <h6>Share: </h6><a href={share}>clich here share</a>
            
                <br/></div>
            
        </div>
    )
}

export default RecipeItem
