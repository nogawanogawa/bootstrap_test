const neo4j = require('neo4j-driver').v1;
const uri = "bolt://localhost";
const user = "neo4j";
const password = "password";
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {maxTransactionRetryTime: 30000});
const session = driver.session();

function search(word) {
  const resultPromise = session.run(
    'MATCH (a{name: $name}) - [r] - (n) RETURN a, r, n',
    {name: word}
  );

  resultPromise.then(result => {
    session.close();
    driver.close();

    return result;
  })
}
