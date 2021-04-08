function blinkit(){
    intervl = 0;
    for(nTimes = 0; nTimes<3;nTimes++){
        intervl += 600;
        setTimeout("document.bgColor='#0000ff';",intervl);
        intervl += 600;
        setTimeout("document.bgColor='red';",intervl);
    }
}
