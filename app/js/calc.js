function rangeSlide(value) {
  document.getElementById('rangeValue').innerHTML = value + " м<sup>2</sup>";
  caclCost()
}

function rangeSlideMouseMove(value) {
  document.getElementById('rangeValue').innerHTML = value + " м<sup>2</sup>";
}

function caclCost() {
  var metrs = document.getElementById('slide_bottom').value
  var order = document.getElementById('select_bottom').value
  var order_cost = 0
  if (order == "standart") {
    order_cost = 60
  }
  if (order == "general") {
    order_cost = 100
  }
  if (order == "vip") {
    order_cost = 15000
  }
  if (order == "repairs") {
    order_cost = 120
  }
  if (order == "window") {
    order_cost = 350
  }
  if (order == "ozon") {
    order_cost = 2500
  }
  var cost = document.getElementById('cost').innerHTML = metrs*order_cost

  var tcount = cost;
  $("#cost").animateNumber({ number: tcount,
    easing: 'easeInQuad',
    "font-size": "40px"},
    500);

}
