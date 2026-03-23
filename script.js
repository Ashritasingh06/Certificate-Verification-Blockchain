function verify(){

var id = document.getElementById("certId").value.trim();
var hash = document.getElementById("certHash").value.trim();

console.log(id);
console.log(hash);

if(id === "9763872" && hash === "b506eb2a95f480fad3ee20d97496b9bdbf1c51f50391bba330b2974dcc349ab6")
{
document.getElementById("result").innerHTML = "Certificate Verified ✅";
}
else
{
document.getElementById("result").innerHTML = "Invalid Certificate ❌";
}

}
