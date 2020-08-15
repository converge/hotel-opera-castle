### Hotel Management

This is a fictitious project, to try new things. Feel free to join, the purpose of this projects is to have fun.

---

#### Concept:

It's a Hotel Management System, the index 1 should contain these functionalities:

- Users Management
- Rooms Management
- Check In
- Check Out

#### Stack

- NodeJS
- PostgreSQL
- libs: jest, db-migrate

### Database ERM

Users:  
.id  
.first name  
.last name  
.created  
.modified  

user_room:  
.id  
.user_id  
.room_id  
.check_in  
.check_out  
.created  
.modified  

rooms:  
.id  
.price  
.description  
.user_id  
.created  
.modified  

### API Definition

### Version

| Endpoint | Verb | Description | Authenticated | role admin | role client |
|---|---|---|---|---|---|
| / | GET | API Version | | | |

#### Users

| endpoint | Verb | Description | Authenticated | role admin | role client |
|---|---|---|---|---|---|
| /users | GET | List All Users | x | x | |
| /users/{id} | GET | List one User | x | x | x |
| /users | POST | Create Users | | | |
| /users/{id} | DELETE | Delete a User | x | x | x |


#### Version goals

0.0.1: general project concept  
0.0.2: Frontend draft design, brand logo  
0.0.3: API definition  
