import '../style/App.css';
import { useState, useEffect } from 'react';
import { MakeCard } from './cardItem';

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export function Cardsgrid({ onCardClick }) {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=8');
                const data = await response.json();

                const fetchedCards = data.results.map((pokemon, index) => {
                    const id = index + 1;
                    return {
                        id: id,
                        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                        isClicked: false,
                    };
                });

                setCard(fetchedCards);
                setLoading(false);
            } catch (error) {
                console.error("Gagal mengambil data Pokemon:", error);
            }
        }

        fetchPokemonData();
    }, []);

    const handleClick = (id) => {
        const clickedCard = card.find((c) => c.id === id);

        onCardClick(clickedCard.isClicked);

        if (clickedCard.isClicked) {
            const resetCards = card.map((c) => ({ ...c, isClicked: false }));
            setCard(shuffleArray(resetCards)); 
        } else {
            const updatedCards = card.map((c) =>
                c.id === id ? { ...c, isClicked: true } : c
            );
            setCard(shuffleArray(updatedCards)); 
        }
    };

    if (loading) {
        return <h2 style={{ color: 'white', textAlign: 'center' }}>did you know i don't relly like react...'</h2>;
    }

    return (
        <div className="cardsbox">
            {card.map((item) => (
                <MakeCard key={item.id} card={item} onCardClick={handleClick} />
            ))}
        </div>
    );
}