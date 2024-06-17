// For full API documentation, including code examples, visit https://wix.to/94BuAAs
const recipeList = [
	{
		name: 'BBQ Chicken',
		ingredients: ['Chicken', ' BBQ Sauce', 'Oil', 'Salt', 'Black Pepper'],
		rating: 5,
		image: 'https://content.codecademy.com/courses/wix/objects/project/bbq_chicken.jpg',
		instructions: 'Chicken goes in the hot oil.Prepare the grill (450°F). Brush the cooking grates clean. Drizzle the chicken breasts with extra virgin olive oil and rub over the breasts. Season generously with kosher salt and freshly ground black pepper. Place the chicken breasts on the hot grill. Cover and cook for 5-6 minutes.'
	},
	{
		name: 'Cheeseburger',
		ingredients: ['American Cheese', 'Ground Beef', 'Lettuce', 'Tomato', 'Onion', 'Onion Powder', 'Salt', 'Black Pepper', 'Hamburger Buns'],
		rating: 4,
		image: 'https://content.codecademy.com/courses/wix/objects/project/cheeseburger.jpg',
		instructions: 'In a large bowl, mix ground beef, onion powder, salt and pepper until just combined. Divide into desired portions and form patties. Cook until the crust that forms on the bottom of the burger releases it from the pan or grate — about 2 minutes.'
	},
	{
		name: 'Dumplings',
		ingredients: ['Dumpling Wrappers', 'Ground Pork', 'Cabbage', 'Onion', 'Salt', 'Black Pepper'],
		rating: 4.5,
		image: 'https://content.codecademy.com/courses/wix/objects/project/dumpling.jpg',
		instructions: 'Marinate ground pork in soy sauce and mix with minced cabbage and onion. Add a tablespoon of the mixture into a dumpling wrapper and repeat until done. Boil the dumplings until they float.'
	},
	{
		name: 'Curried Chickpeas',
		ingredients: ['Chickpeas', 'Garlic', 'Coconut Milk', 'Curry Powder', 'Red Onion', 'Salt', 'Black Pepper'],
		rating: 5,
		image: 'https://content.codecademy.com/courses/wix/objects/project/curried_chickpeas.jpg',
		instructions: 'Cook the diced red onion and minced garlic before adding in curry powder. Add in the drained chickpeas with a can of coconut milk. Simmer until desired texture and season with salt and pepper to taste.'
	},
	// Add a new object here:
	{
		name: 'French Onion Soup',
		ingredients: ['Onions', 'Butter', 'White Wine', 'Beef Broth', 'Flour', 'Gruyere Cheese', 'Bay Leaves', 'French Bread'],
		rating: 4.5,
		image: 'https://i.imgur.com/23yypdP.jpeg',
		instructions: 'Melt the butter in a dutch oven over medium heat. Add in the sliced onions and tend patiently for 45 to 55 minutes, stirring more frequently as time elapses. Add the wine and raise the heat. Scrape any brown fond off the bottom. Add beef broth, bay leaves, and other seasoning. Cook soup covered at a simmer for 30 minutes. Dish soup into crocks and add french bread and cheese. Cook under broiler until cheese is melted.',

	}

];


$w.onReady(function () {

    
	// Pre-selected elements
	const inputField = $w('#input');
	const dropdownElement = $w('#dropdown');
	const filterButton = $w('#filterBtn');
	const reset = $w('#resetBtn');

	// Add your code below
	for (let i = 0; i < recipeList.length; i++) {
		let currentImage = $w(`#image${i}`)
		let currentName = $w(`#name${i}`)
		let currentIngredients = $w(`#ingredients${i}`)
		let currentInstructions = $w(`#instructions${i}`)
		let currentRating = $w(`#rating${i}`)

		currentImage.src = recipeList[i].image
		currentName.text = recipeList[i].name
		currentIngredients.text = recipeList[i].ingredients.join(', ')
		currentRating.text = `${recipeList[i].rating}/5`
		currentInstructions.text = recipeList[i].instructions

	}
	const recipeBoxes = $w('Box')
	filterButton.onClick((event) => {
		const filterOut = inputField.value
		const filterOption = dropdownElement.value
		for (let j = 0; j < recipeBoxes.length; j++) {
			if (recipeList[j][filterOption].includes(filterOut)){
				recipeBoxes[j].collapse();
			}
		}
	})
	reset.onClick((event) => {
		recipeBoxes.forEach((box) => {
			box.expand();
		})
	})
})