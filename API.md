# LCDD Application - API REST Documentation

## About our API
All you can find in our API Rest is information about users, merchandaising, events, games, tournaments and UserRole. All you need to do is simply; you have to follow the API rules. If you try to do following a different way, it's probably what you will recieve an error.

## How to use our API
1. Download [Postman](https://www.getpostman.com/).
2. You only can send GET, POST, PUT and DELETE requests.

## API requests

### Resources
The resource API has GET, POST, PUT and DELETE methods.
http: // localhost: 8080 followed by the containt request URL.

**All API queries have been preceded by /api**

## User
The following queries contains information about the Users.

|User Information|Permissions|Request Type|Request URL|Sucess response|Error Response|
|----------------|-----------|------------|------------|-------------------|---------------------|
|All Users Registered|ADMIN|GET|/api/users/|(User List) and *OK* (200)|*NOT FOUND* (404)|
|User information|USER|GET|/api/users/id|User and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Purchases of a User|USER|GET|/api/users/id/purchases|(Purchases List) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Events Registered of a User|USER|GET|/api/users/id/eventsRegistered|(EventRegister List) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Add User|ALL|POST|/api/users/|(USER) and *CREATED* (201)|*NOT ACCEPTABLE* (406)|
|Delate User|USER|DELETE|/api/users/id/|(USER) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Update information of an USER|USER|PUT|/api/users/id/|(USER) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Update role information of a USER|ADMIN|PUT|/api/users/id/role|*OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|

### Example of GET to https://localhost:8443/api/users/ 
```json
[
    {
        "id": 27,
        "email": "email",
        "name": "cPabe",
        "firstName": "carlos",
        "lastName": "pabe",
        "roles": [
            "ROLE_USER"
        ],
        "role": {
            "id": 9,
            "name": "Secretary"
        }
    },
    {
        "id": 28,
        "email": "email",
        "name": "daniel",
        "firstName": "dani",
        "lastName": "moreno",
        "roles": [
            "ROLE_USER",
            "ROLE_ADMIN"
        ],
        "role": {
            "id": 10,
            "name": "Treasurer"
        }
    }
]
```
### Example of DELETE to https://localhost:8443/api/users/27
```json
{
    "id": 27,
    "email": "email",
    "name": "cPabe",
    "firstName": "carlos",
    "lastName": "pabe",
    "roles": [
        "ROLE_USER"
    ],
    "role": {
        "id": 9,
        "name": "Secretary"
    }
}
```
### Example of PUT to https://localhost:8443/api/users/27
```json
{
    "email": "email",
    "name": "daniel",
    "firstName": "dani",
    "lastName": "moreno",
    "roles": [
        "ROLE_USER",
        "ROLE_ADMIN"
    ],
    "role": {
        "id": 10,
        "name": "Treasurer"
    }
}
```

## MERCHANDAISING
The following queries contains information about the Merchandaising.

|Merch Information|Permissions|Request Type|Request URL|Sucess response|Error Response|
|----------------|-----------|------------|------------|-------------------|---------------------|
|Merch list|ALL|GET|/api/merchandaisings/|(Merch List) and *OK* (200)|*NOT FOUND* (404)|
|List of merchandaising type|ALL|GET|/api/merchandaisings/types/|(Merch Type list) and *OK* (200)|*NOT FOUND* (404)|
|TyeMerch of a merch|ALL|GET|/api/merchandaisings/id/type/|(Merch Type) and *OK* (200)|*NOT FOUND* (404)|
|Merch Information|ALL|GET|/api/merchandaisings/id/|(MERCH) and *OK* (200)|*NOT FOUND* (404)|
|Merch with an image|ALL|GET|/api/merchandaisings/id/image|(MERCH) and *OK* (200)|*NOT FOUND* (404)|
|Create a Merch|ADMIN|POST|/api/merchandaisings/|(MERCH) and *CREATED* (200)|*NOT ACCEPTABLE* (406)|
|Create Merch Image|ADMIN|POST|/api/merchandaising/id/image/|(Merch image) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Update MErch Image|ADMIN|PUT|/api/merchandaising/id/image/|(Merch image) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Update Merch|ADMIN|PUT|/api/merchandaisings/id/|(MERCH) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Delate Merch|ADMIN|DELETE|/api/merchandaisings/id/|(MERCH) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|

### Example of GET to https://localhost:8443/api/merchandisings/
```json
[
    {
        "id": 32,
        "name": "Chapa negra logo LCDD",
        "price": 5,
        "discount": 50,
        "stock": 5,
        "description": "Es la mejor chapa del mundo.",
        "haveImage": true
    },
    {
        "id": 33,
        "name": "Poster LoL",
        "price": 10,
        "discount": 15,
        "stock": 7,
        "description": "Es la mejor poster.",
        "haveImage": true
    },
    {
        "id": 34,
        "name": "Figura Poppy",
        "price": 15,
        "discount": 5,
        "stock": 20,
        "description": "Debes comprarlo.",
        "haveImage": true
    },
    {
        "id": 35,
        "name": "Chapa blanca logo LCDD",
        "price": 800,
        "discount": 2,
        "stock": 50,
        "description": "No te atreverías a comprarlo.",
        "haveImage": true
    }
]
```
### Example of GET to https://localhost:8443/api/merchandisings/types
```json
[
    {
        "id": 11,
        "type": "Chapas"
    },
    {
        "id": 12,
        "type": "Posters"
    },
    {
        "id": 13,
        "type": "Camisetas"
    }
]
```
### Example of POST to https://localhost:8443/api/merchandisings/
```json
{
    "id": 40,
    "name": "Camiseta2 LCDD",
    "price": 6,
    "discount": 100,
    "stock": 15,
    "description": "Skin única LCDD.",
    "haveImage": true
}
```
### Example of DELETE to https://localhost:8443/api/merchandisings/38
```json
[
    {
    "id": 38,
    "name": "Camiseta LCDD",
    "price": 6,
    "discount": 100,
    "stock": 15,
    "description": "Skin única LCDD.",
    "haveImage": true
}
]
```
### Example of PUT to https://localhost:8443/api/merchandisings/37
```json
[
    {
    "id": 37,
    "name": "Taza editada logo LCDD",
    "price": 55,
    "discount": 5,
    "stock": 45,
    "description": "Café para algunos los estilos.",
    "haveImage": true
}
]
```

## EVENTS
The following queries contains information about the Events.

|Events Information|Permissions|Request Type|Request URL|Sucess response|Error Response|
|----------------|-----------|------------|------------|-------------------|---------------------|
|Event list|ALL|GET|/api/events/|(Event List) and *OK* (200)|*NOT FOUND* (404)|
|Game list|ALL|GET|/api/events/games/|(Game list) and *OK* (200)|*NOT FOUND* (404)|
|Event information|ALL|GET|/api/events/id/|(EVENT) and *OK* (200)|*NOT FOUND* (404)|
|Event Image|ALL|GET|/api/events/id/image/|(Event image) and *OK* (200)|*NOT FOUND* (404)|
|Users registered in an specific event|ADMIN|GET|/api/events/id/userRegistered/|(User list) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Create an Event|ADMIN|POST|/api/events/|(EVENT) and *CREATED* (200)|*NOT ACCEPTABLE* (406)|
|Create Event Image|ADMIN|POST|/api/events/id/image/|(Event image) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Update Event Image|ADMIN|PUT|/api/events/id/image/|(Event image) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Update an event|ADMIN|PUT|/api/events/id/|(EVENT) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Delete an event|ADMIN|DELETE|/api/events/id/|(EVENT) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Game list|ADMIN|GET|/api/events/games/counts/|(Game list) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|

### Example of GET to https://localhost:8443/api/events/games
```json
[
    {
        "id": 1,
        "name": "League of Legends",
        "acronym": "LoL"
    },
    {
        "id": 2,
        "name": "Magic: The Gathering Arena",
        "acronym": "MTG Arena"
    },
    {
        "id": 3,
        "name": "Teamfight Tactics",
        "acronym": "TFT"
    },
    {
        "id": 4,
        "name": "Legends of Runaterra",
        "acronym": "LoR"
    }
]
```
### Example of GET to https://localhost:8443/api/events/17/userRegistered
```json
[
    {
        "id": 27,
        "email": "email",
        "name": "cPabe",
        "firstName": "carlos",
        "lastName": "pabe",
        "roles": [
            "ROLE_USER"
        ],
        "role": {
            "id": 9,
            "name": "Secretary"
        }
    },
    {
        "id": 30,
        "email": "email",
        "name": "alfonso",
        "firstName": "angra",
        "lastName": "lopz",
        "roles": [
            "ROLE_USER",
            "ROLE_ADMIN"
        ],
        "role": {
            "id": 6,
            "name": "President"
        }
    }
]
```
### Example of POST to https://localhost:8443/api/events/
```json
{
    "id": 56,
    "name": "Evento prueva post2",
    "place": "URJC Móstoles, S10 Lab 2",
    "date": "03-03-2019",
    "time": "15:00",
    "description": "Es un evento de prqeeagrargueba",
    "haveImage": true,
    "groupSize": 2,
    "inscriptionFee": 5,
    "maxParticipants": 30
}
```

### Example of DELETE to https://localhost:8443/api/events/56/
```json
{
    "id": 56,
    "name": "Evento prueva post2",
    "place": "URJC Móstoles, S10 Lab 2",
    "date": "03-03-2019",
    "time": "15:00",
    "description": "Es un evento de prqeeagrargueba",
    "haveImage": true,
    "groupSize": 2,
    "inscriptionFee": 5,
    "maxParticipants": 30
}
```

## ROLES
The following queries contains information about the all types of roles (President,vicepresident...).

|Roles Information|Permissions|Request Type|Request URL|Sucess response|Error Response|
|----------------|-----------|------------|------------|-------------------|---------------------|
|Roles of directive board|ALL|GET|/api/role/|(Role List) and *OK* (200)|*NOT FOUND* (404)|
|Users in an specefic role|ADMIN|GET|/api/role/id/|(User list) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|

### Example of GET to https://localhost:8443/api/role/
```json
[
    {
        "id": 6,
        "name": "President"
    },
    {
        "id": 7,
        "name": "Vice-president"
    },
    {
        "id": 8,
        "name": "Vocal"
    },
    {
        "id": 9,
        "name": "Secretary"
    },
    {
        "id": 10,
        "name": "Treasurer"
    }
]
```
### Example of GET to https://localhost:8443/api/role/8
```json
[
    {
        "id": 29,
        "email": "email",
        "name": "oscar",
        "firstName": "osk",
        "lastName": "rivas",
        "roles": [
            "ROLE_USER"
        ],
        "role": {
            "id": 8,
            "name": "Vocal"
        }
    },
    {
        "id": 31,
        "email": "email",
        "name": "miguel",
        "firstName": "byGranizo",
        "lastName": "jimenez",
        "roles": [
            "ROLE_USER"
        ],
        "role": {
            "id": 8,
            "name": "Vocal"
        }
    }
]
```

## PURCHASES
The following queries contains information about the Purchases.

|Purchases Information|Permissions|Request Type|Request URL|Sucess response|Error Response|
|----------------|-----------|------------|------------|-------------------|---------------------|
|Purchase list|ADMIN|GET|/api/purchase/|(Purchases List) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Purchases of the last mounth|ADMIN|GET|/api/purchase/lastYearByMonth|(Puchases list order by month) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|Purchase|USER|POST|/api/purchase/id/|(Purchase) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
### Example of GET to https://localhost:8443/api/purchase/
```json
[
 {
        "user": {
            "id": 31,
            "email": "email",
            "name": "miguel",
            "firstName": "byGranizo",
            "lastName": "jimenez",
            "roles": [
                "ROLE_USER"
            ],
            "role": {
                "id": 8,
                "name": "Vocal"
            }
        }
    }
]
```
### Example of GET to https://localhost:8443/api/purchase/lastYearByMonth
```json
[
    [
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
        "enero",
        "febrero",
        "marzo",
        "abril"
    ],
    [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0
    ]
]
```
## EVENTREGISTER
The following queries contains information about the EventRegister.

|EventRegister Information|Permissions|Request Type|Request URL|Sucess response|Error Response|
|----------------|-----------|------------|------------|-------------------|---------------------|
|EventRegister list|ADMIN|GET|/api/userRegisterEvent/|(EventRegister List) and *OK* (200)|*NOT FOUND* (404) OR *FORBIDDEN*(401)|
|User EventRegister|ALL|POST|/api/userRegisterEvent/id/|(EventRegister) and *OK* (200)|*NOT FOUND* (404)|

### Example of GET to https://localhost:8443/api/userRegisterEvent/
```json
[
{
        "user": {
            "id": 27,
            "email": "email",
            "name": "cPabe",
            "firstName": "carlos",
            "lastName": "pabe",
            "roles": [
                "ROLE_USER"
            ],
            "role": {
                "id": 9,
                "name": "Secretary"
            }
        }
    }
]
```
