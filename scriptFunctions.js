'use strict';


/*-------------------------------------------------------------*/
/*------ STATIC add 'x' SPAN ----------------------------------*/
/*-------------------------------------------------------------*/

  // Create a "close" button and append it to each DIV item
  // will close the DIV and it's content    
var divstat = document.querySelectorAll('FORM > DIV');

for (var i = 0; i < divstat.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
    //grab DIV, in DIV append SPAN to INPUT box      
  divstat[i].appendChild(span);

}  //end for
    

  // Click on a close button to hide the current DIV item
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var parent = this.parentElement;

    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
        
    }  //end while   
  }  //end function
}  //end for


/*-------------------------------------------------------------*/
/*------ DYNAMIC add 'x' SPAN ---------------------------------*/
/*-------------------------------------------------------------*/
/* Everything in Dynamic is not set at relod
 */

// Create a new list item when clicking on the "Add" button
function addElement() {
    var divstat = document.querySelectorAll('FORM > DIV');

  //DIV create    
var divdynamic = document.createElement('DIV');
divdynamic.setAttribute('class', 'divDyn');
  //nest divdynamic in FORM
document.getElementById("form1").appendChild(divdynamic);   
    
  //INPUT create
var chkBox = document.createElement("INPUT");
chkBox.setAttribute("type", "checkbox");
chkBox.setAttribute("class", "boxDyn");
  //INPUT append DIV    
divdynamic.appendChild(chkBox);  
    
  //from input tex box, use as label TextNode        
var inputValue = document.getElementById("inputAdd").value;    

  //LABEL create 
var lbl = document.createElement("LABEL");
var txtLbl = document.createTextNode(inputValue);
lbl.setAttribute("form", 'form1');
lbl.appendChild(txtLbl);
  //LABEL append DIV           
divdynamic.appendChild(lbl);    

  //SPAN create dynamic input CLOSE***/
  // Create closing "x" and append it to each DIV item
  // will close the DIV and it's content    
var span = document.createElement("SPAN");
var txt = document.createTextNode(" \u00D7");  //x
span.className = "close";
span.appendChild(txt);
  //grab the divdynamic DIV, append SPAN for close funct       
divdynamic.appendChild(span);
      
  // Click on close button to remove children
var close = document.getElementsByClassName("close");
    
for (var i = 0; i < close.length; i++) {
    
      // will remove when click on x
    close[i].onclick = function() {
        var parent = this.parentElement;
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
        }  //end while       
        }  //end function
    
     // for every new x - pointer
    close[i].style.cursor = 'pointer';    
    
      // for every new x - add mouse over,out events
    close[i].addEventListener("mouseover", function(event) {
    event.target.style.fontSize = '20px';                          
    event.target.style.fontWeight = 'bold';
    });

    close[i].addEventListener("mouseout", function(event) {
    event.target.style.fontSize = 'initial';
    });
    
}  //end for 
    
}  //end addElement function




/***----------------------------------------------------***/
/***------ BOXSHADOW INFINITE LOOP FUNCT ---------------***/
/***----------------------------------------------------***/


function insetFirst() {
    var contDiv = document.getElementsByClassName('headerOld')[0];
     contDiv.style.boxShadow = '-50px -30px 100px rgba(255, 153, 0, 0.8) inset';  //orange 
    
    contDiv.style.WebkitTransitionProperty = 'box-shadow';
    contDiv.style.MozTransitionProperty = 'box-shadow';
    contDiv.style.OTransitionProperty = 'box-shadow';
    contDiv.style.transitionProperty = 'box-shadow';

    contDiv.style.WebkitTransitionDuration = '2s';
    contDiv.style.MozTransitionDuration = '2s';
    contDiv.style.OTransitionDuration = '2s';
    contDiv.style.transitionDuration = '2s';
}   //end function



