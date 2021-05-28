class Guest {
  // Аналог функции-конструктора
  
  roomNumber = 22;

  // Аналог Guest.prototype.getFullInfo
  getFullInfo() {
    console.log(`
      Guest ${this.name}
      Room number ${this.roomNumber}
    `);
  }
}

const mango = new Guest('Mango', 26);

console.log(Guest.prototype);

// Guest Mango
// Room number 26