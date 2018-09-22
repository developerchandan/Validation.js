<head>

<script src="calendar.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="calendar.css"/>
<script type="text/javascript">
function validate()
{
var a=/^[A-Za-z.\s]{0,30}$/;
if (document.qryform.firstnm.value=="")
{
alert("Please Enter firstname");
document.qryform.firstnm.focus();
return false; 
}

if(!a.test(document.qryform.firstnm.value))
{
alert("Please Enter only alpha character value");
document.qryform.firstnm.focus();
return false;
}



var a=/^[A-Za-z.\s]{0,30}$/;
if (document.qryform.lastnam.value=="")
{
alert("Please Enter Lastname Number");
document.qryform.lastnam.focus();
return false; 
}

if(!a.test(document.qryform.lastnam.value))
{
alert("Please Enter only character  value");
document.qryform.lastnam.focus();
return false;
}


var a=/^[A-Za-z0-9_\-\.]+\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/;
if (document.qryform.email.value=="")
{
alert("Please Enter email id Number");
document.qryform.email.focus();
return false; 
}

if(!a.test(document.qryform.email.value))
{
alert("Please Enter only character  value");
document.qryform.email.focus();
return false;
}
var a=/^[0-9.\s]{0,30}$/;
if (document.qryform.mob.value=="")
{
alert("Please Enter Mobile Number");
document.qryform.mob.focus();
return false; 
}

if (document.qryform.mob.value.length!=10)
{
alert("Please Enter equql to ten digit number");
document.qryform.mob.focus();
return false;
}

var a=/^[A-Za-z.\s]{0,30}$/;
if (document.qryform.state.value=="")
{
alert("Please Enter statename Number");
document.qryform.state.focus();
return false; 
}

if(!a.test(document.qryform.state.value))
{
alert("Please Enter only character  value");
document.qryform.state.focus();
return false;
}
var a=/^[A-Za-z.\s]{0,30}$/;
if (document.qryform.city.value=="")
{
alert("Please Enter cityname Number");
document.qryform.city.focus();
return false; 
}

if(!a.test(document.qryform.city.value))
{
alert("Please Enter only character  value");
document.qryform.city.focus();
return false;
}
var a=/^[A-Za-z.\s]{0,30}$/;
if (document.qryform.country.value=="")
{
alert("Please Enter countryname Number");
document.qryform.country.focus();
return false; 
}

if(!a.test(document.qryform.country.value))
{
alert("Please Enter only character  value");
document.qryform.country.focus();
return false;
}

}


</script></head>