function insetMiddle() {
    var contDiv = document.getElementsByClassName('headerOld')[0];
    contDiv.style.boxShadow = '0px 0px 100px rgba(128, 0, 128, 0.8)   inset';  //pink 
    
    contDiv.style.WebkitTransitionProperty = 'box-shadow';
    contDiv.style.MozTransitionProperty = 'box-shadow';
    contDiv.style.OTransitionProperty = 'box-shadow';
    contDiv.style.transitionProperty = 'box-shadow';

    contDiv.style.WebkitTransitionDuration = '2s';
    contDiv.style.MozTransitionDuration = '2s';
    contDiv.style.OTransitionDuration = '2s';
    contDiv.style.transitionDuration = '2s';
}   //end function



function insetLast() {
    var contDiv = document.getElementsByClassName('headerOld')[0];
    contDiv.style.boxShadow = '50px 30px 100px rgba(255, 153, 0, 0.8) inset';  //orange
    
    contDiv.style.WebkitTransitionProperty = 'box-shadow';
    contDiv.style.MozTransitionProperty = 'box-shadow';
    contDiv.style.OTransitionProperty = 'box-shadow';
    contDiv.style.transitionProperty = 'box-shadow';

    contDiv.style.WebkitTransitionDuration = '3s';
    contDiv.style.MozTransitionDuration = '3s';
    contDiv.style.OTransitionDuration = '3s';
    contDiv.style.transitionDuration = '3s';
 }   //end funct




function shadowTopLeft(){
      //green  
    //shadowEffectDiv.style.boxShadow = '-5px -10px 20px rgba(0, 255, 0, 1.0)';     
        //blue  
    //shadowEffectDiv.style.boxShadow = '-5px -10px 20px rgba(0, 0, 255, 1.0)';     
        //purple  
    //shadowEffectDiv.style.boxShadow = '-5px -10px 20px rgba(128, 0, 128, 1.0)';     
       //red  
    //shadowEffectDiv.style.boxShadow = '-5px -10px 40px rgba(255, 0, 0, 0.6)';     
     //Yellow  
    shadowEffectDiv.style.boxShadow = '-5px -10px 40px rgba(255, 255, 0, 0.6)';     
      //orange   
    //shadowEffectDiv.style.boxShadow = '-5px -10px 40px rgba(255, 153, 0, 0.8)';  
    
    shadowEffectDiv.style.WebkitTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.MozTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.OTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.transitionProperty = 'box-shadow';

    shadowEffectDiv.style.WebkitTransitionDuration = '2s';
    shadowEffectDiv.style.MozTransitionDuration = '2s';
    shadowEffectDiv.style.OTransitionDuration = '2s';
    shadowEffectDiv.style.transitionDuration = '2s';    
}  //end funct



function shadowBottomRight(){
      //green  
    //shadowEffectDiv.style.boxShadow = '20px 15px 40px rgba(0, 255, 0, 0.6)';
      //blue  
    //shadowEffectDiv.style.boxShadow = '20px 15px 40px rgba(0, 0, 255, 0.6)';
      //purple  
    //shadowEffectDiv.style.boxShadow = '20px 15px 40px rgba(128, 0, 128, 0.6)';
      //red  
    //shadowEffectDiv.style.boxShadow = '20px 15px 40px rgba(255, 0, 0, 0.6)';
      //yellow
    //shadowEffectDiv.style.boxShadow = '20px 15px 40px rgba(255, 255, 0, 0.6)';  
      //orange
    shadowEffectDiv.style.boxShadow = '20px 15px 40px rgba(255, 153, 0, 0.8)';  
    
    shadowEffectDiv.style.WebkitTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.MozTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.OTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.transitionProperty = 'box-shadow';

    shadowEffectDiv.style.WebkitTransitionDuration = '3s';
    shadowEffectDiv.style.MozTransitionDuration = '3s';
    shadowEffectDiv.style.OTransitionDuration = '3s';
    shadowEffectDiv.style.transitionDuration = '3s';    
}  //end funct



function ShadowNone(){
    shadowEffectDiv.style.boxShadow = 'none';  
    
    shadowEffectDiv.style.WebkitTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.MozTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.OTransitionProperty = 'box-shadow';
    shadowEffectDiv.style.transitionProperty = 'box-shadow';

    shadowEffectDiv.style.WebkitTransitionDuration = '3s';
    shadowEffectDiv.style.MozTransitionDuration = '3s';
    shadowEffectDiv.style.OTransitionDuration = '3s';
    shadowEffectDiv.style.transitionDuration = '3s';
}  //end funct



