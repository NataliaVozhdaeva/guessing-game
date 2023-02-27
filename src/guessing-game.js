class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;
  }

  guess() {
    return Math.round((this.maxValue - this.minValue) / 2 + this.minValue);
  }

  lower() {
    this.maxValue = Math.round((this.maxValue - this.minValue) / 2 + this.minValue);
  }

  greater() {
    this.minValue = Math.round((this.maxValue - this.minValue) / 2 + this.minValue);
  }
}

module.exports = GuessingGame;
