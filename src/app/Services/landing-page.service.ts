import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_PREFIX = "https://api.spaceXdata.com/v3/launches";

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) { }


  loadWithoutFilters(): Observable<any> {
    return this.http.get(`${API_PREFIX}?limit=`+100, {});
  }

  yearFilters(val1, val2, val3): Observable<any> {
    return this.http.get(`${API_PREFIX}?limit=100&launch_success=`+val2+'&land_success='+val3+'&launch_year='+val1, {});
  }

  launchFilters(val1, val2, val3): Observable<any> {
    return this.http.get(`${API_PREFIX}?limit=100&launch_success=`+val2+'&land_success='+val3+'&launch_year='+val1, {});
  }


  landingFilters(val1, val2, val3): Observable<any> {
    return this.http.get(`${API_PREFIX}?limit=100&launch_success=`+val2+'&land_success='+val3+'&launch_year='+val1, {});
  }

}
