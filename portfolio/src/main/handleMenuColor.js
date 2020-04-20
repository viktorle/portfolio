export default function handleMenuColor(cards,ref) {
  const textButtons = [ref.children[0].children[0]]
  const menu = [ref.children[0]][0]
  let scrollLevel = window.pageYOffset + 46
  let sections = [ref.children[3],ref.children[6],ref.children[9],ref.children[12],ref.children[15]]
    textButtons.forEach(textButton => {
    let buttons = textButton.children
    if(scrollLevel > sections[0].offsetTop-50)
      {
          menu.classList.add("activeMenu")
      }
      
    else{
      menu.classList.remove("activeMenu")
    }
   

    for (let index = 0; index < sections.length; index++) {
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