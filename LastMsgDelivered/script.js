
submit.addEventListener('click',()=>
{
    document.getElementById("show").innerHTML="";
    document.getElementById("lst").style.visibility="hidden";
    let text=document.getElementById("txt").value;
    if(text==null||text=="")
    {
       document.getElementById("lst").style.visibility="visible";
       document.getElementById("txt").value="";
    }
    else
    {
        document.getElementById("show").innerHTML=text;
        document.getElementById("txt").value="";
    }

})