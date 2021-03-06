enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //propiedades
  _id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
    ) {
      this._id = id;
      this.title = title;
      this.orientation = orientation;
    }
    get id() {
      return this._id;
    }
    set id(id: number) {
      this._id = id;
    }
    toString() {
      return `[
                id: ${this.id},
                title: ${this.tile},
                orientation: ${this.orientation}]`;
    }
}

class Album {
  id: number;
  title: string;
  pictures: Picture[];

  constructor(
    id: number,
    title: string,
  ){
    this.id = id;
    this.title = title;
    this.pictures = []
  }

  addPciture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal profile');
const picture: Picture = new Picture(1,'photo1', PhotoOrientation.Landscape)
album.addPciture(picture)