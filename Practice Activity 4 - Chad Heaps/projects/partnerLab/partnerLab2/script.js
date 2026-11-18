function pullInfo(e){
    //stops the page from relodaing right after submit so it doesnt flash
    e.preventDefault();

    let name = document.getElementById("newName").value;
    let message = document.getElementById("customMessage").value;
    let backGround = document.getElementById("backGround").value;

    //Change Name
    document.getElementById("hOne").innerHTML = "Welcome " + name;

    //Change Message
    document.getElementById("pGraph").innerHTML = message;

    //Background
    if (backGround === "red"){
        document.documentElement.style.setProperty("--backGround", "rgb(245, 224, 224)");
        document.documentElement.style.setProperty("--text", "rgb(112, 79, 79)");
        document.documentElement.style.setProperty("--box", "rgb(235, 207, 207)");
    }

    if (backGround === "blue"){
        document.documentElement.style.setProperty("--backGround", "rgb(222, 231, 242)");
        document.documentElement.style.setProperty("--text", "rgb(75, 91, 112)");
        document.documentElement.style.setProperty("--box", "rgb(205, 219, 235)");
    }

    if (backGround === "green"){
        document.documentElement.style.setProperty("--backGround", "rgb(224, 235, 222)");
        document.documentElement.style.setProperty("--text", "rgb(76, 99, 74)");
        document.documentElement.style.setProperty("--box", "rgb(207, 224, 204)");
    }

    if (backGround === "orange"){
        document.documentElement.style.setProperty("--backGround", "rgb(246, 231, 211)");
        document.documentElement.style.setProperty("--text", "rgb(115, 88, 57)");
        document.documentElement.style.setProperty("--box", "rgb(237, 216, 187)");
    }
}
