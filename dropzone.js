import "//hashsan.github.io/use/use.js"
import "//hashsan.github.io/drop/drop.js"
import "https://hashsan.github.io/drop/upimage.js"


export class DropZone{
  el
  constructor(query){
    this.el = fn.q(query)
  }
  start=()=>{
    drop(async file=>{
      if (!file) {
        return;
      }
      const src = await upimage(file) 
      this.add(src)

    },512)
    return this
  }
  add=(src)=>{
    const img = new Image()
    this.el.append(img)
    img.src = src
    img.onclick =()=>fn.copy(img.src)
  }
  update=(ary)=>{
    this.el.innerHTML=''
    ary.map(this.add)
  }
}

/*
var dropzone = new DropZone('.drop').start()

var ary =`
https://i.pinimg.com/236x/2b/7f/01/2b7f0133d901ed02b031a1db8f0bdbe5.jpg
https://i.pinimg.com/474x/2a/e8/4b/2ae84bd27d2799cf50dfc81f5194c8c4.jpg
https://i.pinimg.com/236x/28/8e/f2/288ef2db8daf1171ec3604dc438d48eb.jpg
`.trim().split('\n')

dropzone.update(ary)
*/
