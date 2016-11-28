/**
	Utilities for validating common string formats. 
	Inspired from CASA Lib / AS 2.0 (v.05/02/07) - Aaron Clinger
	
	Need manmaru.StringUtil.js 
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.1
	@since 18/06/2013
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

ValidationUtil = (function() {

    function ValidationUtil() {}
    
    /**
		Determines if string contains search string.
		@param source: String to search in.
		@param search: String to search for.
		@return Returns <code>true</code> if source string contains search string; otherwise <code>false</code>.
	*/
	ValidationUtil.contains = function(source, search) {
		return StringUtil.contains(source, search) > 0;
	}
	
    /**
		Determines if string is a valid email address.
		@param email: String to verify as email.
		@return Returns <code>true</code> if string is a valid email; otherwise <code>false</code>.
	*/
    	ValidationUtil.isEmail = function(email) {
			var pattern  = new RegExp(/^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,4}$/i);
            return email.match(pattern) != null;
		}
	
	/**
		Determines if string is blank or contains only tabs, linefeeds, carriage returns and spaces.
		@param source: String to check if empty.
		@return Returns <code>true</code> if string is empty; otherwise <code>false</code>.
	*/
    	ValidationUtil.isEmpty = function(str) {
    		if(StringUtil.removeWhitespace(str) == "") { return true; } else { return false; };
    	}
    /**
		Determines if numbers in string are equal to or greater than a valid phone number length.
		@param phone: String to verify the containing numbers are equal or above 10 numbers in length.
		@return Returns <code>true</code> if phone number; otherwise <code>false</code>.
	*/
	ValidationUtil.isPhone = function(phone) {
		return StringUtil.getNumbersFromString(phone).length >= 10;
	}

  /**
        Determines if credit card is valid using the Luhn formula.
         
        @param cardNumber: The credit card number.
        @return Returns <code>true</code> if String is a valid credit card number; otherwise <code>false</code>.
    */
 	ValidationUtil.isCreditCard = function(cardNumber) {
        if (cardNumber.length < 7 || cardNumber.length > 19 || Number(cardNumber) < 1000000)
            return false;
         
        var sum = 0,
        	alt = true,
        	i   = cardNumber.length,
        	pre;
         
        while (--i > -1) {
            if (alt)
                sum += Number(cardNumber.substr(i, 1));
            else {
                pre =  Number(cardNumber.substr(i, 1)) * 2;
                sum += (pre > 8) ? pre -= 9 : pre;
            }
             
            alt = !alt;
        }
         
        return sum % 10 == 0;
    }
	
	/**
		Determines if numbers in string are a valid US zip code length.
		@param zip: String to verify the containing numbers are either 5 or 9 numbers in length.
		@return Returns <code>true</code> if zip code; otherwise <code>false</code>.
	*/
	ValidationUtil.isZip = function(zip) {
		var l = StringUtil.getNumbersFromString(zip).length;
		return (l == 5 || l == 9);
	}
	
    return ValidationUtil;

})();
  
