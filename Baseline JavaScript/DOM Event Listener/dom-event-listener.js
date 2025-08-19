// JavaScript DOM Event Listener Example

// Anonymous function
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn1").addEventListener("click", function() {
        document.getElementById("listenerDemo").innerHTML = "Hello World! (Anonymous Function)";
    });

    // Named function
    document.getElementById("btn2").addEventListener("click", myFunction);
    function myFunction() {
        document.getElementById("listenerDemo").innerHTML = "Hello World! (Named Function)";
    }

    // Multiple handlers
    document.getElementById("btn3").addEventListener("click", function() {
        document.getElementById("listenerDemo").innerHTML = "First handler!";
    });
    document.getElementById("btn3").addEventListener("click", function() {
        document.getElementById("listenerDemo").innerHTML += " Second handler!";
    });

    // Mouse over/out
    document.getElementById("btn4").addEventListener("mouseover", function() {
        document.getElementById("listenerDemo").innerHTML = "Mouse over!";
    });
    document.getElementById("btn4").addEventListener("mouseout", function() {
        document.getElementById("listenerDemo").innerHTML = "Mouse out!";
    });

    // Remove listener
    function removeHandler() {
        document.getElementById("listenerDemo").innerHTML = "Listener removed!";
    }
    document.getElementById("btn5").addEventListener("click", removeHandler);
    document.getElementById("btn5").addEventListener("click", function() {
        document.getElementById("btn5").removeEventListener("click", removeHandler);
    });

    // Bubbling and capturing
    document.getElementById("innerP").addEventListener("click", function() {
        document.getElementById("bubbleDemo").innerHTML = "Inner P clicked (bubbling)!";
    }, false);
    document.getElementById("outerDiv").addEventListener("click", function() {
        document.getElementById("bubbleDemo").innerHTML += " Outer Div clicked (bubbling)!";
    }, false);
    document.getElementById("innerP").addEventListener("click", function() {
        document.getElementById("bubbleDemo").innerHTML = "Inner P clicked (capturing)!";
    }, true);
    document.getElementById("outerDiv").addEventListener("click", function() {
        document.getElementById("bubbleDemo").innerHTML += " Outer Div clicked (capturing)!";
    }, true);

    // Window event listener
    document.getElementById("resizeBtn").addEventListener("click", function() {
        window.addEventListener("resize", function() {
            document.getElementById("resizeDemo").innerHTML = "Window resized!";
        });
        document.getElementById("resizeDemo").innerHTML = "Resize the window to see the event.";
    });

    // Passing parameters
    document.getElementById("paramBtn").addEventListener("click", function() {
        myParamFunction("Parameter 1", "Parameter 2");
    });
    function myParamFunction(p1, p2) {
        document.getElementById("paramDemo").innerHTML = "Passed: " + p1 + ", " + p2;
    }
});
