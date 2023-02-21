import { Component, ElementRef, ViewChild } from '@angular/core';
import { BotSeriveService } from '../BotService/bot-serive.service';
import { data } from '../BotTypes/bottype';
@Component({
  selector: 'app-bot-table',
  templateUrl: './bot-table.component.html',
  styleUrls: ['./bot-table.component.css'],
})
export class BotTableComponent {
  Apivalue: data[] = [];
  display: boolean = false;
  keys: any;
  botdetail!: data;
  first = 0;
  rows = 10;
  @ViewChild('dt') dt: any;
  bot_name!: string | any ;
  constructor(private Service: BotSeriveService) {}

  ngOnInit() {
    this.Service.GetBotDeatil().subscribe({
      next: (res) => {
        this.Apivalue = res.Data.data;
      },
    });
  }

  customSort(event: any) {
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
  showDialog(val: number) {
    this.display = true;
    this.keys = Object.values(this.Apivalue);
    this.keys.filter((x: data) => {
      if (x.bot_configuration_id === val){
        this.botdetail = x;
      }
    });
  }
  addDialog(){
    
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.Apivalue
      ? this.first === this.Apivalue.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.Apivalue ? this.first === 0 : true;
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
