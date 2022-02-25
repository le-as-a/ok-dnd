# OK DND
[OK DND](https://ok-dnd.herokuapp.com/) is an app based on the original OK Cupid, where you as a user can be matched with potential campaigns created by other users. This was built using React and Redux for the frontend, and Python, Flask SQL Alchemy, and PostgreSQL for the backend.
## Run locally
1. Clone this repository.
2. Run the following in the root directory:
	* `pipenv install`
	* `flask db upgrade`
	* `flask db seed all`
3. Run `npm install` in react-app directory.
4. In one terminal, run `pipenv run flask run` and in a separate terminal, run `npm start`.
## Core Features
* Create an account, fill out a questionnaire
* Log into your account (or alternatively the demo user)
* Create, read, update and delete:
	* Questionnaires
	* Campaigns
	* Schedules
* Request to join campaigns
* View and accept or reject applicants to your campaigns
## Technologies Used
### Frontend
* React
* Redux
### Backend
* Python
* PostgreSQL
* Flask SQLAlchemy
