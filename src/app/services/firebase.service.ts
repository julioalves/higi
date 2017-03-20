import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Activity} from "../Activity";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Injectable()
export class FirebaseService {

    activities: FirebaseListObservable<Activity[]>;
    positions: FirebaseListObservable<Position[]>;

    constructor(private _af: AngularFire) {
    }

    getActivities() {
        this.activities = this._af.database.list('/activities') as
            FirebaseListObservable<Activity[]>;
        return this.activities;
    }

    getPositions() {
        this.positions = this._af.database.list('/positions') as
            FirebaseListObservable<Position[]>;
        return this.positions;
    }

}
