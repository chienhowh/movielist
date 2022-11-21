import { CustomlistService } from './../../../../core/services/customlist.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { from, Subject } from 'rxjs';
import { map, mergeMap, takeUntil, tap, toArray } from 'rxjs/operators';
import { ICustomList, IMovieInfo } from 'src/app/core/interfaces/movie.interface';
import { ListHandleService } from 'src/app/core/services/list-handle.service';
import * as firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customlist-modal',
  templateUrl: './add-customlist-modal.component.html',
  styleUrls: ['./add-customlist-modal.component.scss']
})
export class AddCustomlistModalComponent implements OnInit, OnDestroy {
  @Input() movie?: IMovieInfo;
  ROUTING_PATH = ROUTING_PATH;
  ngUnsubscribe$ = new Subject();
  /** 客制清單 */
  customList: ICustomList[] = [];
  constructor(
    private listHandleSvc: ListHandleService,
    private nzMsgSvc: NzMessageService,
    private router: Router,
    private nzModalRef: NzModalRef,
    private customlistSvc: CustomlistService
  ) { }

  ngOnInit(): void {
    this.getCustomList();
  }

  /** 取得所有客制清單 */
  getCustomList(): void {
    this.customlistSvc.getCustomlist().pipe(
      takeUntil(this.ngUnsubscribe$),
      tap(r => console.log(r)))
      .subscribe((lists) => {
        from(lists).pipe(
          mergeMap(li => {
            return this.inCustomList(li, li.id, this.movie.id.toString());
          }),
          toArray()
        ).subscribe(res => {
          this.customList = res as any
          console.log('resss', res)
        });
      });
  }

  /** 電影是否在客制清單裡 */
  inCustomList(list: ICustomList, listId: string, movieId: string) {
    return this.customlistSvc.getCustomlistMovieDeatailById(listId, movieId).pipe(
      tap(res => console.log('all customlist::', res)),
      map(r => ({ ...list, inList: r ? true : false })));
  }

  toggleCustom(item: ICustomList) {
    if (item.inList) {
      this.deleteFromCustom(item);
    } else {
      this.addToCustom(item);
    }
  }

  /** 加到客製清單 */
  addToCustom(listInfo: ICustomList): void {
    if (!listInfo) { return; }
    const sendData = {
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      title: this.movie.title,
      id: this.movie.id.toString(),
      isWatched: false
    };
    this.customlistSvc.addToCustomeList(listInfo.id, sendData).subscribe(() => {
      this.getCustomList();
      this.nzMsgSvc.success(`已加入${listInfo.subject}`);
    });
  }

  deleteFromCustom(list: ICustomList) {
    this.customlistSvc.removeFromCustomList(list.id, this.movie.id.toString()).then(() => {
      this.getCustomList();
      this.nzMsgSvc.success(`已移出${list.subject}`);
    });
  }

  showListAddingPage() {
    this.nzModalRef.close();
    this.router.navigate([ROUTING_PATH.HOME, ROUTING_PATH.LIST_ADDING]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.unsubscribe();
  }

}
