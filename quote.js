var quote=document.getElementById("quote")
var author=document.getElementById("author")
var apiurl="https://api.quotable.io/random?maxLength=40"
async function getquote(url){
var response=await fetch(url)

var data=await response.json()
  console.log(data)
   quote.innerHTML=data.content
   author.innerHTML=data.author

}
getquote(apiurl)
function tweet(){
window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + "----by"+author.innerHTML,"Tweet Window","width=500,height=300")
}