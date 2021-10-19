                                      
 const tubelight= () => {
for (x=1; x<6; x++){
                                     
let bid = document.getElementById('lightid'.concat(x))
     if (bid.src.match('onbulb')){
bid.src = 'images/offbulb.png'
}
else{
    bid.src= 'images/onbulb.jpg'
    }
 }
}
                                         