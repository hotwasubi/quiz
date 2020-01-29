var appear = $(".bodyhide");
var disappear = $(".body");

var ans1 = $("#ans1");
var ans2 = $("#ans2");
var ans3 = $("#ans3");
var ans4 = $("#ans4");

var score = 0;
var timer = 45;

var ques = $("#ques");

var scoreboard =$(".scoreboard");
var clickcount = 0;
var visits = localStorage.getItem('visits');

var time =
 setInterval(function(){
     timer -= 1;
     $("#timer").html("time: " + timer);

     if (timer <= 0){
         stop();
     };
 }, 1000);

 function scored () {
     score += 10;
     $("#score").html("score: " + score);

 };

 function wrong () {
     timer -= 10;
     $("#timer").html("timer: " - timer)
     
 }
 

 function stop() {
    clearInterval(time);

    setTimeout(function(){
        name = prompt("Well done, please enter your name.")
        $(".body").attr("class", "bodyhide");
        scoreboard.attr("id", "scoreboard");

        localStorage.setItem('name', name);
        localStorage.setItem('score', score);
        console.log(name);
        console.log(score);
        
        if (localStorage.getItem('score') > localStorage.getItem('score1')) {
            localStorage.setItem('third', localStorage.getItem('second'));
            localStorage.setItem('score3', localStorage.getItem('score2'));
            
            localStorage.setItem('second', localStorage.getItem('first'));
            localStorage.setItem('score2', localStorage.getItem('score1'));

            localStorage.setItem('first', localStorage.getItem('name'));
            localStorage.setItem('score1', localStorage.getItem('score'));
        }
        else if (localStorage.getItem('score') > localStorage.getItem('score2')) {
            localStorage.setItem('third', localStorage.getItem('second'));
            localStorage.setItem('score3', localStorage.getItem('score2'));

            localStorage.setItem('second', localStorage.getItem('name'));
            localStorage.setItem('score2', localStorage.getItem('score'));
        }
        else if (localStorage.getItem('score') > localStorage.getItem('score3')) {
            localStorage.setItem('third', localStorage.getItem('name'));
            localStorage.setItem('score3', localStorage.getItem('score'));
        }
        
        $('.table').append(
            '<tr> <td>' + localStorage.getItem('first') + '</td>' +
            '<td>' + localStorage.getItem('score1') + '</td> </tr>' +
            '<tr> <td>' + localStorage.getItem('second') + '</td>' +
            '<td>' + localStorage.getItem('score2') + '</td> </tr>' +
            '<tr> <td>' + localStorage.getItem('third') + '</td>' +
            '<td>' + localStorage.getItem('score3') + '</td> </tr>'
            );                
    }, 500);
}


$("#startbtn").on("click", function(){
    console.log("hello")
    // question 1
    $(".bodyhide").show();
    
    $(".body").hide();
    $("#timer").html("time: " + timer);
    $("#score").html("score: " + score);

    localStorage.setItem("visits", localStorage.getItem("visits") - - 1);
    if (localStorage.getItem("visits") == 1){
        localStorage.setItem("first", "");
        localStorage.setItem("score1", 0);

        localStorage.setItem("second", "");
        localStorage.setItem("score2", 0);

        localStorage.setItem("third", "");
        localStorage.setItem("score3", 0);
    };
    
    // question 2

    if ($("#ans3").on("click", function(){
    scored();
    
    ques.html('<h5 class="display text-center" id="ques">2.Which is a self closing tag?</h5>')
    ans1.html('<button class="btn btn-primary btn-lg" id="ans1">P</button>')
    ans2.html('<button class="btn btn-primary btn-lg" id="ans1">img</button>')
    ans3.html('<button class="btn btn-primary btn-lg" id="ans1">div</button>')
    ans4.html('<button class="btn btn-primary btn-lg" id="ans1">Class</button>')
       
  

}));

     
    
});
// question 3
$("#ans2").on("click", function(){
    scored();
    
    ques.html('<h5 class="display text-center" id="ques">3.In CSS, what selector denotes an ID?</h5>')
    ans1.html('<button class="btn btn-primary btn-lg" id="ans1">"*"</button>')
    ans2.html('<button class="btn btn-primary btn-lg" id="ans1">"."</button>')
    ans3.html('<button class="btn btn-primary btn-lg" id="ans1">nothing</button>')
    ans4.html('<button class="btn btn-primary btn-lg" id="ans1">"#"</button>')

});

$("#ans4").on("click", function(){
    scored();
    ques.html('<h5 class="display text-center" id="ques">4.What is bootstrap used for?</h5>')
    ans1.html('<button class="btn btn-primary btn-lg" id="ans1">CSS</button>')
    ans2.html('<button class="btn btn-primary btn-lg" id="ans1">Java</button>')
    ans3.html('<button class="btn btn-primary btn-lg" id="ans1">HTML</button>')
    ans4.html('<button class="btn btn-primary btn-lg" id="ans1">Jquery</button>')

});
$("#ans1").on("click", function(){
    scored();
    $(".scoreboard").show();
    
    $(".bodyhide").hide();
});













