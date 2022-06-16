
# Course-API

REST API untuk aplikasi course, aplikasi ini menggunakan pattern memisahkan setiap data menjadi masing-masing folder dan di dalamnya terdapat file `controller` dan `router` tersendiri sehingga mudah untuk maintenance dari setiap data, serta untuk konfigurasi database dan model juga terpisah dari logic pada aplikasi


## Teknologi

**Server:** Node, Express

**DB:** My SQL, Sequelize


## Struktur File dan Direktori

```
├── app
│   ├── person
|        ├── contoroller.js         // File untuk contoroller person
|        ├── router.js              // File untuk router person
|
├── config
|   ├── config.js                   // File untuk konfigurasi DB
|
├── migrations                      // Berisi file-file migration
|
├── models
|   ├── index.js                    // File untuk inisiasi semua model
|   ├── Person.js                   // File untuk model Person
|   ├── Program.js                  // File untuk model Program
|
├── seeders                         // Berisi file-file seeder
|
├── index.js                        // File utama server aplikasi
````



## Instalasi

Clone repository

```bash
  git clone https://github.com/mutawakkilalallah/course-api.git
```

Masuk ke folder project

```bash
  cd course-api
```

Install dependensi

```bash
  npm install
```

melakukan migrasi & seed database

- ubah nama file `env.example` to `.env`

```bash
  npx sequelize db:migrate
```
```bash
  npx sequelize db:seed:all
```

Menjalankan aplikasi

- Local
```bash
  npm run dev
```
- Production

```bash
  npm run start
```


## Dokumentasi API

### Get All Persons

```http
  GET /api/person
```

### Get Person by UUID

```http
  GET /api/person/${uuid}
```

| Params | Type     | 
| :------| :------- |
| `uuid` | `string` | 

### Create Person

```http
  POST /api/Person
```

```http
  {
	"name": "Rifqoh Wasilah",
	"address": "Pamekasan",
	"title": "Data Scient"
  }
```

### Update Person

```http
  PUT /api/person/${uuid}
```

| Params | Type     | 
| :------| :------- |
| `uuid` | `string` | 

```http
  {
	"name": "Rifqoh W.",
	"address": "PMK"
  }
```

### Update Person Program

```http
  PATCH /api/person/program/${uuid}
```

| Params | Type     | 
| :------| :------- |
| `uuid` | `string` | 

```http
  {
	"title": "Software Engineer"
  }
```


### Delete Person

```http
  DELETE /api/person/${uuid}
```

| Params | Type     | 
| :------| :------- |
| `uuid` | `string` | 
