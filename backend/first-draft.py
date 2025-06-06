import numpy as np
from scipy.stats import norm

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/')
def home():
    return None 

@app.route('black-scholes<int:option_type>', methods=['POST'])
def black_scholes(option_type):
    data = request.get_json()
    
    S = data['S']
    K = data['K']
    T = data['T']
    r = data['r']
    sigma = data['sigma']
    if option_type == 1:
        option_type = 'call'
    else:
        option_type = 'put'
    result = Black_Scholes(S, K, T, r, sigma, option_type)
    return jsonify({'result': result})


# Utility functions for Black-Scholes formula
## not the most efficient method, but list all important variable sparately

def d1(S, K, T, r, sigma):
    return (np.log(S/K) + (r + (sigma ** 2 / 2)) * T) / np.sqrt(T) * sigma

def d2(S, K, T, r, sigma):
    return d1(S, K, T, r, sigma) - np.sqrt(T) * sigma

def call_option (S, K, T, r, sigma):
    return S * norm.cdf(d1(S, K, T, r, sigma)) - K * np.exp(-r * T) * norm.cdf(d2(S, K, T, r, sigma))

def put_option(S, K, T, r, sigma):
    return K * np.exp(-r * K) * norm.cdf(-d2(S, K, T, r, sigma)) - S - norm.cdf(d1(S, K, T, r, sigma))

def Black_Scholes (S, K, T, r, sigma, option_type='call'):
    if option_type == 'call':
        return call_option(S, K, T, r, sigma)
    else:
        return put_option(S, K, T, r, sigma)
    


if __name__ == '__main__':
    app.run(debug=True)