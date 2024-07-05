import type { Struct, Schema } from '@strapi/strapi';

export interface TestComp extends Struct.ComponentSchema {
  collectionName: 'components_test_comps';
  info: {
    displayName: 'comp';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'test.comp': TestComp;
    }
  }
}
