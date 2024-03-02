import { User } from "../models/user-model.js";

class userRepository {

    async signupRepository(data) {
        try {
            const user = await User.create(data);
            console.log(user);
            return user;
        } catch (error) {
            throw new { error: 'Something went wrong in the repository layer' }
        }
    }
    async signinRepository(data) {
        try {
            const user = await User.create(data);
            console.log(user);
            return user;
        } catch (error) {
            throw new { error: 'Something went wrong in the repository layer' }
        }
    }
    async getAllUserRepository(data) {
        try {
            const user = await User.find();
            console.log(user);
            return user;
        } catch (error) {
            throw new { error: 'Something went wrong in the repository layer' }
        }
    }
}
export { userRepository };