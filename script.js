"use strict"
const body = document.getElementsByTagName("body");
body[0].style.margin = 0;
body[0].style.padding = 0;
body[0].style.boxSizing = "border-box";
body[0].style.fontFamily = '"Montserrat", sans-serif';
body[0].style.backgroundColor = "black";
body[0].style.display = "flex";
body[0].style.lineHeight = 1.5;
// navbar
const nav = document.createElement("nav");

const img = document.createElement("img");
img.src = "images/avatar_smoke.jpg";
nav.classList.add("navbar");
nav.style.position = "sticky";
nav.style.width = "120px";
nav.style.height = "100vh";
nav.style.top = "0px";
nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.backgroundColor = "#222";

nav.appendChild(img)
body[0].appendChild(nav);

const navItems = ["Home", "About", "Photos", "Contact"]
navItems.forEach(function (item,elem) {
    const anchor = document.createElement("a");
    const icon = document.createElement("i");
    const parag = document.createElement("p");
    nav.appendChild(anchor)
    anchor.href = `#${item}`;

    
    // hover.style.backgroundColor="white"

    anchor.appendChild(icon);
    icon.classList.add("fa") 
    anchor.appendChild(parag);
    parag.innerText = item;
    anchor.style.textAlign = "center";
    anchor.style.textDecoration = "none";
    anchor.style.height="130px"
    anchor.style.padding = "20px 12px";
    icon.style.fontSize = "36px";
    icon.style.color = "white";
    parag.style.color="white";
    parag.style.margin="10px 0";
    if (item == "Home") {
        anchor.classList.add("black");
        anchor.style.backgroundColor = "black";
    }
    
    if(elem!=0){
        anchor.addEventListener("mouseover",function(){
            anchor.style.backgroundColor="black";
        })
        anchor.addEventListener("mouseleave",function(){
            anchor.style.backgroundColor="#222";
        })
    }else{
        anchor.addEventListener("mouseover",function(){
            anchor.style.backgroundColor="white";
            icon.style.color="black";
            parag.style.color="black";
        })
        anchor.addEventListener("mouseleave",function(){
            anchor.style.backgroundColor="black";
            icon.style.color="white";
            parag.style.color="white";
        })
    }
     
})


const iconHome=document.querySelector(".navbar a .fa:first-of-type");
iconHome.classList.add("fa-home");
const iconUser=document.querySelector(".navbar a:nth-of-type(2) .fa");
iconUser.classList.add("fa-user");
const iconPhoto=document.querySelector(".navbar a:nth-of-type(3) .fa");
iconPhoto.classList.add("fa-eye");
const iconContact=document.querySelector(".navbar a:last-of-type .fa");
iconContact.classList.add("fa-envelope");

//main
const div = document.createElement("div");
div.classList.add("main");
body[0].appendChild(div);
div.style.color="white";
div.style.padding="12px 24px"
div.style.margin="0 auto"
// home
const divHome=document.createElement("div");
divHome.classList.add("home");
divHome.setAttribute('id','Home');
div.appendChild(divHome);
divHome.style.textAlign="center";
const h1=document.createElement("h1");
h1.innerText="I'm John Doe.";
h1.style.fontWeight="400";
h1.style.fontSize="64px";
h1.style.margin="10px 0"
divHome.appendChild(h1);
const parag=document.createElement("p");
parag.innerText="Photographer and Web Designer.";
parag.style.margin="15px 0";
divHome.appendChild(parag);
const imgHome=document.createElement("img");
imgHome.src="images/man_smoke.jpg";
imgHome.style.width="992px";
imgHome.style.height="1108px";
divHome.appendChild(imgHome)

//about
const divAbout=document.createElement("div");
divAbout.classList.add("about");
divAbout.setAttribute('id','About');
divAbout.style.margin="0 auto";
divAbout.style.padding="64px 92px"
div.appendChild(divAbout)

const h2Name=document.createElement("h2");
h2Name.innerText="My Name";
h2Name.style.fontWeight=400;
h2Name.style.fontSize="30px";
h2Name.style.margin="10px 0";
h2Name.style.color="#f1f1f1";
divAbout.appendChild(h2Name)

const hrName=document.createElement("hr");
hrName.style.width="200px"
hrName.style.border="0";
hrName.style.margin="20px 0";
hrName.style.borderTop="1px solid #eee";
hrName.style.opacity=0.6
divAbout.appendChild(hrName)

const pName=document.createElement("p");
pName.style.color="#757575";
pName.style.margin="15px 0";
pName.innerText="Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
divAbout.appendChild(pName)

const h3Name=document.createElement("h3");
h3Name.style.fontWeight=400;
h3Name.style.margin="10px 0";
h3Name.style.padding="16px 0";
h3Name.style.fontSize="24px";
h3Name.innerText="My skills"
divAbout.appendChild(h3Name)

