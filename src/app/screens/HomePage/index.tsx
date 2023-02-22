import React from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRastaurants } from "./topRastaurants";
import { BestRastaurants } from "./bestRastaurants";
import { BestDishes } from "./bestDishes";
import { Advertisement } from "./advertisement";
import { Events } from "./events";
import { Recommendations } from "./recommendations";

export default function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopRastaurants />
      <BestRastaurants />
      <BestDishes />
      <Advertisement />
      <Events />
      <Recommendations />
    </div>
  );
}
