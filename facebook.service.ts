import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FacebookService {

  constructor() {
    if (!window.fbAsyncInit) {
      console.log('define');
      window.fbAsyncInit = function() {
        FB.init({
          appId: "your-app-id",
          xfbml: true,
          version: 'v2.5'
        });
      };
    }
  }

  loadAndInitFBSDK():Observable{
    var js,
      id = 'facebook-jssdk',
      ref = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) {
      return;
    }

    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);
  }

}
