# DocSection: delivery_api_get_type
require 'delivery-sdk-ruby'

delivery_client = Kentico::Kontent::Delivery::DeliveryClient.new project_id: '975bf280-fd91-488c-994c-2f04416e5ee3'
delivery_client.type('coffee').execute do |response|
  type = response.type
end
# EndDocSection