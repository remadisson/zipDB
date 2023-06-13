import {ZipCode} from "./zipCode";
import {City} from "./city";

class cityManager{
    private static readonly cityCache: Map<string, City> = new Map<string, City>();
    constructor(){
    }

    public getCityCache(){
        return cityManager.cityCache;
    }

    public queryZip(countryCode:string, zip: number){

    }

    public queryCity(countryCode: string, zip: number){

    }

    public queryCoordinates(countryCode: string, lat: number, lon: number){

    }

}