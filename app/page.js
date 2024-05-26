"use client";
import { endpoints } from "./api/config";
import { useGetDataByCategory } from "./api/api-hooks";
import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Preloader } from "./components/Preloader/Preloader";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main">
      <Banner />
      { popularGames ? <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider" /> : <Preloader />}
      { newGames ? <CardsListSection id="new" title="Новинки" data={newGames} type="slider" /> : <Preloader />}
      <Promo />
    </main>
  );
}