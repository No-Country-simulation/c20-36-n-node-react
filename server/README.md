# Documentacion de las Endpoint

## auth
- registro
``` json
# metodo : post
https://c20-36-n-node-react.onrender.com/api/v1/auth/register
# cuerpo : json
{
    "name":"milan",
	"lastName":"alvarez",
	"email":"milan@gmail.com",
	"password":"1234",
	"urlGitHub":"https://github.io/hackanonimous/.com"
}
```
- login
``` json
# metodo : post
https://c20-36-n-node-react.onrender.com/api/v1/auth/login
# cuerpo : json
{
	"email":"milan@gmail.com",
	"password":"1234"
}
```
## user
- mis datos
``` json
# metodo : get
https://c20-36-n-node-react.onrender.com/api/v1/user/me
# cuerpo : json
# Respuesta : json
{
	"error": false,
	"data": {
		"userID": "5384fa4c-21cf-4b2a-b081-e51159427ef5",
		"name": "milan",
		"lastName": "alvarez",
		"email": "milan@gmail.com",
		"urlGitHub": "https://github.io/hackanonimous/.com",
		"urlLinkedIn": null,
		"biography": null,
		"photo": "https://png.pngtree.com/png-clipart/20210311/original/pngtree-customer-login-avatar-png-image_6015290.jpg",
		"address": null,
		"birth": null,
		"isAdmin": false
	}
}
```
- actualizar
``` json
# metodo : patch
https://c20-36-n-node-react.onrender.com/api/v1/user/me
# cuerpo : json
{
	"name":"otro nombre",
	"lastName":"otro apellido",
	"biography":"soy programador de node js"
}
# Respuesta : json
{
	"error": false,
	"data": {
		"userID": "5384fa4c-21cf-4b2a-b081-e51159427ef5",
		"name": "otro nombre",
		"lastName": "otro apellido",
		"email": "milan@gmail.com",
		"urlGitHub": "https://github.io/hackanonimous/.com",
		"urlLinkedIn": null,
		"biography": "soy programador de node js",
		"photo": "https://png.pngtree.com/png-clipart/20210311/original/pngtree-customer-login-avatar-png-image_6015290.jpg",
		"address": null,
		"birth": null,
		"isAdmin": false
	}
}
## skill - perfil tecnico
- mostrar skill relacionadas al usuario
``` json
# metodo : get
https://c20-36-n-node-react.onrender.com/api/v1/skill/all
# cuerpo : json
# respuesta: json
{
    [
		{
			"skillsID": "5be8da19-8f9b-4417-9c40-703774f54a3e",
			"userID": "c250f36b-01e1-4b42-9542-7d450abb6642",
			"name": "backend",
			"level": "avanzado",
			"years_of_experience": 5,
			"languages": [
				"python",
				"php"
			],
			"frameworks": [
				"django",
				"laravel"
			]
		},
		{
			"skillsID": "7ffa85af-dc66-470c-88ff-96cf1dfdfd4d",
			"userID": "c250f36b-01e1-4b42-9542-7d450abb6642",
			"name": "frontend",
			"level": "basico",
			"years_of_experience": 10,
			"languages": [
				"javascript"
			],
			"frameworks": [
				"react",
				"vuejs"
			]
		}
	]
}
```
- agregar skill
``` json
# metodo : post
https://c20-36-n-node-react.onrender.com/api/v1/skill/add
# cuerpo : json
{
    "name":"backend",
	"level":"avanzado",
	"years_of_experience":5,
	"languages":["python","php"],
	"frameworks":["django","laravel"]
}
# Respuesta : json
```
- editar skill
``` json
# metodo : patch
https://c20-36-n-node-react.onrender.com/api/v1/skill/update
# cuerpo : json
{
	"name":"frontend",
	"level":"basico",
	"years_of_experience":10,
	"languages":["javascript"],
	"frameworks":["react","vuejs"]
}
# Respuesta : json
```