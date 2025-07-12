import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Grocery from "./pages/Grocery";
import ReadyMeals from "./pages/ReadyMeals";
import Restaurants from "./pages/Restaurants";
import Health from "./pages/Health";
import MyLists from "./pages/MyLists";
import StoreFinder from "./pages/StoreFinder";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="walmart-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/ready-meals" element={<ReadyMeals />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/health" element={<Health />} />
            <Route path="/my-lists" element={<MyLists />} />
            <Route path="/store-finder" element={<StoreFinder />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
