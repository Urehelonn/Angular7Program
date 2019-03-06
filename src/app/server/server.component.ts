import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    allowNewServer = false;
    serverCreationStatus = 'No server was created.';
    serverName = 'N/A';
    serverCreated = false;
    
    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);
    }
    
    ngOnInit(){}
    
    onCreateServer(){
        this.serverCreationStatus = 'Server created with name: '+this.serverName;
        this.serverCreated=true;
    }
    
    onUpdateServerName(event: any){
        this.serverName = event.target.value;
    }
    
    getBGColour(){
        if(this.serverCreated) return 'green';
        return 'red';
    }
}