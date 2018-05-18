function handleSignUp(){
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    
    if(email.length < 4){
        alert("Please enter a valid email");
        return;
    }
    if(password.length < 4){
        alert("Please enter a stronger password");
        return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
             .then(function(){
             //success
             alert("user created");
             })
             .catch(function(error){
             alert(error.message);
             })
    
}

function handleSignIn(){
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    
    firebase.auth().signInWithEmailAndPassword(email,password).then(
        function(){
            window.location.href="http://www.jay30.com/WNM617/Final/LogIn/landing.html"
        })
    .catch(function(error){
        alert(error.message);
    })
    
    
}

function handleSignOut(){
    firebase.auth().signOut()
    .then(
        function(){
            alert("SIgned Out");
        })
    .catch(function(){
        alert(error.message);
    })
    

}


function handleFBLogin(){
    if(! firebase.auth().currentUser){
        var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
                   .then(function(result){
                        var token = result.credential.accessToken;
                        var user = result.user;
                        alert(user.eamil);
                        window.location.href="http://www.jay30.com/WNM617/Final/LogIn/landing.html"
                   .catch(function(error){
                            alert(error.messgae);
                        })
                   })
    }
    
    else{
        handleSignOut();
    }
    
    
}