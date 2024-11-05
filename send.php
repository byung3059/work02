<meta charset="utf-8">
<?php
if(isset($_POST['email'])) {
	  $email_to = "byung3059@naver.com";
    $email_subject = "[오겡끼데스까] 문의사항입니다.";

    function died($error) {
        // your error code can go here
        echo "<script> alert('메일발송을 실패하였습니다.');";
        echo "history.go(-1);";
        echo "</script>";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['contact_name']) ||
        !isset($_POST['contact_hp']) ||
        !isset($_POST['email']) ||
        !isset($_POST['contact_experience']) ||
        !isset($_POST['contact_contents'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }
    $contact_name = $_POST['contact_name']; // required
    $contact_hp = $_POST['contact_hp'];  // not required
    $email_from = $_POST['email']; // required
    $email_subject = '=?UTF-8?B?'.base64_encode($email_subject).'?=';
    $contact_experience = $_POST['contact_experience'];
    $contact_contents = $_POST['contact_contents'];

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email_from)) {
      $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }


  /*if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }*/

  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
  }
    $email_message .= "이름 : ".clean_string($contact_name)."\n\n";
    $email_message .= "연락처 : ".clean_string($contact_hp)."\n\n";
    $email_message .= "희망지역 : ".clean_string($place)."\n\n";


// create email headers
$headers = 'From: '.$email_from;
// 제목이 깨질경우 아래 캐릭터셋 적용

@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- include your own success html here -->

<!-- NAVER SCRIPT -->
<script type="text/javascript" src="/wcslog.js"></script>
<script type="text/javascript">
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_54bc256d72db";
var _nasa={};
if (window.wcs) {
_nasa["cnv"] = wcs.cnv("4", "1");
wcs_do(_nasa);
}
</script>
<!-- NAVER SCRIPT END -->

<script>
alert ("문의가 완료되었습니다.\n빠른 시일안에 답변드리겠습니다.");
location.href='../';
</script>

<?php
}
?>