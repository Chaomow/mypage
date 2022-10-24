document.write("<script type='text/javascript' src='src/js/data.js'></script>");

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
