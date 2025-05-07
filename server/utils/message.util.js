export const message = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Server Status</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #121212, #000000);
      color: white;
    }

    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 40px 60px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .status {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .icon {
      font-size: 4rem;
      color: #00ff9c;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🟢</div>
    <div class="status">Server is running...</div>
  </div>
</body>
</html>
`