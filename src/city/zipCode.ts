import {CountryCode} from './countryCode';
export class ZipCode {
    private readonly countryCode: CountryCode;
    private readonly zipCode: number;
    private readonly latitude: number;
    private readonly longitude: number;
    constructor(countryCode: CountryCode ,zipCode: number, latitude: number, longitude: number) {
        this.countryCode = countryCode;
        this.zipCode = zipCode;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public getZipCode(){
        return this.zipCode;
    }

    public getLatitude(){
        return this.latitude;
    }

    public getLongitude(){
        return this.longitude;
    }

    public getAIO(){
        return {
            city: this.zipCode,
            lat: this.latitude,
            lon: this.longitude
        }
    }
}