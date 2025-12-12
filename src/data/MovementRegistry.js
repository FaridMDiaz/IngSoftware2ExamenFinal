import {
    deposit,
    withdrawal,
    payment,
    transfer,
    ChargebackMovement
} from './movements.js';

class MovementRegistry {
    static registry = {
        'INCOME': deposit,
        'EXPENSE': withdrawal,
        'TRANSFER': payment,
        'REFUND': transfer,
        'CHARGEBACK': ChargebackMovement
    };
    
    static registerMovementType(type, MovementClass) {
        this.registry[type] = MovementClass;
    }
    
    static createMovement(data) {
        const MovementClass = this.registry[data.type];
        if (!MovementClass) {
            throw new Error(`Tipo de movimiento no registrado: ${data.type}`);
        }
        return new MovementClass(data);
    }
    
    static getAvailableTypes() {
        return Object.keys(this.registry);
    }
}

export default MovementRegistry;