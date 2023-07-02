let DARK_MODE = 0;
let WHITE_MODE = 1;

let mode = 0;

function switchMode() {
      console.log(mode);

      if (mode == DARK_MODE) {
            // change body background
            document.getElementsByTagName("body")[0].style.backgroundColor = "var(--default-white)";
            // change text color 
            document.getElementsByTagName("body")[0].style.color = "var(--white-text)";

            // change border color of sections
            const elements = document.querySelectorAll("h2 + div");
            for (let i = 0; i < elements.length; i++) {
                  elements[i].style.borderColor = "var(--white-border)";
                  elements[i].style.backgroundColor = "var(--white-background)";
            }

            // change text color of links
            const link_elements = document.querySelectorAll("main a");
            for (let i = 0; i < link_elements.length; i++) {
                  link_elements[i].style.color = "var(--white-text)";
                  link_elements[i].style.borderColor = "var(--white-border)";
            }

            // change border color of tournament-reference
            document.getElementById("tournament-reference").style.borderColor = "var(--white-border)";

            // change table background color
            const table_elements = document.getElementsByTagName("table");
            for (let i = 0; i < table_elements.length; i++) {
                  table_elements[i].style.backgroundColor = "var(--white-default)";
            }

            // change icons
            document.getElementById("description-icon").src = "../res/img/description_icon_black.svg";
            document.getElementById("requirements-icon").src = "../res/img/requirements_icon_black.svg";
            document.getElementById("registration-icon").src = "../res/img/registration_icon_black.svg";
            document.getElementById("tournament-process-icon").src = "../res/img/tournament_process_icon_black.svg";
            document.getElementById("podium-icon").src = "../res/img/podium_icon_black.svg";
            document.getElementById("history-icon").src = "../res/img/history_icon_black.svg";

            // change mode button icon
            document.getElementById("mode-switch-icon").src = "../res/img/mode_black.svg";

            // change mode to WHITE_MODE
            mode = WHITE_MODE;
      } else {
            // change body background
            document.getElementsByTagName("body")[0].style.backgroundColor = "var(--default-dark)";
            // change text color 
            document.getElementsByTagName("body")[0].style.color = "var(--default-text)";

            // change border color of sections
            const elements = document.querySelectorAll("h2 + div");
            for (let i = 0; i < elements.length; i++) {
                  elements[i].style.borderColor = "var(--default-border)";
                  elements[i].style.backgroundColor = "var(--default-background)";
            }

            // change text color of links
            const link_elements = document.querySelectorAll("main a");
            for (let i = 0; i < link_elements.length; i++) {
                  link_elements[i].style.color = "var(--default-text)";
                  link_elements[i].style.borderColor = "var(--default-text)";
            }

            // change border color of tournament-reference
            document.getElementById("tournament-reference").style.borderColor = "var(--default-text)";

            // change table background color
            const table_elements = document.getElementsByTagName("table");
            for (let i = 0; i < table_elements.length; i++) {
                  table_elements[i].style.backgroundColor = "var(--default-background)";
            }

            // change icons
            document.getElementById("description-icon").src = "../res/img/description_icon.svg";
            document.getElementById("requirements-icon").src = "../res/img/requirements_icon.svg";
            document.getElementById("registration-icon").src = "../res/img/registration_icon.svg";
            document.getElementById("tournament-process-icon").src = "../res/img/tournament_process_icon.svg";
            document.getElementById("podium-icon").src = "../res/img/podium_icon.svg";
            document.getElementById("history-icon").src = "../res/img/history_icon.svg";

            // change mode button icon
            document.getElementById("mode-switch-icon").src = "../res/img/mode_white.svg";

            // change mode to DARK_MODE
            mode = DARK_MODE;
      }
}

function hoverModeButton() {
      // set border according to current mode
      if (mode == DARK_MODE) {
            document.getElementById("mode-switch-button").style.border = "2px solid var(--default-border)";
            document.getElementById("mode-switch-button").style.backgroundColor = "var(--default-background)";
      } else {
            document.getElementById("mode-switch-button").style.border = "2px solid var(--white-border)";
            document.getElementById("mode-switch-button").style.backgroundColor = "var(--white-background)";
      }
}

function leaveModeButton() {
      // set border according to current mode
      if (mode == DARK_MODE) {
            document.getElementById("mode-switch-button").style.border = "2px solid var(--default-dark)";
            document.getElementById("mode-switch-button").style.backgroundColor = "var(--default-dark)";
      } else {
            document.getElementById("mode-switch-button").style.border = "2px solid var(--default-white)";
            document.getElementById("mode-switch-button").style.backgroundColor = "var(--default-white)";
      }
}