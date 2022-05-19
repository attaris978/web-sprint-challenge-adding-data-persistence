exports.up = function (knex) {
    return knex.schema
      .createTable("projects", (tbl) => {
        tbl.increments("project_id");
        tbl.varchar("project_name", 128).unique().notNullable();
        tbl.varchar("project_description", 256);
        tbl.boolean("project_completed").defaultsTo(false);
      })
  
      .createTable("resources", (tbl) => {
        tbl.increments("resource_id");
        tbl.varchar("resource_name", 128).unique().notNullable();
        tbl.varchar("resource_description", 128);
      })
  
      .createTable("tasks", (tbl) => {
        tbl.increments("task_id");
        tbl.varchar("task_description", 256).notNullable();
        tbl.varchar("task_notes", 256);
        tbl.boolean("task_completed").defaultsTo(0);
        tbl.integer("project_id").notNullable().references("project_id").inTable("projects");
      })
      
      .createTable('resource_assignments', (tbl) => {
        tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects');
        tbl.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resources')
        tbl.primary(['project_id', 'resource_id']);
      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("resource_assignments")
    .dropTableIfExists('tasks')
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    
  };
  