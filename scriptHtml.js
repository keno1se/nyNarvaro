'use strict';

/*-----------------------------------*/
/* HTML
 */        
document.getElementsByTagName("HTML").lang = 'en'; 

/*-----------------------------------*/
/* TITLE
 */        
    var title = document.createElement("TITLE");
    var txt = document.createTextNode("Only javaScript web page: NyNarvaro, ceno, keno1se");
    title.appendChild(txt);
    document.head.appendChild(title);
        
    /*-----------------------------------*/ 
    /* META
     */   
    var meta = document.createElement('META');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'A web page purely built with javaScript');
    document.head.appendChild(meta);
        
    var meta = document.createElement('META');        
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
    document.head.appendChild(meta);    
        
    var meta = document.createElement('META');
    meta.setAttribute('name', 'keywords');
    meta.setAttribute('content', 'ceno, keno1se, narvaro, nynarvaro, nyNarvaro, javaScript');
    document.head.appendChild(meta);
        
    var meta = document.createElement('META');
    meta.setAttribute('name', 'author');
    meta.setAttribute('content', 'Kenneth "Ceno" Nordman');
    document.head.appendChild(meta);

    /*----- This meta didn't render ok, for (åÅäÄöÖ) 
    *       So I made a proper HTML tag instead.
    *var meta = document.createElement("META");
    *meta.setAttribute("charset", "UTF-8");
    *document.head.appendChild(meta);
    */        
        



/*-------------------------------------------------------------*/
/*------- HEADER, LIXECON LOGO  -------------------------------*/
/*-------------------------------------------------------------*/


var header = document.createElement('HEADER');
header.setAttribute('id', 'myHeader');
document.body.appendChild(header);



var lexlog = document.createElement('IMG');
lexlog.setAttribute('src', 'img/lexicon004.gif');
lexlog.setAttribute('width', '116');
lexlog.setAttribute('height', '40');
lexlog.setAttribute('alt', 'LIXECON logo');
header.appendChild(lexlog);

/*-------------------------------------------------------------*/
/*------- Ceno section -          -----------------------------*/
/*-------------------------------------------------------------*/

/*----------------------------*/
/* DIV - ceno
*/
var ceno = document.createElement('DIV');
ceno.setAttribute('onclick', 'contactCeno()');
var txt = document.createTextNode('\u2263');
ceno.appendChild(txt);
  //nest ceno into header
header.appendChild(ceno);

/*------------------------------------------*/
/* SPAN -  cento txt
*/
var cenoSpan = document.createElement('SPAN');
cenoSpan.setAttribute('id', 'cenoSpan');
var txt = document.createTextNode('ceno');
  //append text node to cenoSpan
cenoSpan.appendChild(txt);
  //nest cenoSpan into ceno DIV
ceno.appendChild(cenoSpan);


/*------------------------------------------*/
/* TABLE -  cenoTable
*/

var cenoTable = document.createElement("TABLE");
cenoTable.setAttribute("id", "cenoTable");
document.body.appendChild(cenoTable);

var cenoTbody = document.createElement("TBODY");
cenoTable.appendChild(cenoTbody);

  /*---------------------------------------
  * th1
  */
var th1 = document.createElement("TH");
var txt = document.createTextNode("Feel free to contact me");
th1.appendChild(txt);
th1.setAttribute('colSpan', '2');
cenoTbody.appendChild(th1);

  //closing x
var thSpan = document.createElement('SPAN');
thSpan.setAttribute('onclick', 'closeCenoTable()');
var txt = document.createTextNode('Close');
thSpan.appendChild(txt);
th1.appendChild(thSpan);

  /*---------------------------------------
  * tr1
  */
var tr1 = document.createElement("TR");
cenoTbody.appendChild(tr1);

var tr1td1 = document.createElement("TD");
var txt = document.createTextNode("Email:");
tr1td1.appendChild(txt);
tr1.appendChild(tr1td1);

var tr1td2 = document.createElement("TD");
tr1.appendChild(tr1td2);

  /*---------------------------------------
  * tr2
  */
var tr2 = document.createElement("TR");
cenoTbody.appendChild(tr2);

var tr2td1 = document.createElement("TD");
var txt = document.createTextNode("linkedIn:");
tr2td1.appendChild(txt);
tr2.appendChild(tr2td1);

var tr2td2 = document.createElement("TD");
tr2.appendChild(tr2td2);

  /*---------------------------------------
  * tr3
  */
var tr3 = document.createElement("TR");
cenoTbody.appendChild(tr3);

