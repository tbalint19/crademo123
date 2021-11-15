import { getId } from '../Utils/getId';

export const withNewFruit = (fruits, name) => [ ...fruits, { id: getId(), name: name, color: "unknown" } ]