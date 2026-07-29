# Blinkit MVP Test Data

## 1. Product Catalog

### 1.1 Grocery Category (12 products)

```javascript
const groceryProducts = [
  {
    id: "G001",
    name: "Aashirvaad Atta",
    packSize: "5 kg",
    price: 210,
    category: "Grocery",
    emoji: "🌾"
  },
  {
    id: "G002",
    name: "Tata Salt",
    packSize: "1 kg",
    price: 28,
    category: "Grocery",
    emoji: "🧂"
  },
  {
    id: "G003",
    name: "Fortune Oil",
    packSize: "1 L",
    price: 145,
    category: "Grocery",
    emoji: "🫒"
  },
  {
    id: "G004",
    name: "India Gate Basmati Rice",
    packSize: "2 kg",
    price: 320,
    category: "Grocery",
    emoji: "🍚"
  },
  {
    id: "G005",
    name: "Sugar",
    packSize: "1 kg",
    price: 42,
    category: "Grocery",
    emoji: "🍬"
  },
  {
    id: "G006",
    name: "Toor Dal",
    packSize: "1 kg",
    price: 145,
    category: "Grocery",
    emoji: "🫘"
  },
  {
    id: "G007",
    name: "Chana Dal",
    packSize: "1 kg",
    price: 95,
    category: "Grocery",
    emoji: "🫘"
  },
  {
    id: "G008",
    name: "Moong Dal",
    packSize: "500 g",
    price: 85,
    category: "Grocery",
    emoji: "🫘"
  },
  {
    id: "G009",
    name: "Saffola Gold Oil",
    packSize: "1 L",
    price: 165,
    category: "Grocery",
    emoji: "🫒"
  },
  {
    id: "G010",
    name: "Kashmiri Red Chilli Powder",
    packSize: "200 g",
    price: 145,
    category: "Grocery",
    emoji: "🌶️"
  },
  {
    id: "G011",
    name: "Turmeric Powder",
    packSize: "200 g",
    price: 75,
    category: "Grocery",
    emoji: "🟡"
  },
  {
    id: "G012",
    name: "Cumin Seeds",
    packSize: "200 g",
    price: 125,
    category: "Grocery",
    emoji: "🫚"
  }
];
```

### 1.2 Snacks Category (10 products)

```javascript
const snacksProducts = [
  {
    id: "S001",
    name: "Lays Classic",
    packSize: "50 g",
    price: 20,
    category: "Snacks",
    emoji: "🥔"
  },
  {
    id: "S002",
    name: "Bingo! Mad Angles",
    packSize: "55 g",
    price: 25,
    category: "Snacks",
    emoji: "🔺"
  },
  {
    id: "S003",
    name: "Kurkure Masala Munch",
    packSize: "75 g",
    price: 20,
    category: "Snacks",
    emoji: "🌶️"
  },
  {
    id: "S004",
    name: "Britania Good Day",
    packSize: "100 g",
    price: 30,
    category: "Snacks",
    emoji: "🍪"
  },
  {
    id: "S005",
    name: "Oreo Biscuits",
    packSize: "150 g",
    price: 50,
    category: "Snacks",
    emoji: "🍪"
  },
  {
    id: "S006",
    name: "Parle-G Biscuits",
    packSize: "500 g",
    price: 45,
    category: "Snacks",
    emoji: "🍪"
  },
  {
    id: "S007",
    name: "Haldiram's Bhujia",
    packSize: "400 g",
    price: 140,
    category: "Snacks",
    emoji: "🥨"
  },
  {
    id: "S008",
    name: "Balaji Wafers",
    packSize: "100 g",
    price: 35,
    category: "Snacks",
    emoji: "🥔"
  },
  {
    id: "S009",
    name: "Sunfeast Dark Fantasy",
    packSize: "150 g",
    price: 55,
    category: "Snacks",
    emoji: "🍪"
  },
  {
    id: "S010",
    name: "Maggi Noodles",
    packSize: "280 g",
    price: 45,
    category: "Snacks",
    emoji: "🍜"
  }
];
```

### 1.3 Dairy Category (8 products)