const SKILLS=["Photography","Web Design","Photoshop"];
SKILLS.forEach(function(skil){
    const paragSkill=document.createElement("p");
    paragSkill.innerText=skil;
    paragSkill.style.margin="15px 0";
    paragSkill.style.letterSpacing="4px";
    paragSkill.style.color="#757575";
    divAbout.appendChild(paragSkill);
    const divWhite=document.createElement("div");
    divWhite.style.backgroundColor="white";
    divAbout.appendChild(divWhite)
    const divWhiteSub=document.createElement("div");
    divWhiteSub.style.width="80%";
    divWhiteSub.style.height="28px";
    divWhiteSub.style.backgroundColor="grey";
    divWhite.appendChild(divWhiteSub)
})

const sectionMassive=document.createElement("div");
sectionMassive.style.color="black";
sectionMassive.style.backgroundColor="white";
sectionMassive.style.margin="16px 0";
sectionMassive.style.padding="16px 0";
sectionMassive.style.display="flex";
divAbout.appendChild(sectionMassive)

const SECTION=["11+","55+","89+","150+"];
SECTION.forEach(function(sec,index){
    const divSection=document.createElement("div");
    divSection.classList.add("section");
    divSection.style.textAlign="center";
    divSection.style.margin="16px 0";
    divSection.style.width="25%";
    sectionMassive.appendChild(divSection)
    const spanSection=document.createElement("span");
    spanSection.style.fontSize="24px"
    divSection.appendChild(spanSection)
    spanSection.innerText=sec;
    const brSec=document.createElement("br");
    divSection.appendChild(brSec)
    const texts=["Partners","Projects Done","Happy Clients","Meetings"]
    for(let i=0;i<texts.length;i++){
        if(index==i){
            const span2=document.createElement("span");
            span2.innerText=texts[i];
            divSection.appendChild(span2)
        }
    }   
})
const buttondownload=document.createElement("button");
buttondownload.style.margin="16px 0";
buttondownload.style.padding="12px 24px";
divAbout.appendChild(buttondownload);
const iconDowload=document.createElement("i");
iconDowload.classList.add("fa","fa-download");
iconDowload.style.marginRight="5px"
buttondownload.appendChild(iconDowload);
const spanDownload=document.createElement("span");
spanDownload.innerText="Download Resume";
spanDownload.style.color="#757575"
buttondownload.appendChild(spanDownload);

const h3Price=document.createElement("h3");
h3Price.innerText="My Price";
h3Price.style.fontWeight=400;
h3Price.style.margin="10px 0";
h3Price.style.padding="16px 0";
h3Price.style.fontSize="24px";
divAbout.appendChild(h3Price)

