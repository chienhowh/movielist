import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private nzMsgSvc: NzMessageService
  ) { }

  /**
   * 加入清單提示訊息
   * @param type 加入清單名稱
   * @param added true==已加入
   */
  handleAddAction(type: string, added: boolean): void {
    added ?
      this.nzMsgSvc.success(`已加入${type}`) :
      this.nzMsgSvc.warning(`已移出${type}`);

  }
}
