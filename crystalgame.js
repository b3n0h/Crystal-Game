for (let i = 1; i < 4; i++) {
  $('.crystalRow').append(`
      <div class="col-md-4">
      <img class="crystal" id="crystal${i}" data-crystal=${Math.floor(Math.random() * 20) + 1} src="./assets/images/crystal${i}.png" alt="crystal${i}">
      </div>
  `)
}