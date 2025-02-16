## 1. Setup
**Clone the Repo**:
   ```sh
   git clone https://github.com/your-repo/comp3133__101416601_assigment1.git
   cd comp3133__101416601_assigment1
   ```
**Install dependencies**:
   ```sh
   npm install
   ```
**Configure**:
   Add information to the `.env` file:
   ```sh
   PORT=4000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
**Run**:
   ```sh
   npm start
   ```

## 2. Endpoints

**Queries**
```
  login(username: String, email: String, password: String): String
  getAllEmployees: [Employee]
  searchEmployeeByEid(id: ID!): Employee
  searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
```

**Mutations**
```
  signup(username: String!, email: String!, password: String!): User
  addEmployee(input: EmployeeInput!): Employee
  updateEmployeeByEid(id: ID!, input: EmployeeInput!): Employee
  deleteEmployeeByEid(id: ID!): String
```


Access GraphQL Playground at: `http://localhost:4000/graphql` to test the api endpoints.