var tr3td1 = document.createElement("TD");
var txt = document.createTextNode("GitHub:");
tr3td1.appendChild(txt);
tr3.appendChild(tr3td1);

var tr3td2 = document.createElement("TD");
tr3.appendChild(tr3td2);

/*---------------------------------------
  * tr4
  */
var tr4 = document.createElement("TR");
cenoTbody.appendChild(tr4);

var tr4td1 = document.createElement("TD");
var txt = document.createTextNode("Web page:");
tr4td1.appendChild(txt);
tr4.appendChild(tr4td1);

var tr4td2 = document.createElement("TD");
tr4.appendChild(tr4td2);

/*---------------------------------------
  * th2 - the story of the page txt
  */
var th2 = document.createElement("TH");
th2.setAttribute('colSpan', '2');
var txtP = document.createElement("P");
var txt = document.createTextNode('It’s amazing how much stuff that comes to your attention once you start focusing on something - anything - all upcoming details... Initially the intention was only to test some features but ended up as an all only javaScript page! Everything is built and rendered with JS except for some necessary HTML. It was really a good way to explore and test. Yes, the traditional way of split a site into built, styling and functionality is to prefer and follow; but I sort of got into this and find it easier in some way only following one method all the way through. One thing is for sure true: JavaScript is Fun!');
txtP.appendChild(txt);
th2.appendChild(txtP);
cenoTbody.appendChild(th2);


/*---------------------------------------
  * trEmpty blank row to create space in table, style with hight
  * needed to separate th2 from th3
  */
var trEmpty = document.createElement("TR");
cenoTbody.appendChild(trEmpty);


/*---------------------------------------
  * th3 - stop loop
  */
var th3 = document.createElement("TH");
var txt = document.createTextNode("Stop the annoying  background animation loop - Please!  Sure, just click me...");
                                  
th3.setAttribute('onclick', 'th2Function()');
th3.appendChild(txt);
th3.setAttribute('colSpan', '2');
cenoTbody.appendChild(th3);



/*---------------------------------------
  * A - table links
  */


  /* Email */
var yahoo = document.createElement('A');
var txt = document.createTextNode
('keno1se@yahoo.se');
yahoo.appendChild(txt);
yahoo.setAttribute
('href', 'mailto:keno1se@yahoo.se');
tr1td2.appendChild(yahoo);

  /* linkedIN */
var linkedIn = document.createElement('A');
var txt = document.createTextNode
('Kenneth Nordman search in: https://www.linkedin.com/');
linkedIn.appendChild(txt);
linkedIn.setAttribute
('href', 'https://www.linkedin.com/in/kenneth-nordman-56349011/');
linkedIn.setAttribute('target', '_blank');
tr2td2.appendChild(linkedIn);

  /* GitHub */
var git = document.createElement('A');
var txt = document.createTextNode
('https://github.com/keno1se/');
git.appendChild(txt);
git.setAttribute
('href', 'https://github.com/keno1se/');
git.setAttribute('target', '_blank');
tr3td2.appendChild(git);

  /* Web page */
var kenoMic = document.createElement('A');
var txt = document.createTextNode
('https://keno1se.github.io/kenoMic/');
kenoMic.appendChild(txt);
kenoMic.setAttribute
('href', 'https://keno1se.github.io/kenoMic/');
kenoMic.setAttribute('target', '_blank');
tr4td2.appendChild(kenoMic);




/*-------------------------------------------------------------*/
/*------- magnifier             -------------------------------*/
/*-------------------------------------------------------------*/
/* DIV - magnifier
 */
var magnifier = document.createElement('DIV');
//magnifier.setAttribute('class', 'navTop');
magnifier.setAttribute('onclick', 'promptSearch()');
var txt = document.createTextNode('\u{2315}');
magnifier.appendChild(txt);
  //nest magnifier into header
header.appendChild(magnifier);

/*------------------------------------------*/
/* SPAN -  magnifier txt
 */
var magnifierSpan = document.createElement('SPAN');
magnifierSpan.setAttribute('id', 'magnifierSpan');

var txt = document.createTextNode('Search');
  //append text node to cenoSpan
magnifierSpan.appendChild(txt);


  //nest magnifierSpan into magnifier DIV
magnifier.appendChild(magnifierSpan);



/*-------------------------------------------------------------*/
/*------- INPUT Section         -------------------------------*/
/*-------------------------------------------------------------*/

/*----------------------------*/
/* DIV - inputContainerDiv
 */
