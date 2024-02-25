<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SGN Testing</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <style>
        .vh-container{
            margin-top: 100px;
            
        }
        .card {
        border-radius: 3cap;
        }
    </style>
</head>
<body>
    <div class="container vh-container">
        <div class="card bg-light p-3">

            <h3>Population growth per country, 1951 to 2021 </h3>
            <h5>Click on the legend below to filter by continent</h5>
            <p class="fw-bold">Region:</p>

            <!-- <canvas id="phuwisChart" style="width:100%;max-width:1000px"></canvas> -->
            <div id="phuwis" style="width:100%;max-width:1000px;">
            </div>
        </div>
    </div>
 
<script src="js/me.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>