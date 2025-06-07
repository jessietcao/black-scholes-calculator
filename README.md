# black-scholes-calculator
A simple web app to calculate European call and put option prices using the Black-Scholes formula.  
Frontend: React  
Backend: Flask (Python)

## Local Deployment

### Backend
1. Open a terminal and navigate to the `backend` folder:
    ```
    cd backend
    ```

2. Create and activate a virtual environment:
    ```
    python -m venv venv
    ```
    - **Windows (cmd):**
      ```
      venv\Scripts\activate
      ```
    - **Windows (PowerShell):**
      ```
      .\venv\Scripts\Activate
      ```
    - **macOS/Linux:**
      ```
      source venv/bin/activate
      ```

3. Install dependencies:
    ```
    pip install -r requirements.txt
    ```

4. Run the Flask backend:
    ```
    python first-draft.py
    ```
    The backend will start on `http://localhost:5000`.

### Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder:
    ```
    cd frontend
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the React frontend:
    ```
    npm start
    ```
    The frontend will start on `http://localhost:3000`.

