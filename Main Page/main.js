
function newElement(){
    var li = document.createElement("li");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput_alert");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function find_employee() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput_employee");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL_employee");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

newElement();

$('#alert_button').click(function () {
    $("#employee_alert").show();
    console.log("yes");
});

$('#emlist').click(function () {
    $("#employee_list").show();
    $("#department_list").hide();
});

$('#back').click(function () {
    $("#employee_list").hide();
    $("#department_list").show();
});

$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});



$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 