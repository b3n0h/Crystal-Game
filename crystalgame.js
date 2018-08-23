let total = 0


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
})