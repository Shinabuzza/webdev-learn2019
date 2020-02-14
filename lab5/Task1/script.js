var catVasiliy = {
  name: 'Василий',
  birthday: new Date(),
  listOfFears: ['vacuum cleaner', 'beep'],
  listOfEvents: ['ksksks'],
  meow: function() {
    console.log('Meow!!!');
  },
  reaction: function(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      this.meow();
      console.log('Run from here!!!');
    } else if (this.listOfEvents.indexOf(feeling) > -1) {
      console.log('Meow-meow?!');
      console.log('MEOW!!!');
    }
  }
};
