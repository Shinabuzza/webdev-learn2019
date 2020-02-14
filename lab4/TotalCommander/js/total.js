var totalCommander = {
  currentIndex: 0,
  sideDir: document.querySelectorAll('.left-side')[0].children[0].children,
  count: 0,

  cursorMove: function() {
    for (var i = 0; i < this.sideDir.length; i++) {
      if (i == this.currentIndex) {
        this.sideDir[i].classList.add('selected');
        console.log('oof');
      } else {
        this.sideDir[i].classList.remove('selected');
      }
    }
  },

  clearSelection: function() {
    for (var i = 0; i < this.sideDir.length; i++) {
      this.sideDir[i].classList.remove('selected');
      console.log('aaa!');
    }
  },

  init: function() {
    this.count = this.sideDir.length;

    this.cursorMove();
    console.log(this);

    // arrow button events
    document.addEventListener('keydown', function(event) {
      console.log(this);
      // left button pressed
      if (event.keyCode === 37) {
        this.clearSelection();
        this.currentIndex = 0;
        this.sideDir = document.querySelectorAll('.left-side')[0].children[0].children;
        this.count = this.sideDir.length;
        this.cursorMove();
        console.log("Left tab active");
      }

      // right button pressed
      if (event.keyCode === 39) {
        this.clearSelection();
        this.currentIndex = 0;
        this.sideDir = document.querySelectorAll('.right-side')[0].children[0].children;
        this.count = this.sideDir.length;
        this.cursorMove();
        // console.log("Right tab active");
      }

      // up button pressed
      if (event.keyCode === 38) {
        if (this.currentIndex > 0) {
          this.currentIndex -= 1;
          this.cursorMove();
          // console.log("(" + this.currentIndex + "/" + this.count + ")");
        }
      }

      // down button pressed
      if (event.keyCode === 40) {
        if (this.currentIndex < this.count - 1) {
          this.currentIndex += 1;
          this.cursorMove();
          // console.log("(" + this.currentIndex + "/" + this.count + ")");
        }
      }
    }.bind(this));
  }


};

window.onload = function() {
  totalCommander.init();
}
