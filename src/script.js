let DARK_MODE = 0;
let WHITE_MODE = 1;

// variable mode stores the current used layout design mode
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
            const link_elements = document.querySelectorAll(".body-content a");
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
            //change podium table color
            const removed_cells = document.getElementsByClassName("removed-cell");
            for (let i = 0; i < removed_cells.length; i++) {
                  removed_cells[i].style.backgroundColor = "var(--white-default)";
            }
            //the variable --white-default does not work here, therfore there was no additional variable declared
            document.getElementById("second").style.borderColor = "#f6f6f6";
            document.getElementById("third").style.borderColor = "#f6f6f6";

            // change footer border
            document.getElementById("footer-nav-bar").style.borderColor = "var(--white-border)";

            // change icons
            document.getElementById("description-icon").src = "../res/img/description_icon_black.svg";
            document.getElementById("requirements-icon").src = "../res/img/requirements_icon_black.svg";
            document.getElementById("registration-icon").src = "../res/img/registration_icon_black.svg";
            document.getElementById("tournament-process-icon").src = "../res/img/tournament_process_icon_black.svg";
            document.getElementById("podium-icon").src = "../res/img/podium_icon_black.svg";
            document.getElementById("history-icon").src = "../res/img/history_icon_black.svg";

            // change score input buttons text color
            const score_input_buttons = document.getElementsByClassName("score-input-button");
            for (let i = 0; i < score_input_buttons.length; i++) {
                  score_input_buttons[i].style.color = "var(--white-text)";
            }

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
            const link_elements = document.querySelectorAll(".body-content a");
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
            
            //change podium table color
            const removed_cells = document.getElementsByClassName("removed-cell");
            for (let i = 0; i < removed_cells.length; i++) {
                  removed_cells[i].style.backgroundColor = "var(--default-dark)";
            }
            //the variable --white-default does not work here, therfore there was no additional variable declared
            document.getElementById("second").style.borderColor = "#1c1c1c";
            document.getElementById("third").style.borderColor = "#1c1c1c";

            // change footer border
            document.getElementById("footer-nav-bar").style.borderColor = "var(--default-border)";

            // change icons
            document.getElementById("description-icon").src = "../res/img/description_icon.svg";
            document.getElementById("requirements-icon").src = "../res/img/requirements_icon.svg";
            document.getElementById("registration-icon").src = "../res/img/registration_icon.svg";
            document.getElementById("tournament-process-icon").src = "../res/img/tournament_process_icon.svg";
            document.getElementById("podium-icon").src = "../res/img/podium_icon.svg";
            document.getElementById("history-icon").src = "../res/img/history_icon.svg";

            // change score input buttons text color
            const score_input_buttons = document.getElementsByClassName("score-input-button");
            for (let i = 0; i < score_input_buttons.length; i++) {
                  score_input_buttons[i].style.color = "var(--default-text)";
            }

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