# Blessings Foundation & Trust - Web Portal & Spring Boot Backend

A complete, professional, responsive website and Spring Boot + JDBC + MySQL backend for **Blessings Foundation & Trust**.

---

## 📁 Project Architecture

```
BlessingsFoundation/
│
├── frontend/                     # HTML5, CSS3, JavaScript (Vanilla, Responsive)
│   ├── index.html                # Home Page (Hero, Mission, Work, Impact, Events, CTA)
│   ├── about.html                # About Us (Mission, Vision, Core Values, Leadership)
│   ├── programs.html             # All 6 Core Programs (Education, Health, Women, etc.)
│   ├── gallery.html              # Responsive Photo Gallery with Lightbox Modal
│   ├── events.html               # Events & Community Drives (GET /api/events)
│   ├── volunteer.html            # Volunteer Registration Form (POST /api/volunteers)
│   ├── donate.html               # Donation Portal & Organization Banking Placeholders
│   ├── contact.html              # Contact Form (POST /api/contact) & Maps Area
│   ├── css/
│   │   └── style.css             # Theme Color #f58220, modern responsive design system
│   ├── js/
│   │   └── script.js             # Mobile Hamburger, Lightbox, Counters & REST API fetch
│   └── images/                   # High-res SVG logos, hero banners, gallery & event assets
│
├── backend/                      # Java Spring Boot 3 + JDBC + MySQL REST API
│   ├── pom.xml                   # Maven dependencies (Spring Web, JDBC, MySQL Connector)
│   ├── src/main/java/com/blessings/foundation/
│   │   ├── BlessingsFoundationApplication.java   # Main Spring Boot Runner
│   │   ├── config/WebConfig.java                 # CORS configuration for localhost
│   │   ├── controller/                           # REST Controllers (/api/*)
│   │   │   ├── VolunteerController.java
│   │   │   ├── ContactController.java
│   │   │   ├── EventController.java
│   │   │   └── ProgramController.java
│   │   ├── service/                              # Business Logic
│   │   │   ├── VolunteerService.java
│   │   │   ├── ContactService.java
│   │   │   ├── EventService.java
│   │   │   └── ProgramService.java
│   │   ├── repository/                           # Pure JDBC JdbcTemplate Data Layer
│   │   │   ├── VolunteerRepository.java
│   │   │   ├── ContactRepository.java
│   │   │   ├── EventRepository.java
│   │   │   └── ProgramRepository.java
│   │   └── model/                                # POJO Data Models
│   │       ├── Volunteer.java
│   │       ├── ContactMessage.java
│   │       ├── Event.java
│   │       ├── Program.java
│   │       └── ApiResponse.java
│   └── src/main/resources/
│       ├── application.properties               # MySQL DataSource & port configuration
│       └── schema.sql                           # Embedded DDL schema
│
└── database/
    └── setup.sql                                # Full MySQL Workbench setup & seed script
```

---

## 🚀 Step 1: Set Up MySQL Database

1. Open **MySQL Workbench**.
2. Connect to your local MySQL instance (port `3306`).
3. Open the file:
   `BlessingsFoundation/database/setup.sql`
4. Click the **Execute (Lightning bolt)** icon to run the script.
5. This script creates:
   - Database: `blessings_foundation`
   - Table `volunteers`
   - Table `contact_messages`
   - Table `events` (with sample records)
   - Table `programs` (with sample records)

---

## 🛠️ Step 2: Open and Run in Eclipse / Spring Tool Suite (STS)

1. Open **Eclipse IDE** or **Spring Tool Suite (STS)**.
2. Go to `File` &rarr; `Import...`.
3. Choose `Maven` &rarr; `Existing Maven Projects` and click `Next`.
4. Browse to:
   `BlessingsFoundation/backend`
5. Ensure `pom.xml` is checked and click `Finish`. Eclipse will import and build the project.
6. Open `src/main/resources/application.properties` and replace:
   ```properties
   spring.datasource.password=YOUR_PASSWORD
   ```
   with your local MySQL root password.
7. Right-click `BlessingsFoundationApplication.java` (under `src/main/java/com/blessings/foundation/`) &rarr; **Run As** &rarr; **Spring Boot App** (or **Java Application**).
8. Verify the console displays:
   ```
   =================================================================
    Blessings Foundation & Trust Backend Started Successfully!
    REST API Base URL: http://localhost:8080/api
   =================================================================
   ```

---

## 🌐 Step 3: Run the Frontend

1. Open `BlessingsFoundation/frontend/index.html` directly in any web browser (Chrome, Edge, Firefox).
2. Or use any local static server (e.g. VS Code Live Server, Python `python -m http.server 3000`, or Node `npx serve frontend`).
3. You can navigate through all pages:
   - **Home**: `index.html`
   - **About Us**: `about.html`
   - **Programs & Our Work**: `programs.html`
   - **Gallery with Lightbox**: `gallery.html`
   - **Events**: `events.html`
   - **Become a Volunteer**: `volunteer.html`
   - **Donate**: `donate.html`
   - **Contact Us**: `contact.html`

---

## 🔗 Step 4: Testing Frontend &rarr; Backend &rarr; MySQL Connection

### Test 1: Volunteer Registration Form
1. Open `volunteer.html` in your browser.
2. Fill in:
   - Name: `Rahul Sharma`
   - Email: `rahul@example.com`
   - Phone: `+91 9876543210`
   - Interest: `Education Support`
   - Message: `I want to volunteer as a weekend teacher.`
3. Click **Become a Volunteer**.
4. The frontend calls `POST http://localhost:8080/api/volunteers`.
5. You will see the green success alert:
   > *"Thank you, Rahul Sharma! Your volunteer registration has been submitted successfully."*
6. In MySQL Workbench, verify by running:
   ```sql
   SELECT * FROM blessings_foundation.volunteers;
   ```

### Test 2: Contact Form
1. Open `contact.html` in your browser.
2. Fill in Name, Email, Subject, and Message.
3. Click **Send Message**.
4. The frontend calls `POST http://localhost:8080/api/contact`.
5. In MySQL Workbench, verify by running:
   ```sql
   SELECT * FROM blessings_foundation.contact_messages;
   ```

### Test 3: Test REST APIs with cURL or Browser
- Test Programs:
  ```bash
  curl http://localhost:8080/api/programs
  ```
- Test Events:
  ```bash
  curl http://localhost:8080/api/events
  ```
