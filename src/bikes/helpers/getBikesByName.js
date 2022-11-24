import { bikes } from "../data/bikes";


export const getBikesByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];

    return bikes.filter(
        bike => bike.bike_name.toLocaleLowerCase().includes(name)
    )


}