```javascript
const dairyProducts = [
  {
    id: "D001",
    name: "Amul Taaza Milk",
    packSize: "500 ml",
    price: 32,
    category: "Dairy",
    emoji: "🥛"
  },
  {
    id: "D002",
    name: "Amul Butter",
    packSize: "100 g",
    price: 56,
    category: "Dairy",
    emoji: "🧈"
  },
  {
    id: "D003",
    name: "Gowardhan Ghee",
    packSize: "500 ml",
    price: 380,
    category: "Dairy",
    emoji: "🧈"
  },
  {
    id: "D004",
    name: "Amul Cheese Slices",
    packSize: "200 g",
    price: 145,
    category: "Dairy",
    emoji: "🧀"
  },
  {
    id: "D005",
    name: "Mother Dairy Curd",
    packSize: "400 g",
    price: 52,
    category: "Dairy",
    emoji: "🥛"
  },
  {
    id: "D006",
    name: "Amul Ice Cream",
    packSize: "500 ml",
    price: 180,
    category: "Dairy",
    emoji: "🍦"
  },
  {
    id: "D007",
    name: "Nestle Milkmaid",
    packSize: "400 g",
    price: 145,
    category: "Dairy",
    emoji: "�"
  },
  {
    id: "D008",
    name: "Britannia Cheese Block",
    packSize: "200 g",
    price: 165,
    category: "Dairy",
    emoji: "�"
  }
];
```

### 1.4 Personal Care Category (12 products)

```javascript
const personalCareProducts = [
  {
    id: "PC001",
    name: "Dove Beauty Bar",
    packSize: "75 g",
    price: 45,
    category: "Personal Care",
    emoji: "🧼"
  },
  {
    id: "PC002",
    name: "Colgate MaxFresh",
    packSize: "100 g",
    price: 85,
    category: "Personal Care",
    emoji: "🦷"
  },
  {
    id: "PC003",
    name: "Nivea Men Face Wash",
    packSize: "100 g",
    price: 199,
    category: "Personal Care",
    emoji: "🧴"
  },
  {
    id: "PC004",
    name: "Dettol Hand Wash",
    packSize: "200 ml",
    price: 135,
    category: "Personal Care",
    emoji: "🧴"
  },
  {
    id: "PC005",
    name: "Lux Soft Touch",
    packSize: "135 g",
    price: 38,
    category: "Personal Care",
    emoji: "🧼"
  },
  {
    id: "PC006",
    name: "Pantene Shampoo",
    packSize: "340 ml",
    price: 245,
    category: "Personal Care",
    emoji: "🧴"
  },
  {
    id: "PC007",
    name: "Sunsilk Shampoo",
    packSize: "340 ml",
    price: 185,
    category: "Personal Care",
    emoji: "🧴"
  },
  {
    id: "PC008",
    name: "Gillette Razor",
    packSize: "1 pc",
    price: 175,
    category: "Personal Care",
    emoji: "🪒"
  },
  {
    id: "PC009",
    name: "Vaseline Petroleum Jelly",
    packSize: "100 ml",
    price: 95,
    category: "Personal Care",
    emoji: "🧴"
  },
  {
    id: "PC010",
    name: "Nivea Body Lotion",
    packSize: "250 ml",
    price: 225,
    category: "Personal Care",
    emoji: "🧴"
  },
  {
    id: "PC011",
    name: "Santoor Soap",
    packSize: "150 g",
    price: 42,
    category: "Personal Care",
    emoji: "🧼"
  },
  {
    id: "PC012",
    name: "Closeup Toothpaste",
    packSize: "150 g",
    price: 95,
    category: "Personal Care",
    emoji: "🦷"
  }
];
```

### 1.5 Pet Care Category (8 products)

```javascript
const petCareProducts = [
  {
    id: "PET001",
    name: "Pedigree Adult Dog Food",
    packSize: "3 kg",
    price: 720,
    category: "Pet Care",
    emoji: "🐕"
  },
  {
    id: "PET002",
    name: "Whiskas Cat Food",
    packSize: "400 g",
    price: 185,
    category: "Pet Care",
    emoji: "🐱"
  },
  {
    id: "PET003",
    name: "Dog Treats Biscuits",
    packSize: "200 g",
    price: 120,
    category: "Pet Care",
    emoji: "🦴"
  },
  {
    id: "PET004",
    name: "Cat Litter",
    packSize: "5 kg",
    price: 450,
    category: "Pet Care",
    emoji: "🐈"
  },
  {
    id: "PET005",
    name: "Pedigree Puppy Food",
    packSize: "3 kg",
    price: 780,
    category: "Pet Care",
    emoji: "🐕"
  },
  {
    id: "PET006",
    name: "Dog Shampoo",
    packSize: "250 ml",
    price: 245,
    category: "Pet Care",
    emoji: "🧴"
  },
  {
    id: "PET007",
    name: "Cat Toys Bundle",
    packSize: "5 pcs",
    price: 350,
    category: "Pet Care",
    emoji: "🧸"
  },
  {
    id: "PET008",
    name: "Dog Collar",
    packSize: "1 pc",
    price: 185,
    category: "Pet Care",
    emoji: "🐕"
  }
];
```

### 1.6 Home Category (10 products)

