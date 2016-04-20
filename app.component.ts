import { Component, OnInit, NgZone} from 'angular2/core';
import {FacebookService} from './facebook.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/facebook.component.html',
    providers: [FacebookService]
})
export class AppComponent implements OnInit{
	name=""
	isUser = false
  	constructor(
  		private _ngZone: NgZone
		private _facebookService: FacebookService
  	){}

	ngOnInit(){
    		this._facebookService.loadAndInitFBSDK();
	}

	login(){
		var self = this;
		FB.login(function(response) {
		    if (response.authResponse) {
		        FB.api('/me', function(response) {
		          	self._ngZone.run(() => {
				        self.name = response.name;
				        self.isUser = true
			        });
		        });
		    }else{
		        console.log('User cancelled login or did not fully authorize.');
		    }
		});
	}
}
