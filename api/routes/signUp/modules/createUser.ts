import {UserInterface} from "../../../mongo/mongoInterfaces/userInterface";
import User from "../../../mongo/users/users";
import CustomError from "../../../modules/errors/errorClass";

export default async function createUser(newUserBody:UserInterface):Promise<UserInterface | Error>{
    const newUser=new User<UserInterface>(newUserBody);
    return await newUser.hashPassword(newUserBody.password)
    .then(()=>newUser)
    .catch(()=>new CustomError("Something wrong happen please try again.",400))
};
