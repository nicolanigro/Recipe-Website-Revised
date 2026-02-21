const sampleUsers = [
    {
        id: 1,
        username: "ChefMike",
        displayName: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        joinDate: "2023-01-15",
        recipesShared: 12,
        favoriteCategories: ["dinner", "dessert"]
    },
    {
        id: 2,
        username: "BakingQueen",
        displayName: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        joinDate: "2023-03-22",
        recipesShared: 8,
        favoriteCategories: ["dessert", "breakfast"]
    },
    {
        id: 3,
        username: "HealthyEats",
        displayName: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        joinDate: "2023-06-10",
        recipesShared: 15,
        favoriteCategories: ["vegetarian", "lunch"]
    }
];

const sampleReviews = [
    {
        id: 1,
        recipeId: 1,
        userId: 1,
        username: "ChefMike",
        rating: 5,
        comment: "These pancakes turned out absolutely perfect! My kids loved them and asked for seconds. The texture was fluffy and the flavor was just right.",
        date: "2024-08-15",
        helpful: 12
    },
    {
        id: 2,
        recipeId: 1,
        userId: 2,
        username: "BakingQueen",
        rating: 4,
        comment: "Great recipe! I added a bit of cinnamon to the batter and it was delicious. Will definitely make again.",
        date: "2024-08-20",
        helpful: 8
    },
    {
        id: 3,
        recipeId: 4,
        userId: 3,
        username: "HealthyEats",
        rating: 5,
        comment: "Best chocolate chip cookies ever! I used coconut oil instead of butter and they were still amazing.",
        date: "2024-09-01",
        helpful: 15
    },
    {
        id: 4,
        recipeId: 3,
        userId: 1,
        username: "ChefMike",
        rating: 5,
        comment: "This carbonara is restaurant quality! The key is to remove from heat before adding the eggs. Perfect technique in the instructions.",
        date: "2024-09-05",
        helpful: 20
    },
    {
        id: 5,
        recipeId: 5,
        userId: 3,
        username: "HealthyEats",
        rating: 4,
        comment: "Love this stir fry! I added some tofu for extra protein and it was perfect. Quick and healthy weeknight dinner.",
        date: "2024-09-10",
        helpful: 6
    }
];

const userPreferences = {
    theme: "light", // "light" | "dark" | "auto"
    defaultServings: 4,
    measurementUnit: "metric", // "metric" | "imperial"
    dietaryRestrictions: [],
    favoriteCategories: [],
    cookingExperience: "beginner", // "beginner" | "intermediate" | "advanced"
    showNutritionalInfo: true,
    emailNotifications: {
        newRecipes: true,
        weeklyDigest: false,
        comments: true
    }
};

const cookingTips = [
    {
        id: 1,
        title: "Always Taste as You Go",
        content: "The best cooks taste their food throughout the cooking process. This helps you adjust seasoning and catch any issues early.",
        category: "general",
        difficulty: "beginner"
    },
    {
        id: 2,
        title: "Let Meat Rest",
        content: "After cooking meat, let it rest for 5-10 minutes. This allows juices to redistribute, resulting in more tender and flavorful meat.",
        category: "protein",
        difficulty: "intermediate"
    },
    {
        id: 3,
        title: "Mise en Place",
        content: "Before you start cooking, prep and measure all ingredients. This French term means 'everything in its place' and makes cooking much smoother.",
        category: "preparation",
        difficulty: "beginner"
    },
    {
        id: 4,
        title: "Don't Overcrowd the Pan",
        content: "When searing or sautéing, give ingredients space. Overcrowding leads to steaming instead of browning, resulting in less flavor.",
        category: "technique",
        difficulty: "intermediate"
    }
];

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sampleUsers, sampleReviews, userPreferences, cookingTips };
}