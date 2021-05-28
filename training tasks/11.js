/*
Task
Create a class HallOfFame(size, players) with list property and add method.
list give list of size players in the form "Name: score", sorted by score in descending order and name in ascending order in case of same score.
add( player ) lets. . . add a player to the list.
a player is a 2-items array : [name, score]
if score is lesser than last player of the list then player is not added.
if name is yet in list, score of this player is updated if new score is better than previous and other players may stay in list.
if a new player is added or a score is changed the list should be re-sorted
at last, add method return the object itself (to permit chaining methods).
HallOfFame constructor may have 2 arguments : size and players.
size (default 5) defines the maximum size of the list (listcan't take more than size players)
players if provided, should be added to the list.
If no players (or not enough players) are provided "empty slots" should returns empty strings.
*/

class HallOfFame{
  constructor(size = 5, players = []){
    this.size = size;
    this.players = players;
    this.list = [];
    for (let i = 0; i < this.size; i += 1) {
      this.list.push('');
    }
    makeList.call(this, size, players);
    function  makeList(size, players) {  
    players.forEach(element => {
      this.add(element)
    });
    }
  }
  add(player) {
    let lastElem = this.list[this.list.length - 1];
    if (lastElem){lastElem = lastElem.split(': ');}
    if (lastElem && (lastElem[1] > player[1])) {return this}
    let arrList = this.arrToStrToggle(this.list);
    let condition = arrList.some((elem, index) => {
      if ((elem[0] === player[0]) ) {
        arrList[index][1] = player[1] > arrList[index][1] ? player[1] : arrList[index][1];
        return true
      }
    });
    if (!condition){arrList.push(player);
      }
    arrList.sort((a, b) => {
        if (a[1] === b[1]) {return a[0].localeCompare(b[0])}
        return (b[1] - a[1])
    });
    this.list = this.arrToStrToggle(arrList.slice(0, this.size));
    return this
  };
  arrToStrToggle(list) {
    if (typeof(list[0]) === 'string') {
          return [...list].map(item => {
            if (item ==='') { return ["", 0] }
                let elemArr = item.split(': ');
                elemArr[1] = Number(elemArr[1]);
                return elemArr
            });
        } else {
      return [...list].map(item => {
        if (item[0] === '') {
          return ''
        }
        return item.join(': ');
      })
        }
    }
}


var top5 = new HallOfFame();
top5.add(["A", 4]).add(["E", 3]).add(["I", 1]);
console.log(top5.list)
top5.add(["S",5]).add(["T",7])
top5.add(["S", 5]).add(["T", 7])
top5.add(["A", 3]).list
top5.add(["T", 6]).list
console.log(top5.list)
