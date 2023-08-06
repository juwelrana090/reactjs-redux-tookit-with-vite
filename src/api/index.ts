import Chance from "chance";

const chance = new Chance();
const fakeUserData = () => {
    return {
        id: chance.guid(),
        name: chance.first(),
        email: chance.email(),
    };
};
    
    
    
export { fakeUserData };