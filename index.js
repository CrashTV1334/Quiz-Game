var xmlhttp = new XMLHttpRequest();
var url = "https://opentdb.com/api.php?amount=10";
var myArr;
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var indx;
var b1 = document.getElementById("correct");
var b2 = document.getElementById("wr0");
var b3 = document.getElementById("wr1");
var b4 = document.getElementById("wr2");

var i;
i = 0;
var points = 0;


function myFunction(arr) {

    b1.style.backgroundColor = "white";
    b1.onmouseover = function () {
        b1.style.backgroundColor = "#5bc0de";
    };
    b1.onmouseout = function () {
        b1.style.backgroundColor = "white";
    };
    b2.style.backgroundColor = "white";
    b2.onmouseover = function () {
        b2.style.backgroundColor = "#5bc0de";
    };
    b2.onmouseout = function () {
        b2.style.backgroundColor = "white";
    };
    b3.style.backgroundColor = "white";
    b3.onmouseover = function () {
        b3.style.backgroundColor = "#5bc0de";
    };
    b3.onmouseout = function () {
        b3.style.backgroundColor = "white";
    };
    b4.style.backgroundColor = "white";
    b4.onmouseover = function () {
        b4.style.backgroundColor = "#5bc0de";
    };
    b4.onmouseout = function () {
        b4.style.backgroundColor = "white";
    };

    if (i > 9) {
        var outnew = document.getElementById("game").innerHTML = `<h1 style="color: white; text-size:22;">Thanks For Playing</h1>
        <br>
        <h3 style="color: white; text-size:22;">Your total score is: </h3><p style="color: white; font-size: 50px;">` + points + `</p>
        <br>
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12" id="0">
                <b></b><a class="btn btn-outline-primary justify-content-center" onclick="location.reload()" style="width: 20%; background-color: white; font-family: Playfair Display;" id="res" ng-click="levelOU()">Play Again</a></b>
            </div>
        </div>
        </div>
        `


    }

    if (i < 10) {
        var out1 = "";
        out1 = arr.results[i].question;
        var out2 = "";
        var out3 = "";
        var out4 = "";
        var out5 = "";
        out2 = arr.results[i].correct_answer;
        out3 = arr.results[i].incorrect_answers[0];
        out4 = arr.results[i].incorrect_answers[1];
        out5 = arr.results[i].incorrect_answers[2];
        document.getElementById("id01").innerHTML = `<h1 style="margin: auto;"><span style="color: white; font-family: Playfair Display;">Q`+(i+1)+`) </span><span style="color: white; font-family: Playfair Display;"> ` + out1 + `</span></h1>`;
        document.getElementById("0").innerHTML = `<b><a class="btn btn-outline-primary justify-content-center" style="width: 75%; background-color: white; font-family: Playfair Display;" id="correct" ng-click="levelOU()">` + out2 + `</a></b>`;
        document.getElementById("1").innerHTML = `<b><a class="btn btn-outline-primary justify-content-center" style="width: 75%; background-color: white; font-family: Playfair Display;" id="wr0" ng-click="levelOU()">` + out3 + `</a></b>`;
        document.getElementById("2").innerHTML = `<b><a class="btn btn-outline-primary justify-content-center" style="width: 75%; background-color: white; font-family: Playfair Display;" id="wr1" ng-click="levelOU()">` + out4 + `</a></b>`;
        document.getElementById("3").innerHTML = `<b><a class="btn btn-outline-primary justify-content-center" style="width: 75%; background-color: white; font-family: Playfair Display;" id="wr2" ng-click="levelOU()">` + out5 + `</a></b>`;

    }

    b1 = document.getElementById("correct");
    b2 = document.getElementById("wr0");
    b3 = document.getElementById("wr1");
    b4 = document.getElementById("wr2");
    //again = document.getElementById("res");




    b1.onclick = function () {
        points = points + 10;
        b1.style.background = "#5cb85c";

        setTimeout(function () {
            i = i + 1;
            myFunction(myArr);
        }, 4000);

    }



    b2.onclick = function () {
        b2.style.background = "#d9534f";
        b1.style.background = "#5cb85c";
        setTimeout(function () {
            i = i + 1;
            myFunction(myArr);
        }, 4000);

    }



    b3.onclick = function () {
        b3.style.background = "#d9534f";
        b1.style.background = "#5cb85c";
        setTimeout(function () {
            i = i + 1;
            myFunction(myArr);
        }, 4000);

    }



    b4.onclick = function () {
        b4.style.background = "#d9534f";
        b1.style.background = "#5cb85c";
        setTimeout(function () {
            i = i + 1;
            myFunction(myArr);
        }, 4000);

    }

}