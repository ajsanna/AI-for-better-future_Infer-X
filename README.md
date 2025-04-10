# Welding Defect Object Detection using YOLOv8



Welcome to the Welding Defect Object Detection project! This project leverages the power of YOLOv8 to detect defects in welding images, providing a robust solution for quality assurance in manufacturing processes.

## 🚀 Features

- **Real-time Object Detection**: Utilizes YOLOv8m model for fast and accurate defect detection
- **Modern Web Interface**: Built with React 19 and Vite for a responsive user experience
- **RESTful API**: Flask-based server with CORS support for seamless integration
- **Automated Processing**: Handles image uploads, processing, and result generation
- **Confidence-based Detection**: Configurable confidence thresholds for precise defect identification
- **JSON Results**: Detailed detection results stored in JSON format

## 🛠️ Technical Stack

### Frontend
- React 19
- Vite 6.2.0
- ESLint 9.21.0
- TypeScript support

### Backend
- Flask
- YOLOv8m
- OpenCV
- Flask-CORS

## 📦 Installation

### Prerequisites
- Python 3.x
- Node.js
- npm

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/welding-defect-detection.git
   cd welding-defect-detection
   ```

2. **Set up the server**:
   ```bash
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. **Set up the client**:
   ```bash
   cd client
   npm install
   ```

## 🚀 Usage

### Development

1. **Start the client**:
   ```bash
   cd client
   npm run dev
   ```

2. **Start the server**:
   ```bash
   cd server
   python server.py
   ```

### Production

1. **Build the client**:
   ```bash
   cd client
   npm run build
   ```

2. **Run the server**:
   ```bash
   cd server
   python server.py
   ```

## 📝 API Endpoints

- **POST /api/get_result**: Process welding images and return detection results
  - Returns JSON with detections including bounding boxes, confidence scores, and class information

## 📁 Project Structure

```
.
├── client/                 # Frontend React application
│   ├── src/               # Source files
│   ├── public/            # Static assets
│   └── package.json       # Dependencies and scripts
├── server/                # Backend Flask application
│   ├── process/           # Image processing directory
│   ├── processing/        # Temporary processing directory
│   ├── done/              # Processed images directory
│   └── server.py          # Main server file
├── BestModels_SAVE_FOLDER/ # Trained model storage
└── yolov8m.pt             # YOLOv8 model weights
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
- [Flask](https://flask.palletsprojects.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) 