from flask import Flask, render_template, url_for, request, jsonify, redirect
from flask_cors import CORS
import base64
import tensorflow as tf
import numpy as np
import io
from PIL import Image
from keras.preprocessing.image import img_to_array, load_img
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input, decode_predictions
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' #to prevent displaying the error for CPU capasity

# instantiate the app
app = Flask(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


def get_model():
    #load vgg16 model
    global model
    model = VGG16(include_top=True, weights='imagenet', input_tensor=None, input_shape=None, pooling=None, classes=1000)
    model._make_predict_function()
    print(" * Model loaded!")

print(" * Loading Keras model...")
get_model()



def model_predict(openedImage, model):

    # Preprocessing the image
    target_size=(224, 224)
    resizedImage = openedImage.resize(target_size)
    imageArray = img_to_array(resizedImage)
    expandedImage = np.expand_dims(imageArray, axis=0)
    procesedImage = preprocess_input(expandedImage, mode='caffe')

    preds = model.predict(procesedImage)
    return preds



@app.route('/')
@app.route('/home')
def hello_world():
    return render_template('home.html', title='Home')



@app.route('/predict', methods=['POST'])
def predict():
    
    #get the image from the post request and open it with pillow
    picture = request.form.get("content").split(",")[1]
    decoded = base64.b64decode(picture)
    image = Image.open(io.BytesIO(decoded)).convert("RGB")

    # Make prediction
    preds = model_predict(image, model)

    # Process your result for human
    # pred_class = preds.argmax(axis=-1)            # Simple argmax
    pred_class = decode_predictions(preds, top=1)   # ImageNet Decode
    result = str(pred_class[0][0][1])               # Convert to string
    return (result)

if __name__ == '__main__':
    app.run(debug=True) #runs in debug mode if runs from the main py app file
