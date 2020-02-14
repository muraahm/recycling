from flask import Flask, render_template, url_for, request, jsonify, redirect
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import base64

# instantiate the app
app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = '/Users/macbookpro/Documents/projects/recycling'

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/')
@app.route('/home')
def hello_world():
    return render_template('home.html', title='Home')


@app.route('/predict', methods=['POST'])
def predict():

    picture = request.form.get("content").split(",")[1]
    with open("clientimage.png", "wb") as f:
        f.write(base64.b64decode(picture))
    return "got picture"


if __name__ == '__main__':
    app.run(debug=True)
