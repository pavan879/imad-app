

console.log('Loaded!');

var img=document.getElementById('ntt');
img.onclick=function()
{
    img.style.marginleft='1000px';
};

function main(){
    $('.center').hide();
    $('.center').fadeIn(1000);
}



function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click',function()
                   {
    $(this).next().slideToggle(400);
    $(this).text('Projects Viewed');
    
  });
  
  function myblog(x){
      if(x=='p'){
      window.open('/pavan');}
      else if(x=='q'){
      window.open('/raja');}
      else if(x=='r'){
      window.open('/yash');}
  }
  
 $(':input').click(function () {
      var x= $(this).attr("value");
       myblog(x);
    });
}





$(document).ready(main);

/*var button=document.querySelector('input');
button.onclick=function myblog()
{
  window.open('/pavan');
  var j = x.valueOf();
};*/

/*button.onclick=function myblog(x)
{
  if(x=='p'){
  window.open('/pavan');}
  else if(x=='q'){
     window.open('/raja'); 
  }
  else if(x=='r'){
     window.open('/yash'); 
  }
  
};*/

/*$(':input').on('click',myblog);

    switch(myblog(x))
    {
        case 'p':window.open('/pavan');
            break;
            
        case 'q':window.open('/raja');
            break;
            
        case 'r':window.open('/yash');
            break;
    
    }*/