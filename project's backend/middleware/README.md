### Module

* User Registration & Login**: Allows users to create an account and log in using encrypted passwords and JWT tokens.
* Password Hashing**: Encrypts passwords automatically using `bcryptjs` before storing them in MongoDB.
* Role-Based Protection**: Restricts administrative routes (like adding or modifying menu items) so only users with the `admin` role can access them.

### Roles
* `customer`: Default user, can view menu items and place orders.
* `admin`: Administrative user, full CRUD rights over menu management.
* `delivery`: Courier personnel assigned to orders.

### Routes
* `POST /api/v1/auth/signup` — User registration 
* `POST /api/v1/auth/login` — Authentication 

#### Example Login (`POST /api/v1/auth/login`):
{
  "email": "abdelrahman4@example.com",
  "password": "1234567890"
}
