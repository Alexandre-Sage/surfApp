const userObject={
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
        creationDate:new Date().toUTCString(),
        lastConnection:new Date().toUTCString()
};

const dupUserObject={
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
        creationDate:new Date().toUTCString(),
        lastConnection:new Date().toUTCString()
};

export {userObject,dupUserObject};
