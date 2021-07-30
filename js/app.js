class app {

    constructor() {
        let firebaseConfig = {
            apiKey: "AIzaSyANzNCm5l4rrBzV5Ki0iJEZNjz-6ga4SI4",
            authDomain: "immo-webprog-2019.firebaseapp.com",
            databaseURL: "https://immo-webprog-2019.firebaseio.com",
            projectId: "immo-webprog-2019",
            storageBucket: "immo-webprog-2019.appspot.com",
            messagingSenderId: "249226224804",
            appId: "1:249226224804:web:5861c61756df569252f231",
            measurementId: "G-FJDCMVG1JY"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();


        let formElement = pageDom.querySelector("form");
        formElement.addEventListener("onclick", this.Writedata);
        let formElement1 = pageDom.querySelector("form");
        formElement1.addEventListener("onclick", this.mail);
    }

    Writedata(name,email,phone,message) {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var message = document.getElementById("message");
        var docRef = db.collection("Kontaktnachrichten").add({
            name,
            email,
            phone,
            message,
        });

        docRef.push().set();
        window.alert("Inserted Successfully..");
    }
    mail(){
        window.open('mailto:sirlindinh@googlemail.com?subject=subject&body=body');
    }
}}

