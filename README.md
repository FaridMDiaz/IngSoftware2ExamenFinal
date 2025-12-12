# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Refactorización con Patrón Factory

## Justificación

### Problema identificado:
El componente `MovementList.js` tenía un alto acoplamiento con las clases concretas de movimiento (`IncomeMovement`, `ExpenseMovement`, etc.), violando el principio de inversión de dependencias.

### Solución implementada:
Se implementó el patrón **Factory Method** combinado con un **Registry** para:

1. **Reducir acoplamiento**: La UI ahora solo depende de la abstracción `MovementFactory` y la interfaz `IMovement`
2. **Aumentar cohesión**: La lógica de creación se centralizó en el dominio
3. **Cumplir OCP**: Se pueden agregar nuevos tipos sin modificar la UI

### Beneficios:
- **Mantenibilidad**: Cambios en las clases concretas no afectan la UI
- **Extensibilidad**: Nuevos tipos se agregan solo en el dominio
- **Testabilidad**: La fábrica puede mockearse fácilmente

## Pasos para agregar un nuevo tipo (OCP):

1. **Crear la nueva clase** en `src/domain/Movement.js`:
```javascript
export class NuevoMovement extends Movement {
    constructor(data) { /* ... */ }
    getColor() { /* ... */ }
    getIcon() { /* ... */ }
    netAmount() { /* ... */ }
}