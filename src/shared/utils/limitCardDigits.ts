import { CardOutput } from "../types/Card";

export const limitCardDigits = (v: CardOutput) => {
    v.number = v.number.slice(v.number.length - 4, v.number.length);
    return v;
};
