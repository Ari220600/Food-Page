list1=["img1","img2","img3","img4","img5"]
list2=["img2","img3","img4","img5","img1"]
list3=["img3","img4","img5","img1","img2"]
list4=["img4","img5","img1","img2","img3"]
list5=["img5","img1","img2","img3","img4"]
clist=["#FDE0B4","#D4DEBF","#FBE2BE","#FDD3BE","#FDFAB8"]
let num1=1
let num2=4
let nextelm=(list) => {
  let img1=document.querySelector("."+list[0])
  img1.style.width="28vw"
  img1.style.height="45vh"
  img1.style.top="42vh"
  img1.style.left="53vw"
  img1=document.querySelector("."+list[1])
  img1.style.width="11vw"
  img1.style.height="16vh"
  img1.style.top="45vh"
  img1.style.left="80vw"

  img1=document.querySelector("."+list[2])
  img1.style.width="11vw"
  img1.style.height="16vh"
  img1.style.top="30vh"
  img1.style.left="69vw"

  img1=document.querySelector("."+list[3])
  img1.style.width="11vw"
  img1.style.height="16vh"
  img1.style.top="30vh"
  img1.style.left="57vw"

  img1=document.querySelector("."+list[4])
  img1.style.width="11vw"
  img1.style.height="16vh"
  img1.style.top="45vh"
  img1.style.left="45vw"

}


document.querySelector(".shiftright").addEventListener("click", () => {
    console.log("ckicked");
    switch(num1) {
        case 0:
             nextelm(list1)
             num1=num1+1
             num2=num2+1
             document.querySelector(".bg").style.backgroundColor=clist[0]
             document.getElementById("order").href="https://www.google.com/"
             document.querySelector(".shadow").style.top="85vh"
             break;
        case 1:
            nextelm(list2)
            num1=num1+1
            num2=0
            document.querySelector(".bg").style.backgroundColor=clist[1]
            document.getElementById("order").href="https://www.flipkart.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
        case 2:
            nextelm(list3)
            num1=num1+1
            num2=num2+1
            document.querySelector(".bg").style.backgroundColor=clist[2]
            document.getElementById("order").href="https://www.youtube.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
        case 3:
            nextelm(list4)
            num1=num1+1
            num2=num2+1
            document.querySelector(".bg").style.backgroundColor=clist[3]
            document.getElementById("order").href="https://www.github.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
        case 4:
            nextelm(list5)
            num1=0
            num2=num2+1
            document.querySelector(".bg").style.backgroundColor=clist[4]
            document.getElementById("order").href="https://www.zomato.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
      }
})

document.querySelector(".shiftleft").addEventListener("click", () => {
    console.log("ckicked");
    switch(num2) {
        case 0:
             nextelm(list1)
             num2=4
             num1=num1-1
             document.querySelector(".bg").style.backgroundColor=clist[0]
             document.getElementById("order").href="https://www.google.com/"
             document.querySelector(".shadow").style.top="85vh"
             break;
        case 1:
            nextelm(list2)
            num2=num2-1
            num1=num1-1
            document.querySelector(".bg").style.backgroundColor=clist[1]
            document.getElementById("order").href="https://www.flipkart.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
        case 2:
            nextelm(list3)
            num2=num2-1
            num1=num1-1
            document.querySelector(".bg").style.backgroundColor=clist[2]
            document.getElementById("order").href="https://www.youtube.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
        case 3:
            nextelm(list4)
            num2=num2-1
            num1=4
            document.querySelector(".bg").style.backgroundColor=clist[3]
            document.getElementById("order").href="https://www.github.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
        case 4:
            nextelm(list5)
            num2=num2-1
            num1=num1-1
            
            document.querySelector(".bg").style.backgroundColor=clist[4]
            document.getElementById("order").href="https://www.zomato.com/"
            document.querySelector(".shadow").style.top="80vh"
            break;
      }
})
