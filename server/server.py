from flask import Flask, jsonify
from flask_cors import CORS
import os
import shutil
from ultralytics import YOLO
import cv2
import json

app = Flask(__name__)
CORS(app)

# Initialize and load the model
model = YOLO('yolov8m.pt') 

print("Model Task Type:", model.model.task)

# Define directories
BASE_DIR = os.getcwd()
PROCESS_DIR = os.path.join(BASE_DIR, 'process')
PROCESSING_DIR = os.path.join(BASE_DIR, 'processing')
DONE_DIR = os.path.join(BASE_DIR, 'done')

# Ensure necessary directories exist
for folder in [PROCESS_DIR, PROCESSING_DIR, DONE_DIR]:
    os.makedirs(folder, exist_ok=True)


@app.route("/api/get_result", methods=['POST'])
def get_result():
    # Check for any image to process
    images = [f for f in os.listdir(PROCESS_DIR) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    if not images:
        return jsonify({'status': 'No files to process'}), 404

    # Pick the first image
    image_file = images[0]
    src_path = os.path.join(PROCESS_DIR, image_file)
    processing_path = os.path.join(PROCESSING_DIR, image_file)

    # Move image to processing
    shutil.move(src_path, processing_path)

    try:
        # Run inference
        results = model(processing_path, conf=0.05)[0]
        print("Raw Boxes:", results.boxes)

        detections = []
        if hasattr(results, 'boxes') and results.boxes.data is not None:
            for box in results.boxes.data.tolist():
                x1, y1, x2, y2, score, class_id = box
                print(f"Detected Class: {class_id}, Confidence: {score}")
                if score >= 0.1:  # Lower threshold to 0.1 for testing
                    detections.append({
                        "bbox": [x1, y1, x2, y2],
                        "confidence": score,
                        "class_id": int(class_id),
                        "class_name": results.names[int(class_id)]
                    })

        # Save the result JSON
        done_image_path = os.path.join(DONE_DIR, image_file)
        result_json_path = os.path.splitext(done_image_path)[0] + '.json'

        shutil.move(processing_path, done_image_path)
        with open(result_json_path, 'w') as json_file:
            json.dump({"detections": detections}, json_file, indent=4)

        return jsonify({
            'status': 'success',
            'image': image_file,
            'detections': detections
        })

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
