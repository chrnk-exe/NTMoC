from flask import Flask, render_template, send_from_directory
import os
from crypto.ext_bin_gcd import ext_bin_gcd

app = Flask(__name__, static_folder='build', static_url_path='/', template_folder="build")


@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()