# swing


# DropZone.js
```js
//@import url(//hashsan.github.io/swing/dropzone.css);
import {DropZone} from "//hashsan.github.io/swing/dropzone.js"

var dropzone = new DropZone('.drop').start()

var ary =`
https://i.pinimg.com/236x/2b/7f/01/2b7f0133d901ed02b031a1db8f0bdbe5.jpg
https://i.pinimg.com/474x/2a/e8/4b/2ae84bd27d2799cf50dfc81f5194c8c4.jpg
https://i.pinimg.com/236x/28/8e/f2/288ef2db8daf1171ec3604dc438d48eb.jpg
`.trim().split('\n')

dropzone.update(ary)
```
