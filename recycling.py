from flask import Flask, render_template, url_for
from flask_cors import CORS

# instantiate the app
app = Flask(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/')
@app.route('/home')
def hello_world():
    return render_template('home.html', title='Home')


def inti(value):
    if (value == "yes"):
        print('hello')


if __name__ == '__main__':
    app.run(debug=True)
