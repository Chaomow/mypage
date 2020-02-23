const data = {
  chinese: {
    menu: ["首頁", "關於", "技能", "作品"],
    profileTitle: "您好，我是趙仲尉",
    location: "台北市，台灣",
    aboutList: ["學歷", "經歷", "簡介"],
    educationList: [
      "國立高雄應用科技大學 資訊管理系",
      "澳洲伯斯史丹利學院 西廚與餐飲管理",
      "市立大安高級工業職業學校 綜合高中"
    ],
    description:
      "我叫趙仲尉，熱愛挑戰新事物、積極學習。" +
      "</br></br>從2019年底進修包含Javascript ES6、React Js、React Hook、Redux、AntDesign等前端技術，配合Node JS、NPM，並嫁接API與MongoDB製作一個簡易的即時通訊網站。" +
      "</br></br>期許自己能夠持續增進技術，並且創造改變社會與生活的作品。",
    skillCat: ["網頁前端", "網頁後端", "其他"],
    skillArea: [
      ["基礎前端", "前端框架", "介面設計", "應用介面", "套件管理"],
      ["作業系統", "伺服器", "資料庫"],
      ["程式語言", "版本控制", "編輯工具"]
    ]
  },
  english: {
    menu: ["HOME", "ABOUT", "SKILL", "WORKS"],
    profileTitle: "Hello, I'm Wayne Chao",
    location: "TAIPEI R.O.C",
    aboutList: ["EDUCATION", "EXPERIENCE", "DESCRIPTION"],
    educationList: [
      "National Kaohsiung University of Applied Sciences, </br>Department of Information Management",
      "Stanley College Perth Western Australia, </br>Cookery and Hospitality",
      "Taipei Municipal Da-An Vocational High School, </br>Departments of Comprehensive"
    ],
    description:
      "My name is Chung-Wei Chao. You can call me Wayne." +
      "</br></br>I was studying in Hospitality in Westen Australia Perth last year. It's shown that I can understand technique paper by english without any problem." +
      "</br></br>I'm a fast learner and humble for asking and sharing. I have passion and eager to learn new skills and knowledge. I'm currently guided by a front-end engineering supervisor. Learning about React JS, Node JS and MondoDB lately." +
      "</br></br>Wish I can provide Influence and power to a company. Thanks",
    skillCat: ["Front-End", "Back-End", "Other"],
    skillArea: [
      ["Basic", "Library", "UI Design", "API", "Package Tools"],
      ["System", "Server", "Database"],
      ["Coding Language", "version COntrol", "Code Editor"]
    ]
  },
  codeLogo: {}
};

function onScroll() {
  window.scrollY === 0
    ? (document.getElementsByClassName("header")[0].style.opacity = 0)
    : (document.getElementsByClassName("header")[0].style.opacity = 0.4);
  window.innerHeight + window.scrollY >= document.body.offsetHeight
    ? (document.getElementsByClassName("iconGodown")[0].style.opacity = 0)
    : (document.getElementsByClassName("iconGodown")[0].style.opacity = 0.5);
}

function switchLanguage() {
  const language = document.getElementsByClassName("iconLanguage")[0];
  const menu = document
    .getElementsByClassName("header")[0]
    .getElementsByTagName("p");
  const profileTitle = document
    .getElementsByClassName("profileTitle")[0]
    .getElementsByTagName("p")[0];
  const location = document
    .getElementsByClassName("locationBox")[0]
    .getElementsByTagName("p")[0];
  const aboutTitle = document
    .getElementsByClassName("aboutTitle")[0]
    .getElementsByTagName("p")[0];
  const skillTitle = document
    .getElementsByClassName("skillTitle")[0]
    .getElementsByTagName("p")[0];
  const aboutList = document.getElementsByClassName("aboutList");
  const educationList = document.getElementsByClassName("educationList");
  const description = document
    .getElementsByClassName("description")[0]
    .getElementsByTagName("p")[1];
  const skillCat = document.getElementsByClassName("skillCatList");

  if (language.getAttribute("value") === "chinese") {
    document.title = "Wayne Chao";
    language.setAttribute("value", "english");
    //Header Menu
    for (var key = 0; key < menu.length; key++) {
      menu[key].innerHTML = data.english.menu[key];
    }
    //ProfileTitle
    profileTitle.innerHTML = data.english.profileTitle;
    //AboutTitle
    aboutTitle.innerHTML = data.english.menu[1];
    //SkillTitle
    skillTitle.innerHTML = data.english.menu[2];
    //Location
    location.innerHTML = data.english.location;
    //About List
    for (var key = 0; key < aboutList.length; key++) {
      aboutList[key].innerHTML = data.english.aboutList[key];
    }
    //Education List
    for (var key = 0; key < educationList.length; key++) {
      educationList[key].innerHTML = data.english.educationList[key];
    }
    //description
    description.innerHTML = data.english.description;
    //skillCat List
    for (var key = 0; key < skillCat.length; key++) {
      skillCat[key].innerHTML = data.english.skillCat[key];
    }
  } else {
    document.title = "趙仲尉";
    language.setAttribute("value", "chinese");
    //Header Menu
    for (var key = 0; key < menu.length; key++) {
      menu[key].innerHTML = data.chinese.menu[key];
    }
    //ProfileTitle
    profileTitle.innerHTML = data.chinese.profileTitle;
    //AboutTitle
    aboutTitle.innerHTML = data.chinese.menu[1];
    //SkillTitle
    skillTitle.innerHTML = data.chinese.menu[2];
    //Location
    location.innerHTML = data.chinese.location;
    //About List
    for (var key = 0; key < aboutList.length; key++) {
      aboutList[key].innerHTML = data.chinese.aboutList[key];
    }
    //Education List
    for (var key = 0; key < educationList.length; key++) {
      educationList[key].innerHTML = data.chinese.educationList[key];
    }
    //description
    description.innerHTML = data.chinese.description;
    //skillCat List
    for (var key = 0; key < skillCat.length; key++) {
      skillCat[key].innerHTML = data.chinese.skillCat[key];
    }
  }
}

function showBOx(box) {
  const display = document.getElementsByClassName(box)[0];
  display.style.display === "none"
    ? (display.style.display = "block")
    : (display.style.display = "none");
}

function iEsc() {
  return false;
}
function iRec() {
  return true;
}
function DisableKeys() {
  if (event.ctrlKey || event.shiftKey || event.altKey) {
    window.event.returnValue = false;
    iEsc();
  }
}
document.ondragstart = iEsc;
document.onkeydown = DisableKeys;
document.oncontextmenu = iEsc;
if (typeof document.onselectstart != "undefined") document.onselectstart = iEsc;
else {
  document.onmousedown = iEsc;
  document.onmouseup = iRec;
}
function DisableRightClick(qsyzDOTnet) {
  if (window.Event) {
    if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3) iEsc();
  } else if (event.button == 2 || event.button == 3) {
    event.cancelBubble = true;
    event.returnValue = false;
    iEsc();
  }
}
