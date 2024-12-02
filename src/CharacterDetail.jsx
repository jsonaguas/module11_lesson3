import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (characterId) {
            const fetchCharacterDetails = async () => {
                try {
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=0341cd0c30b09ddc69922058cf2819ef&hash=c2c4592f3b2eb488b52ea8b5e7d70c59`);
                    console.log(response.data.data);
                    setCharacter(response.data.data.results[0]);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching character details:', error);
                    setLoading(false);
                }
            };

            fetchCharacterDetails();
        }
    }, [characterId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!character) {
        return <p>No character selected.</p>;
    }

    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;