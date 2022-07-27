import {Session} from "../../../mongo/sessions/sessions";

const newSession= new Session({
    date:Date.now(),
    spot:"Test",
    userName:"Test",
    startTime:Date.now(),
    endTime:Date.now(),
    totalTime:Date.now(),
    swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },
    wind:{
        strength:"Test",
        orientation:"Test"
    },
    comment:"Test"
});

const missingDate=new Session({
    //date:Date.now(),
    spot:"Test",
    userName:"Test",
    startTime:Date.now(),
    endTime:Date.now(),
    totalTime:Date.now(),
    swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },
    wind:{
        strength:"Test",
        orientation:"Test"
    },
    comment:"Test"
});

const missingSpot=new Session({
    date:Date.now(),
    //spot:"Test",
    userName:"Test",
    startTime:Date.now(),
    endTime:Date.now(),
    totalTime:Date.now(),
    swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },
    wind:{
        strength:"Test",
        orientation:"Test"
    },
    comment:"Test"
});

const missingUserName=new Session({
    date:Date.now(),
    spot:"Test",
    userName:"Test",
    startTime:Date.now(),
    endTime:Date.now(),
    totalTime:Date.now(),
    swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },
    wind:{
        strength:"Test",
        orientation:"Test"
    },
    comment:"Test"
});

const missingSwell=new Session({
    date:Date.now(),
    spot:"Test",
    userName:"Test",
    startTime:Date.now(),
    endTime:Date.now(),
    totalTime:Date.now(),
    /*swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },*/
    wind:{
        strength:"Test",
        orientation:"Test"
    },
    comment:"Test"
});

const missingWind=new Session({
    date:Date.now(),
    spot:"Test",
    userName:"Test",
    startTime:Date.now(),
    endTime:Date.now(),
    totalTime:Date.now(),
    swell:{
        size:"Test",
        period:"Test",
        orientation:"Test"
    },
    /*wind:{
        strength:"Test",
        orientation:"Test"
    },*/
    comment:"Test"
});
export {
    newSession,
    missingDate,
    missingSpot,
    missingUserName,
    missingSwell,
    missingWind
}