var inputContainerDiv = document.createElement('DIV');
inputContainerDiv.setAttribute('id', 'inputContainerDiv');
inputContainerDiv.setAttribute('class', 'headerOld');

 //nest inputContainerDiv into header
header.appendChild(inputContainerDiv);

//option to make visible in document outside the header 
//document.body.appendChild(inputContainerDiv);



/*----------------------------*/
/* SPAN - inputContainerText
 */
var inputContainerText = document.createElement('SPAN');
inputContainerText.setAttribute('id', 'inputContainerText');
var txt = document.createTextNode('Class members');
inputContainerText.appendChild(txt);

//nest inputContainerText into inputContainerDiv
inputContainerDiv.appendChild(inputContainerText);





/*-------------------------------------------------------------*/
/*        INPUT dynamic/static  -------------------------------*/
/*-------------------------------------------------------------*/
/* FORM, INPUT, SPAN add funct, STATIC funct, BUTTONS          */
/*------- Will generat input into form ------------------------*/
/*-------------------------------------------------------------*/

/*------------------------------------------*/
/* FORM - form1
 */
var form = document.createElement("FORM");
form.setAttribute("id", "form1");
document.body.appendChild(form);
  //nest form into inputContainerDiv
inputContainerDiv.appendChild(form);



/*-------------------------------------------------------------*/
/*   DYNAMIC input              -------------------------------*/
/*-------------------------------------------------------------*/

/*------------------------------------------*/
/* INPUT - inputAdd
*/
var inputAdd = document.createElement('INPUT');
inputAdd.setAttribute('id', 'inputAdd');
inputAdd.setAttribute('type', 'text');
inputAdd.setAttribute('placeholder', 'Add a member...');

  //nest inputAdd into inputContainerDiv
inputContainerDiv.appendChild(inputAdd);


/*------------------------------------------*/
/* SPAN - add function button
*/
var addBtn = document.createElement('SPAN');
addBtn.setAttribute('class', 'addBtn');
addBtn.setAttribute('onclick', 'addElement()');

var txt = document.createTextNode('Add');
  //append text node to myspan
addBtn.appendChild(txt);

  //nest addBtn into inputContainerDiv
inputContainerDiv.appendChild(addBtn);



/*-------------------------------------------------------*/
/*--  STATIC input                   --------------------*/
/*-------------------------------------------------------*/
/* funct to create static input, by assigning var newMember
*/

function StaticInput(label, divSt) {
    
var divstatic = document.createElement('DIV');
divstatic.setAttribute('id', divSt);
divstatic.setAttribute('class', 'divStat');
document.getElementById("form1").appendChild(divstatic);  
    
  //create INPUT element
var chkBox = document.createElement("INPUT");
chkBox.setAttribute("type", "checkbox");
chkBox.setAttribute("class", "box");
document.body.appendChild(chkBox); 
  //nest INPUT into DIV
document.getElementById(divSt).appendChild(chkBox);  
  //document.getElementById("form1").appendChild(chkBox);  

  //create LABEL
var lbl = document.createElement("LABEL");
var txt = document.createTextNode(label);
  //append text node to label
lbl.appendChild(txt); 
  //nest LABEL into INPUT
chkBox.appendChild(lbl); 

  //insert LABEL after INPUT, need this to render
document.getElementById(divSt).appendChild(lbl, chkBox);  
    
 //insert LABEL before INPUT, need this to render
 //document.getElementById("form1").insertBefore(lbl, chkBox);  
    
  // Create BR after every new input    
var br = document.createElement("BR");


}  //end funct

/*-------------------------------------------------------*/
/*-------------------------------------------------------*/
/*-------------------------------------------------------*/
  /*** new var for each new input to be static ***/
var newMember0 = new StaticInput('Håkan Ehn', 'divSt1');
var newMember1 = new StaticInput('David Barrett', 'divSt2');
var newMember2 = new StaticInput('Charlie McCoy', 'divSt3');
var newMember3 = new StaticInput('Sonny Boy Williamson I', 'divSt5');
var newMember3 = new StaticInput('Sonny Boy Williamson II', 'divSt6');
/*-------------------------------------------------------*/
/*-------------------------------------------------------*/
/*-------------------------------------------------------*/




 /*------------------------------------------------*/
 /*-------------- BUTTONs -------------------------*/
 /*------------------------------------------------*/
 /*  Create images as buttons
  *  Button functions found in scriptFunctions.js
  *    - create img/button  --> submit()
  *    - create img/button  --> resetInput()
  */
 

 /*------------------------------------*/
 /* SUBMIT
  */

