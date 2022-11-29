var dropdown= document.getElementById('dropdown');
var dropdown_1= document.getElementById('dropdown-1');
var count = 1;
var count_1 = 1;
var search_result= document.getElementById("search-result")
var container = document.getElementById("container")
console.log(search_result.childNodes.length)

if (search_result.childNodes.length == 0) {
  console.log('itis empty')
  container.style.visibility = "hidden"

}else{
  container.style.visibility = "visible"
}

document.getElementById('main-head').addEventListener('click', function () {
   
  if (count % 2 == 1) {
      
    document.getElementById('sub-head').style.display='block'
    // document.getElementById('sub-head-1').style.display='none'

    // console.log("dropdown")

    dropdown.style.transform='rotateX(180deg)'
  } else {
      
    document.getElementById('sub-head').style.display='none'
    // document.getElementById('sub-head-1').style.display='block'

    // console.log("dropdown")

    dropdown.style.transform='rotateX(360deg)'
  }
    //  document.getElementById('dropdown').style.color='green'
    // document.getElementById('sub-head').style.display='none'
    count++;
    console.log(count)
})

document.getElementById('main-head-1').addEventListener('click', function () {

    if (count_1 % 2 == 1) {
        document.getElementById('sub-head-1').style.display='block'
        // document.getElementById('sub-head').style.display='none'
        dropdown_1.style.transform='rotateX(180deg)'
    } else {
        document.getElementById('sub-head-1').style.display='none'
        // document.getElementById('sub-head').style.display='none'
        dropdown_1.style.transform='rotateX(360deg)'
    }
  
    count_1++
    // document.getElementById('sub-head').style.display='none'
})