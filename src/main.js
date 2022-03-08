import str from './cssData.js'

const player = {
    n : 0,
    time : 20,
    str2 : '',
    id : undefined,
    but : {
        '#pause': 'pause',
        '#play' : 'play',
        '#speediness':'speediness',
        '#normalSpeed' :'normalSpeed',
        '#lowSpeed' : 'lowSpeed',
        '#rebroadcast' : 'rebroadcast'
    },
    init : ()=>{
        for(let key in player.but){
            if(player.but.hasOwnProperty(key)){
                document.querySelector(key).onclick = player[player.but[key]];
            }
        }
    },
    pause:()=>{
        clearInterval(player.id);
    },
    play:()=>{
        player.id = setInterval(player.run,player.time);
    },
    run:()=>{
        if(player.n < str.length){
            if(str.substring(player.n,player.n+1) === '\n'){
                player.str2 += '<br>';
            }else if(str.substring(player.n,player.n+1) === ' '){
                player.str2 += '&nbsp';
            }else{
                player.str2 += str.substring(player.n,player.n+1);
            }
            document.querySelector('#dome').innerHTML = str.substring(0, player.n);
            document.querySelector('#textArea').innerHTML = player.str2;
            player.n += 1;
            document.querySelector('#textArea').scrollTop = document.querySelector('#textArea').scrollHeight;
        }else clearInterval(player.id);
    },
    speediness : ()=>{
        clearInterval(player.id);
        player.id = setInterval(player.run,0);
    },
    normalSpeed : ()=>{
        clearInterval(player.id);
        player.id = setInterval(player.run,20);
    },
    lowSpeed : ()=>{
        clearInterval(player.id);
        player.id = setInterval(player.run,100);
    },
    rebroadcast : ()=>location.reload()
    
}
player.init();
player.play();
