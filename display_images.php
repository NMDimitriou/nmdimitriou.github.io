<?php
$dir = "images/";
$files = glob($dir . "/*thumb.jpg");
$num_slides = count($files);

for ($i = 1; $i <= $num_slides; $i++) {
  $slide_num = $i . " / " . $num_slides;
  $slide_img = str_replace("_thumb", "", $files[$i-1]);
  echo "<div class='mySlides'>
          <div class='numbertext'>$slide_num</div>
          <img src='$slide_img'>
        </div>";
}
?>
