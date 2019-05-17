import { Component } from '@angular/core';

import { Platform,Events, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
	

  public cuenta: any = { phone: '982571568',
					    user: { photoURL: '', displayName: 'snavarro', email: 'samuel3283@gmail.com' } };
	 		 
  public appPages: Array<{title: string, url: any, icon: string}>;

  public appPages3 = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'home'
	}
  ];
	public session: any;

  constructor(
    private  router:  Router,
	public menuCtrl: MenuController,
	public events: Events,
	private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
   
	
	
    this.events.subscribe('login:created', (user, time) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log('Bienvenido:', user, 'at', time);
    this.session = JSON.parse(user);
    console.log('JSON:::displayName::::', this.session.displayName);               


	this.appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'home'
	}
  ];
  
    });


	this.initializeApp();
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  gotoProfile() {
	console.log("My Profile");  
  }
  
  logout() {
  	 this.menuCtrl.enable(false); 
     this.router.navigateByUrl('login');
  }
  
  
}
