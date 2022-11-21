import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { COMMON } from '../../../../core/consts/global-constants.const';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomListPageService {

  constructor(
    private fireStore: AngularFirestore
  ) { }


  getCustomlistByID(customlistID: string) {
    const uid = sessionStorage.getItem(COMMON.UID);
    return this.fireStore.collection('users').doc(uid!).collection('customlist').doc(customlistID).collection('movies').snapshotChanges().pipe(map((actions: DocumentData[]) =>
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));

  }
}
