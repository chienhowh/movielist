// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  DEFAULT_IP: 'https://api.themoviedb.org/3',
  DB_IP: 'https://movieback.duckdns.org',
  FB_IP: 'https://react-meetup-aff59-default-rtdb.asia-southeast1.firebasedatabase.app',
  GAPI_CLIENT_ID: '564087547062-3r0maars7kgpun3fonkjjpv616e88n95.apps.googleusercontent.com',
  firebase: {
    apiKey: 'AIzaSyDfXBFy3P1IPBncApDTKUBLHk6B9tiQwVQ',
    authDomain: 'movieback-25655.firebaseapp.com',
    databaseURL: 'https://movieback-25655-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'movieback-25655',
    storageBucket: 'movieback-25655.appspot.com',
    messagingSenderId: '703003658373',
    appId: '1:703003658373:web:27acaf36f5d8a1082481ec',
    measurementId: 'G-05BMZ9HPWF'
  }

  // DB_IP: 'localhost:80'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
