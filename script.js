function startBirthday() {

    let box = document.getElementById("birthday");

    box.innerHTML = "";

    let messages = [
        "🔐 Security Scan Complete...",
        "✅ Mr.X has been verified!",
        "🎂 Birthday Protocol Activated!",
        "😂 Warning: Funny Friend Detected!",
        "💻 Cyber Mode: ON",
        "🔥 Friendship Firewall: ACTIVE"
    ];

    let index = 0;

    let interval = setInterval(() => {

        if (index < messages.length) {
            box.innerHTML += messages[index] + "<br>";
            index++;
        } 
        else {

            clearInterval(interval);

            box.innerHTML += "<br>🎉 100 Birthday Messages Loading... 🎉<br><br>";

            let count = 1;

            let birthdayLoop = setInterval(() => {

                if (count <= 100) {
                    box.innerHTML += 
                    count + ". Happy Birthday Mr.X 🎂😂<br>";

                    count++;
                } 
                else {

                    clearInterval(birthdayLoop);

                    box.innerHTML += `
                    <br>
                    🔓 Mission Completed Successfully! <br><br>

                    Dear Abdullahi Ali Ibrahim (Mr.X) 😂,<br>

                    May your code never break 🖥️<br>
                    May your bugs disappear 🐛❌<br>
                    May your cybersecurity skills grow stronger 🔐<br>

                    Stay funny, stay annoying 🤣🔥
                    `;
                }

            }, 50);

        }

    }, 700);

}