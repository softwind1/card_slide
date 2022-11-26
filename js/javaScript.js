const slideContainer = document.querySelector(".slide_container")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const buttonsContainer = document.querySelector(".button-container")





const containerSrc_info = [

    {title:"HTML", version:"Version: 5B",info:"Limbaj de marcare hipertext", src_img:"img/iconHTML.png",src_btn:'img/HTML_icon.png',},

    {title:"CSS", version:"Version: 22.00B",info:"Linbaj de stil în cascadă" , src_img:"img/iconCSS.png",src_btn:'img/CSS_icon.png',},

    {title:"JavaScript", version:"Version: 19.00B",info:"Linbaj de programare" , src_img:"img/iconJS.png" ,src_btn:'img/JS_icon.png',},
    

];

 containerSrc_info.forEach(element => {
    const img = document.createElement("img");
    img.className = "btn"
    img.src = element.src_btn;
    buttonsContainer.append(img)
  })

  const footerDecoration = document.createElement("div")
  footerDecoration.className ="footer_cont_decoration";
  container.append(footerDecoration)

    
  containerSrc_info.forEach(item => {
    const divContainer = document.createElement("div");
    const img = document.createElement("img");
    img.className = "img";
    img.src = item.src_img;
    const longLine = document.createElement("div");
    longLine.className = "text_decoration long-line";
    longLine.innerHTML = item.title;
    const shortLine = document.createElement("div");
    shortLine.innerHTML= item.version;
    shortLine.className = "text_decoration short-line";
    const longLine1 = document.createElement("div");
    longLine1.className = "text_decoration long-line";   
    longLine1.innerHTML = item.info;
    const footerContBar = document.createElement("div");
    footerContBar.className = "footer_cont_bar"; 
    divContainer.append(img, longLine, shortLine, longLine1, footerContBar);
    slideContainer.append(divContainer)
  } )

//   const buttons = document.querySelectorAll('.btn')

//   const



