// DocSection: schedule_unpublishing_update_model
export class Article extends KontentDelivery.ContentItem {
    constructor(){
         super({
             propertyResolver: ((elementName) => {
                 if (elementName === 'publish_until'){
                     return 'publishUntil';
                 }
               
                 ...
             }),
         })
     }
 }
// EndDocSection