const divPrice=document.createElement("div");
divPrice.style.display="flex";
divPrice.style.justifyContent="space-between";
divPrice.style.padding="8px 0";
divPrice.style.color="#757575";
divAbout.appendChild(divPrice)
// price
const divHalfPrice1=document.createElement("div");
divHalfPrice1.style.width="49%";
divHalfPrice1.style.textAlign="center";
divHalfPrice1.style.marginBottom="16px";
const divHalfPrice2=document.createElement("div");
divHalfPrice2.style.width="49%";
divHalfPrice2.style.textAlign="center";
divHalfPrice2.style.marginBottom="16px";
divHalfPrice1.classList.add("half-price");
divHalfPrice2.classList.add("half-price");
divPrice.appendChild(divHalfPrice1)
divPrice.appendChild(divHalfPrice2)
const ul1=document.createElement("ul");
ul1.style.listStyle="none";
ul1.style.backgroundColor="white";
ul1.style.opacity=0.6;
ul1.style.paddingLeft=0;
divHalfPrice1.appendChild(ul1)
const properties1=["Basic","Web Design","Photography","5 Storage","Mail Support","",""];
properties1.forEach(function(prop,index){
   const li=document.createElement("li");
   li.innerText=prop;
   li.style.borderBottom="1px solid #ddd";
   if(index==0){
    li.style.backgroundColor="#616161";
    li.style.color="#fff";
    li.style.padding="32px 16px";
   }else if(index!=0){
    li.style.padding="16px";
   }
   if(index==properties1.length-1){
    li.style.borderBottom="none";
    li.style.backgroundColor="#f1f1f1";
    li.style.color="black";
    li.style.padding="24px 16px";
    const liButton=document.createElement("button");
    liButton.innerText="Sign Up";
    liButton.style.backgroundColor="white";
    liButton.style.border="none";
    liButton.style.padding="12px 24px";
    li.appendChild(liButton);
   }
   if(index==properties1.length-2){
    const liH2=document.createElement("h2");
    liH2.innerText="$ 10";
    liH2.style.color="black";
    liH2.style.fontWeight=400;
    liH2.style.fontSize="30px";
    liH2.style.margin="10px 0";
    li.appendChild(liH2)
    const liSpan=document.createElement("span");
    liSpan.innerText="per month";
    liSpan.style.opacity=0.6;
    li.appendChild(liSpan)
   }
   ul1.appendChild(li)
})
// second half price
const ul2=document.createElement("ul");
ul2.style.listStyle="none";
ul2.style.backgroundColor="white";
ul2.style.opacity=0.6;
ul2.style.paddingLeft=0;
divHalfPrice2.appendChild(ul2)
const properties2=["Basic","Web Design","Photography","50 Storage","Endless Support","",""];
properties2.forEach(function(prop,index){
   const li=document.createElement("li");
   li.innerText=prop;
   li.style.borderBottom="1px solid #ddd";
   if(index==0){
    li.style.backgroundColor="#616161";
    li.style.color="#fff";
    li.style.padding="32px 16px";
   }else if(index!=0){
    li.style.padding="16px";
   }
   if(index==properties2.length-1){
    li.style.borderBottom="none";
    li.style.backgroundColor="#f1f1f1";
    li.style.color="black";
    li.style.padding="24px 16px";
    const liButton=document.createElement("button");
    liButton.innerText="Sign Up";
    liButton.style.backgroundColor="white";
    liButton.style.border="none";
    liButton.style.padding="12px 24px";
    li.appendChild(liButton);
   }
   if(index==properties2.length-2){
    const liH2=document.createElement("h2");
    liH2.innerText="$ 25";
    liH2.style.color="black";
    liH2.style.fontWeight=400;
    liH2.style.fontSize="30px";
    liH2.style.margin="10px 0";
    li.appendChild(liH2)
    const liSpan=document.createElement("span");
    liSpan.innerText="per month";
    liSpan.style.opacity=0.6;
    li.appendChild(liSpan)
   }
   ul2.appendChild(li)
})
//reputation
const h3Reput=document.createElement("h3");
h3Reput.innerText="My reputation";
h3Reput.style.fontWeight=400;
h3Reput.style.margin="10px 0";
h3Reput.style.padding="16px 0";
h3Reput.style.fontSize="24px";
divAbout.appendChild(h3Reput)

const repuImgs=["bandmember","avatar_g2"];
repuImgs.forEach(function(elem,index){
    const divReputation=document.createElement("div");
    divReputation.style.display="flex";
    divAbout.appendChild(divReputation);
    const imgRepu=document.createElement("img");
    imgRepu.src=`images/${elem}.jpg`;
    imgRepu.style.width="80px";
    imgRepu.style.marginRight="16px";
    imgRepu.style.borderRadius="50%";
    divReputation.appendChild(imgRepu)
    const divSub=document.createElement("div");
    divSub.style.display="flex";
    divSub.style.flexDirection="column";
    divReputation.appendChild(divSub);
    
    const repuP1=document.createElement("p");
    repuP1.style.margin="5px 0 0 0";
    repuP1.style.color="#757575";
    divSub.appendChild(repuP1)
    const repuSpan1= document.createElement("span");
    repuP1.innerText="Chris Fox.";
    repuSpan1.innerText="CEO at Mighty Schools.";
    repuSpan1.style.marginLeft="16px";
    repuP1.appendChild(repuSpan1);
    const repuP2=document.createElement("p");
    repuP2.innerText="John Doe saved us from a web disaster."
    repuP2.style.color="#757575";
    divSub.appendChild(repuP2)
    if(index!=0){
        repuP1.innerText="Rebecca Flex.";
        repuP1.appendChild(repuSpan1);
        repuSpan1.innerText="CEO at Company.";
        repuP2.innerText="No one is better than John Doe."
        divReputation.style.paddingBottom="64px"
    }
})

//photos

const divPhotos=document.createElement("div");
divPhotos.classList.add("photos");
divPhotos.setAttribute('id','Photos');
divPhotos.style.padding="64px 0";
div.appendChild(divPhotos);
const h2Photo=document.createElement("h2");
h2Photo.innerText="My Photos";
h2Photo.style.margin="10px 0";
h2Photo.style.paddingLeft="92px";
divPhotos.appendChild(h2Photo);
const hrPhoto=document.createElement("hr");
hrPhoto.style.width="200px";
hrPhoto.style.border="0";
hrPhoto.style.margin="20px 0";
hrPhoto.style.borderTop="1px solid #eee";
hrPhoto.style.opacity=0.6;
hrPhoto.style.marginLeft="92px";
divPhotos.appendChild(hrPhoto);

const photoContainer=document.createElement("div");
photoContainer.style.display="flex";
photoContainer.style.padding="64px 92px";
photoContainer.style.justifyContent="space-between";
divPhotos.appendChild(photoContainer);

