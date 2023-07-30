let data = [];
var selectValue = "System";
fetch("./db.json")
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return data.json();
  })
  .then(function (Normal) {
    data.push(Normal.people);
    data.push(Normal.nature);
    data.push(Normal.food);
    data.push(Normal.activity);
    data.push(Normal.place);
    data.push(Normal.object);
    data.push(Normal.symbol);
    data.push(Normal.flag);
  })
  .then(function () {
    getAllEmoji("People");
    getAllEmoji("Nature");
    getAllEmoji("Food");
    getAllEmoji("Activity");
    getAllEmoji("Place");
    getAllEmoji("Object");
    getAllEmoji("Symbol");
    getAllEmoji("Flag");
  });

var people = false;
var nature = false;
var food = false;
var activity = false;
var place = false;
var object = false;
var symbol = false;
var flag = false;

// Frontpage all emoji call in image but copy text

function getAllEmoji(value) {
  if (value == "People" && people == false) {
    document.getElementById("people").innerHTML = "";
    console.log(selectValue);
    data[0].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 204; i++) {
        let aaa = props[i];
        var copy = document.getElementById("people");
        var temp = document.createElement("div");
        copy.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('people${i}')" class="copyemoji"  id="people${i}" type="button" name="emoji" >`;
        var buttons = document.getElementById(`people${i}`);
        buttons.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        buttons.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/People/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (value == "Nature" && nature == false) {
    document.getElementById("nature").innerHTML = "";
    data[1].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 147; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("nature");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('nature${i}')" class="copyemoji"  id="nature${i}" type="button" name="emoji">`;
        var innerdiv = document.getElementById(`nature${i}`);
        innerdiv.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        innerdiv.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Nature/emoji${
          i + 1
        }.png">`;
      }
    });
  }
  if (value == "Food" && food == false) {
    document.getElementById("food").innerHTML = "";
    data[2].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 67; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("food");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('food${i}')" class="copyemoji"  id="food${i}" type="button" name="emoji">`;
        var innerdiv = document.getElementById(`food${i}`);
        innerdiv.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        innerdiv.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Foods/emoji${
          i + 1
        }.png">`;
      }
    });
  }
  if (value == "Activity" && activity == false) {
    document.getElementById("activity").innerHTML = "";
    data[3].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 57; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("activity");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('activity${i}')" class="copyemoji"  id="activity${i}" type="button" name="emoji">`;
        var Activitys = document.getElementById(`activity${i}`);
        Activitys.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Activitys.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Activity/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (value == "Place" && place == false) {
    document.getElementById("place").innerHTML = "";
    data[4].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 115; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("place");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('place${i}')" class="copyemoji"  id="place${i}" type="button" name="emoji">`;
        var Places = document.getElementById(`place${i}`);
        Places.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Places.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Place/emoji${
          i + 1
        }.png">`;
      }
    });
  }
  if (value == "Object" && object == false) {
    document.getElementById("object").innerHTML = "";
    data[5].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 178; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("object");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('object${i}')" class="copyemoji"  id="object${i}" type="button" name="emoji">`;
        var Objects = document.getElementById(`object${i}`);
        Objects.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Objects.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Object/emoji${
          i + 1
        }.png">`;
      }
    });
  }
  if (value == "Symbol" && symbol == false) {
    document.getElementById("symbol").innerHTML = "";
    data[6].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 270; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("symbol");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('symbol${i}')" class="copyemoji"  id="symbol${i}" type="button" name="emoji">`;
        var Symbols = document.getElementById(`symbol${i}`);
        Symbols.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Symbols.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Symbols/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (value == "Flag" && flag == false) {
    document.getElementById("flag").innerHTML = "";
    data[7].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 257; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("flag");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('flag${i}')" class="copyemoji"  id="flag${i}" type="button" name="emoji">`;
        var Flags = document.getElementById(`flag${i}`);
        Flags.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Flags.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/${selectValue}/Flags/emoji${
          i + 1
        }.png">`;
      }
    });
  }
}

// copy function it is  call both off all emoji and main page

function copy(value, type) {
  var copyText1 = document.getElementById(`${value}`).innerText;
  var area = document.querySelector("#textarear");
  area.value += copyText1;
  area.append(copyText1);
  area.select();
  const buttonId = document.querySelector("#buttonId");
  setTimeout(() => {
    buttonId.textContent = "Copied!!";
  }, 500);
  setTimeout(() => {
    buttonId.textContent = "Copy";
  }, 1000);
  document.execCommand("copy");
}

// call drop down in filter wise emoji display

function onChange(e) {
  let arr = document.getElementById("drop-down").value;
  selectValue = arr;
  getAllEmoji("People");

  if (nature !== true) {
    getAllEmoji("Nature");
  }
  if (food !== true) {
    getAllEmoji("Food");
  }
  if (activity !== true) {
    getAllEmoji("Activity");
  }
  if (place !== true) {
    getAllEmoji("Place");
  }
  if (object !== true) {
    getAllEmoji("Object");
  }
  if (symbol !== true) {
    getAllEmoji("Symbol");
  }
  if (flag !== true) {
    getAllEmoji("Flag");
  }
}

// Share live link and header call

function shareEmoji() {
  const whatsapp = document.querySelector(".whatsapp");
  const linkdin = document.querySelector(".linkdin");
  const twitter = document.querySelector(".twitter");

  const pageUrl = location.href;
  // const message = data.value;
  // console.log("data", message);
  const link = "https://emojikeyboard.online/";

  const whatsappApi = `https://wa.me/?text=${link}.${pageUrl}`;
  const linkdinApi = `https://www.linkedin.com/shareArticle?url=https://emojikeyboard.online/&text=${pageUrl}`;
  const twitterApi = `https://twitter.com/intent/tweet?text=${link}.${pageUrl}`;

  whatsapp.addEventListener("click", (url, target) => {
    window.open((url = whatsappApi), (target = "blank"));
  });
  linkdin.addEventListener("click", (url, target) => {
    window.open((url = linkdinApi), (target = "blank"));
  });
  twitter.addEventListener("click", (url, target) => {
    window.open((url = twitterApi), (target = "blank"));
  });
}

let textarear = "";
function copyText() {
  const area = document.querySelector("#textarear");
  const buttonId = document.querySelector("#buttonId");
  area.select();
  setTimeout(() => {
    buttonId.textContent = "Copied!!";
  }, 500);
  setTimeout(() => {
    buttonId.textContent = "Copy";
  }, 1000);
  document.execCommand("copy");
}

w3IncludeHTML();
// window.onload = function () {
//   getAllEmoji("People");
// };
