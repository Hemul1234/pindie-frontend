'use client';
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"

export default function tds() {
    const TDSGames = useGetDataByCategory(
        endpoints.games, 
        "TDS"
    )
    return (
        <main className="main-inner">
            {TDSGames ? (
                <CardsListSection id="tds" title="TDS" data={TDSGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}