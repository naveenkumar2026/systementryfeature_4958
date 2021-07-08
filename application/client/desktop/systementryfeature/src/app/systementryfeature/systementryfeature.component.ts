import { Component, OnInit } from '@angular/core';
import { SystementryfeatureService } from './systementryfeature.service';

@Component({
  selector: 'app-systementryfeature',
  templateUrl: './systementryfeature.component.html',
  styleUrls: ['./systementryfeature.component.scss'],
})

export class SystementryfeatureComponent implements OnInit {
    queryId: any;
    columnDefs: any = [{ headerName: 'Last_Name', field: 'last_name'  },];
    public systemEntryFeature = {
        first_name: '',
        last_name: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private systementryfeatureService: SystementryfeatureService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.systementryfeatureService.GpCreate(this.systemEntryFeature).subscribe(data => {
            this.systemEntryFeature.first_name = ''
 	 	this.systemEntryFeature.last_name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.systementryfeatureService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.systementryfeatureService.GpUpdate(this.systemEntryFeature).subscribe(data => {
            this.systemEntryFeature.first_name = ''
 	 	this.systemEntryFeature.last_name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.systementryfeatureService.GpSearch(this.systemEntryFeature).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.systementryfeatureService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}