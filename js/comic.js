AFRAME.registerComponent("comic", {
  init: function () {
    this.postersContainer = this.el;
    this.createPosters();
  },

  createPosters: function () {
    const posterRef = [
      {
        id: "superman",
        title: "Superman",
        url: "c:/Users/Jayden Li/Documents/3DCODING/pro157/assets/supermanComic.jpg",
      },
      {
        id: "iron-man",
        title: "Iron Man",
        url: "./assets/ironmanComic.jpg",
      },

      {
        id: "spider-man",
        title: "Spider Man",
        url: "./assets/spidermanComic.jpg",
      },
      {
        id: "captain-america",
        title: "Captain America",
        url: "./assets/captainAmerica.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of posterRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(item.id, position);
      // Thumbnail Element
      const thumbnail = this.createBorder(item);
      borderEl.appendChild(thumbnail);
      // Title Text Element

      this.postersContainer.appendChild(borderEl);
    }
  },

  createPoster: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });
    return entityEl;
  },
  createBorder: function (id, position) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 40,
    });
    entityEl.setAttribute("material", { color: "blue", opacity: true });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("id", id);
    return entityEl;
  },
});
