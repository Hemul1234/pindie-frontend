'use client';
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config"
import { CardsListSection } from "../components/CardsListSection/CardsListSection"

export default function Runner() {
    const runnerGames = useGetDataByCategory(
        endpoints.games, 
        "runner"
    )
    return (
        <main className="main-inner">
            {runnerGames ? (
                <CardsListSection id="runners" title="Раннеры" data={runnerGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}