function decline()
{
        let confirmAction1 = confirm("Are you sure do you want to delete this post??");
        if (confirmAction1) {
          alert("Action taken successfully, post willbe deleted");
        } else {
          alert("Action canceled");
        }

}
function accept()
{
        let confirmAction = confirm("Are you sure do you want accept this post??");
        if (confirmAction) {
          alert("Action taken successfully, post will be display on website ");
        } else {
          alert("Action canceled");
        }

}
           let tl = ["plane the promotional video","write the article ","view today's post"];
           
           display();
           dropdisplay();
           function display()
           {
            let fLen = tl.length;
            let text = "<ol>";
                for (let i = 0; i < fLen; i++) 
                {
                    text += "<li>" + tl[i] + "</li>";
                }
                text += "</ol>";
                document.getElementById("result").innerHTML = text;
            }
    //to display drop down meanu
            function dropdisplay()
            {
                document.getElementById("show").innerHTML = "";
                  var select = document.getElementById("show");
                  for(var i = 0; i < tl.length; i++)
                   {
                    var opt = tl[i];
                    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
                   }
             }
           function addtask()
           {
             var nval = document.getElementById('add').value;
             tl.push(nval);  
             display();
             dropdisplay();
           }

            function deltask()
           {
            var select = document.getElementById('show');
            var del=select.options[select.selectedIndex].value;
            for( var i = 0; i < tl.length; i++)
            {  
                if ( tl[i] === del) 
                tl.splice(i, 1); 
            }

            display();
            dropdisplay();
           }
       

