
/*


///Div shouldn't be double than the number of color ---- It won't repeat otherwise
/// The parameter contains object

/= 'colors'===== property should be decalred in an array []
/= 'selector'===== class(.) , id(#) , or normally tags
/= 'css_property'===== color , background , border-color ??


** must use border size and type by css


===> This is not jquery plugin though. So It has to be called in the footer or you call 
whereever you want but the function should be called in the jquery syntax.



*/



function colorvariant(args){


// Lets set all the conditions by ternary

if(typeof args.colors == 'undefined'){
colors=['red','yellow','pink','rgba(87, 255, 0,0.1)','hotpink','#C5E1F4'];
}else{
colors=args.colors;
}

var x=document.querySelectorAll(args.selector);
var cs=args.css_property;



var i=0;
while(i<colors.length){
x[i].style[cs]=colors[i];
i++;
}
/* =========For additional colors loop ... It will pick from beginning======= */

var subs=colors.length;
var j=colors.length;

var l=0;
while(j<x.length){
x[j].style[cs]=colors[l];

//////////Set another condition for keep repeating the colors
if(colors.length-1==l){
l=0;
}else{
l++;
}



/* End */

j++;
}


}
