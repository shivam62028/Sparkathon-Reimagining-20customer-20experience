import React, { useState } from "react";
import { ArrowLeft, MapPin, Phone, Clock, Navigation } from "lucide-react";
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

const StoreFinder = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");

  const stores = [
    {
      id: 1,
      name: "Walmart Supercenter - Connaught Place",
      address: "Block A, Connaught Place, New Delhi, 110001",
      distance: "0.8 km",
      phone: "+91 11 2341 5678",
      hours: "6:00 AM - 12:00 AM",
      services: ["Pharmacy", "Grocery Pickup", "Vision Center"],
      coordinates: { lat: 28.6315, lng: 77.2167 },
    },
    {
      id: 2,
      name: "Walmart Neighborhood Market - Karol Bagh",
      address: "15/2, Karol Bagh, New Delhi, 110005",
      distance: "2.1 km",
      phone: "+91 11 2575 9090",
      hours: "7:00 AM - 11:00 PM",
      services: ["Pharmacy", "Money Services"],
      coordinates: { lat: 28.6519, lng: 77.1909 },
    },
    {
      id: 3,
      name: "Walmart Supercenter - Lajpat Nagar",
      address: "Central Market, Lajpat Nagar II, New Delhi, 110024",
      distance: "3.5 km",
      phone: "+91 11 2984 7621",
      hours: "6:00 AM - 12:00 AM",
      services: ["Pharmacy", "Grocery Pickup", "Auto Center", "Vision Center"],
      coordinates: { lat: 28.5677, lng: 77.2439 },
    },
  ];

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
              <h1 className="text-xl font-semibold">Store Finder</h1>
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
            Find Walmart Stores Near You
          </h1>
          <p className="text-muted-foreground">
            Locate nearby stores and get directions, hours, and services
          </p>
        </div>

        {/* Search Location */}
        <div className="mb-6">
          <div className="flex space-x-2 max-w-md">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Enter city, state, or ZIP code..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-walmart-blue hover:bg-blue-700">
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <Card className="dark:bg-gray-800/50 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto text-walmart-blue mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Map integration would show store locations here
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => console.log("Opening map integration...")}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Store List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {stores.map((store) => (
                <Card
                  key={store.id}
                  className="dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{store.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 mt-1 text-walmart-blue flex-shrink-0" />
                        <div>
                          <p className="text-sm">{store.address}</p>
                          <p className="text-sm text-walmart-blue font-medium">
                            {store.distance} away
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{store.phone}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{store.hours}</span>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Services:</p>
                        <div className="flex flex-wrap gap-1">
                          {store.services.map((service, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() =>
                            console.log("Getting directions to:", store.name)
                          }
                        >
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-walmart-blue hover:bg-blue-700"
                          onClick={() =>
                            console.log("Store details:", store.name)
                          }
                        >
                          Store Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoreFinder;
