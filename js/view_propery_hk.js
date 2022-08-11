// function of open popup form on click of contact button
function openForm() {
    document.getElementById("modalOne").style.display = "block";
}


 // function of close popup form on click of close button
function closeForm() {
    document.getElementById("modalOne").style.display = "none";
}


// this fucntion calls on button click of search button
function findValue()
{
  //get all houses
  let allimages= document.getElementsByClassName('home-part');
    
  // get value which select by user in dropdown for searching
  var areavalue = document.getElementById('area').value;
  var typevalue = document.getElementById('type').value;
  var pricevalue = document.getElementById('price').value;

  $('.home-part').hide();
    
  //if user can't search anything
  if(typevalue == "" && areavalue == "" && pricevalue == "")
      $('.home-part').show();
  
  // if the drop down value is not null means want to search
  var temp = "";
  if( typevalue != "" )
  {
    //get images of class which enter by user in dropdown of search
    temp = document.getElementsByClassName(typevalue);
    
    //this temp value and all images send to other function which perform searching
    allimages = performIntersection(allimages, temp);
  }

  if( areavalue != "" )
  {
    temp = document.getElementsByClassName(areavalue);
    allimages = performIntersection(allimages, temp);
  }

  if( pricevalue != "" )
  {
    temp = document.getElementsByClassName(pricevalue);
    allimages = performIntersection(allimages, temp);
  }

  //Display all images
  for(let i = 0 ; i<allimages.length ; i++)
  {
      //display all images array 
    allimages[i].style.display = 'block';
  }

}
   
// function for create dynamic image list
function performIntersection(arr1, arr2) {
  
  // converting into Set
  const setA = new Set(arr1);
  const setB = new Set(arr2);
    
  let intersectionResult = [];
  for (let i of setB) {
    if (setA.has(i)) {
      intersectionResult.push(i);
    }
  }
  return intersectionResult;
}

//on the hover of house image view more text display- click of that this function call and redirect to anothe page
function viewmore()
{
  window.location.href = "./house1.html";
}