const socket = new WebSocket('ws://localhost:8080');
const uname = document.getElementById('username');
const btn=document.getElementById('playbutton');
var dies=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var cards=["images/MsPatil.png","images/MsPathak.png","images/MsParmar.png","images/MsPawar.png",
"images/dagger.png","images/Wrench.png","images/rope.png","images/knife.png","images/candlestick.png",
"images/snipper.png","images/leadpipe.png","images/pistol.png","images/hall.png","images/playing.png",
"images/kitchen.png","images/library.png"];
var mycards=[]
var r;
var guess=[];
const rooms = new Map([
  [1,"lounge"],
  [2,"study" ],
  [3,"hall" ],
  [4,"playing" ],
  [5,"kitchen" ],
  [6,"library" ],
]);
const defaultborder=document.getElementById("bcard1").style.border;


function weapon(){
    const w1=document.getElementById("pcard5");
    const w2=document.getElementById("pcard6");
    const w3=document.getElementById("pcard7");
    const w4=document.getElementById("pcard8");
    const w5=document.getElementById("pcard9");
    const w6=document.getElementById("pcard10");
    const w7=document.getElementById("pcard11");
    const w8=document.getElementById("pcard12");
    const wb1=document.getElementById("bcard5");
    const wb2=document.getElementById("bcard6");
    const wb3=document.getElementById("bcard7");
    const wb4=document.getElementById("bcard8");
    const wb5=document.getElementById("bcard9");
    const wb6=document.getElementById("bcard10");
    const wb7=document.getElementById("bcard11");
    const wb8=document.getElementById("bcard12");
    w1.addEventListener('click',()=>{
        guess.push(cards[4]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb1.style.border="2px solid black";
        setTimeout(function() {
            wb1.style.border=defaultborder;
          }, 1000);
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w2.addEventListener('click',()=>{
        guess.push(cards[5]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb2.style.border="2px solid black";
        setTimeout(function() {
            wb2.style.border=defaultborder;
        }, 1000);
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w3.addEventListener('click',()=>{
        guess.push(cards[6]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb3.style.border="2px solid black";
        setTimeout(function() {
            wb3.style.border=defaultborder;
        },1000)
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w4.addEventListener('click',()=>{
        guess.push(cards[7]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb4.style.border="2px solid black";
        setTimeout(function() {
            wb4.style.border=defaultborder;
        },1000)
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w5.addEventListener('click',()=>{
        guess.push(cards[8]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb5.style.border="2px solid black";
        setTimeout(function() {
            wb5.style.border=defaultborder;
        },1000)
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w6.addEventListener('click',()=>{
        guess.push(cards[9]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb6.style.border="2px solid black";
        setTimeout(function() {
            wb6.style.border=defaultborder;
        },1000)
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w7.addEventListener('click',()=>{
        guess.push(cards[10]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb7.style.border="2px solid black";
        setTimeout(function() {
            wb7.style.border=defaultborder;
        },1000)
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
    w8.addEventListener('click',()=>{
        guess.push(cards[11]);
        w1.removeEventListener('click',w1);
        w2.removeEventListener('click',w2);
        w3.removeEventListener('click',w3);
        w4.removeEventListener('click',w4);
        w5.removeEventListener('click',w5);
        w6.removeEventListener('click',w6);
        w7.removeEventListener('click',w7);
        w8.removeEventListener('click',w8);
        wb8.style.border="2px solid black";
        setTimeout(function() {
            wb8.style.border=defaultborder;
        },1000)
        socket.send(JSON.stringify({type:"guess",data:guess}));
    })
}
function suspect(){
    const s1=document.getElementById("pcard1");
    const s2=document.getElementById("pcard2");
    const s3=document.getElementById("pcard3");
    const s4=document.getElementById("pcard4");
    const sb1=document.getElementById("bcard1");
    const sb2=document.getElementById("bcard2");
    const sb3=document.getElementById("bcard3");
    const sb4=document.getElementById("bcard4");
    s1.addEventListener('click',()=>{
        guess.push(cards[0]);
        s1.removeEventListener('click',s1);
        s2.removeEventListener('click',s2);
        s3.removeEventListener('click',s3);
        s4.removeEventListener('click',s4);
        sb1.style.border="2px solid black";
        setTimeout(function() {
            sb1.style.border=defaultborder;
          }, 1000);
        weapon();
    })
    s2.addEventListener('click',()=>{
        guess.push(cards[1]);
        s1.removeEventListener('click',s1);
        s2.removeEventListener('click',s2);
        s3.removeEventListener('click',s3);
        s4.removeEventListener('click',s4);
        sb2.style.border="2px solid black";
        setTimeout(function() {
            sb2.style.border=defaultborder;
        },1000)
        weapon();
    })
    s3.addEventListener('click',()=>{
        guess.push(cards[2]);
        s1.removeEventListener('click',s1);
        s2.removeEventListener('click',s2);
        s3.removeEventListener('click',s3);
        s4.removeEventListener('click',s4);
        sb3.style.border="2px solid black";
        setTimeout(function() {
            sb3.style.border=defaultborder;
        }, 1000);
        weapon();
    })
    s4.addEventListener('click',()=>{
        guess.push(cards[3]);
        s1.removeEventListener('click',s1);
        s2.removeEventListener('click',s2);
        s3.removeEventListener('click',s3);
        s4.removeEventListener('click',s4);
        sb4.style.border="2px solid black";
        setTimeout(function() {
            sb4.style.border=defaultborder;
        },1000)
        weapon();
    })
}
function guesscards(){
    const g1=document.getElementById("cguess1");
    const g2=document.getElementById("cguess2");
    const g3=document.getElementById("cguess3");
    g1.addEventListener('click',()=>{
        socket.send(JSON.stringify({type:"counterguess",data:g1.src}))
        g1.removeEventListener('click',g1);
        document.getElementById("popup").style.display="none";
    })
    if(g2)
    {
        g2.addEventListener('click',()=>{
            socket.send(JSON.stringify({type:"counterguess",data:g2.src}))
            g2.removeEventListener('click',g2);
            document.getElementById("popup").style.display="none";
        })
    }
    if(g3)
    {
        g3.addEventListener('click',()=>{
            socket.send(JSON.stringify({type:"counterguess",data:g3.src}))
            g3.removeEventListener('click',g3);
            document.getElementById("popup").style.display="none";
        })
    }
}
socket.addEventListener('message', (event) => {
  var m = JSON.parse(event.data);
  console.log(m);
  if(m.data==3)
  {
    document.getElementById("beforeplaying").style.display="none";
    document.getElementById("playingnow").style.display="block";
    console.log("received");
    document.getElementById("card1").src=m.card1;
    document.getElementById("card2").src=m.card2;
    document.getElementById("card3").src=m.card3;
    document.getElementById("card4").src=m.card4;
    document.getElementById("card5").src=m.card5;
    mycards.push(m.card1);
    mycards.push(m.card2);
    mycards.push(m.card3);
    mycards.push(m.card4);
    mycards.push(m.card5);
  }
  else if(m.data==4)
  {
    document.getElementById("gamemessages").innerText="Your turn, roll the die";
    document.getElementById("dieimage").addEventListener('click',function Clickdie(){
        r=Math.floor(Math.random()*6)+1;
        const el=document.getElementById("dieimage");
        if(el){
            el.src=dies[r];
        }
        guess.push(r);
        el.removeEventListener('click',Clickdie);
        document.getElementById("gamemessages").innerText="You have entered "+rooms.get(r)+" now choose the suspect and suspicious weapon";
        suspect();
    });
  }
  else if(m.data==5 || m.data==6)
  {
    document.getElementById("gamemessages").innerText="Player1 is playing";
  }
  else if(m.data==7)
  {
    document.getElementById("gamemessages").innerText="Your turn, roll the die";
    document.getElementById("dieimage").addEventListener('click',function Clickdie(){
        r=Math.floor(Math.random()*6)+1;
        const el=document.getElementById("dieimage");
        if(el){
            el.src=dies[r];
        }
        guess.push(r);
        el.removeEventListener('click',Clickdie);
        document.getElementById("gamemessages").innerText="You have entered "+rooms.get(r)+" now choose the suspect and suspicious weapon";
        suspect();
    }); 
  }
  else if(m.data==8 || m.data==9){
    document.getElementById("gamemessages").innerText="Player2 is playing";
  }
  else if(m.data==12 || m.data==13)
  {
    const pop=document.getElementById("popup");
    document.getElementById("pmsg").innerHTML="Player 1 has made a guess which you have which one do you want to reveal?";
    console.log(m.ans[0]);
    document.getElementById("cguess1").src=m.ans[0];
    if(m.ans.length==2)
    {
        const box=document.createElement("div");
        box.id="guess2";
        document.getElementById("cardguess").appendChild(box);
        const img=document.createElement("img");
        img.id="cguess2";
        img.src=m.ans[1];
        img.style.width="50px";
        img.style.height="150px";
        document.getElementById("guess2").appendChild(img);
    }
    else if(m.ans.length==3)
    {
        const box1=document.createElement("div");
        box1.id="guess2";
        document.getElementById("cardguess").appendChild(box1);
        const img1=document.createElement("img");
        img1.id="cguess2";
        img1.src=m.ans[1];
        img1.style.width="50px";
        img1.style.height="150px";
        document.getElementById("guess2").appendChild(img1);

        const box2=document.createElement("div");
        box2.id="guess3";
        document.getElementById("cardguess").appendChild(box2);
        const img2=document.createElement("img");
        img2.id="cguess3";
        img2.src=m.ans[2];
        img2.style.width="50px";
        img2.style.height="150px";
        document.getElementById("guess3").appendChild(img2);
    }
    pop.style.display="block";
    guesscards();
  }
  if(m.data==122 || m.data==123)
  {
    const pop=document.getElementById("popup");
    document.getElementById("pmsg").innerHTML="Someone has your guess ";
    document.getElementById("cguess1").src=m.ans;
    pop.style.display="block";

    document.getElementById("cguess1").addEventListener('click',()=>{
        socket.send(JSON.stringify({type:"continue2"}))
        document.getElementById("popup").style.display="none";
    })
  }
  if(m.data==100)
  {
    document.getElementById("gamemessages").innerText="You have guessed it correct game ends";
  }
});


function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  socket.send(JSON.stringify({ type:"username",data:message }));
  messageInput.value = '';
}

function playbtn()
{
    console.log("clicked");
    if(uname.value=="")
    {
      alert("Please enter a name");
      return;
    }
    const user = uname.value;
    socket.send(JSON.stringify({ type:"username",data:user }));
    uname.value = '';
    alert('Hi '+user+' waiting for other players to join');
}
