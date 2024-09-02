import { SceneTrial } from '../scene_trial/model';

import * as geolocation from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core' // used to describe at what accuracy the location should get
import { Logger, Severity } from '../utils/logger';


export class SceneTrialLocation extends SceneTrial {
    tolerance: number;

    constructor(config: JSON, gameConfig: JSON, doneCB: (success: boolean) => void) {
        super(config, gameConfig, doneCB);
        this.tolerance = this.GetConfig('tolerance', 10);
    }

    RequestNeededPermissions() {
        geolocation.enableLocationRequest();
    }

    async CheckAnswer(): Promise<boolean> {
        Logger.Log(Severity.Debug, `Acquiring geolocation`);
        let currentLocation = await geolocation.getCurrentLocation({ 
            desiredAccuracy: CoreTypes.Accuracy.high, 
            maximumAge: 5000, 
            timeout: 20000 });

        let location = `${currentLocation.latitude},${currentLocation.longitude}`;
        let distance = SceneTrialLocation.#getDistance(location, this.solution);

        Logger.Log(Severity.Debug, `Current location is (${location})`);
        Logger.Log(Severity.Debug, `Current location is around ${Math.trunc(distance)} metres away from the goal`);
        
        return distance < this.tolerance;
    }

    static #getDistance(coordinateString1: string, coordinateString2: string): number {
        const R = 6371000; // radius of the Earth in meters
    
        const coord1 = this.#parseCoordinates(coordinateString1);
        const coord2 = this.#parseCoordinates(coordinateString2);
        
        const lat1 = coord1.lat;
        const lon1 = coord1.lon;
        const lat2 = coord2.lat;
        const lon2 = coord2.lon;

        const dLat = this.#toRadians(lat2 - lat1);
        const dLon = this.#toRadians(lon2 - lon1);
    
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.#toRadians(lat1)) * Math.cos(this.#toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        const distance = R * c; // distance in meters
        return distance;
    }

    static #parseCoordinates(coordinateString: string): { lat: number, lon: number } {
        const [latStr, lonStr] = coordinateString.split(","); 
        const lat = parseFloat(latStr.trim());
        const lon = parseFloat(lonStr.trim());
        return { lat, lon };
    }

    static #toRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }    
}