```javascript
const homeProducts = [
  {
    id: "H001",
    name: "Vim Dishwash Bar",
    packSize: "200 g",
    price: 36,
    category: "Home",
    emoji: "🧽"
  },
  {
    id: "H002",
    name: "Harpic Toilet Cleaner",
    packSize: "500 ml",
    price: 115,
    category: "Home",
    emoji: "🚽"
  },
  {
    id: "H003",
    name: "Lizol Floor Cleaner",
    packSize: "500 ml",
    price: 135,
    category: "Home",
    emoji: "🧹"
  },
  {
    id: "H004",
    name: "Ariel Detergent",
    packSize: "1 kg",
    price: 198,
    category: "Home",
    emoji: "🧺"
  },
  {
    id: "H005",
    name: "Surf Excel Detergent",
    packSize: "1 kg",
    price: 185,
    category: "Home",
    emoji: "🧺"
  },
  {
    id: "H006",
    name: "Tide Detergent Powder",
    packSize: "1 kg",
    price: 175,
    category: "Home",
    emoji: "🧺"
  },
  {
    id: "H007",
    name: "Godrej Aer Spray",
    packSize: "250 ml",
    price: 195,
    category: "Home",
    emoji: "🌸"
  },
  {
    id: "H008",
    name: "Hit Cockroach Spray",
    packSize: "400 ml",
    price: 145,
    category: "Home",
    emoji: "🪲"
  },
  {
    id: "H009",
    name: "Mop and Bucket Set",
    packSize: "1 set",
    price: 450,
    category: "Home",
    emoji: "🧹"
  },
  {
    id: "H010",
    name: "Kitchen Towel Roll",
    packSize: "2 ply",
    price: 85,
    category: "Home",
    emoji: "🧻"
  }
];
```

### 1.7 Beverages Category (10 products)

```javascript
const beveragesProducts = [
  {
    id: "B001",
    name: "Coca-Cola",
    packSize: "750 ml",
    price: 45,
    category: "Beverages",
    emoji: "🥤"
  },
  {
    id: "B002",
    name: "Nescafe Classic",
    packSize: "50 g",
    price: 245,
    category: "Beverages",
    emoji: "☕"
  },
  {
    id: "B003",
    name: "Tata Tea Gold",
    packSize: "250 g",
    price: 180,
    category: "Beverages",
    emoji: "🍵"
  },
  {
    id: "B004",
    name: "Real Orange Juice",
    packSize: "1 L",
    price: 110,
    category: "Beverages",
    emoji: "🍊"
  },
  {
    id: "B005",
    name: "Pepsi",
    packSize: "750 ml",
    price: 45,
    category: "Beverages",
    emoji: "🥤"
  },
  {
    id: "B006",
    name: "Sprite",
    packSize: "750 ml",
    price: 45,
    category: "Beverages",
    emoji: "🥤"
  },
  {
    id: "B007",
    name: "Bru Coffee",
    packSize: "50 g",
    price: 195,
    category: "Beverages",
    emoji: "☕"
  },
  {
    id: "B008",
    name: "Red Label Tea",
    packSize: "250 g",
    price: 145,
    category: "Beverages",
    emoji: "🍵"
  },
  {
    id: "B009",
    name: "Appy Fizz",
    packSize: "250 ml",
    price: 35,
    category: "Beverages",
    emoji: "🍎"
  },
  {
    id: "B010",
    name: "Minute Maid Pulpy Orange",
    packSize: "1 L",
    price: 95,
    category: "Beverages",
    emoji: "🍊"
  }
];
```

### 1.8 Baby Care Category (10 products)

```javascript
const babyCareProducts = [
  {
    id: "BC001",
    name: "Pampers Diapers",
    packSize: "M - 34 pcs",
    price: 549,
    category: "Baby Care",
    emoji: "👶"
  },
  {
    id: "BC002",
    name: "Johnson's Baby Powder",
    packSize: "200 g",
    price: 145,
    category: "Baby Care",
    emoji: "🧸"
  },
  {
    id: "BC003",
    name: "Himalaya Baby Wash",
    packSize: "200 ml",
    price: 185,
    category: "Baby Care",
    emoji: "🛁"
  },
  {
    id: "BC004",
    name: "Baby Wipes",
    packSize: "80 pcs",
    price: 199,
    category: "Baby Care",
    emoji: "🧴"
  },
  {
    id: "BC005",
    name: "Huggies Diapers",
    packSize: "M - 32 pcs",
    price: 520,
    category: "Baby Care",
    emoji: "👶"
  },
  {
    id: "BC006",
    name: "Johnson's Baby Oil",
    packSize: "200 ml",
    price: 165,
    category: "Baby Care",
    emoji: "🧴"
  },
  {
    id: "BC007",
    name: "Baby Lotion",
    packSize: "200 ml",
    price: 195,
    category: "Baby Care",
    emoji: "🧴"
  },
  {
    id: "BC008",
    name: "Baby Shampoo",
    packSize: "200 ml",
    price: 175,
    category: "Baby Care",
    emoji: "🧴"
  },
  {
    id: "BC009",
    name: "Baby Feeding Bottle",
    packSize: "250 ml",
    price: 245,
    category: "Baby Care",
    emoji: "🍼"
  },
  {
    id: "BC010",
    name: "Baby Pacifier",
    packSize: "2 pcs",
    price: 185,
    category: "Baby Care",
    emoji: "🍼"
  }
];
```

