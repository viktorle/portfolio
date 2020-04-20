export default function handleMenuColor(cards,ref) {
  const textButtons = [ref.children[0].children[0]]
  let scrollLevel = window.pageYOffset + 46
  //console.log(scrollLevel)
  console.log(ref.children)
  let sections = [ref.children[3],ref.children[6],ref.children[9],ref.children[12],ref.children[15]]
  console.log(sections)

 textButtons.forEach(textButton => {
    let buttons = textButton.children
    
    for (let index = 0; index < sections.length; index++) {
      /*console.log(sections[index].offsetTop)
      console.log(sections[index].offsetHeight)
      console.log(scrollLevel)
      console.log(buttons[index])*/
      console.log(scrollLevel)
      console.log(sections[index].offsetTop )
      if (
        sections[index].offsetTop-200 < scrollLevel && scrollLevel
        <
          sections[index].offsetTop + sections[index].offsetHeight-200
      ) {
        buttons[index].classList.add('active')
      } else {
          buttons[index].classList.remove('active')
      }
    }
  })
}