const subPhotoCon1=document.createElement("div");
subPhotoCon1.style.width="49%";
const subPhotoCon2=document.createElement("div");
subPhotoCon2.style.width="49%";
photoContainer.appendChild(subPhotoCon1);
photoContainer.appendChild(subPhotoCon2);

const imgPhotos1=["wedding","rocks","sailboat"];
imgPhotos1.forEach(function(elem){
    const imgPhoto=document.createElement("img");
    imgPhoto.style.width="100%";
    imgPhoto.src=`images/${elem}.jpg`;
    subPhotoCon1.appendChild(imgPhoto);
});

const imgPhotos2=["underwater","chef","wedding","p6"];
imgPhotos2.forEach(function(elem){
    const imgPhoto=document.createElement("img");
    imgPhoto.style.width="100%";
    imgPhoto.src=`images/${elem}.jpg`;
    subPhotoCon2.appendChild(imgPhoto);
});

// contact

const divContact=document.createElement("div");
divContact.classList.add("contact");
divContact.setAttribute('id','Contact');
divContact.style.padding="64px 92px";
div.appendChild(divContact);

const h2Contact=document.createElement("h2");
h2Contact.innerText="Contact Me";
h2Contact.style.margin="10px 0";
h2Contact.style.color="#fff";
divContact.appendChild(h2Contact);
const hrContact=document.createElement("hr");
hrContact.style.width="200px";
hrContact.style.border="0";
hrContact.style.margin="20px 0";
hrContact.style.borderTop="1px solid #eee";
hrContact.style.opacity=0.6;
divContact.appendChild(hrContact);

const contactSection=document.createElement("div");
contactSection.style.margin="16px 0";
divContact.appendChild(contactSection);
const CONTACTInfo=["Chicago,US","Phone: +00 151515","Email: mail@mail.com"];
CONTACTInfo.forEach(function(elem){
    const pContact=document.createElement("p");
    pContact.style.margin="15px 0";
    pContact.style.color="#757575";
    contactSection.appendChild(pContact)
    const iconContact=document.createElement("i");
    iconContact.classList.add("fa");
    iconContact.style.marginRight="16px";
    iconContact.style.fontSize="36px";
    iconContact.style.color="white";
    pContact.appendChild(iconContact);
    const spanContact=document.createElement("span")
    spanContact.innerText=elem;
    pContact.appendChild(spanContact);
});

const iconMap=document.querySelector(".contact div p .fa:first-of-type");
iconMap.classList.add("fa-map-marker");
const iconPhone=document.querySelector(".contact div p:nth-of-type(2) .fa");
iconPhone.classList.add("fa-phone");
const iconEnvelope=document.querySelector(".contact div p:nth-of-type(3) .fa");
iconEnvelope.classList.add("fa-envelope");

const pContact2=document.createElement("p");
pContact2.innerText="Let's get in touch. Send me a message:";
pContact2.style.margin="15px 0";
pContact2.style.color="#757575";
divContact.appendChild(pContact2);
//form
const form=document.createElement("form");
divContact.appendChild(form);

const FORMinfo=["Name","Email","Subject","Message",""];

FORMinfo.forEach(function(elem,index){
    const pform=document.createElement("p");
    pform.style.margin="15px 0";
    form.appendChild(pform);
    if(index!=FORMinfo.length-1){
        const input=document.createElement("input");
        if(index!=1){
            input.type="text";
        }else if(index==1){
            input.type="email";
        }
        input.style.width="100%";
        input.style.padding="16px 8px";
        input.style.border="none";
        input.style.borderBottom="1px solid #ccc";
        input.placeholder=elem;
        input.name=elem;
        input.required=true;
        pform.appendChild(input)
    }else{
        const buttonForm=document.createElement("button");
        buttonForm.style.padding="12px 24px";
        pform.appendChild(buttonForm);
        const iconSend=document.createElement("i");
        iconSend.classList.add("fa","fa-paper-plane");
        iconSend.style.fontSize="15px"
        iconSend.style.marginRight="7px"
        buttonForm.appendChild(iconSend);
        const spanForm=document.createElement("span");
        spanForm.innerText="SEND MESSAGE";
        buttonForm.appendChild(spanForm);
    }
});

const footer=document.createElement("div");
footer.style.padding="64px 92px";
footer.style.color="#757575";
footer.style.fontSize="24px";
div.appendChild(footer);
const ICONsSOCIAL=["fa-facebook-official","fa-instagram","fa-snapchat","fa-pinterest-p","fa-twitter","fa-linkedin"];
ICONsSOCIAL.forEach(function(icon){
    const iconSocial=document.createElement("i");
    iconSocial.style.marginRight="5px"
    iconSocial.classList.add("fa",`${icon}`);
    footer.appendChild(iconSocial);
});
