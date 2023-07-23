 var bookmarkNm= document.getElementById('bookmarkNm') //all input as html
 var webUrl= document.getElementById('webUrl')

 webUrl.addEventListener("keyup", function () {
  if (check(webUrl.value) == true) {
    webUrl.classList.replace("is-invalid", "is-valid");
  } else {
    webUrl.classList.add("is-invalid");
  }
});
bookmarkNm.addEventListener("keyup", function () {
  if (checkbookName(bookmarkNm.value) == true) {
    bookmarkNm.classList.replace("is-invalid", "is-valid");
  } else {
    bookmarkNm.classList.add("is-invalid");
  }
});
websitesArray=[]
if(localStorage.getItem('webs') !=null)
{
  websitesArray= JSON.parse(localStorage.getItem('webs'))

  displayWebsites() 
  
}
function getWebsites()
{
 var websitesObject=
 {
   Name:bookmarkNm.value,
   Url: webUrl.value
 }

 if(check(webUrl.value)&&checkbookName(bookmarkNm.value,)==true)
 {
  websitesArray.push( websitesObject)
  clear()
  localStorage.setItem('webs',JSON.stringify(websitesArray))
  displayWebsites() 
  return true;
 }
 else{
  alert("invalid")
 }

}
  function displayWebsites() 
  {
    var cartona=``
    for(var i=0; i<websitesArray.length ; i++)
    {
      cartona+=`
      <tr>
      <td>${websitesArray[i].Name}</td>
      <td>${websitesArray[i].Url}</td>
    <td><button onclick="visitItem(${i})" class="btn btn-outline-warning btn-sm"> <i class="fa-solid fa-eye pe-2"></i>VISIT</button></td>
    <td><button onclick="deleteItem(${i})" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash-can pe-2"></i>DELETE</button></td>
    </tr>
      `
    }
    document.getElementById('demo').innerHTML=cartona
  }
function clear()
{
  bookmarkNm.value=""
  webUrl.value=""
}
function deleteItem(index)
{
  websitesArray.splice(index,1)
  displayWebsites()
  localStorage.setItem('webs',JSON.stringify(websitesArray))
}
function visitItem(index)
{
  window.open(websitesArray[index].Url)
}
function check(str) {
  var regex =
    /^(https?|ftp|file):\/\/?[-A-Za-z0-9+&@#\%?=~_|!:,.;]+[-A-Za-z0-9+&@#\%=~_|]?\//;
  return regex.test(str);
}
function checkbookName(nor) {
  var regex = /^[a-zA-Z]{3,}/;
  return regex.test(nor);
}
