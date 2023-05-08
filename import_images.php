<?php
$dir = "/home/nikos/nmdimitriou.github.io/images/";
$files = glob($dir . "/*thumb.jpg");
$i = 1;
foreach ($files as $file) {
  if (in_array($file, array(".", ".."))) continue;
  echo "<img src='$dir/$file' onclick='openModal(); currentSlide($i)' class='hover-shadow cursor' alt='image $i'>";
  //echo "<p>" . basename($file) . "</p>";
  $i++;
}
?>
