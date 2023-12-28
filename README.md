# React + Bit.dev
### Instalar una libreria de bit en un proyecto react cualquiera con npm
#### 1- Crea un archivo .npmrc en la raiz del proyecto react
#### 2- Obtener el token de bit
```text
bit config get user.token
```
Luego que tengas el token cópialo y pégalo en el archivo .npmrc donde está BIT_CLOUD_AUTH_TOKEN

#### 3- Agrega la siguiente linea al archivo .npmrc
```text
@my-bit-org-o-nombre de usuario :registry= https://node-registry.bit.cloud 
@teambit:registry=https://node-registry.bit.cloud 
//node-registry.bit.cloud/ :_authToken= BIT_CLOUD_AUTH_TOKEN 
siempre-auth=true
```

#### 4- Instala la libreria de bit con npm
```text
npm i @my-bit-org-o-nombre de usuario/nombre de la libreria
```
