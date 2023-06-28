let DARK_MODE = 0;
let WHITE_MODE = 1;

let mode = 0;

function switchMode() {
      console.log(mode);

      if (mode == DARK_MODE) {
            // change body background
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
            // change text color 
            document.getElementsByTagName("body")[0].style.color = "#1F1F1F";

            // change border color of sections
            const elements = document.querySelectorAll("h2 + div");
            for (let i = 0; i < elements.length; i++) {
                  elements[i].style.borderColor = "black";
            }

            // change icons
            document.getElementById("description-icon").src = "../res/img/description_icon_black.svg";
            document.getElementById("requirements-icon").src = "../res/img/requirements_icon_black.svg";
            document.getElementById("registration-icon").src = "../res/img/registration_icon_black.svg";
            document.getElementById("tournament-process-icon").src = "../res/img/tournament_process_icon_black.svg";
            document.getElementById("podium-icon").src = "../res/img/podium_icon_black.svg";
            document.getElementById("history-icon").src = "../res/img/history_icon_black.svg";

            // change text color of links
            const link_elements = document.querySelectorAll("main a");
            for (let i = 0; i < link_elements.length; i++) {
                  link_elements[i].style.color = "#1F1F1F";
                  link_elements[i].style.borderColor = "#1F1F1F";
            }

            // change border color of tournament-reference
            document.getElementById("tournament-reference").style.borderColor = "#1F1F1F";

            // change table background color
            const table_elements = document.getElementsByTagName("table");
            for (let i = 0; i < table_elements.length; i++) {
                  table_elements[i].style.backgroundColor = "white";
            }

            // change mode button icon
            document.getElementById("mode-switch-icon").src = "../res/img/mode_black.svg";


            // change mode to WHITE_MODE
            mode = WHITE_MODE;
      } else {
            // change body background color to #1F1F1F 
            document.getElementsByTagName("body")[0].style.backgroundColor = "#1F1F1F";
            // change text color
            document.getElementsByTagName("body")[0].style.color = "#d4d4d4";

            // change border color of sections
            const elements = document.querySelectorAll("h2 + div");
            for (let i = 0; i < elements.length; i++) {
                  elements[i].style.borderColor = "white";
            }

            // change icons
            document.getElementById("description-icon").src = "../res/img/description_icon.svg";
            document.getElementById("requirements-icon").src = "../res/img/requirements_icon.svg";
            document.getElementById("registration-icon").src = "../res/img/registration_icon.svg";
            document.getElementById("tournament-process-icon").src = "../res/img/tournament_process_icon.svg";
            document.getElementById("podium-icon").src = "../res/img/podium_icon.svg";
            document.getElementById("history-icon").src = "../res/img/history_icon.svg";

            // change text color of links
            const link_elements = document.querySelectorAll("main a");
            for (let i = 0; i < link_elements.length; i++) {
                  link_elements[i].style.color = "white";
                  link_elements[i].style.borderColor = "white";
            }

            // change border color of tournament-reference
            document.getElementById("tournament-reference").style.borderColor = "white";

            // change table background color
            const table_elements = document.getElementsByTagName("table");
            for (let i = 0; i < table_elements.length; i++) {
                  table_elements[i].style.backgroundColor = "#1F1F1F";
            }

            // change mode button icon
            document.getElementById("mode-switch-icon").src = "../res/img/mode_white.svg";

            // change mode to DARK_MODE
            mode = DARK_MODE;
      }
}

function hoverModeButton() {
      // set border according to current mode
      if (mode == DARK_MODE)
            document.getElementById("mode-switch-button").style.border = "2px solid white";
      else
            document.getElementById("mode-switch-button").style.border = "2px solid #1F1F1F";
}

function leaveModeButton() {
      // set border according to current mode
      if (mode == DARK_MODE)
            document.getElementById("mode-switch-button").style.border = "2px solid #1F1F1F";
      else
            document.getElementById("mode-switch-button").style.border = "2px solid white";
}