# Tookan Package
Simple, Powerful & Effective way to manage your delivery process.
* Domain: tookanapp.com
* Credentials: apiKey

## How to get credentials: 
0. Login to your [Tookan account](https://app.tookanapp.com)
1. Go to Menu > More > API Key
2. In **V2 API KEYS** section click on `Generate Key` button. 

## Tookan.createPickupTask
There are different types of tasks can be created inside Tookan depending on the workflow you have selected in your account for e.g. - pick & delivery task, appointment task etc.

| Field                    | Type   | Description
|--------------------------|--------|----------
| apiKey                   | String | You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| orderId                  | String | Your can pass this key as your own transaction number which can be used to identify tasks in tookan
| jobDescription           | String | The description of the task to be done
| jobPickupPhone           | String | The contact number of the person from whom the pickup should be collected
| jobPickupName            | String | The name of the person from whom the pickup should be collected
| jobPickupEmail           | String | The email of the person from whom the pickup should be collected
| jobPickupAddress         | String | The address from which the pickup should be collected
| jobPickupLatitude        | String | This is the latitiude of the pickup location
| jobPickupLongitude       | String | This is the longitutude of the pickup location
| jobPickupDatetime        | String | This is time before which the pickup should be collected
| trackingLink             | String | If this value is `1` it will return a url in the response where the driver's movement can be tracked.if not no url will be returned
| timezone                 | String | Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330, for CST: +360 (CDT:+300)
| pickupCustomFieldTemplate| String | This is the custom fields template name that is pre-defined in your workflow page in the admin account
| pickupMetadata           | JSON   | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| teamId                   | String | This is the Unique id of every team. You can get it from the dashBoard. More>teams>respective id of the team will displayed.
| autoAssignment           | Boolean| If this value is 1 The task will be auto assigned to the members of the specific team mentioned. or if this value is 0 it will be unassigned task created.
| fleetId                  | String | This is unique agent id given to each agent, if given the task will be assigned to the respective agent. You can get it from dashboard Menu>More>agents.
| pRefImages               | Array  | This is an array of strings containing links of images.
| notify                   | Number | This is used to enable the notifications.
| geofence                 | Number | This is used to enable the geofencing.
| tags                     | String | This is a string containing comma separated tags as filters for agents in auto assignment.

#### `pickupMetadata` field example: 
```json
"pickupMetadata": [
  {
	"label": "Price",
	"data": "100"
  },
  {
	"label": "Price",
	"data": "100"
  }
]
```
#### `refImages` field example: 
``json
"pRefImages": [
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
]
```

## Tookan.createDeliveryTask
This API is used to create a Delivery Task.

| Field              | Type   | Description
|--------------------|--------|----------
| apiKey             | String | You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| orderId            | String | Your can pass this key as your own transaction number which can be used to identify tasks in tookan
| jobDescription     | String | The description of the task to be done
| jobPickupPhone     | String | The contact number of the person from whom the pickup should be collected
| customerEmail      | String | This is email of the customer to whom the product should be delivered
| customerUsername   | String | This is the name of the customer to whom the product should be delivered
| customerPhone      | String | This is the contact number of the customer to whom the product should be delivered
| customerAddress    | String | This is the address of the customer to whom the product should be delivered
| latitude           | String | This is the latitiude of the pickup location if you have it. Otherwise leave it blank. We will get it through geocoding API
| longitude          | String | This is the latitiude of the pickup location if you have it. Otherwise leave it blank. We will get it through geocoding API
| jobDeliveryDatetime| String | This is time before which the product should be delivered
| trackingLink       | Boolean| If this value is `1` it will return a url in the respone where the driver's movement can be tracked.
| timezone           | String | Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330
| metadata           | JSON   | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| teamId             | String | This is the Unique id of every team. You can get it from the dashBoard. More>teams>respective id of the team will displayed.
| autoAssignment     | String | If this value is `1`. The task will be auto assigned to the members of the specific team mentioned. or if this value is `0` it will be unassigned task created.
| fleetId            | String | This is unique agent id given to each agent, if given the task will be assigned to the respective agent. You can get it from dashboard Menu>More>agents.
| refImages          | Array  | This is an array of strings containing links of images
| notify             | Number | This is used to enable the notifications
| geofence           | Number | This is used to enable the geofencing
| tags               | String | This is a string containing comma separated tags as filters for agents in auto assignment

#### `pickupMetadata` field example: 
```json
"metadata": [
  {
	"label": "Price",
	"data": "100"
  },
  {
	"label": "Price",
	"data": "100"
  }
]
```

#### `refImages` field example: 
``json
"refImages": [
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
]
```

## Tookan.createPickupAndDeliveryTask
This api is used to create Pickup and delivery task.

| Field              | Type   | Description
|--------------------|--------|----------
| apiKey             | String | You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| orderId            | String | Your can pass this key as your own transaction number which can be used to identify tasks in tookan
| teamId             | Number | This is the Unique id of every team. You can get it from the dashBoard. More>teams>respective id of the team will displayed
| autoAssignment     | String | If this value is 1. The task will be auto assigned to the members of the specific team mentioned. or if this value is 0 it will be unassigned task created.
| jobDescription     | String | The description of the task to be done
| jobPickupPhone     | String | The contact number of the person from whom the pickup should be collected
| jobPickupName      | String | The name of the person from whom the pickup should be collected
| jobPickupEmail     | String | The email of the person from whom the pickup should be collected
| jobPickupAddress   | String | The address from which the pickup should be collected
| jobPickupLatitude  | String | This is the latitiude of the pickup location
| jobPickupLongitude | String | This is the longitutude of the pickup location
| jobPickupDatetime  | String | This is time before which the pickup should be collected
| pickupMetadata     | JSON   | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| customerEmail      | String | This is email of the customer to whom the product should be delivered
| customerUsername   | String | This is the name of the customer to whom the product should be delivered
| customerPhone      | String | This is the contact number of the customer to whom the product should be delivered
| customerAddress    | String | This is the address of the customer to whom the product should be delivered
| latitude           | String | This is the latitiude of the delivery location
| longitude          | String | This is the longitude of the delivery location
| jobDeliveryDatetime| String | This is time before which the product should be delivered
| customFieldTemplate| String | This is the custom fields template name that is pre-defined in your workflow page in the admin account
| metadata           | JSON   | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| timezone           | Integer| Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330
| trackingLink       | String | If this value is 1 it will return a url in the respone where the driver's movement can be tracked.
| fleetId            | String | This is unique agent id given to each agent, if given the task will be assigned to the respective agent. You can get it from dashboard Menu>More>agents.
| pRefImages         | Array  | (Pickup) This is an array of strings containing links of images.
| refImages          | Array  | (Delivery) This is an array of strings containing links of images.
| notify             | Number | This is used to enable the notifications
| geofence           | Number | This is used to enable the geofencing.
| tags               | String | This is a string containing comma separated tags as filters for agents in auto assignment.

#### `pickupMetadata`, `metadata` fields example: 
```json
[
  {
	"label": "Price",
	"data": "100"
  },
  {
	"label": "Price",
	"data": "100"
  }
]
```

#### `refImages`, `pRefImages` fields example: 
``json
[
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
]
```

## Tookan.createAppointmentTask
This api is used to create an appointment task. 

| Field                    | Type  | Description
|--------------------------|-------|----------
| apiKey                   | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| orderId                  | String| Your can pass this key as your own transaction number which can be used to identify tasks in tookan
| teamId                   | String| This is the Unique id of every team. You can get it from the dashBoard. More>teams>respective id of the team will displayed.
| autoAssignment           | String| If this value is 1 the task will be auto assigned to the members of the specific team mentioned. or if this value is 0 it will be unassigned task created.
| jobDescription           | String| The description of the task to be done
| jobPickupPhone           | String| The contact number of the person from whom the pickup should be collected
| jobPickupName            | String| The name of the person from whom the pickup should be collected
| jobPickupEmail           | String| The email of the person from whom the pickup should be collected
| jobPickupAddress         | String| The address from which the pickup should be collected.
| jobPickupLatitude        | String| This is the latitiude of the pickup location
| jobPickupLongitude       | String| This is the longitutude of the pickup location
| jobPickupDatetime        | String| This is time before which the pickup should be collected
| pickupCustomFieldTemplate| String| This is the custom fields template name that is pre-defined in your workflow page in the admin account
| pickupMetadata           | String| This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| customerEmail            | String| This is email of the customer to whom the product should be delivered
| customerUsername         | String| This is the name of the customer to whom the product should be delivered
| customerPhone            | String| This is the contact number of the customer to whom the product should be delivered
| customerAddress          | String| This is the address of the customer to whom the product should be delivered
| latitude                 | String| This is the latitiude of the delivery location
| longitude                | String| This is the longitude of the delivery location
| jobDeliveryDatetime      | String| This is time before which the product should be delivered
| customFieldTemplate      | String| This is the custom fields template name that is pre-defined in your workflow page in the admin account.
| metadata                 | JSON  | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| timezone                 | Number| Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330
| trackingLink             | String| If this value is `1` it will return a url in the respone where the driver's movement can be tracked.
| fleetId                  | String| This is unique agent id given to each agent, if given the task will be assigned to the respective agent. You can get it from dashboard Menu>More>agents.
| pRefImages               | Array | (Pickup) This is an array of strings containing links of images.
| refImages                | Array | (Delivery) This is an array of strings containing links of images.
| notify                   | String| This is used to enable the notifications.
| geofence                 | String| This is used to enable the geofencing.
| tags                     | String| This is a string containing comma separated tags as filters for agents in auto assignment.

#### `metadata` field example: 
```json
[
  {
	"label": "Price",
	"data": "100"
  },
  {
	"label": "Price",
	"data": "100"
  }
]
```

#### `refImages`, `pRefImages` fields example: 
``json
[
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
]
```
## Tookan.updateTask
This api used to edit a task that has already been added.

| Field                    | Type   | Description
|--------------------------|--------|----------
| apiKey                   | String | You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| jobId                    | String | This is the unique id given to every job which is returned while creating a task
| orderId                  | String | Your can pass this key as your own transaction number which can be used to identify tasks in tookan
| hasPickup                | String | Set `0` for delivery task or `1` for pickup task.
| hasDelivery              | String | Set `1` for delivery task or `0` for pickup task.
| layoutType               | String | For an appointment task this value is fixed to `1` else set to `0`.
| jobDescription           | String | The description of the task to be done
| jobPickupPhone           | String | The contact number of the person from whom the pickup should be collected
| jobPickupName            | String | The name of the person from whom the pickup should be collected
| jobPickupEmail           | String | The email of the person from whom the pickup should be collected
| jobPickupAddress         | String | The address from which the pickup should be collected
| jobPickupLatitude        | String | This is the latitiude of the pickup location
| jobPickupLongitude       | String | This is the longitutude of the pickup location
| jobPickupDatetime        | String | This is time before which the pickup should be collected
| trackingLink             | String | If this value is `1` it will return a url in the response where the driver's movement can be tracked.if not no url will be returned
| timezone                 | String | Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330, for CST: +360 (CDT:+300)
| pickupCustomFieldTemplate| String | This is the custom fields template name that is pre-defined in your workflow page in the admin account
| pickupMetadata           | JSON   | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| teamId                   | String | This is the Unique id of every team. You can get it from the dashBoard. More>teams>respective id of the team will displayed.
| autoAssignment           | Boolean| If this value is 1 The task will be auto assigned to the members of the specific team mentioned. or if this value is 0 it will be unassigned task created.
| fleetId                  | String | This is unique agent id given to each agent, if given the task will be assigned to the respective agent. You can get it from dashboard Menu>More>agents.
| pRefImages               | Array  | This is an array of strings containing links of images.
| notify                   | Number | This is used to enable the notifications.
| geofence                 | Number | This is used to enable the geofencing.
| tags                     | String | This is a string containing comma separated tags as filters for agents in auto assignment.
| customerEmail            | String | This is email of the customer to whom the product should be delivered
| customerUsername         | String | This is the name of the customer to whom the product should be delivered
| customerPhone            | String | This is the contact number of the customer to whom the product should be delivered
| customerAddress          | String | This is the address of the customer to whom the product should be delivered
| latitude                 | String | This is the latitiude of the pickup location if you have it. Otherwise leave it blank. We will get it through geocoding API
| longitude                | String | This is the latitiude of the pickup location if you have it. Otherwise leave it blank. We will get it through geocoding API
| jobDeliveryDatetime      | String | This is time before which the product should be delivered
| metadata                 | JSON   | This is array of object containing label and data where label defines the custom field name and data will be his value.(Provided label should be in specified template.)
| refImages                | Array  | This is an array of strings containing links of images
| customFieldTemplate      | String | This is the custom fields template name that is pre-defined in your workflow page in the admin account

#### `pickupMetadata`, `metadata` fields example: 
```json
[
  {
	"label": "Price",
	"data": "100"
  },
  {
	"label": "Price",
	"data": "100"
  }
]
```

#### `refImages`, `pRefImages` fields example: 
``json
[
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png",
  "http://tookanapp.com/wp-content/uploads/2015/11/logo_dark.png"
]
```

## Tookan.getTask
This api is used to get the details of the task. 

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| jobId     | Number| You can get it from task details.
| userId    | Number| You can get it from account details page in Tookan dashboard.

## Tookan.getTaskFromOrderID
This api is used to get the details of the task.

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| orderId   | String| This will be set by you.
| userId    | String| You can get it from account details page in Tookan dashboard.

## Tookan.deleteTask
This API is used to Delete a task which is not necessary.

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| jobId     | String| You can get it from task details.

## Tookan.updateTaskStatus
This API is used to force update the status of a task.

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| jobId     | String| Single or comma separated values. You can get it from task details.
| jobStatus | Number| Refer status codes section above for various statuses available.

## Tookan.assignTask
This API is used to assign/reassign a unassigned/assigned task or an assigned task to Agent.

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| jobId     | String| You can get it from task details
| fleetId   | String| You can get it from your tookan account or you can use 'Get All Agents' API for retrieving list from your account.
| teamId    | String| You can get it from your tookan account in teams section.

## Tookan.getAllTasks
This API is used to get all the tasks as per the get all the tasks data as per the filters

| Field           | Type  | Description
|-----------------|-------|----------
| apiKey          | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| jobStatus       | Number| Filter the list of tasks via their status
| jobType         | Number| Filter via Job Type - 0 for Pick Up, 1 for Delivery, 2 for Appointment and 3 for FOS
| startDate       | Number| Start Date for the date range
| endDate         | Number| End Date for the date range
| customFields    | Number| You can pass this flag as 1, if you want the custom fields data to be included in the response. default is 0
| isPagination    | Number| You can set this as 1 to enable pagination
| requestedPage   | Number| Current(Which) page according to the page number of tasks in the filter
| customerUsername| String| Filter the list based on the customer name.
| customerPhone   | String| Filter the list based on the customer phone number.

## Tookan.getAgents
This API is used to get all the Agents/drivers/fleets information with respect to a location. The response array contains a status key for each of the fleet, which shows the current status of the fleet - 0 for available, 1 for offline and 2 for busy, taking into account the location, connectivity, ON-Duty/OFF-Duty status and if they are presently working a task.

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| teamId    | String| 
| tags      | String| You can pass the tags, comma separated, if you want to filter the list of agents via tags.
| fleetId   | String| You can pass on the `fleetId` to get the data of a single fleet.
| latitude  | String| You can pass lat long values to get the distance between agent location and this location pointed by the lat long values.
| longitude | String| Both lat long values are required if you want distance measurement and/or enable geo-fence filtering of the agents.
| geofence  | String| This is used to enable the geofencing filter w.r.t to the lat long values

## Tookan.addAgent
This API is used to register a new Agent in your account.

| Field            | Type  | Description
|------------------|-------|----------
| apiKey           | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| email            | String| Email of your agent
| phone            | String| Add the phone number of the agent. He will get a notification with the links and credentials to download the app
| transportType    | String| Send 1 for Car, 2 for Motor Cycle, 3 for Bicycle, 4 for Scooter, 5 for Foot, 6 for Truck
| transportDesc    | String| Transport description.
| license          | String| License
| color            | String| Color
| timezone         | String| Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330, for CST: +360 (CDT:+300)
| teamId           | String| You need to pass a team of which the agent will be a part of. Team Ids are visible on the All teams page
| password         | String| You can set the password yourself, or leave it empty, in which case the system will auto-generate the password
| username         | String| Unique username, which the agent will use to login to the Tookan Agent App
| firstName        | String| This is the First name of the manager to be added.
| last_name        | String| This is the Last name of the manager to be added.

## Tookan.createTeam
This API is used to create a team

| Field       | Type  | Description
|-------------|-------|----------
| apiKey      | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| teamName    | String| 
| batteryUsage| String| This is parameter decides the battery usage and accuracy level of agent's mobile.If '0' it is low,if '1' it is Medium, '2' It is High.
| tags        | String| This is tags that you can mention for any team.

## Tookan.getTeam
This API is used to get the all the team details along with their agents' data

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.

## Tookan.createManager
This API is used to Create a Manager.

| Field          | Type  | Description
|----------------|-------|----------
| apiKey         | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| email          | String| This is email of the manager to be added which is used while Login.
| password       | String| This is the password for the manager account to login.
| firstName      | String| This is the First name of the manager to be added.
| last_name      | String| This is the Last name of the manager to be added.
| phone          | String| This is the phone number of the manager to be added.
| timezone       | String| Timezone difference with UTC in minutes for e.g., For PST:+480 (PDT: +420),For MST +420 (MDT:+360) for EST: +300(EDT:+240), for AEST: -600 (AEDT: -660), for IST: -330, for CST: +360 (CDT:+300)
| taskAccess     | String| This is to give access for the unasigned tasks. Set this to '1' to give access and '0' not to give the access
| addDriverAccess| String| This is to give access for the manager to create Agents. Set this to '1' to give access and '0' not to give the access
| dispatcherTeams| String| Pass the team_ids in this parameter with comma seperated values to which the manager can access.

## Tookan.getCustomer
This API is used to get the all the Customer details.

| Field           | Type  | Description
|-----------------|-------|----------
| apiKey          | String| You can get a key from settings(Login>Menu>More>API Key) in your tookan account.
| customerUsername| String| Filter the list based on the customer name
| customerPhone   | String| Filter the list based on the customer phone number
| isPagination    | String| You can set this as 1 to enable pagination
| requestedPage   | String| Current(Which) page according to the page number of tasks in the filter

