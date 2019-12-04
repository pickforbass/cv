function removeBlock()
{
    let bp = document.getElementsByClassName("blockparty");
    for(let i=0; i < bp.length; i++){
        bp[i].classList.remove("show");
    }
}


document.getElementById('complink').addEventListener('click',function () {
    removeBlock ();
    document.getElementById("compbloc").classList.toggle('show');
    },false);



document.getElementById('explink').addEventListener('click',function () {
    removeBlock ();
    document.getElementById("expbloc").classList.toggle('show');
},false);


document.getElementById('diplink').addEventListener('click',function () {
    removeBlock ();
    document.getElementById("formbloc").classList.toggle('show');
},false);


document.getElementById('infolink').addEventListener('click',function () {
    removeBlock ();
    document.getElementById("infobloc").classList.toggle('show');
},false);


document.getElementById('contlink').addEventListener('click',function () {
    removeBlock ();
    document.getElementById("contactbloc").classList.toggle('show');
},false);

document.getElementById("")

