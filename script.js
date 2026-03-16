function verify(){

var id=document.getElementById("certId").value;
var hash=document.getElementById("certHash").value;

if(id=="187065eb3d354746b18827a267d56a50" && hash=="b506eb2a95f480fad3ee20d97496b9bdbf1c51f50391bba330b2974dcc349ab6")
{
document.getElementById("result").innerHTML="Certificate Verified ✅";
}
else
{
document.getElementById("result").innerHTML="Invalid Certificate ❌";
}

}