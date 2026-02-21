const recipeGrid = document.getElementById("recipe-grid");
const favoritesGrid = document.getElementById("favorites-grid");
const favoritesCount = document.getElementById("favorites-count");
const searchInput = document.getElementById("recipe-search");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-search");
const filterButtons = document.querySelectorAll(".filter-btn");

let favorites = [];
let currentCategory = "all";
let currentSearch = "";

// Map recipe names to online links
const recipeLinks = {
    "Apple Pie": "https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/",
    "Beef Tacos": "https://www.allrecipes.com/recipe/214931/beef-tacos/",
    "Caesar Salad": "https://www.allrecipes.com/recipe/23256/caesar-salad/",
    "Chocolate Chip Cookies": "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/",
    "Classic Pancakes": "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/",
    "French Toast": "https://www.allrecipes.com/recipe/7016/french-toast-i/",
    "Grilled Chicken Sandwich": "https://www.allrecipes.com/recipe/25452/grilled-chicken-sandwich/",
    "Quinoa Buddha Bowl": "https://www.allrecipes.com/recipe/279366/quinoa-buddha-bowl/",
    "Spaghetti Carbonara": "https://www.allrecipes.com/recipe/11973/spaghetti-alla-carbonara/",
    "Vegetable Stir Fry": "https://www.allrecipes.com/recipe/229960/vegetable-stir-fry/"
};

// Render recipes
function renderRecipes(list, container) {
    container.innerHTML = "";

    if (list.length === 0) {
        if (container === recipeGrid) document.getElementById("no-results").style.display = "block";
        else if (container === favoritesGrid) document.getElementById("no-favorites").style.display = "block";
        return;
    } else {
        document.getElementById("no-results").style.display = "none";
        document.getElementById("no-favorites").style.display = "none";
    }

    list.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${image}" alt="${recipe.name}" class="recipe-image">
            <h3 class="recipe-title">${recipe.name}</h3>
            <p>Prep Time: ${recipe.prepTime} min</p>
            <p>Difficulty: ${recipe.difficulty}</p>
            <ul class="recipe-ingredients">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
            <a href="${recipeLinks[recipe.name]}" target="_blank" class="view-btn">View Recipe</a>
            <button class="favorite-btn ${favorites.includes(recipe.id) ? "favorited" : ""}" data-id="${recipe.id}">❤️</button>
        `;

        container.appendChild(card);
    });

    // Add favorite event listeners
    const favButtons = container.querySelectorAll(".favorite-btn");
    favButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            if (favorites.includes(id)) {
                favorites = favorites.filter(f => f !== id);
            } else {
                favorites.push(id);
            }
            renderFavorites();
            renderRecipes(filterRecipes(), recipeGrid);
        });
    });
}

// Filter by category and search
function filterRecipes() {
    return recipes.filter(recipe => {
        const matchesCategory = currentCategory === "all" || recipe.category === currentCategory;
        const matchesSearch = recipe.name.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Render favorites
function renderFavorites() {
    const favList = recipes.filter(r => favorites.includes(r.id));
    renderRecipes(favList, favoritesGrid);
    favoritesCount.textContent = favorites.length;
}

// Filter button clicks
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderRecipes(filterRecipes(), recipeGrid);
        // Scroll to recipes section
        document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
    });
});

// Search functionality
searchBtn.addEventListener("click", () => {
    currentSearch = searchInput.value;
    renderRecipes(filterRecipes(), recipeGrid);
    clearBtn.style.display = currentSearch ? "inline-block" : "none";
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    renderRecipes(filterRecipes(), recipeGrid);
    clearBtn.style.display = "none";
});

// Initial render
renderRecipes(recipes, recipeGrid);
renderFavorites();
