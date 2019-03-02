// Neo4j検索用関数
const neo4j = require('neo4j-driver').v1;
const uri = "bolt://localhost";
const user = "neo4j";
const password = "password";
const driver = neo4j.drver(uri, neo4j.basic(user, password), {maxTransactionRetryTime: 30000});

function search(word) {
  const resultPromise = session.run(
    'MATCH (a:PARSON {name: $name}) - [r] - (n) RETURN a, r, n',
    {name: word}
  );

  resultPromise.then(result => {
    session.close();
    driver.close();

    return result;
  })
}
