import { AbstractControl } from '@angular/forms';

export function minusculoValidator(control: AbstractControl) {
  if (control.value && control.value.length > 0) {
    const texto = control.value.toLowerCase();
    if (texto !== control.value) {
      return { minusculo: true };
    }
  }

  return null;
}
