"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

export const Header = ({ userName, onLogout }) => {
  return (
    <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">ShadeCDN</div>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Contact Us</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-4">
        <span>{userName}</span>
        <button
          onClick={onLogout}
          className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
