Habit Tracker - Aplicación de Hábitos

Esta aplicación es parte de un proyecto del curso de Programación avanzada del Instituto Von Neumann. Su objetivo es ayudar a los usuarios a seguir y controlar sus hábitos diarios. Está basada en el libro *"Hábitos Atómicos"* de James Clear.

¿Qué hace?

- **Crear hábitos**: El usuario puede crear hábitos que desee seguir.
- **Marcar hábitos**: Cada día, el usuario podrá marcar los hábitos que completó.
- **Ver progreso**: Se muestra una barra que cambia de rojo a verde cuando el hábito se completa.
- **Cuentas de usuario**: Los usuarios pueden crear cuentas y agregar hábitos.

¿Cómo funciona?

El proyecto utiliza las siguientes herramientas:

- **Frontend**: Next.js
- **Backend**: Express.js
- **Base de datos**: MongoDB

Instrucciones de uso

1. Clonar el repositorio

Abre una terminal y clona el repositorio:

```bash
git clone https://github.com/AE05189095/habit-tracker.git
```

2. Configurar el backend

- Navega a la carpeta `habit-tracker-backend`:

  ```bash
  cd habit-tracker-backend
  ```

- Instala las dependencias:

  ```bash
  npm install
  ```

- Conecta la base de datos:

  1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  2. Copia la cadena de conexión de tu base de datos.
  3. Crea un archivo `.env` en la carpeta `habit-tracker-backend` y agrega lo siguiente:

     ```bash
     MONGODB_URI=tu_cadena_de_conexion
     ```

- Inicia el backend:

  ```bash
  npm start
  ```

El servidor backend se ejecutará en [http://localhost:3001](http://localhost:3001).

3. Configurar el frontend

- Abre otra terminal y navega a la carpeta `habit-tracker`:

  ```bash
  cd habit-tracker
  ```

- Instala las dependencias:

  ```bash
  npm install
  ```

- Inicia el frontend:

  ```bash
  npm run dev
  ```

El frontend se ejecutará en [http://localhost:3000](http://localhost:3000).

4. Realizar peticiones POST con Postman

1. Abre **Postman**.
2. Selecciona el método `POST` y la URL [http://localhost:3001](http://localhost:3001).
3. En la pestaña **Body**, selecciona **raw** y usa el siguiente formato para crear hábitos:

   ```json
   {
     "title": "Nombre del hábito",
     "description": "Acción del hábito"
   }
   ```

4. Haz clic en **Send**.

5. Ver el estado en Redux

1. Abre **Google Chrome** y navega a [http://localhost:3000](http://localhost:3000).
2. Presiona `F12` para abrir las herramientas de desarrollo.
3. Selecciona la pestaña **Redux** para ver el estado de las peticiones POST realizadas.
