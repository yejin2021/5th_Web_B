import "./styles.css";
document.addEventListener("DOMContentLoaded", function () {
  const userId = document.getElementById("userId");
  const nickname = document.getElementById("nickname");
  const userEmail = document.getElementById("userEmail");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
  const submitButton = document.getElementById("submitButton");
  const successModal = document.getElementById("successModal");
  const closeBtn = document.querySelector(".close");

  // 모달 닫기 이벤트
  closeBtn.addEventListener("click", function () {
    successModal.style.display = "none";
  });

  // 가입하기 버튼 클릭 이벤트
  submitButton.addEventListener("click", function () {
    // 각 입력 필드의 값을 가져오기
    const nameValue = userId.value.trim();
    const nicknameValue = nickname.value.trim();
    const emailValue = userEmail.value.trim();
    const passValue = pass.value;
    const pass2Value = pass2.value;

    // 각 항목의 유효성 검사를 수행
    let isValid = true;

    if (nameValue === "") {
      document.getElementById("nameError").innerText = "필수 입력 항목입니다.";
      isValid = false;
    } else {
      document.getElementById("nameError").innerText = "멋진 이름이네요!";
    }

    if (nicknameValue.length < 2 || nicknameValue.length > 5) {
      document.getElementById("nicknameError").innerText =
        "닉네임은 2~5글자로 구성해주세요!";
      isValid = false;
    } else {
      document.getElementById("nicknameError").innerText = "멋진 닉네임이군요!";
    }

    if (!/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/.test(emailValue)) {
      document.getElementById("emailError").innerText =
        "올바른 메일 형식이 아닙니다!";
      isValid = false;
    } else {
      document.getElementById("emailError").innerText = "올바른 메일 형식입니다!";
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(passValue)) {
      document.getElementById("passError").innerText =
        "영어+숫자+특수문자를 조합하여 작성해주세요.";
      isValid = false;
    } else {
      document.getElementById("passError").innerText = "안전한 비밀번호입니다!";
    }

    if (passValue !== pass2Value) {
      document.getElementById("pass2Error").innerText = "비밀번호가 일치하지 않습니다.";
      isValid = false;
    } else {
      document.getElementById("pass2Error").innerText = "비밀번호가 일치합니다!";
    }

    // 모든 항목이 유효하면 가입 성공 모달을 표시
    if (isValid) {
      successModal.style.display = "block";
    }
  });
});