
import { FormGroup } from "@angular/forms";

/**
 * 驗證表單
 */
export function verifyFormValid(form: FormGroup): boolean {
  for (const i of Object.values(form.controls)) {
    i.markAsDirty();
    i.updateValueAndValidity();
  }
  return !form.invalid;
}