//function boxShadowTransitionLoop()

window.onload  = function boxShadowTransitionLoop() {
    
    insetFirst();  //transitionDuration 2s
    
      //this will call function shadowBottomRight after 1700 milliseconds.
    setTimeout(shadowBottomRight, 1700);  //transitionDuration 2s
    
          //this will call function ShadowNone after 5200 milliseconds.
    setTimeout(ShadowNone, 5200);  //transitionDuration 3s
    
    
      //this will call function insetMiddle after 7000 milliseconds.
    setTimeout(insetMiddle, 7000);  //transitionDuration 2s 
    
      //this will call function insetLast after 10400 milliseconds.
    setTimeout(insetLast, 10400);  //transitionDuration 3s 
    
      //this will call function shadowTopLeft after 12000 milliseconds.
    setTimeout(shadowTopLeft, 12000);  //transitionDuration 2s 
    
      //this will call function ShadowNone after 15600 milliseconds.
    setTimeout(ShadowNone, 15600);  //transitionDuration 3s 
    
    //need setTimeout for infinite loop
    //Will call boxShadowTransitionLoop after 18000 milliseconds   
    //Start over again
    t = setTimeout(function() {boxShadowTransitionLoop()}, 18000);

}   //endfunct





/***--------------- Clear loop---------------------***/

//need this global var for the setTimeout
var t;


//function to stop the boxShadowTransitionLoop infinite loop
function boxShadowTransitionLoopStop() {
    clearTimeout(t);
}  //end funct




/*-----------------------------*/
/*** Some tests for the loop ***/
/*-----------------------------*/

/* console timeing
*
* console.time('boxShadowTransitionLoop');  
* boxShadowTransitionLoop();
* console.timeEnd('boxShadowTransitionLoop');  


totalTime += console.timeEnd('boxShadowTransitionLoop');


/* performance now timing
*
*var t0 = performance.now();
*boxShadowTransitionLoop();
*var t1 = performance.now();
*console.log("Call to boxShadowTransitionLoop took " + (t1 - t0) + " milliseconds.")
*/

  //other test
//console.trace();
//console.error("I'm debugging this code.");
//console.log('something');
/*-----------------------------*/








/*--------------------------------------------------*/
/*--                  TRUE                        --*/
/*--------------------------------------------------*/
/* Loop to see if any of the checkboxes are checket */

function checkedTrue() {  
    
var formDivInp = document.querySelectorAll('form > div > input');
var formDivLbl = document.querySelectorAll('form > div > label'); 

  // Number of inputs
for (var i = 0; i < formDivInp.length; i++) {

  // Number of labels
  // Gets the .innerHTML works also with.textContent
for (var i = 0; i < formDivLbl.length; i++) {

    // Any box checked - send to DIV id='presentOutput'
if (formDivInp[i].checked === true) {

    document.getElementById('presentHeading').style.visibility="visible";

    var inpChecked = formDivLbl[i].innerHTML;
     document.getElementById('presentOutput').innerHTML += inpChecked +  ' ' + '<br />';
      
    }   //end if
    }   // end for  
    }   // end for  
}   // end function
        
/*--------------------------------------------------*/
/*--                  FALSE                       --*/
/*--------------------------------------------------*/


function checkedFalse() {
    
var formDivInp = document.querySelectorAll('FORM > DIV > INPUT');
var formDivLbl = document.querySelectorAll('FORM > DIV > LABEL'); 

  // Number of inputs
for (var i = 0; i < formDivInp.length; i++) {
      
  // Number of labels
  // Gets the .innerHTML works also with.textContent
for (var i = 0; i < formDivLbl.length; i++) {

  // Any box not checked - send to DIV id='absentOutput'
if (formDivInp[i].checked === false) {
    
    document.getElementById('absentHeading').style.visibility="visible";

    var inpChecked = formDivLbl[i].innerHTML;
    document.getElementById('absentOutput').innerHTML += inpChecked + ' ' + '<br />';
        
    }   //end if
    }   // end for  
    }   // end for  
}    //end function




/***-----------------------------------------***/

