// Signals 
    // use signals to notidy Angular about value changes and required UI updates.
        // you import 'signal function' from angular core into your { Component }; you then store it a property of your class component. (In this case, we put it on line 14 after selectedUser.)
    // The idea behind SIGNAL; is that its a container that contains a value (any type of value, including nested objects)
        // When you change the value, Angular will be notified and then will be able to identify all the places where that value is being used (where the signal is being used), and can update those places with the new value.
    // The MAIN idea behind signals is that you dont just have some inital values in them, but that you can also CHANGE those values by calling the 'set' method. (Example. this.selectedUser.set(DUMMY_USERS[randomIndex]);).



// avatar = input.required<string>(); // this tells Angular that this avatar property should be an input to this component, so that it should be setable as an attribute when the component is used. You can then use (TypeScript feature) '<>', you can set the type of value that will eventually be received by that input.
 // name = input.required<string>(); // KEEP IN MIND; when using inputs like this as signals, is that from outside this component (app.component.html), you still use them like before ([avatar]="users[0].avatar" [name]="users[0].name"). It doesn't matter if they are set up with the input decorator or the input function.

// Why use these inputs? Why use the old decorator approach with no input signals?
    // The answer is that when working with signals and signal inputs, Angular manages subscriptions to the signal to get notified about value changes.