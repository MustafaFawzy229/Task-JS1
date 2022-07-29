// ====================Main Average====================

var arr = [2 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12];

// var sum = 2+4+5+6+7+8+9+10+11+12;

var sum = arr.reduce((a, b) => a + b, 0);

var count = arr.length;

var average = sum / count;

console.log(average);




// ====================Sidenav====================

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor ="rgb(205, 224, 135)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.body.style.backgroundColor ="white";
}

// ========================================





// =================Fullscreen=======================

function openFullscreen() {
    if (document.getElementById("myvideo").requestFullscreen) {
        document.getElementById("myvideo").requestFullscreen();
    }
}

// ========================================







// ================Show and Hide========================

// Try 1
// function showProfile() {
//     document.getElementById("myprofile").style.display = "inline";
// }

// ========================================

// Try2
function showProfile() {
    if (document.getElementById("myprofile").style.display === "none")
    {
    document.getElementById("myprofile").style.display = "inline";
}
else {
    document.getElementById("myprofile").style.display = "none";
}
}

// ========================================


// Try3

// var a= 1;
// function showProfile() {
//     if (a==1)
//     {
//     document.getElementById("myprofile").style.display = "inline";
//     return a=0;
// }
// else {
//     document.getElementById("myprofile").style.display = "none";
//     return a=1;
// }
// }

// ========================================
