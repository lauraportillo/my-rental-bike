import { bikes } from "../data/bikes";


export const getBikesByType = (type) => {

    const validTypes = ['Electric', 'Road', 'City'];

    if (!validTypes.includes(type)) {
        throw new Error(`${type} is not a valid type`)
    }
    return bikes.filter(bike => bike.type === type);
}

