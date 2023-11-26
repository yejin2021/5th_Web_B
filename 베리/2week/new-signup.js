const container = document.querySelector(".container");
const nameInput = document.getElementById("name");
const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordCheckInput = document.getElementById("check-password");
const signupBtn = document.getElementById("signup-btn");
const closeBtn = document.getElementById("close-btn");
const wrapper = document.querySelector(".wrapper");

const nameError = document.querySelector(".signup-area #name ~ .error-message");
const nameSuccess = document.querySelector(".signup-area #name ~ .success-message");



signupBtn.addEventListener("click", function() {
  let isValid = true;

  // 이름 확인
  if (!nameInput.value.trim()) { // trim()을 사용하여 공백만 있는 경우도 무효로 처리
    nameError.style.display = "block";
    nameSuccess.style.display = "none";
    isValid = false;
  } else {
    nameError.style.display = "none";
    nameSuccess.style.display = "block";
  }
})

// function validate() {
//   let isValid = true;

//   // 이름 검사
//   if (!nameInput.value) {
//       displayMessage("name", true);
//       isValid = false;
//   } else {
//       displayMessage("name", false);
//   }

//   // ... (다른 검사들도 이런 식으로 최적화)

//   return isValid;
// }

// signupBtn.addEventListener("click", function() {
// if (validate()) {
//     // 모든 유효성 검사가 통과되면 버튼 색을 빨간색으로 변경
//     signupBtn.style.backgroundColor = "red";
//     // 모달 표시
//     wrapper.style.display = "block";
// }
// });


// closeBtn.addEventListener("click", function() {
//   wrapper.style.display = "none";
// });

// signup.js

// document.addEventListener("DOMContentLoaded", function() {
//   const nameInput = document.querySelector("#name-wrapper input");
//   const nicknameInput = document.querySelector("#nickname + input");
//   const emailInput = document.querySelector("#email + input");
//   const passwordInput = document.querySelector("#password + input");
//   const passwordCheckInput = document.querySelector("#password-check + input");
//   const signupButton = document.querySelector("#signup-btn");

//   const nameError = document.querySelector("#name-wrapper .error-message");
//   const nicknameError = document.querySelector("#nickname + .error-message");
//   const emailError = document.querySelector("#email + .error-message");
//   const passwordError = document.querySelector("#password + .error-message");
//   const passwordCheckError = document.querySelector("#password-check + .error-message");

//   signupButton.addEventListener("click", function() {
//       let isValid = true;

//       // 이름 확인
//       if (!nameInput.value.trim()) {
//           nameError.textContent = "필수 입력 항목입니다!";
//           isValid = false;
//       } else {
//           nameError.textContent = "";
//       }

//       // 닉네임 길이 확인
//       if (!nicknameInput.value.trim()) {
//           nicknameError.textContent = "필수 입력 항목입니다!";
//           isValid = false;
//       } else if (nicknameInput.value.trim().length < 2 || nicknameInput.value.trim().length > 5) {
//           nicknameError.textContent = "닉네임은 2~5글자로 입력해주세요.";
//           isValid = false;
//       } else {
//           nicknameError.textContent = "";
//       }

//       // 이메일 형식 확인
//       if (!emailInput.value.trim()) {
//           emailError.textContent = "필수 입력 항목입니다!";
//           isValid = false;
//       } else if (!emailRegex.test(emailInput.value.trim())) {
//           emailError.textContent = "올바른 이메일 형식을 입력해주세요.";
//           isValid = false;
//       } else {
//           emailError.textContent = "";
//       }

//       // 비밀번호 확인
//       if (!passwordInput.value.trim()) {
//           passwordError.textContent = "필수 입력 항목입니다!";
//           isValid = false;
//       } else if (!passwordRegex.test(passwordInput.value.trim())) {
//           passwordError.textContent = "비밀번호에는 영문, 숫자, 특수 문자만 사용할 수 있습니다.";
//           isValid = false;
//       } else {
//           passwordError.textContent = "";
//       }

//       // 비밀번호 확인 일치 여부 확인
//       if (!passwordCheckInput.value.trim()) {
//           passwordCheckError.textContent = "필수 입력 항목입니다!";
//           isValid = false;
//       } else if (passwordInput.value.trim() !== passwordCheckInput.value.trim()) {
//           passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
//           isValid = false;
//       } else {
//           passwordCheckError.textContent = "";
//       }

//       // 모든 검증을 통과하면 가입 성공 모달 표시
//       if (isValid) {
//           alert("가입 성공!");
//       }
//   });
// });