### 1.9 Fruits & Vegetables Category (10 products)

```javascript
const fruitsVegetablesProducts = [
  {
    id: "FV001",
    name: "Fresh Apples",
    packSize: "500 g",
    price: 95,
    category: "Fruits & Vegetables",
    emoji: "🍎"
  },
  {
    id: "FV002",
    name: "Bananas",
    packSize: "500 g",
    price: 35,
    category: "Fruits & Vegetables",
    emoji: "🍌"
  },
  {
    id: "FV003",
    name: "Oranges",
    packSize: "500 g",
    price: 65,
    category: "Fruits & Vegetables",
    emoji: "🍊"
  },
  {
    id: "FV004",
    name: "Tomatoes",
    packSize: "500 g",
    price: 25,
    category: "Fruits & Vegetables",
    emoji: "🍅"
  },
  {
    id: "FV005",
    name: "Onions",
    packSize: "500 g",
    price: 30,
    category: "Fruits & Vegetables",
    emoji: "🧅"
  },
  {
    id: "FV006",
    name: "Potatoes",
    packSize: "1 kg",
    price: 35,
    category: "Fruits & Vegetables",
    emoji: "🥔"
  },
  {
    id: "FV007",
    name: "Carrots",
    packSize: "500 g",
    price: 40,
    category: "Fruits & Vegetables",
    emoji: "🥕"
  },
  {
    id: "FV008",
    name: "Green Capsicum",
    packSize: "250 g",
    price: 30,
    category: "Fruits & Vegetables",
    emoji: "🫑"
  },
  {
    id: "FV009",
    name: "Spinach",
    packSize: "250 g",
    price: 25,
    category: "Fruits & Vegetables",
    emoji: "🥬"
  },
  {
    id: "FV010",
    name: "Grapes",
    packSize: "500 g",
    price: 85,
    category: "Fruits & Vegetables",
    emoji: "🍇"
  }
];
```

### 1.10 Breakfast & Cereals Category (10 products)

```javascript
const breakfastCerealsProducts = [
  {
    id: "BR001",
    name: "Kellogg's Corn Flakes",
    packSize: "500 g",
    price: 195,
    category: "Breakfast & Cereals",
    emoji: "🥣"
  },
  {
    id: "BR002",
    name: "Oats",
    packSize: "1 kg",
    price: 145,
    category: "Breakfast & Cereals",
    emoji: "🥣"
  },
  {
    id: "BR003",
    name: "Poha",
    packSize: "500 g",
    price: 75,
    category: "Breakfast & Cereals",
    emoji: "🍚"
  },
  {
    id: "BR004",
    name: "Suji",
    packSize: "500 g",
    price: 55,
    category: "Breakfast & Cereals",
    emoji: "🍚"
  },
  {
    id: "BR005",
    name: "Chocos",
    packSize: "500 g",
    price: 175,
    category: "Breakfast & Cereals",
    emoji: "🥣"
  },
  {
    id: "BR006",
    name: "Muesli",
    packSize: "400 g",
    price: 245,
    category: "Breakfast & Cereals",
    emoji: "🥣"
  },
  {
    id: "BR007",
    name: "Dalia",
    packSize: "500 g",
    price: 65,
    category: "Breakfast & Cereals",
    emoji: "🥣"
  },
  {
    id: "BR008",
    name: "Idli Rice",
    packSize: "1 kg",
    price: 95,
    category: "Breakfast & Cereals",
    emoji: "🍚"
  },
  {
    id: "BR009",
    name: "Urad Dal",
    packSize: "500 g",
    price: 85,
    category: "Breakfast & Cereals",
    emoji: "🫘"
  },
  {
    id: "BR010",
    name: "Peanut Butter",
    packSize: "500 g",
    price: 185,
    category: "Breakfast & Cereals",
    emoji: "🥜"
  }
];
```

### 1.11 Complete Product Catalog

```javascript
const allProducts = [
  ...groceryProducts,
  ...snacksProducts,
  ...dairyProducts,
  ...personalCareProducts,
  ...petCareProducts,
  ...homeProducts,
  ...beveragesProducts,
  ...babyCareProducts,
  ...fruitsVegetablesProducts,
  ...breakfastCerealsProducts
];
// Total: 100 products across 10 categories
```

---

## 2. Personalised Recommendations Pool

