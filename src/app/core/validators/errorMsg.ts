import { FormGroup } from '@angular/forms';

export function getFormErrorStr(form: FormGroup, key: string, customMsg?: string): string {
  let msg = '';
  const formCtrl = form?.get(key);
  const errors = formCtrl?.errors;
  if (!form ||
    !formCtrl ||
    !formCtrl.dirty ||
    !errors) {
    msg = '';
  }

  if (errors?.required) {
    return msg = '*此欄位為必填欄位';
  }

  if (errors?.email) {
    msg = 'Invalid';
  }
  if (errors?.minlength) {
    msg = '*密碼長度至少為六個字';
  }

  if (errors && customMsg) {
    msg = customMsg;
  }

  return msg;
}
