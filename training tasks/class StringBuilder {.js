class StringBuilder {
 #value;
  
 constructor (baseValue) {
 this.#value = baseValue;
 }
  
  getValue() {
  return this.#value;
  }
  padEnd(str) {
  this.#value += str;
}
  padStart(str) {
  this.#value = str + this.#value;
}
  padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
}
  
}