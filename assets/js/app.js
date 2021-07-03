/*
credits - RusPlane

get this template on:
https://github.com/RussianAirplane/website
*/

$(document).ready(function() {
    getLocationF();
    function getLocationF() {
      $.getJSON("https://ipapi.co/json/", function(ip) {
        console.log(ip);
        $("#ip").html(ip.ip);
        $("#country").html(ip.country_name);
        $("#city").html(ip.city);
    }, 'jsonp')
    ;}});