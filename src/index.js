let flag = true;

setInterval(function () {
  let cursor = document.querySelector(".hero__cursor");
  //   console.log(cursor.style.backgroundColor);
  if (flag) {
    cursor.style.backgroundColor = "#1a202c";
    flag = !flag;
  } else {
    cursor.style.backgroundColor = "#4fd1c5";
    flag = !flag;
  }
}, 500);
