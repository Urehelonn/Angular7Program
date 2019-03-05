import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

    allowNewServer = false;
    serverCreationStatus = 'No server was created.';
    serverName = 'N/A';
    
    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);
    }
    
    ngOnInit(){}
    
    onCreateServer(){
        this.serverCreationStatus = 'Server created with name: '+this.serverName;
    }
    
    onUpdateServerName(event: any){
        this.serverName = event.target.value;
    }
    
}