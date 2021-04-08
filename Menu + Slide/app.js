function openNav(){
    document.getElementById('mySideNav').style.width = '50%';
}

function closeNav(){
    document.getElementById('mySideNav').style.width = '0'
}

function slide1(){
    document.getElementById('id').src='https://i.pinimg.com/originals/be/df/c7/bedfc79f12ff213e9d8cc5e504a064fd.jpg'
    setTimeout("slide2()",3000)
}

function slide2(){
    document.getElementById('id').src='https://i.pinimg.com/originals/60/3f/dd/603fddadb95f55d4d79c0aa1a95dad41.jpg'
    setTimeout("slide1()",3000)
}