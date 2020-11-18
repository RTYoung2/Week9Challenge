`use strict`;

function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.exercise = function () {
    console.log(`Running is lame, don't lie to yourself, biking is better`);
  };
  this.fetchJob = function () {
    console.log(`${this.name} is a ${this.job}`);
  };
  this.test = sup;
}

function Programmer(name, job, age, languages) {
  Person.call(this, name, job, age);
  this.languages = languages;
  this.busy = true;
  this.completeTask = function () {
    this.busy = false;
  };
  this.acceptNewtask = function () {
    this.busy = true;
  };
  this.offerNewTask = function () {
    console.log(
      this.busy
        ? `Unfortunately our Boi ${this.name} is busy`
        : `Our Boi ${this.name} is free give him something to do`
    );
  };
  this.learnLanguage = function (newLanguage) {
    this.languages.push(newLanguage);
  };
  this.listLanguages = function () {
    console.log(this.languages.join());
  };
}

// const rob2 = new Programmer(`rob`, `student`, `22`, [`html`, `css`, `JS`]);
// rob2.listLanguages();
// rob2.learnLanguage(`C#`);
// rob2.listLanguages();
// rob2.offerNewTask();
// rob2.completeTask();
// rob2.offerNewTask();

const rob3 = new Programmer(`timmy`, `teacher`, `23`, [
  `html`,
  `pythton`,
  `c+`,
]);

//submit, catch up on videos, array.join, perosn.call --> constructor inheritance
// const programmer = new Person(``);

// const rob = new Person(`rob`);
// console.log(rob.test());
// to make a new entry you do  = newentry
// example name.newname = property
