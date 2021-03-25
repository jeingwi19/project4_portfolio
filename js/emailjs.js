(function() {
  // emailJS 유저 ID -> Integration에서 User ID확인 가능
  emailjs.init('user_CAoNfeTKbDVRp6mqYvBn9');
})();

window.onload = function() {

  //form id, #contact-form 안에있는 것들 전송
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;

    /* 조건 성공시 전송 실행 에러 -> length프로퍼티 undefined?오류 */
    /* if(document.getElementsByTagName('input[text]').value.length > 1 && document.getElementsByTagName('input[email]').value.length > 1 && document.getElementsByTagName('textarea').value.length > 10){
      emailjs.sendForm('emjser', 'template_6hshug8', this);
      alert('성공적으로 전송되었습니다!!!');
    }else{
      alert('전송 실패...');
    } */

    // 서비스ID, 이메일 템플릿 ID
    emailjs.sendForm('emjser', 'template_6hshug8', this)
      .then(function() {//비동기 작업 진행 .then()
        alert('😍성공적으로 전송되었습니다!😍');//두번째 알람 실행
        window.location.reload();//마지막 실행 -> 새로고침
      }, function(error) {
        alert('전송에 실패했습니다.', error);
      });
  });
  
}