class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){ n 
        this._email = value
    }

    get password(){
        return `${this._password}kk`
    }

    set password(value){
        this._password = value
    }
}

const k = new User("k@k.ai", "abc")
console.log(k.email);