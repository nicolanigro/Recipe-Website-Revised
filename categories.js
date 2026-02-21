const categories = {
    "all": {
        name: "All Recipes",
        description: "Browse our complete collection of delicious recipes",
        color: "#6366f1",
        icon: "🍽️",
        count: 0 // Will be calculated dynamically
    },
    "breakfast": {
        name: "Breakfast",
        description: "Start your day right with these morning favorites",
        color: "#f59e0b",
        icon: "🌅",
        count: 0
    },
    "lunch": {
        name: "Lunch",
        description: "Perfect midday meals to keep you energized",
        color: "#10b981",
        icon: "🥗",
        count: 0
    },
    "dinner": {
        name: "Dinner",
        description: "Hearty evening meals for the whole family",
        color: "#ef4444",
        icon: "🍽️",
        count: 0
    },
    "dessert": {
        name: "Dessert",
        description: "Sweet treats to end your meal perfectly",
        color: "#ec4899",
        icon: "🍰",
        count: 0
    },
    "vegetarian": {
        name: "Vegetarian",
        description: "Plant-based recipes full of flavor and nutrition",
        color: "#22c55e",
        icon: "🥕",
        count: 0
    }
};

const difficultyLevels = {
    "easy": {
        name: "Easy",
        description: "Simple recipes perfect for beginners",
        color: "#22c55e",
        icon: "⭐",
        timeRange: "5-20 minutes"
    },
    "medium": {
        name: "Medium",
        description: "Recipes requiring some cooking experience",
        color: "#f59e0b", 
        icon: "⭐⭐",
        timeRange: "20-45 minutes"
    },
    "hard": {
        name: "Hard",
        description: "Advanced recipes for experienced cooks",
        color: "#ef4444",
        icon: "⭐⭐⭐",
        timeRange: "45+ minutes"
    }
};

const cuisineTypes = [
    "American", "Italian", "Mediterranean", "Asian", "Mexican", 
    "French", "Indian", "Thai", "Greek", "Spanish"
];

const dietaryRestrictions = {
    "gluten-free": {
        name: "Gluten Free",
        icon: "🌾",
        color: "#8b5cf6"
    },
    "dairy-free": {
        name: "Dairy Free", 
        icon: "🥛",
        color: "#06b6d4"
    },
    "vegan": {
        name: "Vegan",
        icon: "🌱",
        color: "#22c55e"
    },
    "keto": {
        name: "Keto",
        icon: "🥑",
        color: "#84cc16"
    },
    "low-carb": {
        name: "Low Carb",
        icon: "🥩",
        color: "#f97316"
    }
};

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, difficultyLevels, cuisineTypes, dietaryRestrictions };
}