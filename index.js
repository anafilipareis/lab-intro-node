class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;

  }

  get(pos) {

    if (pos < 0 || pos > this.items.length){
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos];
    }

  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return Math.max.apply(0, this.items);
    }
  }

  min() {
    if (this.items.length === 0){
      throw new Error("Empty SortedList");
    }
    else{
      return Math.min.apply(0, this.items);
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    }
    else{
      this.sum = 0;
      for (let i=0; i<this.items.length; i++){
        this.sum += this.items[i];
      }
      return this.sum;
    }
  }

  avg() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.sum()/this.items.length;
    }
  }
}

module.exports = SortedList;
