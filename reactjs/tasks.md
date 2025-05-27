## 🟩 **30-Day ReactJS Basics Practice Plan**

**Tools Required:**

- Code editor (e.g., VS Code)
- Node.js & npm
- React via `create-react-app` or Vite

---

### 🔷 **Week 1: Getting Started & JSX Fundamentals**

1. **Set Up a React App**
    
    🔸 Use `create-react-app` or Vite to scaffold a basic app.
    
    🔸 Create `HelloWorld` component and render it.
    
2. **JSX Syntax Practice**
    
    🔸 Create a component that returns a styled HTML structure using JSX.
    
3. **Props in Components**
    
    🔸 Pass props to a `UserCard` component and display dynamic data.
    
4. **Props Children**
    
    🔸 Create a reusable `Card` component using `props.children`.
    
5. **Functional Components Breakdown**
    
    🔸 Convert multiple JSX blocks into reusable components.
    
6. **Inline Styling and ClassName**
    
    🔸 Apply both inline styles and CSS class-based styles.
    
7. **Theory Day: Virtual DOM & How React Works**
    
    🔸 Cover reconciliation, component lifecycle (basic), and JSX vs HTML.
    

---

### 🔷 **Week 2: State, Events, and Conditional Rendering**

1. **useState Hook — Counter App**
    
    🔸 Create a simple counter using `useState`.
    
2. **Handling Events in React**
    
    🔸 Create a button that toggles between two messages.
    
3. **Conditional Rendering**
    
    🔸 Show/hide a div using state and conditional logic (`&&`, ternary).
    
4. **Forms and Inputs**
    
    🔸 Build a basic form capturing user input (name, email).
    
5. **Two-Way Binding in Forms**
    
    🔸 Use controlled components to manage form state.
    
6. **Handling Multiple Inputs with One State Object**
    
    🔸 Create a form with multiple fields using one state object.
    
7. **Theory Day: React Component Lifecycle Overview**
    
    🔸 Discuss component mounting, updating, unmounting.
    

---

### 🔷 **Week 3: Lists, Keys, and Basic Hooks**

1. **Rendering Lists**
    
    🔸 Map over an array and render a list of items (e.g., todo items).
    
2. **Using Keys in Lists**
    
    🔸 Explore what happens without keys vs with proper keys.
    
3. **Adding Items to a List (Immutable Updates)**
    
    🔸 Build a list where users can add items with a form.
    
4. **Deleting and Filtering Items**
    
    🔸 Add delete buttons and remove items from the list.
    
5. **useEffect Introduction**
    
    🔸 Log a message on component mount; optionally fetch dummy data.
    
6. **Component Reusability & Props Composition**
    
    🔸 Create `ProductCard` or `UserCard` components with reusable layout.
    
7. **Theory Day: React Render Cycle & useState vs useRef (intro)**

---

### 🔷 **Week 4: Project & Simple Routing**

1. **Component Folder Structure**
    
    🔸 Organize components, styles, and assets in a scalable structure.
    
2. **Simple Project: Todo List**
    
    🔸 Create a full-featured todo list (add, remove, filter, local state only).
    
3. **Basic Routing with `react-router-dom`**
    
    🔸 Create 3 pages: Home, About, Contact with links and routes.
    
4. **Passing Data via Route Params & Query Strings**
    
    🔸 Create dynamic user profile pages via `/:id` route.
    
5. **Simple Global State with Lifting State Up**
    
    🔸 Share state between sibling components through a parent.
    
6. **Custom Hooks (Basic)**
    
    🔸 Write a custom hook like `useToggle` or `useLocalStorage`.
    
7. **Theory Day: Declarative UI, One-Way Data Flow, & Best Practices**
8. **Refactor App with Clean Code Practices**
    
    🔸 Break components into smaller units and use props effectively.
    
9. **Final Mini Project: User Directory App**
    
    🔸 Pages:
    
- Home → list of users
- View → individual user
- Add → form to add user
- Bonus: Persist state in `localStorage`

---

### ✅ Bonus Add-Ons

- Try building with **TypeScript** (`.tsx`)
- Use **Vite** instead of CRA for faster dev
- Add **PropTypes** or TypeScript types for validation
- Use **React Developer Tools** browser extension