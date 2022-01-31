document.getElementById("newPic").onclick = function() { reloadPic() };

function reloadPic() {

    let r;
    let g;
    let b;
    let x;

    for(var i = 0; i < 10000; i++){

        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        x = Math.floor(Math.random() * 10000);

        document.getElementsByClassName("levelElement")[x].style.backgroundColor = "rgb("+ r + "," + g + "," + b +")";

        

    }
    
}