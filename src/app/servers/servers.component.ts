import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  // styleUrls: ['./servers.component.css']
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus =  'No Server Was Created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  passwordIsShown = false;
  clickCount = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created.  Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  resetUserName() {
    this.userName = '';
  }
  togglePassword() {
    this.passwordIsShown = !this.passwordIsShown;
    this.clickCount.push(this.clickCount.length + 1);
  }
}
