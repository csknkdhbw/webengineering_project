// all tournament participants
const PARTICIPANTS = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"];

// define an array to keep track of the scores of the games
let score_tree = new Array(PARTICIPANTS.length * 2 - 1);

// initialize the array with non-score values i. e. -1
for (let i = 0; i < score_tree.length; i++)
      score_tree[i] = -1;

// inserts score values of one game at the right position inside the score_tree
function set_score_value(score1, score2, index1, index2) {
      if (isNaN(score1) || isNaN(score2))
            return;

      if (score1 < 0 || score2 < 0)
            return;

      // the tournament doesnt allow draw
      if (score1 == score2)
            return;

      // we consider the indices to be right
      score_tree[index1] = score1;
      score_tree[index2] = score2;

      // if the last index is set, then the podium gets updated
      if (index1 == score_tree.length - 1 || index2 == score_tree.length - 1)
            update_podium();
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

}

// checks if the score_tree is valid meaning all values are set properly
function valid_score_tree() {
      value_set = true;
      // index i starts at 1 because the root node is a dummy node
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
            to find the the third winner we need to start at the semi final winner 
            with the highest score difference
            */
            let sf1_winner = (score_tree[3] > score_tree[4]) ? 3 : 4;
            let sf2_winner = (score_tree[5] > score_tree[6]) ? 5 : 6;

            let sf1_score_diff = Math.abs(score_tree[3] - score_tree[4]);
            let sf2_score_diff = Math.abs(score_tree[5], score_tree[6]);

            curr = (sf1_score_diff > sf2_score_diff) ? sf1_winner : sf2_winner;
      }

      // while curr not a leaf node (left half of score_tree)
      while (curr < score_tree.length / 2) {
            // choose next score based on the current winner
            if (score_tree[(curr + 1) * 2] > score_tree[(curr + 1) * 2 - 1])
                  curr = (curr + 1) * 2; // right node is winner
            else
                  curr = (curr + 1) * 2 - 1; // left node is winner
      }

      // reached leaf node is winning player
      return curr;
}
