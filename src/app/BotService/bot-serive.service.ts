import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bottype } from '../BotTypes/bottype';

@Injectable({
  providedIn: 'root'
})
export class BotSeriveService {

  constructor(private http:HttpClient) { }

  GetBotDeatil():Observable<Bottype>{
    return this.http.get<Bottype>("http://dev.mobito.co.in/api/on-board-manager//botdetail/list/1787")
  }
}
