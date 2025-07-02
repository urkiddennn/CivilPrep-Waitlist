# Express Waitlist Backend

## Setup

1. Copy `.env.example` to `.env` and update with your MongoDB URI if needed:

```
MONGO_URI=mongodb://localhost:27017/waitlist
PORT=5000
```

2. Install dependencies (already done):
```
npm install
```

3. Run the server in development mode:
```
npm run dev
```

Or in production mode:
```
npm start
```

The server will listen on `/api/waitlist` for POST requests with `{ email }` in the JSON body.
