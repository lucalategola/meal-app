export type Category = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export type Categories = ReadonlyArray<Category>

export type Meal = {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strInstructions?: string
  strArea?: string
  strTags?: string
}

export type Meals = ReadonlyArray<Meal>
