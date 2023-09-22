let total = 0
let goal = Math.floor(Math.random() * 80) + 20
$('.goal').text(goal)
$('.total').text(total)

for (let i = 1; i < 4; i++) {
  $('.rupeeRow').append(`
      <div class="col-md-4">
      <img class="rupee" id="rupee${i}" data-rupee=${Math.floor(Math.random() * 20) + 1} src="./images/rupee${i}.jpg" alt="rupee${i}">
      </div>
  `)
}

// make each one clickable
$('.rupee').on('click', function () {
  let rupeeValue = $(this).attr('data-rupee')
  total += parseInt(rupeeValue)
  $('.total').text(total)
  gameStatus()
})

//check gameStatus
function gameStatus () {
  if (goal === total) {
    $('#message').text('You Win!')
    setTimeout(function () {
      $('#message').text("Click on a crystal to try and reach the total!")
      reset()
    }, 1000)
  } else if (total > goal) {
    $('#message').text('You Lose!')
    setTimeout(function () {
      $('#message').text("Click on a crystal to try and reach the total!")
      reset()
    }, 1000)
  }
}

// reset
function reset () {
  total = 0
  goal = Math.floor(Math.random() * 80) + 20
  $('.total').text(total)
  $('.goal').text(goal)
  $('#rupee1').attr('data-rupee', Math.floor(Math.random() * 20) +1)
  $('#rupee2').attr('data-rupee', Math.floor(Math.random() * 20) +1)
  $('#rupee3').attr('data-rupee', Math.floor(Math.random() * 20) +1)
}