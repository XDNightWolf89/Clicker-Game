if (localStorage.stgclicks >= 0){
    clicks = Number(localStorage.stgclicks)
}
else{
    clicks = 0
}

document.getElementById("_count").innerHTML = clicks

function clicked() {
    clicks = clicks+1
    document.getElementById("_count").innerHTML = clicks
    localStorage.stgclicks = clicks
}