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

$(':input').on('click',myblog);

function myblog(x)
{
    switch(x)
    {
        case 1:window.open('/pavan');
            break;
            
        case 2:window.open('/raja');
            break;
            
        case 3:window.open('/yash');
            break;
            
    }
   
 }
    
    
}
$(document).ready(main);

/*var button=document.querySelector('input');
button.onclick=function myblog()
{
  window.open('/pavan');
  var j = x.valueOf();
};*/