var submitBtn = document.createElement('IMG');
submitBtn.setAttribute('onclick', 'submit()');
submitBtn.setAttribute('src', 'img/SubmitW69H30.jpg');
submitBtn.setAttribute('width', '69');
submitBtn.setAttribute('height', '30');
submitBtn.setAttribute('alt', 'Submit btn');
submitBtn.setAttribute('class', 'Btn');
document.body.appendChild(submitBtn);
inputContainerDiv.appendChild(submitBtn);

 //var btn = document.createElement("BUTTON");
 //btn.setAttribute("onclick", "submit()");
 //var txt = document.createTextNode('Submit');
 //btn.appendChild(txt);
 //document.body.appendChild(btn);

/*----------------------------------------*/
/* RESET form input, checked
 */

var resetInpBtn = document.createElement('IMG');
resetInpBtn.setAttribute('onclick', 'resetInput()');
resetInpBtn.setAttribute('src', 'img/resetInputW69H30.jpg');
resetInpBtn.setAttribute('width', '69');
resetInpBtn.setAttribute('height', '30');
resetInpBtn.setAttribute('alt', 'Reset input btn');
resetInpBtn.setAttribute('class', 'Btn');
document.body.appendChild(resetInpBtn);
inputContainerDiv.appendChild(resetInpBtn);


//var btn = document.createElement("BUTTON");
//btn.setAttribute("onclick", "resetInput()");
//var txt = document.createTextNode('Reset input');
//btn.appendChild(txt);
//document.body.appendChild(btn);





/*-------------------------------------------------------------*/
/*------- OUTPUT SECTION        -------------------------------*/
/*-------------------------------------------------------------*/

/*-------------------------------
* DIV - outputContainerDiv 
*/
var outputContainerDiv = document.createElement("DIV");
outputContainerDiv.setAttribute("id", "outputContainerDiv");

  //make visible in document
  //need this for styling in scriptCSS
document.body.appendChild(outputContainerDiv); 




          /*-------------------*/
          /***--- PRESENT ---***/
          /*-------------------*/

/*-------------------------------
* P - presentHeading
*/
var presentHeading = document.createElement("P");
presentHeading.setAttribute("id", "presentHeading");
  
  //append textnode to presentHeading
var txt = document.createTextNode('Classs members present today: ');
presentHeading.appendChild(txt); 

  //nest presentHeading into outputContainerDiv
outputContainerDiv.appendChild(presentHeading);

  //hide P text shall only be visible when submitted
presentHeading.style.visibility = "hidden";   

        
/*-------------------------------
* SPAN  - presentDate
*/
var presentDate = document.createElement('SPAN');
presentDate.setAttribute('id', 'presentDate');

 /*need empty txtnode to build heading from function outputHeadings()
 *in combination with presentHeading
 */
var txt = document.createTextNode('');
  //append textnode to presentDate
presentDate.appendChild(txt);

  //nest presentDate into presentHeading
presentHeading.appendChild(presentDate);

/*-------------------------------
* DIV - presentOutput
*/
var presentOutput = document.createElement("DIV");
presentOutput.setAttribute("id", "presentOutput");

  //nest presentOutput into outputContainerDiv
outputContainerDiv.appendChild(presentOutput);


                              
          /*------------------*/
          /***--- ABSENT ---***/
          /*------------------*/



/*-------------------------------
* P - absentHeading
*/
var absentHeading = document.createElement("P");
absentHeading.setAttribute("id", "absentHeading");

var txt = document.createTextNode('Absent classs members: ');
  //append textnode to absentHeading
absentHeading.appendChild(txt); 

//hide absentHeading text, shall only be visible when submitted
absentHeading.style.visibility="hidden"; 

  //nest absentHeading into outputContainerDiv
outputContainerDiv.appendChild(absentHeading);

            

/*-------------------------------
* DIV - absentOutpu
*/
var absentOutput = document.createElement("DIV");
absentOutput.setAttribute("id", "absentOutput");

  //nest absentOutput into outputContainerDiv
outputContainerDiv.appendChild(absentOutput);



/*----------------------------*/
/* DIV - shadowEffectDiv
*/
var shadowEffectDiv = document.createElement('DIV');
shadowEffectDiv.setAttribute('id', 'shadowEffectDiv');

 //nest inputContainerDiv into header
header.appendChild(shadowEffectDiv);
shadowEffectDiv.appendChild(inputContainerDiv);
//option to make visible in document outside the header 
//document.body.appendChild(shadowEffectDiv);

