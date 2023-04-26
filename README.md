Adopt-A-Pet

READ ME

This project was created using the MERNstack (MongoDB, ExpressJS, ReactJS, and NodeJS), that included user login. It has user login and registration functionality that uses the CRUD functionality (Create, Read, Update, and Delete). 

It uses the following Tech Stack:
•	Node – Runtime
•	React – Client Framework
•	MongoDB – Database
•	Git – Code Versioning
•	Github – Code Storage and Collaboration
•	CORS – Express CORS Library
•	bcryptJS – User Authentication
•	JsonWebToken – User Auth Tokens
•	Nodemon – Server Hot Reloading
•	React-Router – Client Side Routing

This project contains: 
1.	Navigation bar
2.	Searchbar
3.	Home page
4.	About page
5.	Blog page

6.	Login and registration page:
•	The login and signup page has the ability to encrypt the user’s password via salt+hash algorithm.
•	A user ID Token is generated using JsonWebToken. The ID Token is persisted on client side with local storage. The client can check for the existence of the token for prompting the user to authenticate.
•	The user can log out of the application and login with a different account. 

7.	A searchable database of adoptable pets from the Petfinder API. 
•	The searchbar filters pets available for adoption by location, US Zip-code input, and type in the drop-down menu. 

8.	Products Page – Shows a list of filtered pets with photo, name, type, breed and location in a grid of cards.

9.	The user can click on a pet card after the search and see the full pet profile.
o	Name
o	Location
o	Type
o	Breed
o	Age
o	Spay / Neuter 
o	Housebroken/ Good with children / Trained

10.	For the checkout cart requirement, the user has the option to click on save so they can return to the pet’s profile. The server creates a new order document in the database. The order document should have its own ID, the ID of the user that checked out as well as the checked out cart items stored on it. 

11.	From the profile page the user, also has the option to be routed an adoption page, where they can communicate with the organization listing the pet for adoption. 
