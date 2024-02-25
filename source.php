<?php 

$_csvFile = file_get_contents("population.csv");
$_csvArray = explode("\n", $_csvFile);

$count2 = count($_csvArray);
print $count2;
$run = array();
for( $n = 0; $n < $count2;  $n++ ) {
  $ex = explode(",", $_csvArray[$n]);
  $run[$n] = $ex[0]; 
   
  // echo json_encode($run[$n],JSON_PRETTY_PRINT);
}

echo json_encode($run,JSON_PRETTY_PRINT);

// $result = array_map("str_getcsv", $_csvArray);

// header('Content-type: application/json; charset=UTF-8');
// $reEncode = json_encode($_csvArray, JSON_PRETTY_PRINT);
// print_r($reEncode);

$csvEplode2 = explode("=>", $_csvArray);
$reEncode2 = json_encode($csvEplode2, JSON_PRETTY_PRINT);
print ($reEncode2);

$headers = $result[0];
$jsonArray = array();
$rowCount = count($result);
// print_r($result);
for ($i=1;$i<$rowCount;$i++) {
    foreach ($result[$i] as $key => $column) {
        $jsonArray[$i][$headers[$key]] = $column;
    }
}

header('Content-type: application/json; charset=UTF-8');
$jsonObject = json_encode($result, JSON_PRETTY_PRINT);
// print_r($jsonObject);

?>