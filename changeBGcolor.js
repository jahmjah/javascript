/*
  More javaSvripts in: https://github.com/jahmjah/javascript/
  Author: Jose Alberto Hernandez
  Date: 19/03/2017
  Description:This script let the user modify the background color
  E-mail: jahm_jah@yahoo.com T: @jahmjah
*/

document.write("<CENTER>");
document.write("<FORM NAME=\"BGColorForm\">");
document.write("<select name=\"schemesel\" onChange=\"document.bgColor = this.options[selectedIndex].value\">");
document.write("<option value=\"FFFFFF\" selected>White");
document.write("<option value=\"0000FF\">Navy");
document.write("<option value=\"A0A0A0\">Gray");
document.write("<option value=\"E9E900\">Yellow");
document.write("<option value=\"A0A0FF\">Purple");
document.write("<option value=\"C70000\">Maroon");
document.write("<option value=\"FFFFA0\">Brown");
document.write("<option value=\"F0F0FA\">Silver");
document.write("<option value=\"FF00FF\">Fuchsia");
document.write("<option value=\"00FFFF\">Blue");
document.write("</select>");
document.write("</FORM>");
document.write("</CENTER>");