function outputHeadings() {
    
  //get tot number of  inputs    
var numbFormDivInp = document.querySelectorAll('FORM > DIV > INPUT').length;

  //get tot numbers of BR generated, no of submited    
var brl = presentOutput.getElementsByTagName("BR").length;
  

var a = brl;                        // no of br elements generated
var b = numbFormDivInp;             // tot no of inputs
//var c = (a / b * 100);            // %
var c = Math.round(a / b * 100);    // % rounded
var d = new Date();  

//console.log(brl); 
//console.log(numbFormDivInp); 
//console.log(a); 
//console.log(b); 
//console.log(c); 


document.getElementById('presentDate').innerHTML = 
d.toDateString() + "<br>" + a + ' out of ' +  b  + '  ' + '(' + c + '%'  + ')';
     
}   // end function


      

/*---------------------------------------------*/
/*-- reset button funciton                   --*/

   // BUTTON - reset checked input
 function resetInput() {
     document.getElementById("form1").reset();
}  // end function
      

// These two will do the same
//document.getElementById('output').reset();
 //document.getElementById('output').innerHTML = '';






/*------------------------------------------------*/
/*     onclick function on the SUBMIT button. 
 *     functions -  populate output
 * - checkedTrue = Class members present 
 * - checkedFalse = Class members absent 
 * - outputHeadings - make visible when submit  
 * - rotate - switch/rotate inputContainerDiv to view the output  
 */

function submit() {
    checkedTrue();
    checkedFalse();
    outputHeadings();
    rotate();   //rotate to view output
    
}  // end function



/***---------------------------------------------***/
/*--            ROTATE FUNCTION                  --*/
/***---------------------------------------------***/

function rotate() {
    
      /*--- Spining function ---*/
 var div = document.getElementById('inputContainerDiv');

  //this transform may not work along with box-shadow function    
div.style.transitionDuration = "1.5s";
div.style.transform = " rotateX(360deg)";  //spin 1 time
div.style.backfaceVisibility = "hidden";

var mydiv = document.createElement('DIV');      
mydiv.setAttribute('id', 'myDiv');
  //nest mydiv into inputContainerDiv     
inputContainerDiv.appendChild(mydiv);
    
    
var rotout = document.getElementById('outputContainerDiv');
mydiv.appendChild(rotout);
    
/***------------ BACK button -------------------------------***/
    
  //create back btn img    
var backbtn = document.createElement('IMG');
backbtn.setAttribute('onclick', 'rotateBack()');
backbtn.setAttribute('onmouseover', 'btnMOver(this)');
backbtn.setAttribute('onmouseout', 'btnMOut(this)');   
backbtn.setAttribute('src', 'img/backW69H30.jpg');
backbtn.setAttribute('width', '69');
backbtn.setAttribute('height', '30');
backbtn.setAttribute('alt', 'back btn');
backbtn.setAttribute("id", "backBtn");
backbtn.setAttribute('class', 'Btn');
mydiv.appendChild(backbtn);
  
    
    
    
    
/***---------------------------------------------***/
/*--            EMAIL                            --*/
/* will start outlook with keno1se@yahoo.se 
 * EMAIL file - addEventListener method
 */

  //create Email btn img    
var emailBtn = document.createElement('IMG');
emailBtn.setAttribute('src', 'img/emailW69H30.jpg');
emailBtn.setAttribute('onmouseover', 'btnMOver(this)');
emailBtn.setAttribute('onmouseout', 'btnMOut(this)');   
emailBtn.setAttribute('width', '69');
emailBtn.setAttribute('height', '30');
emailBtn.setAttribute('alt', 'Email btn');
emailBtn.setAttribute("id", "mailBtn");
emailBtn.setAttribute('class', 'Btn');
mydiv.appendChild(emailBtn);


function sendMail() {
      //encodeURI replaces escape    
      //uri will render in a single line, and handle åÅäÄöÖ    
    var uri = document.getElementById('outputContainerDiv').innerText;
    var enc = encodeURI(uri);   //good, renders on two lines
    var dec = decodeURI(enc);   //back to uri
    
    var link = "mailto:nordmanken1@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURI("Members today")
             + "&body=" + enc;  //text in body

    window.location.href = link;
        
}  //end function               

document.getElementById("mailBtn").addEventListener("click", sendMail);
  
    
    
    
    
    
/***---------------------------------------------***/
/*--            DOWNLOAD                         --*/
/* DOWNLOAD file 
 * addEventListener method, self invoked func
 */

    //Create download btn
var downloadBtn = document.createElement('IMG');
downloadBtn.setAttribute('src', 'img/dlW69H30.jpg');
downloadBtn.setAttribute('onmouseover', 'btnMOver(this)');
downloadBtn.setAttribute('onmouseout', 'btnMOut(this)');    
downloadBtn.setAttribute('width', '69');
downloadBtn.setAttribute('height', '30');
downloadBtn.setAttribute('alt', 'Download btn');
downloadBtn.setAttribute("id", "dwnBtn");
downloadBtn.setAttribute('class', 'Btn');
mydiv.appendChild(downloadBtn);

  //must have comma after =utf-8, or download will not work

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}  //end function


  // Start file download.
  // .textContent and .innerText is working
