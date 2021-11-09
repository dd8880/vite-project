var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



/* get TYPE */

fetch("https://kea2sem-1270.restdb.io/rest/game-info ", {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "602f53d35ad3610fb5bb638d",
            "cache-control": "no-cache",
        }
   })
  .then(res => res.json())
  .then(data => {
      console.log(data);
    

    const gameInfo_types = data.filter(d => d.category == 'type');
    console.log(gameInfo_types);
    gameInfo_types.forEach(t=>{
        document.querySelector('.game-info-types').innerHTML += '<label><input class="game-info-type" type="checkbox" data-id = "'+t._id+'"  data-count = "'+t.count+'" data-name = "'+t.name+'"/>'+t.name+'</label>';
    });
  });

  const regbtn = document.querySelector('.regbtn');


 regbtn.addEventListener('click', () => {
 const gameInfo_types =  document.getElementsByClassName('game-info-type');
 console.log(gameInfo_types);


for(i=0;i<gameInfo_types.length;i++){
    if (gameInfo_types[i].checked) {
        updateGameInfo (gameInfo_types[i].dataset.id,{
            'count':parseInt(gameInfo_types[i].dataset.count)+1,
        });
    }
} /* console.log(gameInfo_types_selected); */

  });



/* get GAME*/


fetch("https://kea2sem-1270.restdb.io/rest/game-info ", {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "602f53d35ad3610fb5bb638d",
            "cache-control": "no-cache",
        }
   })
  .then(res => res.json())
  .then(data => {
      console.log(data);
    

    const gameInfo_games = data.filter(d => d.category == 'game');
    console.log(gameInfo_games);
    gameInfo_games.forEach(t=>{
        document.querySelector('.game-info-games').innerHTML += '<label><input class="game-info-game" type="checkbox" data-id = "'+t._id+'"  data-count = "'+t.count+'" data-name = "'+t.name+'"/>'+t.name+'</label>';
    });
  });

  


 regbtn.addEventListener('click', () => {
 const gameInfo_games =  document.getElementsByClassName('game-info-game');
 console.log(gameInfo_games);


for(i=0;i<gameInfo_games.length;i++){
    if (gameInfo_games[i].checked) {
        updateGameInfo (gameInfo_games[i].dataset.id,{
            'count':parseInt(gameInfo_games[i].dataset.count)+1,
        });
    }
} /* console.log(gameInfo_types_selected); */

  });


/* get AREA*/


fetch("https://kea2sem-1270.restdb.io/rest/game-info ", {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "602f53d35ad3610fb5bb638d",
            "cache-control": "no-cache",
        }
   })
  .then(res => res.json())
  .then(data => {
      console.log(data);
    

    const gameInfo_areas = data.filter(d => d.category == 'area');
    console.log(gameInfo_areas);
    gameInfo_areas.forEach(t=>{
        document.querySelector('.game-info-areas').innerHTML += '<label><input class="game-info-area" type="checkbox" data-id = "'+t._id+'"  data-count = "'+t.count+'" data-name = "'+t.name+'"/>'+t.name+'</label>';
    });
  });

  


 regbtn.addEventListener('click', () => {
 const gameInfo_areas =  document.getElementsByClassName('game-info-area');
 console.log(gameInfo_areas);


for(i=0;i<gameInfo_areas.length;i++){
    if (gameInfo_areas[i].checked) {
        updateGameInfo (gameInfo_areas[i].dataset.id,{
            'count':parseInt(gameInfo_areas[i].dataset.count)+1,
        });
    }
} 

  });














/* PUT */

function updateGameInfo(id,data) {
    

    fetch("https://kea2sem-1270.restdb.io/rest/game-info/"+id, {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "602f53d35ad3610fb5bb638d",
            "cache-control": "no-cache",
        },
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(t => console.log(t));

    
}