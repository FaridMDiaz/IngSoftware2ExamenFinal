import MovementRegistry from './MovementRegistry.js';

class MovementFactory {
    static createMovement(data) {
        return MovementRegistry.createMovement(data);
    }
    
    // Para compatibilidad con código existente
    static createMovement(type, data) {
        return MovementRegistry.createMovement({ ...data, type });
    }
}

export default MovementFactory;