### 2.1 Recommendation Candidates (8 total)

```javascript
const personalisedRecommendations = [
  {
    id: "REC001",
    productId: "PET001",
    trustBadge: "Bestseller",
    reasoning: "You order snacks frequently — try this vet-recommended dog food for your pet",
    dismissed: false
  },
  {
    id: "REC002",
    productId: "PC003",
    trustBadge: "Highly Rated",
    reasoning: "Based on your grocery orders, customers who buy atta also love this face wash",
    dismissed: false
  },
  {
    id: "REC003",
    productId: "H003",
    trustBadge: "Trending Nearby",
    reasoning: "You buy dairy regularly — this floor cleaner is popular with households like yours",
    dismissed: false
  },
  {
    id: "REC004",
    productId: "BC001",
    trustBadge: "Bestseller",
    reasoning: "Your snack orders suggest a busy household — try these top-rated diapers",
    dismissed: false
  },
  {
    id: "REC005",
    productId: "PET002",
    trustBadge: "Highly Rated",
    reasoning: "Since you order frequently, your cat might enjoy this premium food",
    dismissed: false
  },
  {
    id: "REC006",
    productId: "PC004",
    trustBadge: "Trending Nearby",
    reasoning: "Customers who buy milk also stock up on this hand wash for family hygiene",
    dismissed: false
  },
  {
    id: "REC007",
    productId: "H004",
    trustBadge: "Bestseller",
    reasoning: "Your grocery pattern suggests you do weekly shopping — this detergent is perfect",
    dismissed: false
  },
  {
    id: "REC008",
    productId: "BC003",
    trustBadge: "Highly Rated",
    reasoning: "Families who order snacks often try this gentle baby wash for their little ones",
    dismissed: false
  }
];
```

### 2.2 Recommendation Categories

- **Pet Care**: REC001, REC005 (2 recommendations)
- **Personal Care**: REC002, REC006 (2 recommendations)
- **Home**: REC003, REC007 (2 recommendations)
- **Baby Care**: REC004, REC008 (2 recommendations)

---

## 3. User Persona Data

### 3.1 "Occasional Explorer" Profile

```javascript
const userPersona = {
  name: "Occasional Explorer",
  description: "User who reorders groceries/snacks habitually but rarely explores adjacent categories",
  
  // Frequently bought categories (simulating order history)
  frequentlyBoughtCategories: ["Grocery", "Snacks", "Dairy"],
  
  // Rarely bought categories
  rarelyBoughtCategories: ["Personal Care", "Pet Care", "Home"],
  
  // Never bought categories (target for recommendations)
  neverBoughtCategories: ["Baby Care", "Beverages"],
  
  // Typical order pattern
  typicalOrderPattern: {
    averageOrderValue: 460,
    averageItemsPerOrder: 5,
    mostCommonCategories: ["Grocery", "Snacks"],
    sessionDuration: "5-10 minutes"
  },
  
  // Simulated past orders (for reasoning context)
  pastOrders: [
    {
      orderId: "ORD001",
      items: ["G001", "S001", "D001", "G002"],
      total: 310,
      categories: ["Grocery", "Snacks", "Dairy"]
    },
    {
      orderId: "ORD002",
      items: ["G003", "S003", "D002", "S002"],
      total: 245,
      categories: ["Grocery", "Snacks", "Dairy"]
    },
    {
      orderId: "ORD003",
      items: ["G004", "S004", "D003", "G005"],
      total: 572,
      categories: ["Grocery", "Snacks", "Dairy"]
    }
  ]
};
```

---

## 4. Category Data

### 4.1 Category List

```javascript
const categories = [
  {
    id: "CAT_GROCERY",
    name: "Grocery",
    emoji: "🌾",
    productCount: 12
  },
  {
    id: "CAT_SNACKS",
    name: "Snacks",
    emoji: "🥔",
    productCount: 10
  },
  {
    id: "CAT_DAIRY",
    name: "Dairy",
    emoji: "🥛",
    productCount: 8
  },
  {
    id: "CAT_PERSONAL_CARE",
    name: "Personal Care",
    emoji: "🧼",
    productCount: 12
  },
  {
    id: "CAT_PET_CARE",
    name: "Pet Care",
    emoji: "🐕",
    productCount: 8
  },
  {
    id: "CAT_HOME",
    name: "Home",
    emoji: "🏠",
    productCount: 10
  },
  {
    id: "CAT_BEVERAGES",
    name: "Beverages",
    emoji: "🥤",
    productCount: 10
  },
  {
    id: "CAT_BABY_CARE",
    name: "Baby Care",
    emoji: "👶",
    productCount: 10
  },
  {
    id: "CAT_FRUITS_VEG",
    name: "Fruits & Vegetables",
    emoji: "🍎",
    productCount: 10
  },
  {
    id: "CAT_BREAKFAST",
    name: "Breakfast & Cereals",
    emoji: "🥣",
    productCount: 10
  }
];
```

