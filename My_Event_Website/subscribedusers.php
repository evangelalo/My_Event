<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <title>LaloParty</title>
        <link rel="stylesheet" href="style.css">
        <style>
            table{
                background-color: #8d0dff;
                border-collapse: collapse;
                text-align: center;
            }
            td{
                height: 20px;
                width: 300px;
                }
            #tablesection{
                padding-top: 20px;
            }
        </style>
        <script>

        </script>
    </head>
    <body>     

        <header>
            <div class="container">
                <div id="branding">
                    <h1><span class="highlight">Lalo</span> Party</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Αρχική Σελίδα</a></li>
                        <li><a href="ourcompany.html">Η εταιρεία μας</a></li>
                        <li><a href="calcprice.html">Υπολογισμός Κόστους</a></li>
                        <li><a href="contactus.html">Επικοινωνήστε μαζί μας</a></li>
                        <li><a href="newsletter.html">Εγγραφή στο Newsletter</a></li>
                    </ul>
                </nav>  
            </div>
        </header>

        <section id="sectiontitle">
            <div class="container">
                <h1>Εγγεγραμμένοι χρήστες</h1>
            </div>
        </section>

        <section id="bottomtitle">
            <div class="container">
                <h1></h1>
            </div>
        </section>

        <section id="tablesection">
            <div class="container">
                <?php
                $host = "localhost";
                $username = "root";
                $password = "";
                $database = "eventdb";
                $table = "users";

                $con = mysqli_connect($host, $username, $password, $database);
                mysqli_select_db($con,"users");
                $result=mysqli_query($con, "SELECT * FROM users");

                echo "<table align=center>
                    <tr>
                    <td align=center><b>Username</b></td>
                    <td align=center><b>Ονοματεπώνυμο</b></td>
                    <td align=center><b>Email</b></td>";
                    
                while($data = mysqli_fetch_row($result))
                {
                    echo "<tr>";
                    echo "<td align=center>$data[0]</td>";
                    echo "<td align=center>$data[1]</td>";
                    echo "<td align=center>$data[2]</td>";

                    echo "</tr>";
                }
                echo "</table>"
                ?>
            </div>
        </section>

        <!--html footer-->
        <footer>
            <p>Lalogiannis Web Design, Copyright &copy; 2021</p>
        </footer>

    </body>
</html>

