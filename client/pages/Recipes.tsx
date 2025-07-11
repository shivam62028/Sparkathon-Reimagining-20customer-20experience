import React from "react";
import { ChefHat, ArrowLeft, Sun, Moon } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useTheme } from "../components/ThemeProvider";

const Recipes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-semibold">Recipe Hub</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">
              Recipe Integration Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              This will include personalized recipe suggestions, meal planning,
              and seamless ingredient addition to shopping lists.
            </p>
            <Button>Return to Dashboard</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Recipes;
