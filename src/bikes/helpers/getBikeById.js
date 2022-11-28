import { bikes } from "../data/bikes";


export const getBikeById = (id) => {

    return bikes.find(bike => bike.id === id);

}