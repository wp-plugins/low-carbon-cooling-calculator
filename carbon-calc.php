<?php
/*
Plugin Name: Low Carbon Cooling Calculator
Plugin URI: http://www.watkinshire.co.uk/
Description: A simple tool to calculate your low carbon cooling needs
Author: Adam Clark
Version: 1.0
Author URI: http://www.watkinshire.co.uk/
*/

function carbon_widget() {
	echo "<h2>Low Carbon Cooling Calculator</h2><style type=\"text/css\" media=\"all\">@import url(wp-content/plugins/carbon-calc/styles/carbon-calc.css);</style><div id=\"carboncalc\"><div id=\"container\"><div id=\"innercontainer\"><form action=\"#\" id=\"CarbonCalculator\" method=\"post\" name=\"CarbonCalculator\"><fieldset id=\"area\"><legend>Size of Area</legend><label for=\"CarbonLength\">Length:</label><input id=\"CarbonLength\" name=\"CarbonLength\" onblur=\"CarbonCalculateVolume('CarbonLength','CarbonWidth','CarbonVolume');\" onkeyup=\"CarbonCalculateVolume('CarbonLength','CarbonWidth','CarbonVolume');\" type=\"text\" /><br /><label for=\"CarbonWidth\">Width:</label><input id=\"CarbonWidth\" name=\"CarbonWidth\" onblur=\"CarbonCalculateVolume('CarbonLength','CarbonWidth','CarbonVolume');\" onkeyup=\"CarbonCalculateVolume('CarbonLength','CarbonWidth','CarbonVolume');\" type=\"text\" /><br /><label for=\"CarbonVolume\">Working Volume:</label><input class=\"readonly\" id=\"CarbonVolume\" name=\"CarbonVolume\" readonly=\"readonly\" type=\"text\" /></fieldset><fieldset id=\"type\"><legend>Area Type</legend><label for=\"CarbonSector\">Sector:</label><select id=\"CarbonSector\" name=\"CarbonSector\" onchange=\"CarbonSelectSector('CarbonSector');\"><option value=\"\">--Select One--</option><option value=\"1\">Commercial</option><option value=\"2\">Education</option><option value=\"3\">Industrial</option><option value=\"4\">Leisure</option><option value=\"5\">Retail</option></select><div id=\"Carbonapplicationbox\"><!-- JavaScript --></div></fieldset><div id=\"Carbonresults\"><!-- JavaScript --></div></form><p id=\"Carbonhomelink\"><a href=\"http://www.watkinshire.co.uk/air-conditioning-hire/low-carbon-cooling.php\" target=\"_blank\">Low Carbon Cooling</a></p></div></div></div><script language=\"javascript\" src=\"wp-content/plugins/carbon-calc/includes/javascript/carbon-calc.js\" type=\"text/javascript\"></script>";
}

function init_carbon(){
	register_sidebar_widget("Low Carbon Cooling Calculator", "carbon_widget");
}

add_action("plugins_loaded", "init_carbon");
?>