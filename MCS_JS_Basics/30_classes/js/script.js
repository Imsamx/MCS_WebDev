let Users = {
	hasAccesToProfile: true,
	approved: true,
	sayHi: function() {return 'Privet'}
}

function User(name, email, password) {
	// конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
}

const Fedya = new User('Федя', 'f@ex.com', 'qwerty')

console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
	// конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function() {return 'Privet, '+ this.name+'! Ты зарегистрирована'}
}

const Alla = new FUser('Алла', 'as@ert.ru', '123345')
console.log(Alla);
console.log(Alla.sayHi());
