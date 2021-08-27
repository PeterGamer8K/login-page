class User {

	#username
	#password

	constructor (username, password) {
		this.#username = username;
		this.#password = password;

		Object.freeze(this);
	}

	get username () {
		return null;
	}

	get password () {
		return null;
	}

	verifyCredentions (username, password) {
		if (this.#username == username && this.#password == password){
			return true;
		} else {
			return false;
		}
	}


}