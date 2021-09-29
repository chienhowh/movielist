
import { FormGroup } from "@angular/forms";

/**
* 驗證表單
* @returns boolean 不合格表單:true
*/
export function verifyForm(form: FormGroup): boolean {
  const formControls = form.controls;
  for (const i in formControls) {
    if (formControls.hasOwnProperty(i)) {
      formControls[i].markAsDirty();
      formControls[i].updateValueAndValidity();
    }
  }
  return form.invalid;
}
