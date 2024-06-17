const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price > 0) {
        return `Today's special is ${this._meal} for ${this._price}!`;
      } else {
        return "Meal or Price was not set correctly";
      }
    },
  };
  menu.meal = "Chicken Parm";
  menu.price = 10;
  console.log(menu.todaysSpecial);
  