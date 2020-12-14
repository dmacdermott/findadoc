exports.up = function(knex) {
  return knex.schema.createTable("doctors", (table) => {
    table.increments();
    table.text("first_name");
    table.text("last_name");
    table.text("website_url");
    table.text("google_maps_url");
    table.float("rating");
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("doctors");
};
