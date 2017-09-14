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
  
  $(':input').on('click',function myblog(x)
{

  if(x==1){
  window.open('/pavan');}
  else if(x===2){
  window.open('/raja');}
  else if(x===3){
  window.open('/yash');}
  
});

    
    
}
$(document).ready(main);



/*var button=document.querySelector('input');
button.onclick=function myblog()
{
  window.open('/pavan');
};*/