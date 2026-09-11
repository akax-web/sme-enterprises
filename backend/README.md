# Subramani Enterprises — Backend (Spring Boot)

Public, read-only REST API that serves service, package, vehicle
category and business profile data to the React frontend.

**There is no login, signup, or authentication anywhere in this
backend.** Every endpoint is a public `GET` endpoint, matching the
QR-code → public-website use case of this project.

## Tech Stack

- Java 17
- Spring Boot 3.3 (Web, Data JPA, Validation)
- MySQL 8
- Maven

## Project Structure

```
src/main/java/com/subramanienterprises/
├── SubramaniEnterprisesApplication.java   # main entry point
├── config/
│   └── CorsConfig.java                    # allowed frontend origins
├── controller/                            # REST controllers
├── service/                               # business logic
├── repository/                            # Spring Data JPA repositories
├── model/                                 # JPA entities
├── dto/                                   # API response shapes
└── exception/                             # global error handling
```

## REST API Endpoints

| Method | Endpoint                     | Description                          |
|--------|-------------------------------|---------------------------------------|
| GET    | `/api/business`               | Business profile (name, phone, etc.) |
| GET    | `/api/services`                | All active services                  |
| GET    | `/api/services/{id}`           | Single service by id                 |
| GET    | `/api/packages`                | All packages (hourly + monthly)      |
| GET    | `/api/packages/hourly`         | Hourly package line items            |
| GET    | `/api/packages/monthly`        | Monthly package info                 |
| GET    | `/api/vehicle-categories`      | Normal / Premium / Luxury categories |

All responses are JSON. All endpoints are public — no headers,
tokens, or cookies are required.

## Local Setup

### 1. Prerequisites
- JDK 17+
- Maven 3.8+
- MySQL 8+ running locally

### 2. Create the database

```bash
mysql -u root -p < ../database/schema.sql
mysql -u root -p < ../database/data.sql
```

### 3. Configure environment variables (optional for local dev)

The app works out-of-the-box with sensible local defaults
(`localhost:3306`, user `root`, password `root`). To override:

```bash
export DB_URL="jdbc:mysql://localhost:3306/subramani_enterprises?useSSL=false&serverTimezone=UTC"
export DB_USERNAME="root"
export DB_PASSWORD="your_mysql_password"
export CORS_ALLOWED_ORIGINS="http://localhost:5173"
```

### 4. Run the backend

```bash
mvn spring-boot:run
```

The API will start on `http://localhost:8080`.

### 5. Verify it's working

```bash
curl http://localhost:8080/api/business
curl http://localhost:8080/api/services
curl http://localhost:8080/api/packages/hourly
```

## Building for Production

```bash
mvn clean package
java -jar target/subramani-enterprises-backend-1.0.0.jar
```

## Production Environment Variables

Set these on your hosting provider (Render, Railway, EC2, etc.)
instead of editing `application.properties` directly:

| Variable               | Description                                   |
|-------------------------|-----------------------------------------------|
| `DB_URL`                | Full JDBC URL to your production MySQL DB     |
| `DB_USERNAME`           | Database username                             |
| `DB_PASSWORD`           | Database password                             |
| `CORS_ALLOWED_ORIGINS`  | Your deployed frontend URL (comma-separated)  |
| `SERVER_PORT`           | Port to run on (many hosts inject this)       |

## Notes

- `spring.jpa.hibernate.ddl-auto` defaults to `none` — you are
  expected to run `schema.sql` yourself. This avoids Hibernate
  silently altering your production schema.
- No sensitive data (passwords, tokens) is stored in the database.
- CORS is restricted to the configured frontend origin(s) only.
