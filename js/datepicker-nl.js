/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Mathias Bynens <https://mathiasbynens.be/> */
( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";

datepicker.regional.nl = {
	closeText: "Sluiten",
	prevText: "Vorig",
	nextText: "Volgende",
	currentText: "Vandaag",
	monthNames: [ "Januari", "Februari", "Maart", "April", "Mei", "Juni",
	"Juli", "Augustus", "September", "Oktober", "November", "December" ],
	monthNamesShort: [ "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun",
	"Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
	dayNames: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ],
	dayNamesShort: [ "zon", "maa", "din", "woe", "don", "vri", "zat" ],
	dayNamesMin: [ "zo", "ma", "di", "wo", "do", "vr", "za" ],
	weekHeader: "Wk",
	dateFormat: "dd-mm-yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.nl );

return datepicker.regional.nl;

} );
