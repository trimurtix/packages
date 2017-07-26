// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by db-transaction.js.
import { name as packageName } from "meteor/trimurtix:crud";

// Write your tests here!
// Here is an example.
Tinytest.add('db-transaction - example', function (test) {
  test.equal(packageName, "db-transaction");
});
