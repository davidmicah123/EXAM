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
    console.log(clock);
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
    let setting_username = document.getElementById('username_input').value;
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
    }else{
        document.getElementById('wrong_details').textContent = "wrong usernme or passcode";
        document.getElementById('wrong_details').setAttribute('style', 'color: red;');
    }
}
function direct_start(){
    document.getElementById('first_display').style.display = 'none';
    document.getElementById('Question1').style.display = 'block';

    
}
function next1(){
    document.getElementById('Question1').style.display = 'none';
    document.getElementById('Question2').style.display = 'block';
}
function previous1(){
    document.getElementById('Question1').style.display = 'block';
    document.getElementById('Question2').style.display = 'none';
}

function next2(){
    document.getElementById('Question2').style.display = 'none';
    document.getElementById('Question3').style.display = 'block';
}
function previous2(){
    document.getElementById('Question2').style.display = 'block';
    document.getElementById('Question3').style.display = 'none';
}

function next3(){
    document.getElementById('Question3').style.display = 'none';
    document.getElementById('Question4').style.display = 'block';
}
function previous3(){
    document.getElementById('Question4').style.display = 'none';
    document.getElementById('Question3').style.display = 'block';
}
function next4(){
    document.getElementById('Question4').style.display = 'none';
    document.getElementById('Question5').style.display = 'block';
}

function previous4(){
    document.getElementById('Question4').style.display = 'block';
    document.getElementById('Question5').style.display = 'none';
}


