import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus =  'No Server Was Created';
  serverName = '';
  userName = '';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created.  Name is ' + this.serverName;
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
}
