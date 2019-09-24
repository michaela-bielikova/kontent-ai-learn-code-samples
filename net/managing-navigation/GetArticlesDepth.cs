// DocSection: managing_navigation_articles_depth
using Kentico.Kontent.Delivery;

// Initializes a content delivery client
IDeliveryClient client = DeliveryClientBuilder
      .WithProjectId("975bf280-fd91-488c-994c-2f04416e5ee3")
      .Build();

// Gets navigation items and their linked items
// Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
DeliveryItemResponse<NavigationItem> response =  await client.GetItemAsync<NavigationItem>("root_navigation_item",
    new DepthParameter(5)
    );

var item = response.Item;
// EndDocSection