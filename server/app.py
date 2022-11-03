from flask import Flask, render_template, send_from_directory
from flask import request
import os, json
from crypto.ext_bin_gcd import ext_bin_gcd
from crypto.bin_gcd import bin_gcd
from crypto.karatsuba import karatsuba_steps

app = Flask(__name__, static_folder='build', static_url_path='/', template_folder="build")


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/bin_gcd', methods=["POST"])
def bin_gcd_route():
    if request.method == 'POST':
        response = request.get_json()
        a = response['A']
        b = response['B']
        return json.dumps(bin_gcd(a, b))
    # return render_template("index.html")


if __name__ == '__main__':
    app.run()