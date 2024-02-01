/* Example script files for the book */

function writeExtraOutput() {
  // construct a unique name for the output file by using a user-defined scenario
  // and the current year
  var filename = "output/extra_grid_" + 
    Globals.setting("user.code") + "_" +  Globals.year + ".asc";
  var vol_grid = Globals.resourceUnitGrid("basalArea");
  var species_grid = Globals.speciesShareGrid("piab"); // basal area m2 of Norway spruce
  
  vol_grid.combine('bP/bT', {bP: species_grid, bT: vol_grid} )
  vol_grid.save(filename);
  
}

