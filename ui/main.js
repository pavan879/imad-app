console.log('Loaded!');


function main() {
    var img=document.getElementById('ntt');
img.onclick=function()
{
    img.style.marginleft='1000px';
};
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click',function()
                   {
    $(this).next().slideToggle(400);
    $(this).text('Projects Viewed');
  });



    
}
   
$(document).ready(main);

