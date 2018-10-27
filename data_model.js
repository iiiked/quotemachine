const DataTypes = {
  Entity: {
    name: 'Entity',
    description: 'Entity class',
    properties: [
      {
        name: 'id',
        type: 'uuid',
        defaultValue: null,
        getValue() {
          return new ObjectID();
        },
        description: 'Unique identifier',
        inverseProperty: undefined,
        displayPriority: 0,
      },
      {
        name: 'dateCreated',
        type: 'datetime',
        defaultValue: null,
        getValue() {
          return new Date();
        },
        description: 'Timestamp of entity creation',
        inverseProperty: undefined,
        displayPriority: 0,
      },
      {
        name: 'objectType',
        type: 'string',
        defaultValue: null,
        getValue() {
          return this.name;
        },
        description: 'Type of an object',
        inverseProperty: undefined,
        displayPriority: 0,
      },
      {
        name: 'isImportant',
        type: 'boolean',
        defaultValue: false,
        getValue(val) {
          return val;
        },
        description: 'Indicates whether entity is important (immutable)',
        inverseProperty: undefined,
        displayPriority: 0,
      },
      {
        name: 'dateModified',
        type: 'isImportant ? DataTypes.Modification : datetime',
        defaultValue: false,
        getValue(isImportant, id) {
          return isImportant ? DataTypes.getObject('Modification', id) : new Date();
        },
        description: 'Stores either history of all modifications or timestand of the last modification',
        inverseProperty: (() => isImportant ? DataTypes.Modification.properties[])(),
        displayPriority: 0,
      },
    ],
  },
};

const dataTypes = {
  Entity: {
    id: 'uuid',
    dateCreated: 'datetime',
    isImportant: false,
    dateModified: this.isImportant ? 'Modification.id' : 'datetime',
    objectType: 'string',
  },
  Item: {
    ...dataTypes.Entity,
    name: 'string',
    featuredImage: 'Image.id',
    url: 'url',
    keywords: ['string'],
    description: 'string'
  }
}

class Entity {
  constructor(o) {
    this.id = 'new ObjectID';
    this.dateCreated = new Date();
    this.isImportant = false;
    this.dateModified = null;
    this.objectType = 'Entity'
    if (o) {
      for (let key in o) {
        this[key] = o[key];
      }
    } 
  }
}

class Item {
  constructor(o) {
    const entity = new Entity();
    for (let key in entity) {
      this[key] = entity[key];
    }
    this.name = '';
    this.featuredImage = 'Image.id';
    this.url = 'URL()';
    this.keywords = [];
    this.description = '';
    if (o) {
      for (let key in o) {
        this[key] = o[key];
      }
    }
  }
}

