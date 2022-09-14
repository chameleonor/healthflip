import { Event } from "../../types/Events";

interface Action {
    type: 'push' | 'update' | 'delete';
    payload: Event;
}

export function savedEventsReducer(state: Event[] /** state */, { type, payload }: Action /** action */) {
    switch (type) {
        case 'push':
            return [...state, payload];
        case 'update':
            return state.map((evt) => (evt.id === payload.id ? payload : evt));
        case 'delete':
            return state.filter((evt) => evt.id !== payload.id);
        default:
            throw new Error();
    }
};