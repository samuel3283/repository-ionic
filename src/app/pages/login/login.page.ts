import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
//import { Events } from 'ionic-angular';
import { Events, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public session: any = { phone: '982571568', displayName: 'snavarro' };
	
	
  constructor(private  router:  Router,
  public menuCtrl: MenuController,
  public events: Events
  ) { 
  }
	
  ngOnInit() {
  }


  login(form){
	 console.log('LoginOK')
     this.events.publish('login:created', JSON.stringify(this.session), Date.now());
 	 this.menuCtrl.enable(true);
     this.router.navigateByUrl('home');

  }
	
}
