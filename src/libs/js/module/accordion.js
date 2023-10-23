export default function Accordion ({ visible, collapse}) {
   $(collapse).hide()

   $(visible).on('click', function () {
      $(visible).not($(this)).removeClass('active')
      $(collapse).not($(this).children(collapse)).slideUp()
      $(this).toggleClass('active').children(collapse).slideToggle();
   })
}