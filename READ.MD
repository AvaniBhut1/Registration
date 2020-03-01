# Collection

Collection is a Node.js server app with express framework.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install npm packages.

```bash
npm install
```

## API endPoints

### User SignUp
#### endPoint
```
/api/user/signup
```
#### body
```
{
    name:"name",
    email:"email",
    password:"password"
}
```

### User SignIn
#### endPoint
```
/api/user/signin
```
#### body
```
{
    email:"email",
    password:"password"
}
```

### User self data
#### endPoint
```
/api/user/self
```
#### headers
```
{
    Authorizaion: 'token'
}
```

## License
[ISC](https://isc.org/)