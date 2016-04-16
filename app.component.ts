
import {Component, OnInit} from 'angular2/core';
import {FacebookService} from './facebook/facebook.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/facebook.component.html',
    providers: [FacebookService]
})
export class AppComponent implements OnInit{

  	constructor(
		private _facebookService: FacebookService
  	){}

	ngOnInit(){
    		this._facebookService.loadAndInitFBSDK();
	}

	login(){
		FB.login(function(response) {
		    if (response.authResponse) {
		     console.log('Welcome!  Fetching your information.... ');
		     FB.api('/me', function(response) {
		       console.log('Good to see you, ' + response.name + '.');
		     });
		    } else {
		     console.log('User cancelled login or did not fully authorize.');
		    }
		});
	}
}
