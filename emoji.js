let data = [];
var get = [];
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
  });

var people = false;
var nature = false;
var food = false;
var activity = false;
var place = false;
var object = false;
var symbol = false;
var flag = false;

const toastTrigger = document.querySelector(".custom-tooltip");
const toastLiveExample = document.getElementById("liveToast");

function allEmoji() {
  if (people == false) {
    document.getElementById("people").innerHTML = "";
    data[0].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 204; i++) {
        let aaa = props[i];
        var copy = document.getElementById("people");
        var temp = document.createElement("div");
        copy.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('people${i}')" class="copyemoji"  id="people${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;" >`;
        var buttons = document.getElementById(`people${i}`);
        buttons.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        buttons.innerHTML += `<img class="img-responsive" loading="lazy"  src="./assets/System/People/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (nature == false) {
    document.getElementById("nature").innerHTML = "";
    data[1].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 147; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("nature");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('nature${i}')" class="copyemoji"  id="nature${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;" >`;
        var innerdiv = document.getElementById(`nature${i}`);
        innerdiv.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        innerdiv.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/System/Nature/emoji${
          i + 1
        }.png">`;
      }
    });
  }
  if (food == false) {
    document.getElementById("food").innerHTML = "";
    data[2].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 67; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("food");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('food${i}')" class="copyemoji"  id="food${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;">`;
        var innerdiv = document.getElementById(`food${i}`);
        innerdiv.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        innerdiv.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/System/Foods/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (activity == false) {
    document.getElementById("activity").innerHTML = "";
    data[3].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 57; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("activity");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('activity${i}')" class="copyemoji"  id="activity${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;">`;
        var Activitys = document.getElementById(`activity${i}`);
        Activitys.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Activitys.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/System/Activity/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (place == false) {
    document.getElementById("place").innerHTML = "";
    data[4].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 115; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("place");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('place${i}')" class="copyemoji"  id="place${i}" type="button" name="emoji"  style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;">`;
        var Places = document.getElementById(`place${i}`);
        Places.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Places.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/System/Place/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (object == false) {
    document.getElementById("object").innerHTML = "";
    data[5].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 178; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("object");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('object${i}')" class="copyemoji"  id="object${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;">`;
        var Objects = document.getElementById(`object${i}`);
        Objects.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Objects.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/System/Object/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (symbol == false) {
    document.getElementById("symbol").innerHTML = "";
    data[6].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 270; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("symbol");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('symbol${i}')" class="copyemoji"  id="symbol${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;">`;
        var Symbols = document.getElementById(`symbol${i}`);
        Symbols.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Symbols.innerHTML += `<img style="width: 65px;" class="img-responsive" loading="lazy" src="./assets/System/Symbols/emoji${
          i + 1
        }.png">`;
      }
    });
  }

  if (flag == false) {
    document.getElementById("flag").innerHTML = "";
    data[7].map((element, index) => {
      let props = Object.values(element);
      for (let i = 0; i < 257; i++) {
        let aaa = props[i];
        var buttons = document.getElementById("flag");
        var temp = document.createElement("div");
        buttons.appendChild(temp);
        temp.innerHTML += `<button  onclick="copy('flag${i}')" class="copyemoji"  id="flag${i}" type="button" name="emoji" style="padding:10px; margin:5px; border:none;font-size:40px; border-radius:15px;">`;
        var Flags = document.getElementById(`flag${i}`);
        Flags.innerHTML += `<span style="font-size:1px;">${aaa}</span>`;
        Flags.innerHTML += `<img class="img-responsive" loading="lazy" src="./assets/System/Flags/emoji${
          i + 1
        }.png">`;
      }
    });
  }
}

function copy(value, type) {
  // var values = "(" + value + "," + "'" + type + "'" + ")";
  var copyText1 = document.getElementById(`${value}`).innerText;
  navigator.clipboard.writeText(copyText1).then(() => {});
  const toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
}

function shareEmoji() {
  const whatsapp = document.querySelector(".whatsapp");
  const linkdin = document.querySelector(".linkdin");
  const twitter = document.querySelector(".twitter");

  const pageUrl = location.href;
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

w3IncludeHTML();
window.onload = function (value) {
  allEmoji();
};