---

## 5. Promo Banner Data

```javascript
const promoBanners = [
  {
    id: "PROMO001",
    title: "Free Delivery",
    subtitle: "On orders above ₹199",
    backgroundColor: "#FFD100",
    textColor: "#000000"
  },
  {
    id: "PROMO002",
    title: "10% Off",
    subtitle: "On Personal Care products",
    backgroundColor: "#FFD100",
    textColor: "#000000"
  },
  {
    id: "PROMO003",
    title: "Grocery Essentials",
    subtitle: "Starting at ₹28",
    backgroundColor: "#FFD100",
    textColor: "#000000"
  }
];
```

---

## 6. Payment Methods

```javascript
const paymentMethods = [
  {
    id: "PAY_UPI",
    name: "UPI",
    icon: "📱",
    description: "Google Pay, PhonePe, Paytm"
  },
  {
    id: "PAY_CARD",
    name: "Card",
    icon: "💳",
    description: "Credit, Debit, ATM Card"
  },
  {
    id: "PAY_COD",
    name: "Cash on Delivery",
    icon: "💵",
    description: "Pay when you receive"
  }
];
```

---

## 7. Delivery Address Data

```javascript
const deliveryAddresses = [
  {
    id: "ADDR001",
    label: "Home",
    name: "Rahul Sharma",
    addressLine1: "123, Sector 15",
    addressLine2: "Gurugram, Haryana",
    pincode: "122001",
    phone: "+91 98765 43210",
    isDefault: true
  },
  {
    id: "ADDR002",
    label: "Office",
    name: "Rahul Sharma",
    addressLine1: "456, Cyber City",
    addressLine2: "Gurugram, Haryana",
    pincode: "122002",
    phone: "+91 98765 43210",
    isDefault: false
  }
];
```

---

## 8. Frequently Bought Products (for Home Screen)

```javascript
const frequentlyBoughtProducts = [
  {
    id: "G001",
    name: "Aashirvaad Atta",
    packSize: "5 kg",
    price: 210,
    category: "Grocery",
    emoji: "🌾"
  },
  {
    id: "S001",
    name: "Lays Classic",
    packSize: "50 g",
    price: 20,
    category: "Snacks",
    emoji: "🥔"
  },
  {
    id: "D001",
    name: "Amul Taaza Milk",
    packSize: "500 ml",
    price: 32,
    category: "Dairy",
    emoji: "🥛"
  },
  {
    id: "G002",
    name: "Tata Salt",
    packSize: "1 kg",
    price: 28,
    category: "Grocery",
    emoji: "🧂"
  },
  {
    id: "S003",
    name: "Kurkure Masala Munch",
    packSize: "75 g",
    price: 20,
    category: "Snacks",
    emoji: "🌶️"
  }
];
```

---

## 9. Bill Calculation Test Cases

### 9.1 Test Case 1: Below Free Delivery Threshold

```javascript
const testCase1 = {
  cart: [
    { productId: "S001", quantity: 2 },  // ₹40
    { productId: "G002", quantity: 1 }   // ₹28
  ],
  expected: {
    itemTotal: 68,
    deliveryFee: 40,
    handlingCharge: 2,
    grandTotal: 110
  }
};
```

### 9.2 Test Case 2: Above Free Delivery Threshold

```javascript
const testCase2 = {
  cart: [
    { productId: "G001", quantity: 1 },  // ₹210
    { productId: "D001", quantity: 2 }  // ₹64
  ],
  expected: {
    itemTotal: 274,
    deliveryFee: 0,
    handlingCharge: 2,
    grandTotal: 276
  }
};
```

### 9.3 Test Case 3: Exactly at Threshold

```javascript
const testCase3 = {
  cart: [
    { productId: "G004", quantity: 1 }   // ₹199
  ],
  expected: {
    itemTotal: 199,
    deliveryFee: 0,
    handlingCharge: 2,
    grandTotal: 201
  }
};
```

### 9.4 Test Case 4: Empty Cart

```javascript
const testCase4 = {
  cart: [],
  expected: {
    itemTotal: 0,
    deliveryFee: 0,
    handlingCharge: 0,
    grandTotal: 0
  }
};
```

---

## 10. Session State Examples

### 10.1 Initial State

```javascript
const initialState = {
  cart: [],
  currentScreen: "HOME",
  categoryTrialLogged: false,
  dismissedRecommendations: [],
  selectedPaymentMethod: null,
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"],
    orderCount: 3
  }
};
```

### 10.2 After Adding Products

