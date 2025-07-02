import { Link } from "react-router-dom";

export default function RecipeLayout({ recipe }) {
  const ingredients = [];
  //harek ingredient ma for loop garxa ani sabai ing ra qty ma rakhxa 
  for (let i = 1; i <= 30; i++) {
    const ing = recipe[`strIngredient${i}`];
    const qty = recipe[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push(`${qty} ${ing}`);
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link
        to="/"
        className="text-orange-600 hover:text-orange-700 text-sm font-medium mb-6 flex transition"
      >
        ← Back to Recipes
      </Link>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-6">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-auto max-h-[500px] object-cover lg:rounded-2xl"
        />
        <div className="p-6 space-y-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{recipe.strMeal}</h1>
            <p className="text-sm text-gray-500">
              {recipe.strCategory} • {recipe.strArea}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-600 mb-2">🧂 Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {ingredients.map((item, index) => (
                //for loop ma rakheko haru paxi yeta map garera dekhauni
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-600 mb-2">📖 Instructions</h2>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {recipe.strInstructions}
            </div>
          </div>
          <div className="pt-4 flex gap-4">
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 text-sm font-medium"
              >
                🎥 Watch on YouTube
              </a>
            )}
            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 text-sm font-medium"
              >
                🌐 View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
