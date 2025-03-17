import { AbstractControl } from '@angular/forms';

export function forbiddenWords(control: AbstractControl) {
  const controlValue = control.value as string;

  const words = ['patata', 'dinero'];

  for (const word of words) {
    if (controlValue.includes(word)) {
      return { valid: false };
    }
  }
  return null;
}
