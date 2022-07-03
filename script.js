function digitalClock() {
    let date = new Date();

    let hours = date.getHours() + "";
    
    let minutes = date.getMinutes() + "";

    let seconds = date.getSeconds() + "";
    
    let day = date.getDay();


    if (hours.length<2){
        hours = "0" + hours
    }

    if (minutes.length < 2){
        minutes = "0" + minutes
    }
    if (seconds.length < 2){
        seconds = "0" + seconds
    }

    let weekdays = ['sun', 'mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    let clock = weekdays[day] + " " + hours + ":" + minutes + ":" + seconds;

    document.getElementById('clock').innerHTML = clock;
    // console.log(clock);
}

digitalClock();


setInterval(digitalClock, 1000);
function create_new_account(){
    document.getElementById('login_card').style.display = 'none'
    document.getElementById('create_account_now').style.display = 'block'
}
function login_to_exixting_account(){
    document.getElementById('login_card').style.display = 'block'
    document.getElementById('create_account_now').style.display = 'none'
}


function check_new_account(){
    let setting_username = document.getElementById('username_input_new_ac').value;
    let setting_passcode = document.getElementById('account_password_input').value;
    if(setting_passcode !== "" && Number(setting_username) !== ""){
        alert(`Account successfully created, your username  is: ${setting_username} and your and password: ****`);
    }else{
        alert("Invalid Input");
    }
}



function check(){
    const fixed_username = 'david';
    const fixed_password = 2007;
    let username = document.getElementById('username_input').value;
    let password = document.getElementById('password_input').value;
    if (username === fixed_username && Number(password) === fixed_password){
            document.getElementById('first_display').style.display = 'none';
            document.getElementById('Question1').style.display = 'block';
            document.getElementById('side_display').style.display = "block"
    }else{
        document.getElementById('wrong_details').textContent = "wrong usernme or passcode";
        document.getElementById('wrong_details').setAttribute('style', 'color: red;');
    }
}
function direct_start(){
    document.getElementById('first_display').style.display = 'none';
    document.getElementById('Question1').style.display = 'block';
    document.getElementById('side_display').style.display = "block"
    
}
function next1(){
    question1.style.display = 'none';
    document.getElementById('Question2').style.display = 'block';
}
function previous1(){
    question1.style.display = 'block';
    document.getElementById('Question2').style.display = 'none';
}

function next2(){
    question2.style.display = 'none';
    question3.style.display = 'block';
}
function previous2(){
    question2.style.display = 'block';
    Question3.style.display = 'none';
}

function next3(){
    Question3.style.display = 'none';
    Question4.style.display = 'block';
}
function previous3(){
    Question4.style.display = 'none';
    Question3.style.display = 'block';
}
function next4(){
    Question4.style.display = 'none';
    Question5.style.display = 'block';
}

function previous4(){
    Question4.style.display = 'block';
    Question5.style.display = 'none';
}
function next5(){
    Question5.style.display = 'none';
    Question6.style.display = 'block';
}

function previous5(){
    Question5.style.display = 'block';
    Question6.style.display = 'none';
}
function next6(){
    Question6.style.display = 'none';
    Question7.style.display = 'block';
}


function previous6(){
    Question6.style.display = 'block';
    Question7.style.display = 'none';
}
function next7(){
    Question7.style.display = 'none';
    Question8.style.display = 'block';
}

function previous7(){
    Question7.style.display = 'block';
    Question8.style.display = 'none';
}
function next8(){
    Question8.style.display = 'none';
    Question9.style.display = 'block';
}

function previous8(){
    Question8.style.display = 'block';
    Question9.style.display = 'none';
}
function next9(){
    Question9.style.display = 'none';
    Question10.style.display = 'block';
}

function previous9(){
    Question9.style.display = 'block';
    Question10.style.display = 'none';
}
let question1 = document.getElementById('Question1')
let question2 = document.getElementById('Question2')
let question3 = document.getElementById('Question3')
let question4 = document.getElementById('Question4')
let question5 = document.getElementById('Question5')
let question6 = document.getElementById('Question6')
let question7 = document.getElementById('Question7')
let question8 = document.getElementById('Question8')
let question9 = document.getElementById('Question9')
let question10 = document.getElementById('Question10')

let hideAll = function(){
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
    question7.style.display = "none";
    question8.style.display = "none";
    question9.style.display = "none";
    question10.style.display = "none";
}
function display_q1(){
    // hideAll();
    // Question1.classList.add('.show');
    // if (question1.classList.contains('.show')) {
    //     console.log('added');
    // }
}

function display_q2(){
    Question1.style.display = "none";
    Question2.style.display = "block";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q3(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "block";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q4(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "block";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q5(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "block";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q6(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "block";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q7(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "block";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q8(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "block";
    Question9.style.display = "none";
    Question10.style.display = "none";
}
function display_q9(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "block";
    Question10.style.display = "none";
}
function display_q10(){
    Question1.style.display = "none";
    Question2.style.display = "none";
    Question3.style.display = "none";
    Question4.style.display = "none";
    Question5.style.display = "none";
    Question6.style.display = "none";
    Question7.style.display = "none";
    Question8.style.display = "none";
    Question9.style.display = "none";
    Question10.style.display = "block";
}


function dashboard(){
    document.getElementById('first_ui').style.display = "none";
    document.getElementById('main_dashboard').style.display = "block";
}


document.getElementById('show_navbar').style.display = "none";
function sidebar_collapse(){
    document.getElementById('sidebar_collapse').style.display = "none";
    document.getElementById('dashboard').setAttribute('style', 'width: 100%; margin-left: 0;');
    document.getElementById('collapse_navbar').style.display = "none";
    document.getElementById('show_navbar').style.display = "block";
}
function sidebar_show(){
    document.getElementById('sidebar_collapse').style.display = "grid";
    document.getElementById('dashboard').setAttribute('style', 'width: 93%; margin-left: 7vw;');
    document.getElementById('show_navbar').style.display = "none";
    document.getElementById('collapse_navbar').style.display = "block";
}




let check1 = 'unchecked';
let check2 = 'unchecked';
let check3 = 'unchecked';
let check4 = 'unchecked';
let check5 = 'unchecked';
let check6 = 'unchecked';
let check7 = 'unchecked';
let check8 = 'unchecked';
let check9 = 'unchecked';
let check10 = 'unchecked';
let correctAnswer1 = document.getElementById('correct1');
correctAnswer1.addEventListener('click', 
    () => {
        if (check1 = 'unchecked') {
            check1 = 'checked';
        }else{
            check1 = 'unchecked';
        }
    }
);

let correctAnswer2 = document.getElementById('correct2');
correctAnswer2.addEventListener('click', 
    () => {
        if (check2 = 'unchecked') {
            check2 = 'checked';
        }else{
            check2 = 'unchecked';
        }
    }
);

let correctAnswer3 = document.getElementById('correct3');
correctAnswer3.addEventListener('click', 
    () => {
        if (check3 = 'unchecked') {
            check3 = 'checked';
        }else{
            check3 = 'unchecked';
        }
    }
);

let correctAnswer4 = document.getElementById('correct4');
correctAnswer4.addEventListener('click', 
    () => {
        if (check4 = 'unchecked') {
            check4 = 'checked';
        }else{
            check4 = 'unchecked';
        }
    }
);
let correctAnswer5 = document.getElementById('correct5');
correctAnswer5.addEventListener('click', 
    () => {
        if (check5 = 'unchecked') {
            check5 = 'checked';
        }else{
            check5 = 'unchecked';
        }
    }
);

let correctAnswer6 = document.getElementById('correct6');
correctAnswer6.addEventListener('click', 
    () => {
        if (check6 = 'unchecked') {
            check6 = 'checked';
        }else{
            check6 = 'unchecked';
        }
    }
);

let correctAnswer7 = document.getElementById('correct7');
correctAnswer7.addEventListener('click', 
    () => {
        if (check7 = 'unchecked') {
            check7 = 'checked';
        }else{
            check7 = 'unchecked';
        }
    }
);

let correctAnswer8 = document.getElementById('correct8');
correctAnswer8.addEventListener('click', 
    () => {
        if (check8 = 'unchecked') {
            check8 = 'checked';
        }else{
            check8 = 'unchecked';
        }
    }
);

let correctAnswer9 = document.getElementById('correct9');
correctAnswer9.addEventListener('click', 
    () => {
        if (check9 = 'unchecked') {
            check9 = 'checked';
        }else{
            check9 = 'unchecked';
        }
    }
);

let correctAnswer10 = document.getElementById('correct10');
correctAnswer10.addEventListener('click', 
    () => {
        if (check10 = 'unchecked') {
            check10 = 'checked';
        }else{
            check10 = 'unchecked';
        }
    }
);


function mark1(){
    if (check1 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}

function mark2(){
    if (check2 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}
function mark3(){
    if (check3 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}
function mark4(){
    if (check4 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}
function mark5(){
    if (check5 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}

function mark6(){
    if (check6 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}
function mark7(){
    if (check7 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}

function mark8(){
    if (check8 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}

function mark9(){
    if (check9 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}

function mark10(){
    if (check10 === 'checked') {
        let returnable1 = 1;
        console.log(returnable1)
        return returnable1;
    }else{
        let returnable0 = 0;
        return returnable0;
    }
}


let checkMarks = document.getElementById('check_marks');
checkMarks.addEventListener('click', 
    () => {
        let totalScore = mark1() + mark2() + mark3() + mark4() + mark5() + mark6() + mark7() + mark8() + mark9() + mark10();
        alert(`your total score is ${totalScore}`);
    }
);
