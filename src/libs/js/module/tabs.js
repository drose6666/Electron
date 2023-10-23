export default function Tabs ({ visible, collapse, firstHide = false}) {
   if (firstHide) {
      $(collapse).hide();
   } else  {
      $(collapse).not(':first').hide();
      $(`${collapse}:first`).addClass('active');
   }
      
   $(visible).on('click', function () {
      $(visible).removeClass('active').eq($(this).index()).addClass('active');
      $(collapse).hide().removeClass('active').eq($(this).index()).fadeIn('500').addClass('active');
   })
}