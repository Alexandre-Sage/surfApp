import {User} from "../../../mongo/users/users";

const userOne=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestOne",
    userName:"TestOne",
    email: "test@testOne",
    phone:"0606654654",
    picture:[
        {
            path:"../../../",
            place:"here",
            uploadDate:Date.now()
        },
        {
            path:"../../../",
            place:"here",uploadDate:Date.now()
        }
    ],
        creationDate:Date.now(),
        lastConnection:Date.now()
});

const userNameDup=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestOne",
    userName:"TestOne",
    email: "test@testTwo",
    phone:"065687456",
    picture:[
        {
            path:"../../../",
            place:"here",
            uploadDate:Date.now()
        },
        {
            path:"../../../",
            place:"here",uploadDate:Date.now()
        }
    ],
        creationDate:Date.now(),
        lastConnection:Date.now()
});

const emailDup=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestOne",
    userName:"TestTwo",
    email: "test@testOne",
    phone:"0606654645",
    picture:[
        {
            path:"../../../",
            place:"here",
            uploadDate:Date.now()
        },
        {
            path:"../../../",
            place:"here",uploadDate:Date.now()
        }
    ],
        creationDate:Date.now(),
        lastConnection:Date.now()
});

const phoneDup=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestTwo",
    userName:"TestTwo",
    email: "test@testTwo",
    phone:"0606654654",
    picture:[
        {
            path:"../../../",
            place:"here",
            uploadDate:Date.now()
        },
        {
            path:"../../../",
            place:"here",uploadDate:Date.now()
        }
    ],
        creationDate:Date.now(),
        lastConnection:Date.now()
});
export {userOne,userNameDup,emailDup,phoneDup}
