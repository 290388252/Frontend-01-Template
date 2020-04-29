function convertNumberToString(number, x) {
	var integer = Math.floor(number);
	var fraction = parseFloat((number - integer).toPrecision(12));
	var string = '';

	if(arguments.length < 2) {
		x = 10;
	}

	if(typeof number === 'string') {
		return number;
	}
	
	if(number === 0) {
		return '0';
	}

	while(integer > 0) {
		string = String(integer % x) + string;
		integer = Math.floor(integer / x);
	}

	while(fraction > 0) {
		string = string + (fraction + '').slice(1);
		fraction = 0;
	}

	return string;
}