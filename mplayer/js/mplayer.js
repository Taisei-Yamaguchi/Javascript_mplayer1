//音楽を再生するための関数
function playMusic(li){
    var file=li.getAttribute('data-file');
        var audio=document.querySelector('audio');
        audio.setAttribute('src','music/'+file);
        audio.play();
        //classのactivityをクリックにより変更する。
        var activeli= document.querySelector('.active');
        activeli.className="";
        li.className="active";
}

//プレイリストを取得
var listitems=document.querySelectorAll('li');
for (var i=0; i<listitems.length; i++){
    //clickイベントの取得
    listitems[i].addEventListener('click',
    (e)=>{
        var li=e.target;
        playMusic(li);
    }
    );
}

//audio要素を取り出し、再生されてる時の処理
var audio=document.querySelector('audio');
audio.addEventListener('play',
    (e)=>{
        var img=document.querySelector('.play_image');
        img.setAttribute('src','images/pict_play.png');
    }
);
//audio要素を取り出し、停止してる時の処理
audio.addEventListener('pause',
    (e)=>{
        var img=document.querySelector('.play_image');
        img.setAttribute('src','images/pict_stop.png');
    }
);
//曲を最後まで再生したとき
audio.addEventListener('ended',
    (e)=>{
        //次の曲に切り替え
        var activeli =document.querySelector('.active');
        var nextli=activeli.nextElementSibling;
        var ul1=document.querySelector('ul');
        var firstli=ul1.firstElementChild;
        //↑firstElementChildは最初の子要素を得るための物だから、
        //はじめに、ulとして要素を取得する必要がある。
        if(nextli !=null){
            playMusic(nextli);
        }
        else{
            
           
            playMusic(firstli);
        }
    }
);

//randomにlistから一つ取得し処理
var random=document.querySelector('#random');
random.addEventListener('click',
    (e)=>{
        e.preventDefault();
        var listitems=document.querySelectorAll('li');
        var len =listitems.length;
        var rnd=Math.floor(Math.random()*len);
        playMusic(listitems[rnd]);
    }
);