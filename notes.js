// Signals 
    // use signals to notidy Angular about value changes and required UI updates.
        // you import 'signal function' from angular core into your { Component }; you then store it a property of your class component. (In this case, we put it on line 14 after selectedUser.)
    // The idea behind SIGNAL; is that its a container that contains a value (any type of value, including nested objects)
        // When you change the value, Angular will be notified and then will be able to identify all the places where that value is being used (where the signal is being used), and can update those places with the new value.
    // The MAIN idea behind signals is that you dont just have some inital values in them, but that you can also CHANGE those values by calling the 'set' method. (Example. this.selectedUser.set(DUMMY_USERS[randomIndex]);).