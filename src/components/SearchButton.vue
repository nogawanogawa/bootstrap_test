<template>
        <b-nav-form>
          {{word}}
          <b-form-input size="sm" class="mr-sm-2" type="text" v-model="word" placeholder='Search' />
          <b-button size="sm" class="my-2 my-sm-0" @click="search">Search</b-button>
        </b-nav-form>
</template>

<script>

export default {

  name: 'SearchButton',
  data () {
    return {
      word: ''
    }
  },
  methods: {
    search: function (){
      const neo4j = require('neo4j-driver').v1;
      const uri = "bolt://localhost";
      const user = "neo4j";
      const password = "password";
      const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {maxTransactionRetryTime: 30000});
      const session = driver.session();

      var personName = this.word; // 'Alice'
      const resultPromise = session.run(
        'MATCH (a:Person {name: $name}) - [r] - (n) RETURN a, r, n',
        {name: personName}
      );

      resultPromise.then(result => {
        session.close();

//        const records = result.records;
//        const singleRecord = records[0];
//        const node = singleRecord.get(0);

        // on application exit:
        driver.close();
//        this.word = JSON.stringify(node.properties) // JSON -> txt
        this.word = JSON.stringify(result) // JSON -> txt
      })

    }
  }
}

</script>

<style>
</style>
