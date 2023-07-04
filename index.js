const WebSocket = require('ws');
var id=0;
console.log("hello");

const players = [];

var cards=["images/MsPatil.png","images/MsPathak.png","images/MsParmar.png","images/MsPawar.png",
"images/dagger.png","images/Wrench.png","images/rope.png","images/knife.png","images/candlestick.png",
"images/snipper.png","images/leadpipe.png","images/pistol.png","images/lounge.png","images/study.png","images/hall.png","images/playing.png",
"images/kitchen.png","images/library.png"];
var suspect=["images/MsPatil.png","images/MsPathak.png","images/MsParmar.png","images/MsPawar.png"];
var weapon=["images/dagger.png","images/Wrench.png","images/rope.png","images/knife.png","images/candlestick.png","images/snipper.png","images/leadpipe.png","images/pistol.png"];
var room=["images/lounge.png","images/study.png","images/hall.png","images/playing.png","images/kitchen.png","images/library.png"];
function shuffle(array) 
{
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
  [1,"images/lounge.png"],
  [2,"images/study.png" ],
  [3,"images/hall.png" ],
  [4,"images/playing.png" ],
  [5,"images/kitchen.png" ],
  [6,"images/library.png" ],
]);

const wss = new WebSocket.Server({ port: 8080 });
var player1cards=[];
var player2cards=[];
var player3cards=[];

