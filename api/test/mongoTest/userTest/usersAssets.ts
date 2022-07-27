import {User} from "../../../mongo/users/users";

const userOne=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestOne",
    userName:"TestOne",
    email: "test@testOne",
    phone:"0606654654",
    password:"test",
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
    password:"test",
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
    password:"test",
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
    password:"test",
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

const missingFirstName=new User({
    location:"TestOne",
    name:"TestOne",
    //firstName:"TestTwo",
    userName:"TestTwo",
    email: "test@testTwo",
    phone:"0606654654",
    password:"test",
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
const missingName=new User({
    location:"TestOne",
    //name:"TestOne",
    firstName:"TestTwo",
    userName:"TestTwo",
    email: "test@testTwo",
    phone:"0606654654",
    password:"test",
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
const missingEmail=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestTwo",
    userName:"TestTwo",
    //email: "test@testTwo",
    phone:"0606654654",
    password:"test",
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
const missingPhone=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestTwo",
    userName:"TestTwo",
    email: "test@testTwo",
    //phone:"0606654654",
    password:"test",
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

const missingPassword=new User({
    location:"TestOne",
    name:"TestOne",
    firstName:"TestTwo",
    userName:"TestTwo",
    email: "test@testTwo",
    phone:"0606654654",
    //password:"test",
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
export {
    missingPhone,
    missingEmail,
    missingName,
    missingPassword,
    missingFirstName,
    userOne,
    userNameDup,
    emailDup,
    phoneDup
}
