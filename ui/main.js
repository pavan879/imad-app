console.log('Loaded!');
   var img=document.getElementById('ntt');
img.onclick=function()
{
    img.style.marginleft='1000px';
};

function main() {
 
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click',function()
                   {
    $(this).next().slideToggle(400);
    $(this).text('Projects Viewed');
  });

function AlertSave(v) {
window.open(v,"_blank");
}

$("button").click(function () {
var v = $(this).attr("value");
AlertSave(v);
}
);
    
}
   
$(document).ready(main);

