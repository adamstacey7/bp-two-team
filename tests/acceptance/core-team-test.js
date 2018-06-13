import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | core team", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /core-team or /", async function(assert) {
    await visit("/core-team");
    assert.equal(currentURL(), "/core-team");

    await visit("/");
    assert.equal(currentURL(), "/");
  });
});
