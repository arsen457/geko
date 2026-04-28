class Avto {
  constructor(anun) {
    this.anun = anun;
  }
}

class Nkaragrutyun extends Avto {
  constructor(anun, dur, dziauj, tesak) {
    super(anun); 
    this.tesak = tesak;
    this.dziauj = dziauj;
    this.dur = dur;
  }
   speak() {
    console.log(`ays avtoi anuny ${this.anun}e na uni ${this.dur}dur hzorutyuny ${this.dziauj}dziauj e tesaky ${this.tesak} `);
  }
}

let p = new Nkaragrutyun("BMW", "4", "565", "sedan");
p.speak();