```javascript
const afterAddingProducts = {
  cart: [
    { productId: "G001", quantity: 1 },
    { productId: "S001", quantity: 2 }
  ],
  currentScreen: "HOME",
  categoryTrialLogged: false,
  dismissedRecommendations: [],
  selectedPaymentMethod: null,
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"],
    orderCount: 3
  }
};
```

### 10.3 After Skipping Recommendation

```javascript
const afterSkippingRecommendation = {
  cart: [
    { productId: "G001", quantity: 1 },
    { productId: "S001", quantity: 2 }
  ],
  currentScreen: "HOME",
  categoryTrialLogged: false,
  dismissedRecommendations: ["REC001"],
  selectedPaymentMethod: null,
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"],
    orderCount: 3
  }
};
```

### 10.4 After Adding Recommendation

```javascript
const afterAddingRecommendation = {
  cart: [
    { productId: "G001", quantity: 1 },
    { productId: "S001", quantity: 2 },
    { productId: "PET001", quantity: 1 }
  ],
  currentScreen: "HOME",
  categoryTrialLogged: true,
  dismissedRecommendations: [],
  selectedPaymentMethod: null,
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"],
    orderCount: 3
  }
};
```

### 10.5 After Placing Order

```javascript
const afterPlacingOrder = {
  cart: [],
  currentScreen: "ORDER_CONFIRMATION",
  categoryTrialLogged: true,
  dismissedRecommendations: [],
  selectedPaymentMethod: "UPI",
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy", "Pet Care"],
    orderCount: 4
  }
};
```

---

## 11. Search Test Data

### 11.1 Search Query Examples

```javascript
const searchQueries = [
  { query: "milk", expectedResults: ["D001"] },
  { query: "atta", expectedResults: ["G001"] },
  { query: "salt", expectedResults: ["G002"] },
  { query: "lays", expectedResults: ["S001"] },
  { query: "dog", expectedResults: ["PET001", "PET003"] },
  { query: "soap", expectedResults: ["PC001", "PC005"] },
  { query: "xyz", expectedResults: [] },  // No results
  { query: "", expectedResults: allProducts }  // Empty query
];
```

---

## 12. Trust Badge Definitions

```javascript
const trustBadges = {
  Bestseller: {
    color: "#FFD100",
    icon: "🏆",
    description: "Most purchased in this category"
  },
  HighlyRated: {
    color: "#4CAF50",
    icon: "⭐",
    description: "4.5+ star rating from customers"
  },
  TrendingNearby: {
    color: "#2196F3",
    icon: "🔥",
    description: "Popular in your area"
  }
};
```

---

## 13. Category Trial Detection Examples

### 13.1 Example 1: Pet Care Trial

```javascript
const categoryTrialExample1 = {
  recommendation: {
    productId: "PET001",
    category: "Pet Care"
  },
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"]
  },
  isTrial: true  // Pet Care not in order history
};
```

### 13.2 Example 2: Not a Trial

```javascript
const categoryTrialExample2 = {
  recommendation: {
    productId: "G001",
    category: "Grocery"
  },
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"]
  },
  isTrial: false  // Grocery already in order history
};
```

---

## 14. Cross-sell Display Logic

### 14.1 Show Cross-sell Condition

```javascript
const shouldShowCrossSell = (cart, recommendation) => {
  const recommendationInCart = cart.some(
    item => item.productId === recommendation.productId
  );
  return !recommendationInCart && !recommendation.dismissed;
};
```

### 14.2 Cross-sell Test Cases

```javascript
const crossSellTestCases = [
  {
    name: "Show cross-sell - item not in cart",
    cart: [{ productId: "G001", quantity: 1 }],
    recommendation: { productId: "PET001", dismissed: false },
    expected: true
  },
  {
    name: "Hide cross-sell - item already in cart",
    cart: [{ productId: "PET001", quantity: 1 }],
    recommendation: { productId: "PET001", dismissed: false },
    expected: false
  },
  {
    name: "Hide cross-sell - recommendation dismissed",
    cart: [{ productId: "G001", quantity: 1 }],
    recommendation: { productId: "PET001", dismissed: true },
    expected: false
  }
];
```

---

## 15. Data Export Format

### 15.1 Complete Data Bundle

```javascript
const testDataBundle = {
  products: allProducts,
  categories: categories,
  recommendations: personalisedRecommendations,
  userPersona: userPersona,
  promoBanners: promoBanners,
  paymentMethods: paymentMethods,
  deliveryAddresses: deliveryAddresses,
  frequentlyBought: frequentlyBoughtProducts,
  trustBadges: trustBadges
};
```

---

## 16. Data Validation Rules

### 16.1 Product Validation

```javascript
const validateProduct = (product) => {
  return (
    product.id &&
    product.name &&
    product.packSize &&
    product.price > 0 &&
    product.category &&
    product.emoji
  );
};
```

