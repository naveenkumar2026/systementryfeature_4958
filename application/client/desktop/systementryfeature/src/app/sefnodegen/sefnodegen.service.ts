import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SefNodeGenService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(SefNodeGen): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/SefNodeGen', SefNodeGen);
    }
    GpUpdate(SefNodeGen): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/SefNodeGen', SefNodeGen);
    }
    GpSearch(SefNodeGen): Observable<any> {
        const temp = [];
 	 	const objectKeyPair = Object.entries(SefNodeGen);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	return this.http.get(this.sharedService.DESKTOP_API + `/SefNodeGen/get/search${temp.length > 0 ? `?${temp.join('&')}` : ''}`);
    }
    GpDelete(SefNodeGenId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/SefNodeGen/' + SefNodeGenId);
    }
    GpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/SefNodeGen');
    }
    (): Observable<any> {
        
    }
}