document.getElementById("dwnBtn").addEventListener("click", function(){
    var text = document.getElementById('outputContainerDiv').innerText;
    var filename = "members.txt";  //save as text file
    //var filename = "members.csv";  //csv =excel, not render åäö  
    
download(filename, text);   //basket to constuctor funct download
}, false);  

    
    
    
    
/***---------------------------------------------***/
/*--            BUTTON styling                   --*/
/* Self extracting function, style all buttons
 */

(function buttFunct() {
    var allbutton = document.getElementsByClassName('Btn');
    
    for (var i = 0; i < allbutton.length; i++) {
        allbutton[i].style.borderRadius = '6px';        
        allbutton[i].style.marginRight = '4px';        
        allbutton[i].style.marginTop = '10px';        
        allbutton[i].style.border = 'outset';        
        allbutton[i].style.cursor = 'pointer';        
    }
})();  //end funct



/***-----------  Hide elements  --------------***/
    
document.getElementsByClassName('addBtn')[0].style.visibility = 'hidden';

document.getElementById('form1').style.display = 'none';
document.getElementById('inputAdd').style.display = 'none';
document.getElementById('inputContainerText').style.display = 'none';
document.getElementById('presentHeading').style.visibility = 'visible';

  //Important! on buttons use visibilit and not display to hide and show them, it'll not render back as before othervise
var btn = document.getElementsByClassName('Btn');
btn[0].style.visibility = 'hidden';
btn[1].style.visibility = 'hidden';

    
    
}   //end rotate function





/***---------------------------------------------***/
/*--            ROTATE BACK                      --*/
/***---------------------------------------------***/

function rotateBack() {

  /*--- Spining function ---*/
var div = document.getElementById('inputContainerDiv');
div.style.transitionDuration = "1.5s";
div.style.webkitTransform = "rotate(0deg)";

  /*--- restore elements, visible in DOM ---*/
document.getElementById('form1').style.display = 'block';
document.getElementById('inputAdd').style.display = 'block';
document.getElementById('inputContainerText').style.display = 'block';
document.getElementsByClassName('addBtn')[0].style.visibility = 'visible';

   //Important! on buttons use visibilit and not display to hide and show them, it'll not render back as before othervise
var btn = document.getElementsByClassName('Btn');
btn[0].style.visibility = 'visible';
btn[1].style.visibility = 'visible';
btn[2].style.visibility = 'visible';

    
  // self extracting funct to reset output    
  // same as BUTTON - reset checked output
(function resetOutput() {
    document.getElementById('presentOutput').innerHTML = '';
    document.getElementById('presentHeading').style.visibility="hidden";
    
    document.getElementById('absentOutput').innerHTML = '';
    document.getElementById('absentHeading').style.visibility="hidden";
        
})();   // end function

  
    /***-------------------------------------------***/

  //Email btn none
document.getElementById('mailBtn').style.display = 'none';
  
//outputs back to body
var rotout = document.getElementById('outputContainerDiv');
document.body.appendChild(rotout);

  //remove temporary generated 'myDiv' 
  //remove Email btn            
var parent = document.getElementById('inputContainerDiv');
parent.removeChild(parent.lastChild);
    
}   //end rotateBack






  /***-----------------------------------------------------***/
  /*--                  CENO                               --*/
  /***-----------------------------------------------------***/
  /* contact Ceno
   */

  //hide when click x in var thSpan      
