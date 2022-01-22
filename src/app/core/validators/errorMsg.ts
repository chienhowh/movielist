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

  if (errors?.msg) {
    msg = errors.msg;
  }

  if (errors && customMsg) {
    msg = customMsg;
  }

  return msg;
}
