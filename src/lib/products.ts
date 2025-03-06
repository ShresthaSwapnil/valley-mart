// This is a mock implementation for demo purposes
// In a real application, this would connect to a database or API

type Product = {
    id: string
    name: string
    description: string
    fullDescription?: string
    price: number
    oldPrice?: number
    discount?: number
    image?: string
    category: string
    brand: string
    country: string
    size: string
    alcoholContent: number
    type: string
    age?: string
    rating: number
    reviewCount: number
    isNew?: boolean
    featured?: boolean
  }
  
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Johnnie Walker Black Label",
      description: "Premium Blended Scotch Whisky",
      fullDescription:
        "Johnnie Walker Black Label is a true icon, recognized as the benchmark for all other deluxe blends. Created using only whiskies aged for a minimum of 12 years from the four corners of Scotland, Johnnie Walker Black Label has an unmistakably smooth, deep character.",
      price: 5500,
      oldPrice: 6000,
      discount: 8,
      image: "/placeholder.svg?height=600&width=600",
      category: "whiskey",
      brand: "Johnnie Walker",
      country: "Scotland",
      size: "750ml",
      alcoholContent: 40,
      type: "Blended Scotch",
      age: "12 years",
      rating: 4.8,
      reviewCount: 124,
      featured: true,
    },
    {
      id: "2",
      name: "Absolut Vodka",
      description: "Premium Swedish Vodka",
      fullDescription:
        "Absolut Vodka is a Swedish vodka made exclusively from natural ingredients. With its refined nature and no added sugar, it's rich, full-bodied and exceptionally smooth.",
      price: 3200,
      image: "/placeholder.svg?height=600&width=600",
      category: "vodka",
      brand: "Absolut",
      country: "Sweden",
      size: "750ml",
      alcoholContent: 40,
      type: "Vodka",
      rating: 4.5,
      reviewCount: 98,
      featured: true,
    },
    {
      id: "3",
      name: "Bacardi Superior",
      description: "White Rum",
      fullDescription:
        "Bacardi Superior is a light and aromatic white rum with delicate floral and fruity notes, making it an essential ingredient in many classic cocktails.",
      price: 2800,
      image: "/placeholder.svg?height=600&width=600",
      category: "rum",
      brand: "Bacardi",
      country: "Puerto Rico",
      size: "750ml",
      alcoholContent: 40,
      type: "White Rum",
      rating: 4.3,
      reviewCount: 76,
      featured: true,
    },
    {
      id: "4",
      name: "Yellow Tail Shiraz",
      description: "Australian Red Wine",
      fullDescription:
        "Yellow Tail Shiraz is a vibrant red wine with rich berry and vanilla notes. It's bold yet smooth with a pleasant finish.",
      price: 1800,
      oldPrice: 2200,
      discount: 18,
      image: "/placeholder.svg?height=600&width=600",
      category: "wine",
      brand: "Yellow Tail",
      country: "Australia",
      size: "750ml",
      alcoholContent: 13.5,
      type: "Red Wine",
      rating: 4.2,
      reviewCount: 65,
      featured: true,
    },
    {
      id: "5",
      name: "Heineken Lager",
      description: "Premium Lager Beer",
      fullDescription:
        "Heineken is a pale lager beer with 5% alcohol by volume, made by Heineken International. Heineken has a mild bitter taste and is served in a signature green bottle.",
      price: 350,
      image: "/placeholder.svg?height=600&width=600",
      category: "beer",
      brand: "Heineken",
      country: "Netherlands",
      size: "330ml",
      alcoholContent: 5,
      type: "Lager",
      rating: 4.1,
      reviewCount: 112,
      featured: true,
    },
    {
      id: "6",
      name: "Jack Daniel's Old No. 7",
      description: "Tennessee Whiskey",
      fullDescription:
        "Jack Daniel's Old No. 7 is a premium Tennessee Whiskey, charcoal mellowed drop by drop, and matured in handcrafted barrels. It's a smooth sipping whiskey with a distinctive flavor.",
      price: 4800,
      image: "/placeholder.svg?height=600&width=600",
      category: "whiskey",
      brand: "Jack Daniel's",
      country: "USA",
      size: "750ml",
      alcoholContent: 40,
      type: "Tennessee Whiskey",
      rating: 4.7,
      reviewCount: 143,
      featured: true,
    },
    {
      id: "7",
      name: "Grey Goose",
      description: "Premium French Vodka",
      fullDescription:
        "Grey Goose is a premium vodka, created using only the finest French ingredients – the highest-grade wheat and pristine limestone-filtered spring water.",
      price: 5200,
      image: "/placeholder.svg?height=600&width=600",
      category: "vodka",
      brand: "Grey Goose",
      country: "France",
      size: "750ml",
      alcoholContent: 40,
      type: "Vodka",
      rating: 4.6,
      reviewCount: 87,
      isNew: true,
    },
    {
      id: "8",
      name: "Bombay Sapphire",
      description: "Premium London Dry Gin",
      fullDescription:
        "Bombay Sapphire is a premium London dry gin that's vapor-infused with 10 precious botanicals, creating a complex, aromatic liquid that's perfect for classic and contemporary cocktails.",
      price: 3800,
      oldPrice: 4200,
      discount: 10,
      image: "/placeholder.svg?height=600&width=600",
      category: "gin",
      brand: "Bombay Sapphire",
      country: "England",
      size: "750ml",
      alcoholContent: 47,
      type: "London Dry Gin",
      rating: 4.5,
      reviewCount: 92,
    },
    {
      id: "9",
      name: "Dom Pérignon Vintage",
      description: "Prestige Champagne",
      fullDescription:
        "Dom Pérignon is a vintage champagne produced by the Champagne house Moët & Chandon. It's named after Dom Pérignon, a Benedictine monk who was an important quality pioneer for Champagne wine.",
      price: 22000,
      image: "/placeholder.svg?height=600&width=600",
      category: "wine",
      brand: "Dom Pérignon",
      country: "France",
      size: "750ml",
      alcoholContent: 12.5,
      type: "Champagne",
      rating: 4.9,
      reviewCount: 45,
    },
    {
      id: "10",
      name: "Macallan 18 Years",
      description: "Single Malt Scotch Whisky",
      fullDescription:
        "The Macallan 18 Years Old Sherry Oak is matured exclusively for eighteen years in hand-picked Oloroso sherry seasoned oak casks from Jerez, Spain, delivering a rich and complex whisky with notes of dried fruits, spice, and oak.",
      price: 28000,
      image: "/placeholder.svg?height=600&width=600",
      category: "whiskey",
      brand: "Macallan",
      country: "Scotland",
      size: "750ml",
      alcoholContent: 43,
      type: "Single Malt Scotch",
      age: "18 years",
      rating: 4.9,
      reviewCount: 67,
    },
    {
      id: "11",
      name: "Gorkha Strong Beer",
      description: "Nepali Strong Lager",
      fullDescription:
        "Gorkha Strong is a popular Nepali beer with a robust flavor and higher alcohol content. It's brewed using quality ingredients and is a favorite among locals and tourists alike.",
      price: 320,
      image: "/placeholder.svg?height=600&width=600",
      category: "beer",
      brand: "Gorkha Brewery",
      country: "Nepal",
      size: "650ml",
      alcoholContent: 8,
      type: "Strong Lager",
      rating: 4.2,
      reviewCount: 156,
      isNew: true,
    },
    {
      id: "12",
      name: "Khukri Rum",
      description: "Nepali Dark Rum",
      fullDescription:
        "Khukri Rum is Nepal's premier rum, distilled from quality molasses and matured in oak vats. It has a distinctive flavor with notes of caramel and spices.",
      price: 1200,
      image: "/placeholder.svg?height=600&width=600",
      category: "rum",
      brand: "Nepal Distilleries",
      country: "Nepal",
      size: "750ml",
      alcoholContent: 42.8,
      type: "Dark Rum",
      rating: 4.4,
      reviewCount: 128,
    },
  ]
  
  type ProductsQueryParams = {
    category?: string
    price?: string
    sort?: string
    page?: number
    limit?: number
    featured?: boolean
    exclude?: string
  }
  
  export async function getProducts(params: ProductsQueryParams = {}) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
  
    let filtered = [...mockProducts]
  
    // Filter by category
    if (params.category) {
      const categories = params.category.split(",")
      filtered = filtered.filter((product) => categories.includes(product.category))
    }
  
    // Filter by price range
    if (params.price) {
      const [min, max] = params.price.split("-").map(Number)
      filtered = filtered.filter((product) => product.price >= min && product.price <= max)
    }
  
    // Filter by featured
    if (params.featured) {
      filtered = filtered.filter((product) => product.featured)
    }
  
    // Exclude specific product
    if (params.exclude) {
      filtered = filtered.filter((product) => product.id !== params.exclude)
    }
  
    // Sort products
    if (params.sort) {
      switch (params.sort) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price)
          break
        case "price-high":
          filtered.sort((a, b) => b.price - a.price)
          break
        case "newest":
          filtered.sort((a, b) => (a.isNew ? -1 : b.isNew ? 1 : 0))
          break
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name))
          break
        case "featured":
        default:
          filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          break
      }
    }
  
    // Calculate pagination
    const page = params.page || 1
    const limit = params.limit || 12
    const totalItems = filtered.length
    const totalPages = Math.ceil(totalItems / limit)
  
    // Apply pagination
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedProducts = filtered.slice(start, end)
  
    // If limit is provided but no pagination, just return the limited number
    if (params.limit && !params.page) {
      return params.exclude
        ? filtered.slice(0, params.limit)
        : {
            products: filtered.slice(0, params.limit),
            totalPages: 1,
          }
    }
  
    // Return paginated results or just the products based on the exclude parameter
    return params.exclude
      ? filtered
      : {
          products: paginatedProducts,
          totalPages,
          currentPage: page,
          totalItems,
        }
  }
  
  export async function getProductById(id: string) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
  
    return mockProducts.find((product) => product.id === id) || null
  }
  
  