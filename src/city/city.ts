import {CountryCode} from "./countryCode";
import {ZipCode} from './zipCode';
export class City {
    private readonly countryCode: CountryCode
    private readonly name: string
    private readonly zipCodes: ZipCode[]

    constructor(countryCode: CountryCode, name: string, ...zipCodes: ZipCode[]) {
        this.countryCode = countryCode;
        this.name = name;
        this.zipCodes = zipCodes
    }

    public getCountryCode(){
        return this.countryCode;
    }

    public getName(){
        return this.name;
    }

    public getZipCodes(){
        return this.zipCodes;
    }

    public getIdentifier(){
        return this.countryCode + "_" + this.name;
    }

}