import React from 'react';
import MovementFactory from '../data/MovementFactory';
import Movement from './Movement';

const MovementList = ({ movementsData }) => {
    const movements = movementsData.map(data => 
        MovementFactory.createMovement(data)
    );
    
    return (
        <div className="movement-list">
            {movements.map((movement, index) => (
                <Movement key={index} movement={movement} />
            ))}
        </div>
    );
};

export default MovementList;