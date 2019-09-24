// DocSection: cm_api_v2_put_variant
// Using ES6 syntax
import { ContentManagementClient } from '@kentico/kontent-management';

const client = new ContentManagementClient({
  projectId: '<YOUR_PROJECT_ID>',
  apiKey: '<YOUR_API_KEY>'
});

client.upsertLanguageVariant()
  .byItemId('f4b3fc05-e988-4dae-9ac1-a94aba566474')
  // .byItemCodename('on_roasts')
  // .byItemExternalId('59713')
  .byLanguageId('d1f95fde-af02-b3b5-bd9e-f232311ccab8')
  // .byLanguageCodename('es-ES')
  .withElements([
    {
      element: {
        codename: 'title'
      },
      value: 'En Asados'
    },
    {
      element: {
        codename: 'personas'
      },
      value: [
        {
          codename: 'barista'
        },
        {
          codename: 'coffee_blogger'
        }
      ]
    },
    {
      element: {
        codename: 'post_date'
      },
      value: '2014-11-07T00:00:00Z'
    },
    {
      element: {
        codename: 'summary'
      },
      value: 'Tostar granos de café puede tardar de 6 a 13 minutos. ...'
    },
    {
      element: {
        codename: 'related_articles'
      },
      value: [
        {
          codename: 'coffee_processing_techniques'
        },
        {
          codename: 'origins_of_arabica_bourbon'
        }
      ]
    },
    {
      element: {
        codename: 'meta_keywords'
      },
      value: 'asados, café'
    },
    {
      element: {
        codename: 'meta_description'
      },
      value: 'Tostar granos de café puede tardar de 6 a 13 minutos. ...'
    },
    {
      element: {
        codename: 'url_pattern'
      },
      value: 'on-roasts'
    }
  ])
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });
// EndDocSection