type DomElements =
  | HTMLElement
  | HTMLBodyElement
  | HTMLDivElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLSpanElement
  | HTMLOptionElement
  | HTMLSelectElement;

export interface IValue {
  value: number;
  volume: string | number;
  src: string;
  duration: number;
  currentTime: number;
}

export default DomElements;
