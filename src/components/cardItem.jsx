import '../style/App.css'

export function MakeCard({ card, onCardClick }) {
    return (
        <div className="cards" onClick={() => onCardClick(card.id)}>
            <div>
                <img src={card.image} alt={card.name} style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>{card.name}</p>
        </div>
    );
}
export function checkCard(cards, clickedId) {
    return cards.map((card) => {
        if (card.id === clickedId) {
            if (!card.isClicked) {
                console.log("Click");
                return { ...card, isClicked: true };
            } else {
                console.log("nye");
                return card;
            }
        }
        return card;
    });
}