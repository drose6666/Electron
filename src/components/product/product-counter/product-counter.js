const count = document.querySelectorAll('.count')
const countDown = document.querySelectorAll('.count-down')
const countUp = document.querySelectorAll('.count-up')

count.forEach(item => {
   item.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '')
   })
})

countDown.forEach(item => {
   item.addEventListener('click', function () {
      let countInput = item.nextElementSibling
      let val = Number(countInput.value)

      if (val > 1) countInput.value = val - 1
   })
})

countUp.forEach(item => {
   item.addEventListener('click', function () {
      let countInput = item.previousElementSibling
      let val = Number(countInput.value)

      countInput.value = val + 1
   })
})

