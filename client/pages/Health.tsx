import React, { useState } from "react";
import { ArrowLeft, Heart, Pill, ShoppingCart, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { useNavigate } from "react-router-dom";

const Health = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Vitamins",
    "Pain Relief",
    "First Aid",
    "Personal Care",
    "Wellness",
  ];

  const healthProducts = [
    {
      id: 1,
      name: "Vitamin D3 Tablets",
      price: "₹299",
      category: "Vitamins",
      image: "💊",
      description: "Essential vitamin for bone health",
      inStock: true,
    },
    {
      id: 2,
      name: "Pain Relief Gel",
      price: "₹145",
      category: "Pain Relief",
      image: "🧴",
      description: "Fast-acting pain relief gel",
      inStock: true,
    },
    {
      id: 3,
      name: "First Aid Kit",
      price: "₹850",
      category: "First Aid",
      image: "🩹",
      description: "Complete emergency first aid kit",
      inStock: true,
    },
    {
      id: 4,
      name: "Hand Sanitizer",
      price: "₹75",
      category: "Personal Care",
      image: "🧴",
      description: "70% alcohol hand sanitizer",
      inStock: true,
    },
  ];

  const filteredProducts = healthProducts.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-walmart-blue text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-semibold">Health & Wellness</h1>
            </div>
            <ThemeToggle
              variant="ghost"
              className="text-white hover:bg-white/10 p-2"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Health & Wellness Products
          </h1>
          <p className="text-muted-foreground">
            Everything you need for a healthy lifestyle
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category ? "bg-walmart-blue" : ""
                }
              >
                <Filter className="w-4 h-4 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{product.image}</div>
                  <h3 className="font-medium text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {product.description}
                  </p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {product.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-walmart-blue">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    disabled={!product.inStock}
                    className="bg-walmart-blue hover:bg-blue-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {product.inStock ? "Add" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Health;
