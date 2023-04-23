import gulp from "gulp"
import sass from "gulp-sass";
import cors from "cors"
import express from 'express'

const app = express()
const port = process.env.PORT || 8001

app.get('/', (req, res) => {
    res.status(200).send('Heyo')
})

app.use(cors())
app.use(express.json())

gulp.task("styles", function () {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

//Watch task
gulp.task("default", function () {
  gulp.watch("sass/**/*.scss", ["styles"]);
});


let allEles = [1, 2, 3, 4];
let index = 0;
let finalArr = [];
let notOnDisplay = -1;

// function back() {
//   let onDisplay = [];
//   index += 1;

//   if (index > 4) {
//     index = 1;
//   }

//   console.log(index);

//   if (Math.abs(allEles.length - index) <= 2 && index < 4) {
//     for (let i = Math.abs(allEles.length - index); i < allEles.length; i++) {
//       onDisplay.push(allEles[i]);
//     }

//     for (let j = 0; j < 3 - Math.abs(allEles.length - index); j++) {
//       onDisplay.push(allEles[j]);
//     }

//     if (onDisplay.length == 5) {
//       for (let k = 2; k < onDisplay.length; k++) {
//         finalArr.push(onDisplay[k]);
//       }
//       onDisplay = finalArr;
//     }
//   } else {
//     if (index == 1) {
//       for (let i = index; i < 4; i++) {
//         onDisplay.push(allEles[i]);
//       }
//     } else if (index == 4) {
//       onDisplay = [1, 2, 3];
//     }
//   }

//   allEles.map((item, i) => {
//     if (onDisplay.includes(item) == false) {
//       notOnDisplay = allEles[i];
//     }
//   });

//   console.log(notOnDisplay);

//   console.log(onDisplay);

//   for (let k = 0; k < 3; k++) {
//     document.getElementById(`vc${onDisplay[k]}`).style.display = "flex";
//   }

//   document.getElementById(`vc${notOnDisplay}`).style.display = "none";
// }

// function front() {}

