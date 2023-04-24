# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET    | /    | Home page |
| GET    | /places | Places index page |
| POST   | /places | Create new places |
| GET    | /places/new | Form page for creating a new piece |
| GET    | /places/:id | Details about a particular place   |
| PUT     | /places/:id | Upadate a particular place |
| GET     | /places/:id/edit | Form a page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant(comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant(comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

| Place Name | City | State | Cuisines | pic |
| ---------- | ---- | ----- | -------- | --- |
| (string) | (string) | (string) | (string) | (string) |
