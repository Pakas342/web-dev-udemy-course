function beerSong(beers) {
    var barBeers = beers
    while (barBeers < 0) {
        console.log(barBeers +"bottles of beer on the wall, "+ barBeers +" bottles of beer. Take one down and pass it around, "+ barBeers +" bottles of beer on the wall.");
        barBeers = barBeers-1;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}