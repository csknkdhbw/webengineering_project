// all tournament participants
const PARTICIPANTS = ["Hans", "Max", "Tom", "Jeremias", "Lisa", "Bob", "Emilia", "Georg"];

// define an array to keep track of the scores of the games
let score_tree = new Array(PARTICIPANTS.length * 2 - 1);

// initialize the array with non-score values i. e. -1
for (let i = 0; i < score_tree.length; i++)
      score_tree[i] = -1;

function update(score_in_1, score_in_2, index1, index2, winner_element) {
      // read scores from input elements
      const score1 = parseInt(document.getElementById(score_in_1).value);
      const score2 = parseInt(document.getElementById(score_in_2).value);

      console.log(score1);
      console.log(score2);

      // update our score_tree data structure
      let set_score = set_score_value(score1, score2, index1, index2);

      console.log(score_tree);

      if (set_score == -1)
            return;

      // set winner name at the next tournament game
      if (score1 > score2) {
            document.getElementById(winner_element).innerHTML = get_player_name(find_winning_player(index1));
      } else {
            document.getElementById(winner_element).innerHTML = get_player_name(find_winning_player(index2));
      }
}

// inserts score values of one game at the right position inside the score_tree
function set_score_value(score1, score2, index1, index2) {
      if (isNaN(score1) || isNaN(score2))
            return -1;

      if (score1 < 0 || score2 < 0)
            return -1;

      // the tournament doesnt allow draw
      if (score1 == score2)
            return -1;

      // we consider the indices to be right
      score_tree[index1] = score1;
      score_tree[index2] = score2;

      // if the final scores are set, the podium gets updated
      if (index1 == 1 || index2 == 1) {
            update_podium();
            return 2;
      }

      return 1;
}

function update_podium() {
      // check if all score values are set
      if (!valid_score_tree())
            return;

      // find winners
      let first_winner = find_nth_winner(1);
      let second_winner = find_nth_winner(2);
      let third_winner = find_nth_winner(3);

      // update podium with new winners
      document.getElementById("first-winner").innerHTML = get_player_name(first_winner);
      document.getElementById("second-winner").innerHTML = get_player_name(second_winner);
      document.getElementById("third-winner").innerHTML = get_player_name(third_winner);

}

// checks if the score_tree is valid meaning all values are set properly
function valid_score_tree() {
      value_set = true;
      // index i starts at 1 because the root node is just a dummy node always filled with -1
      for (let i = 1; i < score_tree.length; i++) {
            if (score_tree[i] == -1)
                  value_set = false;
      }
      return value_set;
}

/*

the following algorithm find_nth_winner finds the nth winner of the tournament for n = 1, 2 or 3
with the help of the score_tree. the score_tree is an array implementation of a complete tree data structure
which keeps track of the scores made in every match. the root node is just a dummy node. the left child of root
is the score of the first finalist whereas the right root child is the score of the second finalist. this pattern
continues till the leaf nodes representing the first matches between two players are reached.

the algorithm traverses the score_tree starting at one specific node (depending on n) moving down the tree to the 
next node depending on the winner of the current match (left or right) till a leaf node is reached indicating that the player 
at this leaf node is the searched nth winner of the tournament.

with this method we can just fill up the PARTICIPANTS list and the score_tree with all game scores and are ready 
to find the winners without the need of computing every single match winner per hand till we reach the final (which can last
very long if the tournament has for example 64 players in total).

*/

function find_nth_winner(n) {
      // only first, second and third winner are defined
      if (n < 1 || n > 3)
            return -1;

      // for n == 1 we start at the root node
      let curr = 0;

      if (n == 2) {
            // to find the second winner we start at the loser of the final
            curr = (score_tree[1] < score_tree[2]) ? 1 : 2;
      }

      if (n == 3) {
            /*
            to find the the third winner we choose the semi final loser with the lower
            score difference
            */
            let sf1_loser = (score_tree[3] > score_tree[4]) ? 4 : 3;
            let sf2_loser = (score_tree[5] > score_tree[6]) ? 6 : 5;

            let sf1_score_diff = Math.abs(score_tree[3] - score_tree[4]);
            let sf2_score_diff = Math.abs(score_tree[5] - score_tree[6]);

            console.log("sf1 sd: " + sf1_score_diff);
            console.log("sf2 sd: " + sf2_score_diff);

            curr = (sf1_score_diff < sf2_score_diff) ? sf1_loser : sf2_loser;
      }

      // while curr not a leaf node (left half of score_tree)
      while (curr < Math.trunc(score_tree.length / 2)) {
            // choose next score based on the current winner
            if (score_tree[(curr + 1) * 2] > score_tree[(curr + 1) * 2 - 1])
                  curr = (curr + 1) * 2; // right node is winner
            else
                  curr = (curr + 1) * 2 - 1; // left node is winner
      }

      // reached leaf node is winning player
      return curr;
}

/*
find a given player leaf node from any given index
*/
function find_winning_player(index) {
      // only first, second and third winner are defined
      let curr = index;

      // while curr not a leaf node (left half of score_tree)
      while (curr < Math.trunc(score_tree.length / 2)) {
            // choose next score based on the current winner
            if (score_tree[(curr + 1) * 2] > score_tree[(curr + 1) * 2 - 1])
                  curr = (curr + 1) * 2; // right node is winner
            else
                  curr = (curr + 1) * 2 - 1; // left node is winner
      }

      // reached leaf node is winning player
      return curr;
}

/*
return the participant name by the tree leaf node index
*/
function get_player_name(tree_index) {
      if (tree_index < 0 || tree_index > score_tree.length - 1)
            return "DEFAULT";

      return PARTICIPANTS[tree_index - Math.trunc(score_tree.length / 2)];
}