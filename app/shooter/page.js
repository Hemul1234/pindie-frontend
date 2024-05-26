'use client';
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"

export default function Shooter() {
    const shooterGames = useGetDataByCategory(
        endpoints.games, 
        "shooter"
    )
    return (
        <main className="main-inner">
            {shooterGames ? (
                <CardsListSection id="shooters" title="Шутеры" data={shooterGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}