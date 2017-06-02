import { Component, OnInit } from '@angular/core';
import { CallApiService }  from '../call-api.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DialogService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    title = 'Infos news';
    constructor(private callApi: CallApiService, private dialogService:DialogService) {}
    sources;
       showConfirm() {
            let disposable = this.dialogService.addDialog(ConfirmComponent, {
                title:'Choisir sa collection',
                message:'Are you sure'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    /*if(isConfirmed) {
                        alert('accepted');
                    }
                    else {
                        alert('declined');
                    }*/
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
          /*  setTimeout(()=>{
                disposable.unsubscribe();
            },10000);*/
        }


    ngOnInit() {
        this.callApi.getSourcesNews().then(data => {
            // console.log('data', data.sources);
            this.sources = data.sources;
        });


    }

}
