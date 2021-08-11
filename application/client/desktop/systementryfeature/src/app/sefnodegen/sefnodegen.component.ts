import { Component, OnInit } from '@angular/core';
import { SefNodeGenService } from './SefNodeGen.service';

@Component({
  selector: 'app-SefNodeGen',
  templateUrl: './SefNodeGen.component.html',
  styleUrls: ['./SefNodeGen.component.scss'],
})

export class SefNodeGenComponent implements OnInit {
    queryId: any;
    columnDefs: any = [{ headerName: 'Last_Name', field: 'last_name'  },];
    public SefNodeGen = {
        first_name: '',
        last_name: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private SefNodeGenService: SefNodeGenService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.SefNodeGenService.GpCreate(this.SefNodeGen).subscribe(data => {
            this.SefNodeGen.first_name = ''
 	 	this.SefNodeGen.last_name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.SefNodeGenService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.SefNodeGenService.GpUpdate(this.SefNodeGen).subscribe(data => {
            this.SefNodeGen.first_name = ''
 	 	this.SefNodeGen.last_name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.SefNodeGenService.GpSearch(this.SefNodeGen).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.SefNodeGenService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}