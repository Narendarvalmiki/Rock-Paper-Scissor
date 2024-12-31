function rock(){
    let ai;
    let num=Math.random()
    num*=50
    if(num>=0 && num<=33){
        ai="Rock"
    }
    if(num>=34 && num<=66){
        ai="Paper"
    }
    if(num>66){
        ai="Scissor"
    }
    if(ai=="Rock"){
        document.getElementById('computer').innerHTML="Computer has choosen:" + ai
        document.getElementById('result').innerHTML="Match Drawn"
    }
    if(ai=="Paper"){
        document.getElementById('computer').innerHTML="Computer has Choosen:"+ai
        document.getElementById('result').innerHTML="AI Won"
    }
    if(ai=="Scissor"){
        document.getElementById('computer').innerHTML="Computer has Choosen:"+ai
        document.getElementById('result').innerHTML='You Won'
    }
}
function paper(){
    let ai;
    let num=Math.random();
    num*=50
    if(num>=0 && num<=33){
        ai="Rock"
    }
    if(num>=34 && num<=66){
        ai="Paper"
    }
    if(num>=66){
        ai="Scissor"
    }
    if(ai=="Rock"){
        document.getElementById('computer').innerHTML='Computer has choosen:'+ai
        document.getElementById('result').innerHTML='You Won'
    }
    if(ai=='Paper'){
        document.getElementById('computer').innerHTML='Computer has choosen:'+ai
        document.getElementById('result').innerHTML='Match Drawn'
    }
    if(ai=="Scisoor"){
        document.getElementById('computer').innerHTML='Computer has choosen:'+ai
        document.getElementById('result').innerHTML='AI Won'
    }
}
function scissor(){
    let a;
    let num=Math.random()
    num*=50
    if(num>=0 && num<=33){
        ai="Rock"
    }
    if(num>=34 && num<=66){
        ai='Paper'
    }
    if(num>66){
        ai='Scissor'
    }
    if(ai=="Rock"){
        document.getElementById('computer').innerHTML='Computer has choosen:'+ai
        document.getElementById('result').innerHTML='AI Won'
    }
    if(ai=="Paper"){
        document.getElementById('computer').innerHTML='Computer has choosen:'+ai
        document.getElementById('result').innerHTML='You Won'
    }
    if(ai=="Scisoor"){
        document.getElementById('compuer').innerHTML='Computer has choosen:'+ai
        document.getElementById('result').innerHTML='Match Drawn'
    }
}