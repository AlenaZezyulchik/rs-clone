import DomElements from '../types/types';

export function createHtmlElement(str: string): HTMLElement {
  return document.createElement(str);
}

export function appendElement(placeIn: DomElements, element: DomElements): void {
  placeIn.append(element);
}

export function addClasslist(element: DomElements, newClass: string): void {
  element.classList.add(newClass);
}

export function removeClasslist(element: DomElements, newClass: string): void {
  element.classList.remove(newClass);
}

export function toggleClassList(element: DomElements, newClass: string): void {
  element.classList.toggle(newClass);
}

export function addClasslistUseClassName(className: string, newClass: string): void {
  const element = <DomElements>document.querySelector(className);
  element.classList.add(newClass);
}

export function removeClasslistUseClassName(className: string, newClass: string): void {
  const element = <DomElements>document.querySelector(className);
  element.classList.remove(newClass);
}

export function addTextContent(classElement: string, text: string) {
  const btnCreate = <DomElements>document.querySelector(classElement);
  btnCreate.textContent = text;
}

export function createDiv(mainClass: string, parentClass: string): void {
  const div = <HTMLDivElement>createHtmlElement('div');
  const parent = <HTMLElement>document.querySelector(parentClass);
  addClasslist(div, mainClass);
  appendElement(parent, div);
}

/* export async function addAttribute(elClassName: string, valueType: string, type: string) {
  const elementInput = <HTMLElement>document.querySelector(elClassName);
  elementInput.setAttribute(type, valueType);
} */

export function addValueINInput(elClassName: string, val: string) {
  const element = <HTMLInputElement>document.querySelector(elClassName);
  element.value = val;
}

export function createElement(el: string, mainClass: string, parent: string, generalClass?: string): void {
  const element: DomElements = createHtmlElement(el);
  const container = <HTMLElement>document.querySelector(parent);
  addClasslist(element, mainClass);
  if (generalClass) {
    addClasslist(element, generalClass);
  }
  appendElement(container, element);
}

export async function listenerArea(nameArea: string, event: string, callback: (e: Event) => void) {
  const area = <DomElements>document.querySelector(nameArea);
  area.addEventListener(event, callback);
}

export function removeListenerArea(nameArea: string, event: string, callback: (e: Event) => void): void {
  const area = <DomElements>document.querySelector(nameArea);
  area.removeEventListener(event, callback);
}
