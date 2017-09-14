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
  
 /* $(':input').on('click',function myblog()
{
    
      window.open('/raja');
      
      
   
 });*/

$(':input').on('click',myblog());

function myblog()
{
    window.open('/pavan');
 }
    
    
}
$(document).ready(main);



/*var button=document.querySelector('input');
button.onclick=function myblog()
{
  window.open('/pavan');
};*/