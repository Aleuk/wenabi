import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  constructor(private _http: HttpClient) { }

  public getWishes():Observable<any>{
    return this._http.get<any>(environment.baseUrl + environment.api.wishes)
  }

  public getStats():Observable<any>{
    return this._http.get<any>(environment.baseUrl + environment.api.stats)
  }
}
