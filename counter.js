//
const counter = (function () {
  // private filed
  var counter_ = 0;

  //public method
  return {
    increment: function () {
      counter_++;
    },
    decrement: function (name) {
      counter_--;
    },
    getValue: function(){
      return counter_;
    }
  };
})();

counter.decrement();
counter.decrement();
console.log(counter.getValue());


