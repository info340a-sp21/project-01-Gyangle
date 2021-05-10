'use strict'
fetch('src/players.json')
  .then(res => res.json())
  .then(function (data) {
    startRender();

    function startRender() {
      for (let i = 0; i < data.players.length; i++) {
        $('.gridView').append(createCard(data.players[i]));
      }
    }

    // create div with specifed className that contains a p tag
    function createDiv(className, content) {
      let pTag = document.createElement('p');
      let divTag = document.createElement('div');
      pTag.textContent = content;
      divTag.classList.add(className);
      divTag.appendChild(pTag);
      // console.log(divTag);
      return divTag;
    }

    // create note btn
    function detailBtn(id) {
      let btn = document.createElement('a');
      btn.type = 'button';
      btn.className = 'btn btn-secondary detailBtn';
      btn.textContent = 'Note';
      btn.id = id;
      btn.addEventListener('click', showNote);
      return btn;
    }

    // event when the note btn was clicked
    function showNote() {
      $('#note').empty();
      let id = this.id;
      let note = createDiv("noteDiv", data.players[id - 1].note)
      $('#note').append(note);
    }

    // create li elements for ul
    function createLI(title, content) {
      let li = document.createElement('li');
      li.textContent = title + ": " + content;
      return li;
    }

    // create ul
    function createUlList(player) {
      let ulTag = document.createElement('ul');
      ulTag.appendChild(createLI('Points', player.points));
      ulTag.appendChild(createLI('Assists', player.assists));
      ulTag.appendChild(createLI('Rebounds', player.rebounds));

      return ulTag;
    }


    // create a single card given a player's info
    function createCard(player) {
      // create first div
      let colDiv = document.createElement('div');
      colDiv.classList.add('col-sm');
      colDiv.appendChild(createDiv("player-name", player.name));
      colDiv.appendChild(createDiv("player-bio", 'From: ' + player.school));
      colDiv.appendChild(detailBtn(player.id));

      // create second div
      let infoDiv = createDiv('player-info', 'Player Statistics:')
      infoDiv.appendChild(createUlList(player));

      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      cardBody.appendChild(colDiv);
      cardBody.appendChild(infoDiv);
      // console.log(cardBody);
      return cardBody;
    }

    // add an card from form
    function addCard() {
      let player = {};
      player.id = data.players.length + 1;
      player.name = document.getElementById("playername").value;
      player.school = document.getElementById("playerschool").value;
      player.points = document.getElementById("ppg").value;
      player.assists = document.getElementById("apg").value;
      player.rebounds = document.getElementById("rpg").value;
      player.note = document.getElementById("playernote").value;
      data.players.push(player);
      $('.gridView').append(createCard(player));
    }

    // display warning on adding player
    function warn() {
      alert("Successfully added player.")
    }

    let submit = document.querySelector("form");
    submit.addEventListener('submit', function (e) {
      e.preventDefault();
      addCard();
      warn();
      console.log(data.players);
    });
  })
  .catch(function (e) {
        // create div with specifed className that contains a p tag
        function createDiv(className, content) {
          let pTag = document.createElement('p');
          let divTag = document.createElement('div');
          pTag.textContent = content;
          divTag.classList.add(className);
          divTag.appendChild(pTag);
          // console.log(divTag);
          return divTag;
        }
    let note = createDiv("noteDiv", "can't load data")
    $('#note').append(note)
  }
  );


