const additionalRecipes = [
    {
        id: 11,
        name: "Avocado Toast",
        category: "breakfast",
        prepTime: 10,
        difficulty: "easy",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
        description: "Simple yet delicious avocado toast with perfectly ripe avocado and a sprinkle of everything seasoning.",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste",
            "Everything bagel seasoning",
            "Cherry tomatoes (optional)",
            "Red pepper flakes (optional)"
        ],
        instructions: [
            "Toast bread slices until golden brown.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Spread avocado mixture on toast.",
            "Sprinkle with everything bagel seasoning.",
            "Top with cherry tomatoes and red pepper flakes if desired."
        ]
    },
    {
        id: 12,
        name: "Greek Salad",
        category: "lunch",
        prepTime: 15,
        difficulty: "easy",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        description: "Fresh Mediterranean salad with crisp vegetables, olives, and feta cheese in a tangy dressing.",
        ingredients: [
            "3 large tomatoes, chopped",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "1 cup Kalamata olives",
            "200g feta cheese, cubed",
            "1/4 cup olive oil",
            "2 tablespoons red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Combine tomatoes, cucumber, and red onion in a large bowl.",
            "Add olives and feta cheese.",
            "Whisk together olive oil, vinegar, oregano, salt, and pepper.",
            "Pour dressing over salad and toss gently.",
            "Let sit for 10 minutes before serving to allow flavors to meld."
        ]
    },
    {
        id: 13,
        name: "Chicken Curry",
        category: "dinner",
        prepTime: 45,
        difficulty: "medium",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop",
        description: "Rich and aromatic chicken curry with tender meat in a creamy, spiced tomato sauce.",
        ingredients: [
            "2 lbs chicken thighs, cut into pieces",
            "2 onions, chopped",
            "4 cloves garlic, minced",
            "1 inch ginger, grated",
            "1 can coconut milk",
            "1 can diced tomatoes",
            "2 tablespoons curry powder",
            "1 teaspoon turmeric",
            "1/2 teaspoon cayenne pepper",
            "Salt to taste",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Season chicken with salt and pepper, then brown in a large pot.",
            "Remove chicken and sauté onions until softened.",
            "Add garlic, ginger, curry powder, turmeric, and cayenne.",
            "Cook for 1 minute until fragrant.",
            "Add tomatoes and coconut milk, bring to a simmer.",
            "Return chicken to pot and simmer for 25-30 minutes.",
            "Garnish with cilantro and serve over rice."
        ]
    },
    {
        id: 14,
        name: "Tiramisu",
        category: "dessert",
        prepTime: 30,
        difficulty: "hard",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and rich mascarpone cream.",
        ingredients: [
            "24 ladyfinger cookies",
            "1 1/2 cups strong espresso, cooled",
            "3 tablespoons coffee liqueur",
            "4 large egg yolks",
            "3/4 cup sugar",
            "1 1/4 cups mascarpone cheese",
            "1 3/4 cups heavy cream",
            "Unsweetened cocoa powder",
            "Dark chocolate shavings"
        ],
        instructions: [
            "Combine espresso and coffee liqueur in a shallow dish.",
            "Whisk egg yolks and sugar until thick and pale.",
            "Add mascarpone and whisk until smooth.",
            "Whip cream to soft peaks and fold into mascarpone mixture.",
            "Dip each ladyfinger briefly in coffee mixture and arrange in dish.",
            "Spread half the mascarpone mixture over cookies.",
            "Repeat layers and refrigerate for at least 4 hours.",
            "Dust with cocoa powder and top with chocolate shavings before serving."
        ]
    },
    {
        id: 15,
        name: "Mushroom Risotto",
        category: "vegetarian",
        prepTime: 40,
        difficulty: "hard",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
        description: "Creamy, luxurious risotto with mixed mushrooms and fresh herbs. Perfect comfort food.",
        ingredients: [
            "1 1/2 cups Arborio rice",
            "6 cups warm vegetable broth",
            "1 lb mixed mushrooms, sliced",
            "1 onion, finely chopped",
            "3 cloves garlic, minced",
            "1/2 cup dry white wine",
            "1/2 cup grated Parmesan cheese",
            "3 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh thyme and parsley",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Sauté mushrooms in olive oil until golden, season and set aside.",
            "In the same pan, sauté onion until translucent.",
            "Add garlic and rice, stirring for 2 minutes until rice is coated.",
            "Add wine and stir until absorbed.",
            "Add warm broth one ladle at a time, stirring constantly.",
            "Continue for 18-20 minutes until rice is creamy but still has bite.",
            "Stir in mushrooms, Parmesan, butter, and herbs.",
            "Season with salt and pepper, serve immediately."
        ]
    }
];

// Optional: Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = additionalRecipes;
}