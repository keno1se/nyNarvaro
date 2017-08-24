'use strict';

    
  /*-------------------------------------------*/
  /*--              BODY                     --*/
  /*-------------------------------------------*/
  /* BODY styling
   * Changes affect all elements in body    
   */
var bodyCss = document.getElementsByTagName('BODY')[0];
bodyCss.style.color = 'rgba(0, 0, 0, 1.0)'; //black ; 
bodyCss.style.fontFamily = 'calibri, sans-serif'; 

  /* Include the padding and border in an element's 
   *total width and height
   */
bodyCss.style.boxSizing = 'border-box';



  /*-------------------------------------------*/
  /*--            HEADER                     --*/
  /*-------------------------------------------*/

var headerStyle = document.getElementById('myHeader');
headerStyle.style.background = 'black';
headerStyle.style.width = '545px';
headerStyle.style.height = 'auto';
headerStyle.style.paddingTop = '10px';
headerStyle.style.paddingBottom = '10px';
headerStyle.style.paddingLeft = '10px';
headerStyle.style.borderRadius = '5px';



  /*-------------------------------------------*/
  /*--         CENO                          --*/
  /*-------------------------------------------*/
  /* DIV - ceno
   */
ceno.style.width = '100px';
ceno.style.height = '55px';  //create spece to inputContainerDiv
ceno.style.marginLeft = '130px';  //aligen left of lexlog
ceno.style.marginTop = '-35px';  //center cenoDiv with lexlog text
ceno.style.cursor = 'pointer';   

cenoMenyJpg.style.verticalAlign = 'middle';  //center IMG with cenoDiv


  /*----------------------------
   * SPAN - ceno
   */
cenoSpan.style.fontSize = '20px';  //size ceno
cenoSpan.style.color = 'rgba(0, 230, 0, 1.0)';  //green
cenoSpan.style.marginLeft = '7px';  //dist to 'menyH24V25.jpg'
cenoSpan.style.verticalAlign = 'middle';   //center cenoSpan with IMG


  /*----------------------------
   * TABLE - cenoTable
   */

cenoTable.style.position = 'absolute';
cenoTable.style.marginTop = '-300px';
cenoTable.style.marginLeft = '10px';
cenoTable.style.width = '555px';
cenoTable.style.paddingBottom = '15px';
cenoTable.style.paddingRight = '10px';
cenoTable.style.border = 'outSet';
cenoTable.style.background = 'hsla(0, 0%, 90%, 1.0)';  //grey
  //visible only when contactCeno()
cenoTable.style.visibility = 'hidden';

/*-- Table Header styling --*/
th1.style.textAlign = 'left';
th2.style.textAlign = 'left';
th3.style.textAlign = 'left';
th3.style.fontWeight = 'normal';
th3.style.cursor = 'pointer';  

  //align close text to the right away from TH txt 
thSpan.style.marginRight = '40%';
thSpan.style.marginLeft = '60%';
thSpan.style.background = 'hsla(0, 0%, 80%, 1.0)';  //grey

  //empty row, syle how much space needed with height    
//trEmpty.style.height = '0px';

txtP.style.color = 'green';
txtP.style.fontWeight = 'normal';
txtP.style.fontStyle = 'italic';



  /*----------------------*/
  /*--     magnifier    --*/
  /*----------------------*/
   /* DIV - magnifier
    */
magnifier.style.width = '100px';
magnifier.style.height = '45px';  //create spece to inputContainerDiv
magnifier.style.paddingTop = '7px';  //center text with lexlog
magnifier.style.marginLeft = '220px';  //dist to ceno
magnifier.style.marginTop = '-61px';  // center magnifier div with ceno div
magnifier.style.cursor = 'pointer';   

magnifierJpg.style.verticalAlign = 'middle';  //center IMG in magnifier div

  /*----------------------------
   * SPAN - magnifier
   */
magnifierSpan.style.fontSize = '20px';  //size Search
magnifierSpan.style.color = 'rgba(0, 230, 0, 1.0)';  //green
magnifierSpan.style.marginLeft = '7px';  //dist to 'magnH25xV25.jpg'
magnifierSpan.style.verticalAlign = 'middle';  //center magnifierSpan with IMG




  /*-------------------------------------------*/
  /*--            OUTPUT                     --*/
  /*-------------------------------------------*/
 
var presentStyling = document.getElementById('presentOutput');
    presentStyling.style.color = 'rgba(0, 140, 0, 1.0)'; //green
    
var absentStyling = document.getElementById('absentOutput');
    absentStyling.style.color = 'rgba(240, 0, 0, 1.0)'; //red      
 

  /*----------------------------
   * FORM border
   */
var form = document.getElementById('form1');

form.style.width = '380px';
  //add space to input/span
form.style.marginBottom = '3px';  
form.style.borderRadius = '8px';  


  //Classs members present today text
var presentHeading = document.getElementById('presentHeading');
presentHeading.style.marginTop = '-10px';
presentHeading.style.marginBottom = '0px';
presentHeading.style.marginLeft = '0px';

var absentHeading = document.getElementById('absentHeading');
absentHeading.style.marginBottom = '0px';


  /*------------------------------------------*/
  /*--              INPUT                   --*/
  /*------------------------------------------*/
 
  /*** Container Header ***/
var contHeader = document.getElementsByClassName('headerOld')[0];
contHeader.style.width = '410px';
contHeader.style.backgroundImage = "url('img/000start2.jpg')";
contHeader.style.backgroundRepeat = 'no-repeat';
//contHeader.style.backgroundPosition = 'center';
contHeader.style.backgroundPosition = 'right, top';
contHeader.style.backgroundSize = 'cover';
//contHeader.style.backgroundOrigin = 'content-box'; //no good
//contHeader.style.backgroundOrigin = 'border-box';    //no diff

contHeader.style.padding = '20px 60px 30px';
contHeader.style.color = 'hsla(0, 0%, 0%, 1.0)';  //make p#presentHeading,p#absentHeading, text black
contHeader.style.textAlign = 'left'; //right/center/left
contHeader.style.borderRadius = '45px 5px 85px 18px';
contHeader.style.border = 'ridge';

contHeader.style.boxShadow = '-50px -5px 150px rgba(255, 153, 0, 0.8) inset';  //orange  



  /*-------------------*/
  /*--     Add       --*/
  /*-------------------*/

  /*** input field    ***/
var input = document.getElementById('inputAdd');
input.style.width = '310px';
input.style.height = '10px';
input.style.cssFloat = 'left';
  //Change size of input field
input.style.padding = '10px';
input.style.border = '0px';
  //topLeft, topRight, bottomRight, bottomLeft
input.style.borderRadius = '5px 0px 0px 5px';


  /*** SPAN    ***/
var span = document.getElementsByClassName('addBtn')[0];
span.style.width = '30px';
span.style.height = '10px';
  //add space to form1
span.style.padding = '10px';
  //add btn float left after input
span.style.cssFloat = 'left';
  //topLeft, topRight, bottomRight, bottomLeft
span.style.borderRadius = '0px 5px 5px 0px';
span.style.background = '#d9d9d9';
span.style.color = '#555';  //text color grey



  /*------------------------------------------*/
  /*--       BUTTON styling- on page load   --*/
  /*------------------------------------------*/
  /*Self extracting function, style all buttons
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



  /*-------------------------*/
  /*--  shadowEffectDiv    --*/
  /*-------------------------*/

shadowEffectDiv.style.width = '530px';
shadowEffectDiv.style.borderRadius = contHeader.style.borderRadius;




