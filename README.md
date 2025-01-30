# 🦸 HeroesApp - Angular CRUD with Standalone Components

This project is an advanced **Angular CRUD application** for managing heroes, built as part of an advanced Angular course. It features a **simulated backend** using `json-server` and is structured with **Standalone Components** instead of traditional modules.

## 🚀 Features
- **Standalone Components**: Transitioned from a modular approach to a fully standalone component architecture.
- **Angular Material & PrimeFlex**: Practiced UI design with Material components and flexible layouts using PrimeFlex.
- **Lazy Loading & Child Routes**: Optimized performance using child routes and lazy loading strategies.
- **Environment Variables**: Implemented different environment configurations.
- **Reactive Forms**: Used reactive forms for handling dynamic form validation and interactions.
- **Guards**: Implemented route guards for protected routes.

## 🛠 Tech Stack
- **Frontend**: Angular 15+ (Standalone Components, Lazy Loading, Angular Material, PrimeFlex)
- **Backend Simulation**: JSON Server (`json-server`)
- **State Management**: Reactive Forms, Route Guards

---

## 💻 Development Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adptCode/heroesApp.git
cd heroesApp
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Backend (JSON Server)
```bash
npm run backend
```

### 4️⃣ Start the Application
```bash
npm start
```
Or alternatively:
```bash
ng serve -o
```
This will open the application in your default browser.

---

## 🛡️ Route Protection & Guards
This application includes authentication guards to protect certain routes. Ensure you understand how to configure and implement guards in Angular before modifying them.

## 📂 Project Structure
```
heroesApp/
│── src/
│   ├── app/
│   │   ├── components/   # Standalone Components
│   │   ├── services/     # API calls & business logic
│   │   ├── guards/       # Route protection
│   │   ├── pages/        # Feature pages with Lazy Loading
│   ├── assets/           # Static files
│   ├── environments/     # Environment Variables
```

## 📜 License
This project is open-source and available under the **MIT License**.

🚀 **Happy coding!**
