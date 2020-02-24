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
      "基礎前端",
      "前端框架",
      "介面設計",
      "應用程式介面",
      "套件管理",
      "作業系統",
      "伺服器",
      "資料庫",
      "程式語言",
      "版本控制",
      "編輯工具"
    ],
    workInfo: {
      title: ["我的聊天室", "我的履歷", "即時通訊班務管理系統", "佐證資料"],
      description: [
        "該專案是自學React框架等前端應用的練習。</br>使用React JS框架，結合Ant Design、Node JS、NPM、Mongo DB，呈現一個簡易的聊天室。",
        "該履歷使用HTML、CSS、JA履歷使用HTML、CSS、Javascript等前端語言，結合FontAwesome的圖示以及響應式網頁的設計概念所製作。",
        "使用者透過MSN、Yahoo即時通與本系統進行班務活動。</br>" +
          "透過讀取資料庫學生帳號資料，對平台MSN、Yahoo即時通噗浪(Plurk)、臉書(Facebook)、Gmail以及SMS簡訊發送即時通訊公告。</br>" +
          "使用者亦可透過本系統將日常行事曆做紀錄，並透過簡訊功能提醒行程。</br>" +
          "透過權限分級，使用者可讀取資料庫班費與租賃資料，總務股長可隨時方便進行班費資料的新增、修改、刪除。</br>" +
          "同學可於本系統修改個人租賃資料，而租賃股長可調閱全班學生聯絡資訊。",
        "大學專題 - 虛擬實境健身腳踏車系統</br>" +
          "大學專題 - 班務管理系統</br>" +
          "英文檢定 - 雅思均6分(對照多益750分)</br>" +
          "學歷文憑 - Stanley College West Australia</br>" +
          "學歷文憑 - 高雄應用科技大學資訊管理系</br>" +
          "學歷文憑 - 大安高級工業職業學校綜合高中</br>" +
          "比賽獎項 - 全國網頁競賽</br>" +
          "工作表現 - Aloft Perth 年度最佳員工提名</br>" +
          "工作表現 - Aloft Perth 季度最佳員工提名</br>"
      ]
    }
  },
  english: {
    menu: ["HOME", "ABOUT", "SKILL", "WORKS"],
    profileTitle: "Hello, I'm Wayne Chao",
    location: "TAIPEI R.O.C",
    aboutList: ["EDUCATION", "AWARD", "DESCRIPTION"],
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
      "Basic",
      "Library",
      "UI Design",
      "API",
      "Package Tools",
      "System",
      "Server",
      "Database",
      "Coding Language",
      "version COntrol",
      "Code Editor"
    ],
    workInfo: {
      title: [
        "My Chatting Project",
        "My resume",
        "Class Management System",
        "Certification"
      ],
      description: [
        "This program is a simple chatting room with communication applications.</br></br>Use React JS as a framework, go with Ant Design、Node JS、NPM、Mongo DB etc. A practice for learning front-end skills.",
        "A simple project to practice HTML, CSS, Javascript and responsive web design.",
        "The program is made for managing class daily work, such as student information edit, revenue and expenditure of class events, function calendar and reminder.</br></br>" +
          "Use MSN and Yahoo! Messenger as devices, communicate with Facebook, Plurk,  Gmail, Google calendar and Google Cloud database.",
        "University Topics - Virtual reality fitness system</br>" +
          "University Topics - Class Management System</br>" +
          "Certification - Ielts average score 6 (compare to TOEIC score 750) </br>" +
          "Certification - Stanley College Perth Western Australia, Cookery and Hospitality</br>" +
          "Certification - National Kaohsiung University of Applied Sciences, Department of Information Management</br>" +
          "Certification - Taipei Municipal Da-An Vocational High School, Departments of Comprehensive</br>" +
          "Award - National Web design competition</br>" +
          "Working performance - Aloft Perth Annualy ICONIC Awards</br>" +
          "Working performance - Aloft Perth Seasonal ICONIC Awards</br>"
      ]
    }
  }
};

function onScroll() {
  window.scrollY === 0
    ? (document.getElementsByClassName("header")[0].style.opacity = 0)
    : (document.getElementsByClassName("header")[0].style.opacity = 0.4);
  window.innerHeight + window.scrollY + 20 >= document.body.offsetHeight
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
  const workTitle = document
    .getElementsByClassName("workTitle")[0]
    .getElementsByTagName("p")[0];
  const aboutList = document.getElementsByClassName("aboutList");
  const educationList = document.getElementsByClassName("educationList");
  const description = document
    .getElementsByClassName("description")[0]
    .getElementsByTagName("p")[1];
  const skillCat = document.getElementsByClassName("skillCatList");
  const skillArea = document.getElementsByClassName("skillArea");
  const workInfo = document.getElementsByClassName("workInfo");

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
    //WorkTitle
    workTitle.innerHTML = data.english.menu[3];
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
    //skillArea List
    for (var key = 0; key < skillArea.length; key++) {
      skillArea[key].getElementsByTagName("p")[0].innerHTML =
        data.english.skillArea[key];
    }
    //Work Infomation
    for (var key = 0; key < workInfo.length; key++) {
      workInfo[key].getElementsByTagName("p")[0].innerHTML =
        data.english.workInfo.title[key];
      workInfo[key].getElementsByTagName("p")[1].innerHTML =
        data.english.workInfo.description[key];
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
    //WorkTitle
    workTitle.innerHTML = data.chinese.menu[3];
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
    //skillArea List
    for (var key = 0; key < skillArea.length; key++) {
      skillArea[key].getElementsByTagName("p")[0].innerHTML =
        data.chinese.skillArea[key];
    }
    //Work Infomation
    for (var key = 0; key < workInfo.length; key++) {
      workInfo[key].getElementsByTagName("p")[0].innerHTML =
        data.chinese.workInfo.title[key];
      workInfo[key].getElementsByTagName("p")[1].innerHTML =
        data.chinese.workInfo.description[key];
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
