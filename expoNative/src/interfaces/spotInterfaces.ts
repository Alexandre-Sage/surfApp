export declare interface SpotListInterface {
    _id: string;
    spotName: string;
    location: {
        type: string,
        coordinates: Array<string>
    }
}