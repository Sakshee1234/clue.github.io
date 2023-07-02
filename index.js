const WebSocket = require('ws');
var id=0;
console.log("hello");

const players = [];

var cards=["images/MsPatil.png","images/MsPathak.png","images/MsParmar.png","images/MsPawar.png",
"images/rope.png","images/snipper.png","images/Wrench.png","images/leadpipe.png","images/knife.png",
"images/candlestick.png","images/lounge.png","images/study.png","images/hall.png","images/playing.png",
"images/kitchen.png","images/library.png"];
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const rooms = new Map([
    [1,"images/lounge"],
    [2,"images/study" ],
    [3,"images/hall" ],
    [4,"images/playing" ],
    [5,"images/kitchen" ],
    [6,"images/library" ],
  ]);

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', (ws) => {

  ws.on('message', (message) => {
    const data=JSON.parse(message);
    if(data.type=="username"){
        ws.id=id++;
        players[ws.id]=ws;
        
        if(players.length>=3)
        {
            shuffle(cards);
            console.log(players[0].id);
            players[0].send(JSON.stringify({data:3,card1:cards[0],card2:cards[1],card3:cards[2],card4:cards[3],card5:cards[4]}));
            players[1].send(JSON.stringify({data:3,card1:cards[5],card2:cards[6],card3:cards[7],card4:cards[8],card5:cards[9]}));
            players[2].send(JSON.stringify({data:3,card1:cards[10],card2:cards[11],card3:cards[12],card4:cards[13],card5:cards[14]}));
            ans={};
            ans[0]=cards[15];
            ans[1]=cards[16];
            ans[2]=cards[17];

            player1cards=[];
            player1cards[0]=cards[0];
            player1cards[1]=cards[1];
            player1cards[2]=cards[2];
            player1cards[3]=cards[3];
            player1cards[4]=cards[4];

            player2cards=[];
            player2cards[0]=cards[5];
            player2cards[1]=cards[6];
            player2cards[2]=cards[7];
            player2cards[3]=cards[8];
            player2cards[4]=cards[9];

            player3cards=[];
            player3cards[0]=cards[10];
            player3cards[1]=cards[11];
            player3cards[2]=cards[12];
            player3cards[3]=cards[13];
            player3cards[4]=cards[14];
            play();
        }
    }


  });
});

