'use strict'
var data = {
  players: [
    { id: 1, name: 'player1', school: 'UW', points: 3, assists: 4, rebounds: 5, note: 'he is pretty cool dude' },
    { id: 2, name: 'player2', school: 'UCLA', points: 3, assists: 4, rebounds: 5, note: 'he is pretty cool dude' },
    { id: 3, name: 'player3', school: 'WASU', points: 6, assists: 4, rebounds: 5, note: 'he is pretty cool dude' },
    { id: 4, name: 'player4', school: 'NYU', points: 3, assists: 4, rebounds: 5, note: 'he is pretty cool dude' }
  ]
};

// create div with specifed className that contains a p tag
function createDiv(className, content) {
  let pTag = document.createElement('p');
  let divTag = document.createElement('div');
  pTag.textContent = content;
  divTag.classList.add(className);
  divTag.appendChild(pTag);
  console.log(divTag);
  return divTag;
}

// create note btn
function detailBtn() {
  let btn = document.createElement('a');
  btn.type = 'button';
  btn.className = 'btn btn-dark detailBtn';
  btn.textContent = 'Note';
  return btn;
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
  colDiv.appendChild(createDiv("player-bio", player.school));
  colDiv.appendChild(detailBtn());

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

$('.gridView').append(createCard(data.players[1]));
$('.gridView').append(createCard(data.players[2]));
