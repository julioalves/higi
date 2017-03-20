import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FirebaseService} from "./services/firebase.service";
import {Activity} from "./Activity";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FirebaseService]
})
export class AppComponent implements OnInit {
    title = 'app works!';
    activities: Activity[];
    positions: Position[];
    appState: string;
    activeKey: string;

    ngOnInit(): void {
        this._fbService.getActivities().subscribe(a => {
            this.activities = a;
        });

        this._fbService.getPositions().subscribe(pos => {
            this.positions = pos;
        });

    }

    changeState(state, key)
    {
        console.log('changing state to ' + state + ' - key: ' + key);
        if(key) {
            this.activeKey = key;
        }
        this.appState = state;
    }


    constructor(private _fbService: FirebaseService) {
    }
}
