console.log('Loaded!');

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
  
  $(':input').on('click',function myblog(x,y)
{

 var j = x;
 var k = y;
 alert(j*k);
 if(j == 1){
       alert("am in");
      window.open('/pavan');
   
 }
 
 
  
});

    
    
}
$(document).ready(main);



/*var button=document.querySelector('input');
button.onclick=function myblog()
{
  window.open('/pavan');
};*/