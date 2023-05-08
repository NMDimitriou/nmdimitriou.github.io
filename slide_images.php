<div class="row" style="z-index: 7">
  <?php
  $dir = "images/";
  $files = glob($dir . "/*.{jpg,jpeg,png,gif}", GLOB_BRACE);
  $count = count($files);

  for ($i = 0; $i < $count; $i++) {
    $filename = $files[$i];
    $thumbnail = str_replace(".", "_thumb.", $filename);
    $caption = basename($filename);

    echo '<div class="column">';
    echo '<img class="demo cursor" src="' . $thumbnail . '" onclick="currentSlide(' . ($i+1) . ')" alt="' . $caption . '">';
    echo '</div>';
  }
  ?>
</div>

<div class="row">
  <?php
  for ($i = 0; $i < $count; $i++) {
    $filename = $files[$i];
    $thumbnail = str_replace(".", "_thumb.", $filename);
    $caption = basename($filename);

    echo '<div class="column">';
    echo '<img class="demo cursor" src="' . $thumbnail . '" onclick="currentSlide(' . ($i+1) . ')" alt="' . $caption . '">';
    echo '</div>';
  }
  ?>
</div>
