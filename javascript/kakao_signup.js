function checkID() {
  var id = document.getElementById("id");
  var idValidation = document.getElementById("id-validation");
  idValidation.style.fontSize = "12px";

  if (id.value.length < 6 || id.value.length > 20) {
    idValidation.innerHTML = "아이디는 6자 이상 20자 이하로 입력하세요.";
    idValidation.className = "false";

    return false;
  }

  if (!isNaN(id.value)) {
    idValidation.innerHTML = "아이디는 숫자만 입력할 수 없습니다.";
    idValidation.className = "false";

    return false;
  }

  if (id.value.indexOf(" ") != -1) {
    idValidation.innerHTML = "아이디에는 공백을 입력할 수 없습니다.";
    idValidation.className = "false";

    return false;
  }

  idValidation.innerHTML = "아이디가 정상적으로 입력되었습니다.";
  idValidation.className = "true";

  return true;
}

function checkPW() {
  var passwd = document.getElementById("passwd");
  var passwdConfirm = document.getElementById("passwd-confirm");
  var passwdValidation = document.getElementById("passwd-validation");
  passwdValidation.style.fontSize = "12px";

  if (passwd.value.length < 8 || passwd.value.length > 32) {
    passwdValidation.innerHTML = "비밀번호는 8자 이상 32자 이하로 입력하세요.";
    passwdValidation.className = "false";

    return false;
  }

  var regExp = /\d/;
  var flag = regExp.test(passwd.value);
  if (!flag) {
    passwdValidation.innerHTML =
      "비밀번호는 1개 이상의 숫자를 포함해야 합니다.";
    passwdValidation.className = "false";

    return false;
  }

  regExp = /[a-zA-Z]/;
  flag = regExp.test(passwd.value);
  if (!flag) {
    passwdValidation.innerHTML = "비밀번호는 알파벳으로 입력하세요.";
    passwdValidation.className = "false";

    return false;
  }

  regExp = /[!@#$%^&*()_\+\=\-\[\]\"\']/;
  flag = regExp.test(passwd.value);
  if (!flag) {
    passwdValidation.innerHTML =
      "비밀번호는 1개 이상의 특수문자를 포함해야 합니다.";
    passwdValidation.className = "false";

    return false;
  }

  if (passwd.value !== passwdConfirm.value) {
    passwdValidation.innerHTML = "비밀번호가 일치하지 않습니다.";
    passwdValidation.className = "false";

    return false;
  }

  passwdValidation.innerHTML = "비밀번호가 일치합니다.";
  passwdValidation.className = "true";

  return true;
}

function checkTel() {
  var tel = document.getElementById("tel");
  var telValidation = document.getElementById("tel-validation");
  telValidation.style.fontSize = "12px";

  var regExp = /^[0-9]*$/;
  var flag = regExp.test(tel.value);
  if (!flag) {
    telValidation.innerHTML = "전화번호는 숫자만 입력할 수 있습니다.";
    telValidation.className = "false";

    return false;
  }

  if (tel.value.length < 9 || tel.value.length > 11) {
    telValidation.innerHTML = "전화번호는 9~11자리까지만 입력할 수 있습니다.";
    telValidation.className = "false";

    return false;
  }
  telValidation.innerHTML = "전화번호를 정상적으로 입력하셨습니다.";
  telValidation.className = "true";
  return true;
}

window.onload = function () {
  var form = document.form;
  form.onsubmit = function (e) {
    if (!checkID()) return false;
    if (!checkPW()) return false;
    if (!checkTel()) return false;

    var agree = document.getElementById("agree");
    if (!agree.checked) {
      alert("회원가입하시려면 약관에 동의해주세요.");
      return false;
    }
  };

  var id = document.getElementById("id");
  id.onkeyup = checkID;

  var passwd = document.getElementById("passwd");
  var passwdConfirm = document.getElementById("passwd-confirm");
  passwd.onkeyup = passwdConfirm.onkeyup = checkPW;

  var tel = document.getElementById("tel");
  tel.onkeyup = checkTel;

  var nickname = document.getElementById("nickname");
  var nicknameValidation = document.getElementById("nickname-validation");
  nicknameValidation.style.fontSize = "12px";

  nickname.onkeyup = function () {
    if (this.value.length > 20) {
      this.value = this.value.substring(0, 20);
      nicknameValidation.innerHTML = "닉네임은 20자까지만 입력할 수 있습니다.";
      nicknameValidation.className = "false";
      return false;
    }

    var nicknameTxt = document.getElementsByClassName("nickname-txt")[0];
    nicknameTxt.innerHTML = this.value.length + "/20";

    nicknameValidation.innerHTML = "닉네임을 정상적으로 입력하셨습니다.";
    nicknameValidation.className = "true";

    return true;
  };
};