function play()
{

    players[0].send(JSON.stringify({data:4}));
    players[1].send(JSON.stringify({data:5}));
    players[2].send(JSON.stringify({data:6}));
    players[0].on('message', (message) => {
       var temp=JSON.parse(message);
       console.log(temp);
       if(temp.type=="guess")
       {
          if(player2cards.includes(rooms.get(temp.data[0])) ||player2cards.includes(temp.data[1])|| player2cards.includes(temp.data[2]))
          {
            var t=[];
            if(player2cards.includes(rooms.get(temp.data[0])))
            t.push(rooms.get(temp.data[0]));
            if(player2cards.includes(temp.data[1]))
            t.push(temp.data[1]);
            if(player2cards.includes(temp.data[2]))
            t.push(temp.data[2]);
            players[1].send(JSON.stringify({data:12,ans:t}));
            players[1].on('message', (message2) => {
              var counterguess=JSON.parse(message2);
              if(counterguess.type=="counterguess")
              {
                players[0].send(JSON.stringify({data:122,ans:counterguess.data}));
              }
            })
          }
          else if(player3cards.includes(rooms.get(temp.data[0])) ||player3cards.includes(temp.data[1])|| player3cards.includes(temp.data[2]))
          {
            var t=[];
            if(player3cards.includes(rooms.get(temp.data[0])))
            t.push(rooms.get(temp.data[0]));
            if(player3cards.includes(temp.data[1]))
            t.push(temp.data[1]);
            if(player3cards.includes(temp.data[2]))
            t.push(temp.data[2]);
            players[2].send(JSON.stringify({data:13,ans:t}));
            players[2].on('message', (message2) => {
              var counterguess=JSON.parse(message2);
              if(counterguess.type=="counterguess")
              {
                players[0].send(JSON.stringify({data:123,ans:counterguess.data}));
              }
            })
          }
          else
          {
            players[0].send(JSON.stringify({data:100}));
          }
       }
       else if(temp.type=="continue2")//player2 turn
       {
          players[1].send(JSON.stringify({data:7}));
          players[2].send(JSON.stringify({data:8}));
          players[0].send(JSON.stringify({data:9}));
          players[1].on('message', (message3) => {
            var temp2=JSON.parse(message3);
            if(temp2.type=="guess"){
              if(player1cards.includes(rooms.get(temp2.data[0])) || player1cards.includes(temp2.data[1]) || player1cards.includes(temp2.data[2]))
              {
                var t=[];
                if(player1cards.includes(rooms.get(temp2.data[0])))
                t.push(rooms.get(temp2.data[0]));
                if(player1cards.includes(temp2.data[1]))
                t.push(temp2.data[1]);
                if(player2cards.includes(temp2.data[2]))
                t.push(temp2.data[2]);
                players[0].send(JSON.stringify({data:12,ans:t}));
                players[0].on('message', (message2) => {
                  var counterguess=JSON.parse(message2);
                  if(counterguess.type=="counterguess")
                  {
                    players[1].send(JSON.stringify({data:122,ans:counterguess.data}));
                  }
                })
              }
              else if(player3cards.includes(rooms.get(temp2.data[0])) || player3cards.includes(temp2.data[1]) || player3cards.includes(temp2.data[2]))
              {
                var t=[];
                if(player3cards.includes(rooms.get(temp2.data[0])))
                t.push(rooms.get(temp2.data[0]));
                if(player3cards.includes(temp2.data[1]))
                t.push(temp2.data[1]);
                if(player3cards.includes(temp2.data[2]))
                t.push(temp2.data[2]);
                players[2].send(JSON.stringify({data:13,ans:t}));
                players[2].on('message', (message2) => {
                  var counterguess=JSON.parse(message2);
                  if(counterguess.type=="counterguess")
                  {
                    players[1].send(JSON.stringify({data:133,ans:counterguess.data}));
                  }
                })
              }
              else{
                players[1].send(JSON.stringify({data:100}));
              }

            }
            else if(temp2.type=="continue2")
            {
                players[2].send(JSON.stringify({data:4}));
                players[0].send(JSON.stringify({data:5}));
                players[1].send(JSON.stringify({data:6}));
                players[2].on('message', (message3) => {
                  var temp3=JSON.parse(message3);
                  if(temp3.type=="guess"){
                    if(player1cards.includes(rooms.get(temp3.data[0])) || player1cards.includes(temp3.data[1]) || player1cards.includes(temp3.data[2]))
                    {
                      var t=[];
                      if(player1cards.includes(rooms.get(temp3.data[0])))
                      t.push(rooms.get(temp3.data[0]));
                      if(player1cards.includes(temp3.data[1]))
                      t.push(temp3.data[1]);
                      if(player1cards.includes(temp3.data[2]))
                      t.push(temp3.data[2]);
                      players[0].send(JSON.stringify({data:12,ans:t}));
                      players[0].on('message', (message2) => {
                        var counterguess=JSON.parse(message2);
                        if(counterguess.type=="counterguess")
                        {
                          players[2].send(JSON.stringify({data:122,ans:counterguess.data}));
                        }
                      })
                    }
                    else if(player2cards.includes(rooms.get(temp3.data[0])) || player2cards.includes(temp3.data[1]) || player2cards.includes(temp3.data[2]))
                    {
                      var t=[];
                      if(player2cards.includes(rooms.get(temp3.data[0])))
                      t.push(rooms.get(temp3.data[0]));
                      if(player2cards.includes(temp3.data[1]))
                      t.push(temp3.data[1]);
                      if(player2cards.includes(temp3.data[2]))
                      t.push(temp3.data[2]);
                      players[1].send(JSON.stringify({data:13,ans:t}));
                      players[1].on('message', (message2) => {
                        var counterguess=JSON.parse(message2);
                        if(counterguess.type=="counterguess")
                        {
                          players[2].send(JSON.stringify({data:133,ans:counterguess.data}));
                        }
                      })
                    }
                    else{
                      players[2].send(JSON.stringify({data:100}));
                    }
                  }
                  else if(temp3.type=="continue2")
                  {
                    play();
                  }
                })
            }
          })

       }
    })
}

