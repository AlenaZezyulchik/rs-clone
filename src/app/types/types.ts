type DomElements =
  | HTMLElement
  | HTMLBodyElement
  | HTMLDivElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLSpanElement;

export interface IValue {
  value: number;
  volume: string | number;
  src: string;
  duration: number;
  currentTime: number;
}

export default DomElements;