wss.on('connection', (ws) => 
{
  ws.on('message', (message) => 
  {
    const data=JSON.parse(message);
    if(data.type=="username")
    {
      ws.id=id++;
      players.push(ws);
      
      if(players.length===3)
      {
        shuffle(suspect);
        shuffle(weapon);
        shuffle(room);
        var deck=[];
        for(var i=0;i<3;i++)
        {
          deck.push(suspect[i]);
        }
        for(var i=0;i<7;i++)
        {
          deck.push(weapon[i]);
        }
        for(var i=0;i<5;i++)
        {
          deck.push(room[i]);
        }
        shuffle(deck);
        console.log(players[0].id);
        players[0].send(JSON.stringify({data:0,card1:deck[0],card2:deck[1],card3:deck[2],card4:deck[3],card5:deck[4]}));
        players[1].send(JSON.stringify({data:0,card1:deck[5],card2:deck[6],card3:deck[7],card4:deck[8],card5:deck[9]}));
        players[2].send(JSON.stringify({data:0,card1:deck[10],card2:deck[11],card3:deck[12],card4:deck[13],card5:deck[14]}));

        player1cards[0]=deck[0];
        player1cards[1]=deck[1];
        player1cards[2]=deck[2];
        player1cards[3]=deck[3];
        player1cards[4]=deck[4];

        player2cards[0]=deck[5];
        player2cards[1]=deck[6];
        player2cards[2]=deck[7];
        player2cards[3]=deck[8];
        player2cards[4]=deck[9];

        player3cards[0]=deck[10];
        player3cards[1]=deck[11];
        player3cards[2]=deck[12];
        player3cards[3]=deck[13];
        player3cards[4]=deck[14];

        players[0].send(JSON.stringify({data:1}));
        players[1].send(JSON.stringify({data:2}));
        players[2].send(JSON.stringify({data:3}));
      }
    }
    else if(data.type==="guessfrom1")
    {
      var t=[];
      if(player2cards.includes(rooms.get(data.data[0])) || player2cards.includes(data.data[1]) || player2cards.includes(data.data[2]))
      {
        if(player2cards.includes(rooms.get(data.data[0])))
          t.push(rooms.get(data.data[0]));
        if(player2cards.includes(data.data[1]))
          t.push(data.data[1]);
        if(player2cards.includes(data.data[2]))
          t.push(data.data[2]);
        players[1].send(JSON.stringify({data:12,ans:t}));
      }
      else if(player3cards.includes(rooms.get(data.data[0])) || player3cards.includes(data.data[1]) || player3cards.includes(data.data[2]))
      {
        if(player3cards.includes(rooms.get(data.data[0])))
          t.push(rooms.get(data.data[0]));
        if(player3cards.includes(data.data[1]))
          t.push(data.data[1]);
        if(player3cards.includes(data.data[2]))
          t.push(data.data[2]);
        players[2].send(JSON.stringify({data:13,ans:t}));
      }
      else
      {
        players[0].send(JSON.stringify({data:100}));
      }
    }
    else if(data.type==="guessfrom2")
    {
      var t=[];
      if((player3cards.includes(rooms.get(data.data[0])) || player3cards.includes(data.data[1]) || player3cards.includes(data.data[2])))
      {
        if(player3cards.includes(rooms.get(data.data[0])))
          t.push(rooms.get(data.data[0]));
        if(player3cards.includes(data.data[1]))
          t.push(data.data[1]);
        if(player3cards.includes(data.data[2]))
          t.push(data.data[2]);
        players[2].send(JSON.stringify({data:23,ans:t}));
      }
      else if(player1cards.includes(rooms.get(data.data[0])) || player1cards.includes(data.data[1]) || player1cards.includes(data.data[2]))
      {
        if(player1cards.includes(rooms.get(data.data[0])))
          t.push(rooms.get(data.data[0]));
        if(player1cards.includes(data.data[1]))
          t.push(data.data[1]);
        if(player1cards.includes(data.data[2]))
          t.push(data.data[2]);
        players[0].send(JSON.stringify({data:21,ans:t}));
      }
      else
      {
        players[1].send(JSON.stringify({data:100}));
      }
    }
    else if(data.type==="guessfrom3")
    {
      var t=[];
      if(player1cards.includes(rooms.get(data.data[0])) || player1cards.includes(data.data[1]) || player1cards.includes(data.data[2]))
      {
        if(player1cards.includes(rooms.get(data.data[0])))
          t.push(rooms.get(data.data[0]));
        if(player1cards.includes(data.data[1]))
          t.push(data.data[1]);
        if(player1cards.includes(data.data[2]))
          t.push(data.data[2]);
        players[0].send(JSON.stringify({data:31,ans:t}));
      }
      else if((player2cards.includes(rooms.get(data.data[0])) || player2cards.includes(data.data[1]) || player2cards.includes(data.data[2])))
      {
        if(player2cards.includes(rooms.get(data.data[0])))
          t.push(rooms.get(data.data[0]));
        if(player2cards.includes(data.data[1]))
          t.push(data.data[1]);
        if(player2cards.includes(data.data[2]))
          t.push(data.data[2]);
        players[1].send(JSON.stringify({data:32,ans:t}));
      }
      else
      {
        players[2].send(JSON.stringify({data:100}));
      }
    }
    else if(data.type==="counterguessfrom2for1")
    {
      players[0].send(JSON.stringify({data:122,ans:data.data}));
    }
    else if(data.type==="counterguessfrom3for1")
    {
      players[0].send(JSON.stringify({data:123,ans:data.data}));
    }
    else if(data.type==="counterguessfrom1for2")
    {
      players[1].send(JSON.stringify({data:221,ans:data.data}));
    }
    else if(data.type==="counterguessfrom3for2")
    {
      players[1].send(JSON.stringify({data:223,ans:data.data}));
    }
    else if(data.type==="counterguessfrom1for3")
    {
      players[2].send(JSON.stringify({data:321,ans:data.data}));
    }
    else if(data.type==="counterguessfrom2for3")
    {
      players[2].send(JSON.stringify({data:322,ans:data.data}));
    }
    else if(data.type==="continue1")
    {
      players[0].send(JSON.stringify({data:1}));
      players[1].send(JSON.stringify({data:2}));
      players[2].send(JSON.stringify({data:3}));
    }
    else if(data.type==="continue2")
    {
      players[1].send(JSON.stringify({data:4}));
      players[0].send(JSON.stringify({data:5}));
      players[2].send(JSON.stringify({data:6}));
    }
    else if(data.type==="continue3")
    {
      players[2].send(JSON.stringify({data:7}));
      players[0].send(JSON.stringify({data:8}));
      players[1].send(JSON.stringify({data:9}));
    }
  });
});
