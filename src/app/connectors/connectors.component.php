
<div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="20px" class="stats-cards">

    <mat-card class="example-card" routerLink="ecbhearings">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Analysis of ECB Hearings</mat-card-title>
          <mat-card-subtitle>Financial News</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>
              For this connector we are analysing the <strong>Introductory Statements of the president of the European Central Bank</strong> in
              front of the European Parliament. Our Analysis goes back to 2010 and we perform <strong>text mining, topic clustering and
                  scientific financial sentiment analysis</strong> on the raw text.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <a routerLink="/ecbhearings"><button class="cta" >First Glance</button></a>
          <a><button class="ctadisabled" >Connect</button></a>
          <a><button class="ctadisabled" >Share</button></a>
        </mat-card-actions>
    </mat-card>


  </div>

  <?php

    include_once '/Users/maurice/.bitnami/stackman/machines/xampp/volumes/root/htdocs/phplessons/includes/dbh.php';
    echo "Hi there!";

    $sql = "SELECT * FROM test;";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck>0){
      while ($row = mysqli_fetch_assoc($result)){
        echo $row['subject'] . "<br>";
      }
    }
  ?>
