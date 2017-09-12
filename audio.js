/**
 * Created by Administrator on 
 */

function MusicFun(){
	this.musicUrl="./HD/common/bgmusic/";
	this.music=['furusato.mp3','furusatonokaze.mp3','hatsukoi.mp3','hatsukoinotameiki.mp3','japaneseautumn.mp3','natsuirojojou.mp3','natsukashiifuzei.mp3','ouun.mp3','shoukei.mp3','tasogare.mp3','tsukinohikari.mp3'];
	this.elem=document.createElement("audio");//背景音乐标签
	this.index=function(){//背景音乐随机数
		return Math.floor(Math.random()*11);
	};
	this.init=function(option){
		var _this=this;
		//_this.elem=document.getElementById(option.id);
		_this.elem.id="bgMusic";
		_this.elem.setAttribute("loop","loop");
		_this.elem.src=_this.musicUrl+_this.music[_this.index()];
		console.log(_this.elem);
		document.body.appendChild(_this.elem);
	};
	this.startFun=function(){//音乐开启
		var _this=this;
		if (!_this.elem.paused) return;
        _this.elem.play();
	};
	this.playFun=function(){//播放或暂停
		 var audio = document.getElementById('bgMusic'); 

	        // 检测播放是否已暂停
	        if(audio!==null){             
	            if(audio.paused){                 
	                audio.play();	               
	            }else{
	                audio.pause();
	            }
	        } 
	}
}
var music=new MusicFun();



/*~function(src) {
    var className = 'play';
    var trigger = 'ontouchend' in document ? 'touchstart' : 'click';


    $("body").append("<div class='music-icon'></div>");
   $("body").append("<audio src='common/img/bg_audio.mp3'' loop></audio>");
      var $audio=document.querySelectorAll("audio")[0],
      $musci=document.querySelectorAll(".music-icon")[0];
    var $musci = document.createElement('div');
    var $audio = document.createElement('audio');

    function start() {
        document.removeEventListener(trigger, start, false);
        if (!$audio.paused) return;
        $audio.play()
    }

    function toggle() {
        if (!$audio.paused) return $audio.pause();

        $audio.currentTime = 0;
        $audio.play()
    }

    function play(e) {
        $musci.classList.add(className)
    }

    function pause(e) {
        $musci.classList.remove(className)
    }

    $musci.className = 'music-icon';
    $audio.src = src;
    $audio.loop = true;
     console.log($musci);
     $("body").append($musci);
     $('body').append($audio);
    /!*document.body.appendChild($musci);
    document.body.appendChild($audio);*!/

    $audio.addEventListener('play', play, false);
    $audio.addEventListener('pause', pause, false);
    $audio.addEventListener('ended', pause, false);
    $musci.addEventListener('click', toggle, false);
    $audio.play();

    document.addEventListener(trigger, start, false);
    console.log("我执行了");
}("img/bg_audio.MP3");*/