import {Spot} from "../../../mongo/spots/spots";

const newSpot=new Spot({
    userId:"test",
    spotName:"Test",
    country:"Test",
    type:{
            waveType:"Test",
            bottomType:"Test",
        },
    location:{
        type:"Point",
        coordinates:["12","56"]
    },
    orientation:["Test"],
    optimalConditions:[
        {
            wind:{
                strength:"Test",
                orientation:"Test"
            },
            swell:{
                size:"Tets",
                period:"Tets",
                orientation:"Tets"
            }
        }
    ],
    sessions:["Test","Test2"],
    creationDate:Date.now(),
});

const emptyLocationType=new Spot({
    userId:"test",
    spotName:"Test",
    country:"Test",
    type:{
            waveType:"Test",
            bottomType:"Test",
        },
    location:{
        //type:"Point",
        coordinates:["12","56"]
    },
    orientation:["Test"],
    optimalConditions:[
        {
            wind:{
                strength:"Test",
                orientation:"Test"
            },
            swell:{
                size:"Tets",
                period:"Tets",
                orientation:"Tets"
            }
        }
    ],
    sessions:["Test","Test2"],
    creationDate:Date.now(),
});

const emptySpotName=new Spot({
    userId:"test",
    //spotName:"Test",
    country:"Test",
    type:{
            waveType:"Test",
            bottomType:"Test",
        },
    location:{
        //type:"Point",
        coordinates:["12","56"]
    },
    orientation:["Test"],
    optimalConditions:[
        {
            wind:{
                strength:"Test",
                orientation:"Test"
            },
            swell:{
                size:"Tets",
                period:"Tets",
                orientation:"Tets"
            }
        }
    ],
    sessions:["Test","Test2"],
    creationDate:Date.now(),
});

const emptyUserId=new Spot({
    //userId:"test",
    spotName:"Test",
    country:"Test",
    type:{
            waveType:"Test",
            bottomType:"Test",
        },
    location:{
        //type:"Point",
        coordinates:["12","56"]
    },
    orientation:["Test"],
    optimalConditions:[
        {
            wind:{
                strength:"Test",
                orientation:"Test"
            },
            swell:{
                size:"Tets",
                period:"Tets",
                orientation:"Tets"
            }
        }
    ],
    sessions:["Test","Test2"],
    creationDate:Date.now(),
});

const emptyCountry=new Spot({
    userId:"test",
    spotName:"Test",
    //country:"Test",
    type:{
            waveType:"Test",
            bottomType:"Test",
        },
    location:{
        //type:"Point",
        coordinates:["12","56"]
    },
    orientation:["Test"],
    optimalConditions:[
        {
            wind:{
                strength:"Test",
                orientation:"Test"
            },
            swell:{
                size:"Tets",
                period:"Tets",
                orientation:"Tets"
            }
        }
    ],
    sessions:["Test","Test2"],
    creationDate:Date.now(),
});
const emptyWaveType=new Spot({
    userId:"test",
    spotName:"Test",
    country:"Test",
    /*type:[
        {
            waveType:"Test",
            bottomType:"Test",
        }
    ],*/
    location:{
        //type:"Point",
        coordinates:["12","56"]
    },
    orientation:["Test"],
    optimalConditions:[
        {
            wind:{
                strength:"Test",
                orientation:"Test"
            },
            swell:{
                size:"Tets",
                period:"Tets",
                orientation:"Tets"
            }
        }
    ],
    sessions:["Test","Test2"],
    creationDate:Date.now(),
});

export {
    emptyWaveType,
    emptyCountry,
    emptyUserId,
    emptyLocationType,
    emptySpotName,
    newSpot
}