function closeCenoTable() {
    var closecenoTable = document.getElementById("cenoTable");
    closecenoTable.style.visibility = 'hidden';
}  //end funct


  //visible when click ceno
function contactCeno() {
    var openCenoTable = document.getElementById("cenoTable");
    openCenoTable.style.visibility = 'visible';
}  //end funct


function th2Function() {
    boxShadowTransitionLoopStop();
    closeCenoTable();
    alert('Loop must run through it\'s cycle before it stops. \n Will take maximum 18 seconds.');
}  //end funct



  /*---------------------------------------------------------*/
  /*--                     SEARCH                          --*/
  /*---------------------------------------------------------*/
  /* Search to see if a name is defined in the class member form
   */

function promptSearch(){

      //get all the class members      
    var allClassMembers = document.getElementById('form1').textContent;

      //get the prompt input person name
    var person = prompt("Check if class member is in the list - enter name:", "!This search is case sensitive, check correct spelling of the name");        
      //See if person is one of allClassMembers    
    var result = allClassMembers.indexOf(person);
  
      //Returns -1 if the item is not found
    if (result > -1){
        alert(person + ' ' + 'is in the list');
    }  //end if
    else {
        alert(person + ' ' + 'is NOT in the list');
    }  //end else    
    
}  //end function




  /*---------------------------------------------------------*/
  /*--             - EMAILJS                               --*/
  /*---------------------------------------------------------*/
  /* EMAILJS,
   * everytime someone clicks on tr2D2 (linkedIn)  - email sent to 
   * my gmail
   */
    
  //send email
  // function can't be called emailjs
tr2td2.onclick = function cenoSndEmail() {
emailjs.send("default_service", "nynarvaroceno",{});

};  //end emailJs function





  /*---------------------------------------------------------*/
  /*--     MOUSEOVER, MOUSEOUT functions                   --*/
  /*---------------------------------------------------------*/
  /* In order to make the site more "alive"
   * addEventListeners are used 
   */

  /*---------------------------
   * - ceno
   */
ceno.addEventListener("mouseover", cenoMOver);
ceno.addEventListener("mouseout", cenoMOut);

function cenoMOver() {
    cenoSpan.style.color = 'rgba(255, 255, 255, 1.0)';  //white
}
function cenoMOut() {
    cenoSpan.style.color = 'rgba(0, 230, 0, 1.0)';  //green
}


  /*---------------------------
   * - magnifier
   */
magnifier.addEventListener("mouseover", magnifierMOver);
magnifier.addEventListener("mouseout", magnifierMOut);

function magnifierMOver() {
    magnifierSpan.style.color = 'rgba(255, 255, 255, 1.0)';  //white
}
function magnifierMOut() {
    magnifierSpan.style.color = 'rgba(0, 230, 0, 1.0)';
     //green
}


  /*---------------------------
   * - add
   */
addBtn.addEventListener("mouseover", addMOver);
addBtn.addEventListener("mouseout", addMOut);

function addMOver() {
    spanAdd.style.background = 'rgba(102, 102, 102, 1.0)';  //dark grey
    spanAdd.style.color = 'rgba(255, 255, 255, 1.0)';  //text color white
}
function addMOut() {
      //normal
    spanAdd.style.background = 'rgba(217, 217, 217, 1.0)';  //light grey
    spanAdd.style.color = 'rgba(85, 85, 85, 1.0)';  //text color grey
}


  /*---------------------------
   * - buttons
   */
function btnMOver(element) {
    element.style.borderRadius = '15px';        
}
function btnMOut(element) {
    element.style.borderRadius = '6px';        
}


  /*---------------------------
   * - closing X - add - Dynamic
   */
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("mouseover", function(event) {
    event.target.style.fontSize = '20px';                          
    event.target.style.fontWeight = 'bold';                         });

    close[i].addEventListener("mouseout", function(event) {
    event.target.style.fontSize = 'initial';
    });

}  //end for
