class User {
	#password
	#name

	constructor (name, password){
		this.#password = password
		this.#name = name;
		Object.freeze(this);
	}
	

	 verifyCreditions(userIpunt, passwordInput) {
		if (userIpunt == this.#name && passwordInput == this.#password){
		return true;

		} else {
			return false;
		}
	}
	get password () {	
		return null; 	
	}

	get name () {
		return null;	
	}

}	