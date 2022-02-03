import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Yooooooooo</p> 
    </div>
  );
}

export default App;

/**
Actors:
User
  Functions:
    Own account management
    Image Upload
    Image download
    Image delete
    Image View
    Register

Admin
  Functions:
    Manage all users (Authentication data. no access to User's photos)


Server APIs

User:
POST /login (username, password)
POST /register (name, username, password)
POST /upload (image)
GET /download (image-id)
POST /delete (image-id)
GET /view (user-id)

Admin:
POST /login (username, password)
POST /changePassword (user-id, password)

DATABASE:
User : {
  userId : String (required) (auto-generated)
  userName : String (required)
  password : String (required)
  name : String (required)
  images[] : String[]
  token : String
}

Image : {
  image-id : String (required) (auto-generated)
  userId : String (required)
}
 */
