<?php
    $show = array (
        array("Bikes",22,18),
        array("Cars",15,13),
        array("Scooters",5,2),
        array("Riskshaw",17,15)
      );

      echo json_encode(array("arr"=>$show));
?>