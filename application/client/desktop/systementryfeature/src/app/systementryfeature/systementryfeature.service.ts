import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SystementryfeatureService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(systemEntryFeature): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/systemEntryFeature', systemEntryFeature);
    }
    GpUpdate(systemEntryFeature): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/systemEntryFeature', systemEntryFeature);
    }
    GpSearch(systemEntryFeature): Observable<any> {
        const temp = [];
 	 	const objectKeyPair = Object.entries(systemEntryFeature);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	return this.http.get(this.sharedService.DESKTOP_API + `/systemEntryFeature/get/search${temp.length > 0 ? `?${temp.join('&')}` : ''}`);
    }
    GpDelete(systemEntryFeatureId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/systemEntryFeature/' + systemEntryFeatureId);
    }
    GpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/systemEntryFeature');
    }
    (): Observable<any> {
        
    }
}