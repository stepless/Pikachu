const str = `#showArea{
    background-color: rgb(255,230,0);
}
.pikachu{
    position:absolute;
    left:0;
    right: 0;
    top: 0;
    bottom:0;
    margin:auto;
    width: 600px;
    height: 400px;
}
.pikachu .eye-nose{
    display: flex;
    justify-content:center;
    padding-top:78px;
    align-items:flex-end;
}
.eye-nose .eye{
    width:64px;
    height: 64px;
    border:1px solid #000;
    background-color: rgb(46,46,46);
    border-radius: 50%;
}
.eye-nose .eye::after{
    content:'';
    display: block;
    width:25px;
    height: 25px;
    border:2px solid #000;
    background-color: #fff;
    border-radius:50%;
    margin-top:3px;
    margin-left:8px;
}
.eye-nose .nose{
    width:28px;
    height: 19px;
    border-radius:9px 9px 0 0;
    overflow: hidden;
    margin-left:76px;
    margin-right:76px;
    margin-bottom: 10px;
}
.eye-nose .nose::after{
    content:'';
    display: block;
    width:20px;
    height: 20px;
    background-color: #000;
    margin-left: auto;
    margin-right:auto;
    border-radius:0px 6px 3px 6px;
    transform:rotate(45deg);
    margin-top:-6px;
}
.nose:hover{
    transform-origin: center 100%;
    animation: 200ms linear infinite forwards wave;
}
@keyframes wave{
    0%{
        transform: rotate(0);
    }33%{
        transform: rotate(6deg);
    }66%{
        transform: rotate(-6deg);
    }100%{
        transform: rotate(0);
    }
}
.pikachu .cheek-mouth{
    display: flex;
    justify-content:center;
    padding-top:10px;
    align-items: center;
}
.cheek-mouth .cheek{
    width:88px;
    height: 88px;
    border:3px solid #000;
    background-color: rgb(255,0,0);
    border-radius: 50%;
}
.cheek-mouth .mouth{
    height: 170px;
    width:200px;
    overflow: hidden;
    margin-left: 16px;
    margin-right: 16px;
    position: relative;
}
.mouth .mouth-outline{
    width:100px;
    height: 680px;
    border:3px solid #000;
    transform: scaleX(1.6);
    border-radius:50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -520px;
    position: relative;
    background-color: rgb(155,0,10);
    overflow: hidden;
}
.mouth-outline::after{
    content:'';
    display:block;
    width:92px;
    height: 148px;
    border:1px solid red;
    background-color: rgb(255,72,95);
    border-radius:50%;
    position:absolute;
    bottom:-10px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
}
.mouth::before{
    content:'';
    display:block;
    position: absolute;
    width:80px;
    height: 40px;
    border:3px solid black;
    top:-27px;
    border-radius:0 0 0 80%;
    transform:rotate(-26deg);
    left: 16px;
    z-index: 2;
    background-color: rgb(255,230,0);
}
.mouth::after{
    content:'';
    display:block;
    position: absolute;
    width:80px;
    height: 40px;
    border:3px solid black;
    top:-27px;
    border-radius:0 0 80% 0;
    transform:rotate(26deg);
    right: 16px;
    z-index: 2;
    background-color: rgb(255,230,0);
}
@media (max-width:500px){
    .pikachu{
        width: 360px;
        height: 360px;
    }
    .pikachu .cheek-mouth .mouth::after{
        right:1px;
    }
    .pikachu .cheek-mouth .mouth::before{
        left:1px;
    }
}`;
export default str;