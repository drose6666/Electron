export default function Accordion ({ visible, collapse, showAll = false}) {
   
   !showAll && $(collapse).hide()
   
   $(visible).on('click', function () {
      $(visible).not($(this)).removeClass('active')
      $(collapse).not($(this).children(collapse)).slideUp()
      $(this).toggleClass('active').children(collapse).slideToggle();
   })
}