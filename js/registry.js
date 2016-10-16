Strategy.Registry = {
  buildings: {},

  registerBuilding: function(building) {
    this.buildings[building.slug] = building;
  }
};
