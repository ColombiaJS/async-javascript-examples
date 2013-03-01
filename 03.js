//
// 03 - Common Problems
//
function checkPassword(username, passwordGuess, callback) {
  var queryStr = 'SELECT * FROM user WHERE username = ?';
  db.query(selectUser, username, function (err, result) {
    if (err) throw err;
      hash(passwordGuess, function(passwordGuessHash) {
        callback(passwordGuessHash === result.password_hash);
      });
  });
}

function checkPassword(username, passwordGuess, callback) {
  var passwordHash;
  var queryStr = 'SELECT * FROM user WHERE username = ?';
  db.query(selectUser, username, queryCallback);

  function queryCallback(err, result) {
    if (err) throw err;
    passwordHash = result.password_hash;
    hash(passwordGuess, hashCallback);
  }

  function hashCallback(passwordGuessHash) {
    callback(passwordHash === passwordGuessHash);
  }
}