class Gameboard {
  constructor() {
    // Score shown to users
    this.$guest = document.querySelector("#guest");
    this.$home = document.querySelector("#home");
    this.$guestPoints = this.$guest.querySelector(".points");
    this.$homePoints = this.$home.querySelector(".points");
    // Add scores
    this.addEventListners();
  }

  addEventListners() {
    document.body.addEventListener("click", event => {
      this._addPoints(event);
      this._resetGame(event);
    });
  }

  _addPoints(event) {
    const classes = event.target.className;
    const texts = event.target.innerHTML;
    let numHomePoint = Number(this.$homePoints.innerHTML);
    let numGuestPoint = Number(this.$guestPoints.innerHTML);

    switch(texts) {
      // Add 1
      case "+1":
        if( classes.includes("add-to-home") ) {
          this.$homePoints.innerHTML = numHomePoint + 1;
        } else if ( classes.includes("add-to-guest") ) {
          this.$guestPoints.innerHTML = numGuestPoint + 1;
        }
        break;
      // Add 2
      case "+2":
        if( classes.includes("add-to-home") ) {
          this.$homePoints.innerHTML = numHomePoint + 2;
        } else if ( classes.includes("add-to-guest") ) {
          this.$guestPoints.innerHTML = numGuestPoint + 2;
        }
        break;
      // Add 3
      case "+3":
        if( classes.includes("add-to-home") ) {
          this.$homePoints.innerHTML = numHomePoint + 3;
        } else if ( classes.includes("add-to-guest") ) {
          this.$guestPoints.innerHTML = numGuestPoint + 3;
        }
        break;

      default:
        return null;
    }
  }

  _resetGame(event) {
    // Reset Scores
    const ids = event.target.id; 
    if(ids == "reset-btn") {
      this.$homePoints.innerHTML = 0;
      this.$guestPoints.innerHTML = 0;
    };
  }
}

new Gameboard()

