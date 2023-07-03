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

const s1=document.getElementById("pcard1");
const s2=document.getElementById("pcard2");
const s3=document.getElementById("pcard3");
const s4=document.getElementById("pcard4");
const sb1=document.getElementById("bcard1");
const sb2=document.getElementById("bcard2");
const sb3=document.getElementById("bcard3");
const sb4=document.getElementById("bcard4");


function guesscards(counterguessfrom){
    const g1=document.getElementById("cguess1");
    const g2=document.getElementById("cguess2");
    const g3=document.getElementById("cguess3");
    g1.addEventListener('click',()=>{
        socket.send(JSON.stringify({type:counterguessfrom,data:g1.src}))
        g1.removeEventListener('click',g1);
        document.getElementById("popup").style.display="none";
        if(g2)
        {
            document.getElementById("cardguess").removeChild(document.getElementById("guess2"));
        }
        if(g3)
        {
            document.getElementById("cardguess").removeChild(document.getElementById("guess3"));
        }
        return;
    })
    if(g2)
    {
        g2.addEventListener('click',()=>{
            socket.send(JSON.stringify({type:counterguessfrom,data:g2.src}))
            g2.removeEventListener('click',g2);
            document.getElementById("popup").style.display="none";
            document.getElementById("cardguess").removeChild(document.getElementById("guess2"));
            if(g3)
            {
                document.getElementById("cardguess").removeChild(document.getElementById("guess3"));
            }
            return;
        })

    }
    if(g3)
    {
        g3.addEventListener('click',()=>{
            socket.send(JSON.stringify({type:counterguessfrom,data:g3.src}))
            g3.removeEventListener('click',g3);
            document.getElementById("popup").style.display="none";
            document.getElementById("cardguess").removeChild(document.getElementById("guess2"));
            document.getElementById("cardguess").removeChild(document.getElementById("guess3"));
            return;
        })
        
    }
}
socket.addEventListener('message', (event) => 
{
    var m = JSON.parse(event.data);
    console.log(m);
    if(m.data===0)//card distribute
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
    else if(m.data===1 || m.data===4 || m.data===7)//p1 die roll
    {
        guess=[];
        document.getElementById("gamemessages").innerText="Your turn, roll the die";
        document.getElementById("dieimage").addEventListener('click',function Clickdie(){
            r=Math.floor(Math.random()*5)+1;
            const el=document.getElementById("dieimage");
            if(el){
                el.src=dies[r];
            }
            guess.push(r);
            var guessfrom;
            if(m.data===1)//p1 die roll
                guessfrom="guessfrom1";
            else if(m.data===4)//p2 die roll
                guessfrom="guessfrom2";
            else
                guessfrom="guessfrom3";
            el.removeEventListener('click',Clickdie);
            document.getElementById("gamemessages").innerText="You have entered "+rooms.get(r)+" now choose the suspect and suspicious weapon";
            suspect();
            function suspect()
            {
                addlistenerstosuspects();
                function addlistenerstosuspects()
                {
                    s1.addEventListener('click',suspect1);
                    s2.addEventListener('click',suspect2);
                    s3.addEventListener('click',suspect3);
                    s4.addEventListener('click',suspect4);
                }
                function removelistenersfromsuspects()
                {
                    s1.removeEventListener('click',suspect1);
                    s2.removeEventListener('click',suspect2);
                    s3.removeEventListener('click',suspect3);
                    s4.removeEventListener('click',suspect4);
                }
                function suspect1()
                {
                    guess.push(cards[0]);
                    removelistenersfromsuspects();
                    sb1.style.border="2px solid black";
                    setTimeout(function() {
                        sb1.style.border=defaultborder;
                      }, 1000);
                    weapon();
                }
                function suspect2()
                {
                    guess.push(cards[1]);
                    removelistenersfromsuspects();
                    sb2.style.border="2px solid black";
                    setTimeout(function() {
                        sb2.style.border=defaultborder;
                      }, 1000);
                    weapon();
                }
                function suspect3()
                {
                    guess.push(cards[2]);
                    removelistenersfromsuspects();
                    sb3.style.border="2px solid black";
                    setTimeout(function() {
                        sb3.style.border=defaultborder;
                      }, 1000);
                    weapon();
                }
                function suspect4()
                {
                    guess.push(cards[3]);
                    removelistenersfromsuspects();
                    sb4.style.border="2px solid black";
                    setTimeout(function() {
                        sb4.style.border=defaultborder;
                      }, 1000);
                    weapon();
                }
            }
            function weapon(){
                addlistenerstoweapons();
                function addlistenerstoweapons(){
                    w1.addEventListener('click',weapon1);
                    w2.addEventListener('click',weapon2);
                    w3.addEventListener('click',weapon3);
                    w4.addEventListener('click',weapon4);
                    w5.addEventListener('click',weapon5);
                    w6.addEventListener('click',weapon6);
                    w7.addEventListener('click',weapon7);
                    w8.addEventListener('click',weapon8);
                }
                function removelistenersfromweapons(){
                    w1.removeEventListener('click',weapon1);
                    w2.removeEventListener('click',weapon2);
                    w3.removeEventListener('click',weapon3);
                    w4.removeEventListener('click',weapon4);
                    w5.removeEventListener('click',weapon5);
                    w6.removeEventListener('click',weapon6);
                    w7.removeEventListener('click',weapon7);
                    w8.removeEventListener('click',weapon8);
                }
                function weapon1()
                {
                    guess.push(cards[4]);
                    removelistenersfromweapons();
                    wb1.style.border="2px solid black";
                    setTimeout(function() {
                        wb1.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                }
                function weapon2()
                {
                    guess.push(cards[5]);
                    removelistenersfromweapons();
                    wb2.style.border="2px solid black";
                    setTimeout(function() {
                        wb2.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                }
                function weapon3()
                {
                    guess.push(cards[6]);
                    removelistenersfromweapons();
                    wb3.style.border="2px solid black";
                    setTimeout(function() {
                        wb3.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                }
                function weapon4()
                {
                    guess.push(cards[7]);
                    removelistenersfromweapons();
                    wb4.style.border="2px solid black";
                    setTimeout(function() {
                        wb4.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                }
                function weapon5()
                {
                    guess.push(cards[8]);
                    removelistenersfromweapons();
                    wb5.style.border="2px solid black";
                    setTimeout(function() {
                        wb5.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                }
                function weapon6()
                {
                    guess.push(cards[9]);
                    removelistenersfromweapons();
                    wb6.style.border="2px solid black";
                    setTimeout(function() {
                        wb6.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                }
                function weapon7()
                {
                    guess.push(cards[10]);
                    removelistenersfromweapons();
                    wb7.style.border="2px solid black";
                    setTimeout(function() {
                        wb7.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));

                }
                function weapon8()
                {
                    guess.push(cards[11]);
                    removelistenersfromweapons();
                    wb8.style.border="2px solid black";
                    setTimeout(function() {
                        wb8.style.border=defaultborder;
                      }, 1000);
                    socket.send(JSON.stringify({type:guessfrom,data:guess}));
                    return;
                }
            }            
        });
    }
    else if(m.data===2 || m.data===3)//p2,p2->p1 is playing
    {
        document.getElementById("gamemessages").innerText="Player1 is playing";
    }
    else if(m.data==5 || m.data==6)//p1,p3->p2 is playing
    {
        document.getElementById("gamemessages").innerText="Player2 is playing";
    }
    else if(m.data===8 || m.data===9){
        document.getElementById("gamemessages").innerText="Player3 is playing";
    }
    
    else if(m.data===12 || m.data===13 || m.data===21 || m.data===23 || m.data===31 || m.data===32)//p1 guess
    {
        var counterguessfrom;
        if(m.data===12)
            counterguessfrom="counterguessfrom2for1";
        else if(m.data===13)
            counterguessfrom="counterguessfrom3for1";
        else if(m.data===21)
            counterguessfrom="counterguessfrom1for2";
        else if(m.data===23)
            counterguessfrom="counterguessfrom3for2";
        else if(m.data===31)
            counterguessfrom="counterguessfrom1for3";
        else
            counterguessfrom="counterguessfrom2for3";
        
        const pop=document.getElementById("popup");
        document.getElementById("pmsg").innerHTML="Player 1 has made a guess which you have which one do you want to reveal?";
        console.log(m.ans[0]);
        document.getElementById("cguess1").src=m.ans[0];
        if(m.ans.length===2)
        {
            const box=document.createElement("div");
            box.id="guess2";
            document.getElementById("cardguess").appendChild(box);
            const img=document.createElement("img");
            img.id="cguess2";
            img.src=m.ans[1];
            img.style.width="50px";
            img.style.height="150px";
            img.style.border=defaultborder;
            document.getElementById("guess2").appendChild(img);
        }
        else if(m.ans.length===3)
        {
            const box1=document.createElement("div");
            box1.id="guess2";
            document.getElementById("cardguess").appendChild(box1);
            const img1=document.createElement("img");
            img1.id="cguess2";
            img1.src=m.ans[1];
            img1.style.width="50px";
            img1.style.height="150px";
            img1.style.border=defaultborder;
            document.getElementById("guess2").appendChild(img1);

            const box2=document.createElement("div");
            box2.id="guess3";
            document.getElementById("cardguess").appendChild(box2);
            const img2=document.createElement("img");
            img2.id="cguess3";
            img2.src=m.ans[2];
            img2.style.width="50px";
            img2.style.height="150px";
            img2.style.border=defaultborder;
            document.getElementById("guess3").appendChild(img2);
        }
        pop.style.display="block";
        guesscards(counterguessfrom);
    }
    else if(m.data===122 || m.data===123 || m.data===221 || m.data===223 || m.data===321 || m.data===322)//which guess is not correct grom p2 or p3(any 1)
    {
        const pop=document.getElementById("popup");
        document.getElementById("pmsg").innerHTML="Someone has your guess ";
        document.getElementById("cguess1").src=m.ans;
        pop.style.display="block";
        var cont;
        if(m.data===122 || m.data===123)
            cont="continue2";
        else if(m.data===221 || m.data===223)
            cont="continue3";
        else
            cont="continue1";
        document.getElementById("cguess1").addEventListener('click',function clickguess1(){
            socket.send(JSON.stringify({type:cont}))
            document.getElementById("popup").style.display="none";
            document.getElementById("cguess1").removeEventListener('click',clickguess1);
        })
    }
    if(m.data===100)
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
