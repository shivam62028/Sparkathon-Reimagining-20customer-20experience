import React, { useState, useEffect } from "react";
import { ArrowLeft, Plus, Trash2, Edit, ShoppingCart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { useNavigate } from "react-router-dom";

interface ShoppingList {
  id: string;
  name: string;
  items: string[];
  createdAt: string;
  updatedAt: string;
}

const MyLists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState<ShoppingList[]>([]);
  const [newListName, setNewListName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Load lists from localStorage on component mount
  useEffect(() => {
    const savedLists = localStorage.getItem("walmart-shopping-lists");
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    } else {
      // Initialize with some default lists
      const defaultLists: ShoppingList[] = [
        {
          id: "1",
          name: "Weekly Groceries",
          items: ["Milk", "Bread", "Eggs", "Bananas", "Chicken"],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Keto Meal Prep",
          items: ["Avocados", "Salmon", "Spinach", "Coconut Oil"],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      setLists(defaultLists);
      localStorage.setItem(
        "walmart-shopping-lists",
        JSON.stringify(defaultLists),
      );
    }
  }, []);

  // Save lists to localStorage whenever lists change
  useEffect(() => {
    localStorage.setItem("walmart-shopping-lists", JSON.stringify(lists));
  }, [lists]);

  const createNewList = () => {
    if (newListName.trim()) {
      const newList: ShoppingList = {
        id: Date.now().toString(),
        name: newListName.trim(),
        items: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setLists([newList, ...lists]);
      setNewListName("");
      setShowCreateForm(false);
    }
  };

  const deleteList = (id: string) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
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
              <h1 className="text-xl font-semibold">My Shopping Lists</h1>
            </div>
            <ThemeToggle
              variant="ghost"
              className="text-white hover:bg-white/10 p-2"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            My Shopping Lists
          </h1>
          <p className="text-muted-foreground">
            Organize your shopping with personalized lists
          </p>
        </div>

        {/* Create New List */}
        <div className="mb-6">
          {!showCreateForm ? (
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-walmart-blue hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New List
            </Button>
          ) : (
            <Card className="max-w-md dark:bg-gray-800/50 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">
                  Create New Shopping List
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Enter list name..."
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && createNewList()}
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={createNewList}
                    className="bg-walmart-blue hover:bg-blue-700"
                  >
                    Create
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowCreateForm(false);
                      setNewListName("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Shopping Lists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lists.map((list) => (
            <Card
              key={list.id}
              className="dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg truncate">
                    {list.name}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteList(list.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{list.items.length} items</Badge>
                    <span className="text-xs text-muted-foreground">
                      Updated: {formatDate(list.updatedAt)}
                    </span>
                  </div>

                  {list.items.length > 0 ? (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Items:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {list.items.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-center">
                            <ShoppingCart className="w-3 h-3 mr-2" />
                            {item}
                          </li>
                        ))}
                        {list.items.length > 3 && (
                          <li className="text-xs">
                            +{list.items.length - 3} more items
                          </li>
                        )}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No items yet
                    </p>
                  )}

                  <div className="flex space-x-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => console.log("Edit list:", list.id)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-walmart-blue hover:bg-blue-700"
                      onClick={() => console.log("Shop list:", list.id)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Shop
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {lists.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              No shopping lists yet
            </h3>
            <p className="text-muted-foreground mb-4">
              Create your first shopping list to get started
            </p>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-walmart-blue hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First List
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyLists;