### 16.2 Recommendation Validation

```javascript
const validateRecommendation = (recommendation) => {
  return (
    recommendation.id &&
    recommendation.productId &&
    ["Bestseller", "Highly Rated", "Trending Nearby"].includes(recommendation.trustBadge) &&
    recommendation.reasoning &&
    typeof recommendation.dismissed === "boolean"
  );
};
```

---

## 17. Summary Statistics

- **Total Products**: 100
- **Total Categories**: 10
- **Products per Category**: 8-12
- **Total Recommendations**: 8
- **Trust Badge Types**: 3
- **Payment Methods**: 3
- **Delivery Addresses**: 2
- **Promo Banners**: 3
- **Price Range**: ₹20 - ₹780
- **Average Product Price**: ₹168

---

## 18. Usage Instructions

### 18.1 Importing Data

```javascript
// Import all data
import { allProducts, categories, personalisedRecommendations } from './testData';

// Or import specific categories
import { groceryProducts, snacksProducts } from './testData';
```

### 18.2 Filtering Products by Category

```javascript
const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};
```

### 18.3 Getting Current Recommendation

```javascript
const getCurrentRecommendation = () => {
  return personalisedRecommendations.find(rec => !rec.dismissed);
};
```

### 18.4 Dismissing a Recommendation

```javascript
const dismissRecommendation = (recommendationId) => {
  const recommendation = personalisedRecommendations.find(rec => rec.id === recommendationId);
  if (recommendation) {
    recommendation.dismissed = true;
  }
};
```

---

## 19. Test Scenarios

### 19.1 Scenario 1: First-time User

```javascript
const scenario1 = {
  description: "First-time user sees personalised recommendation",
  initialState: {
    cart: [],
    dismissedRecommendations: [],
    categoryTrialLogged: false
  },
  actions: [
    "Open app",
    "View home screen",
    "See personalised card with REC001"
  ],
  expectedOutcome: "Personalised card visible with Pet Care product"
};
```

### 19.2 Scenario 2: Skip Recommendation

```javascript
const scenario2 = {
  description: "User skips recommendation and sees next one",
  initialState: {
    cart: [],
    dismissedRecommendations: [],
    categoryTrialLogged: false
  },
  actions: [
    "Open app",
    "Tap Skip on REC001",
    "View next recommendation REC002"
  ],
  expectedOutcome: "REC002 displayed, REC001 dismissed but category still available"
};
```

### 19.3 Scenario 3: Add Recommendation

```javascript
const scenario3 = {
  description: "User adds recommendation to cart",
  initialState: {
    cart: [],
    dismissedRecommendations: [],
    categoryTrialLogged: false
  },
  actions: [
    "Open app",
    "Tap Add on REC001",
    "Check cart count",
    "Check category trial flag"
  ],
  expectedOutcome: "PET001 in cart, categoryTrialLogged = true"
};
```

### 19.4 Scenario 4: Cross-sell in Cart

```javascript
const scenario4 = {
  description: "User sees cross-sell in cart if recommendation not added",
  initialState: {
    cart: [{ productId: "G001", quantity: 1 }],
    dismissedRecommendations: [],
    categoryTrialLogged: false
  },
  actions: [
    "Add grocery item to cart",
    "Go to cart",
    "View cross-sell section"
  ],
  expectedOutcome: "Personalised card visible in cart with REC001"
};
```

### 19.5 Scenario 5: Complete Order Flow

```javascript
const scenario5 = {
  description: "Complete order with category trial",
  initialState: {
    cart: [],
    dismissedRecommendations: [],
    categoryTrialLogged: false
  },
  actions: [
    "Add REC001 to cart",
    "Add grocery items",
    "Go to checkout",
    "Select payment method",
    "Place order",
    "View confirmation"
  ],
  expectedOutcome: "Order confirmed, category trial note displayed"
};
```

---

## 20. Data Maintenance

### 20.1 Adding New Products

```javascript
const addProduct = (newProduct) => {
  if (validateProduct(newProduct)) {
    allProducts.push(newProduct);
    return true;
  }
  return false;
};
```

### 20.2 Updating Product Prices

```javascript
const updateProductPrice = (productId, newPrice) => {
  const product = allProducts.find(p => p.id === productId);
  if (product && newPrice > 0) {
    product.price = newPrice;
    return true;
  }
  return false;
};
```

### 20.3 Adding New Recommendations

```javascript
const addRecommendation = (newRecommendation) => {
  if (validateRecommendation(newRecommendation)) {
    personalisedRecommendations.push(newRecommendation);
    return true;
  }
  return false;
};
```

---

This test data provides comprehensive coverage for the Blinkit MVP with 34 products across 8 categories, 8 personalised recommendations, and complete user persona data to support all interaction flows and edge cases.
