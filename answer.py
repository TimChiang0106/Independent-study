import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()
import json
import random
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

import pickle
import pandas as pd
import numpy as np
import tensorflow as tf
import os
os.environ['TF_CPP_MIN_LOG_LEVE L'] = '2'

with open('intents-C.json',encoding="utf8") as json_data:
    intents = json.load(json_data)
data = pickle.load( open( "katana-assistant-data.pkl", "rb" ) )
words = data['words']
classes = data['classes']

global graph
graph = tf.compat.v1.get_default_graph ()

with open(f'katana-assistant-model.pkl', 'rb') as f:
    model = pickle.load(f)

def classify_local(sentence):
    ERROR_THRESHOLD = 0.25
    
    # generate probabilities from the model
    input_data = pd.DataFrame([bow(sentence, words)], dtype=float, index=['input'])
    results = model.predict([input_data])[0]
    # filter out predictions below a threshold, and provide intent index
    results = [[i,r] for i,r in enumerate(results) if r>ERROR_THRESHOLD]
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append((classes[r[0]], str(r[1])))
    # return tuple of intent and probability
    
    return return_list

def clean_up_sentence(sentence):
    # tokenize the pattern
    sentence_words = nltk.word_tokenize(sentence)
    # stem each word
    sentence_words = [stemmer.stem(word.lower()) for word in sentence_words]
   
    return sentence_words

# return bag of words array: 0 or 1 for each word in the bag that exists in the sentence
def bow(sentence, words, show_details=False):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words
    bag = [0]*len(words)  
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s: 
                bag[i] = 1
                if show_details:
                    print ("found in bag: %s" % w)
    print(sentence_words)
    return(np.array(bag))
ERROR_THRESHOLD = 0.25
def classify(sentence):
    # generate probabilities from the model
    p = bow(sentence, words)
    p = np.array([p])
    results = model.predict(p[:])[0]
    # filter out predictions below a threshold
    results = [[i,r] for i,r in enumerate(results) if r>ERROR_THRESHOLD]
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append((classes[r[0]], r[1]))
    # return tuple of intent and probability
    return return_list

def response(sentence, userID='123', show_details=False):
    results = classify(sentence)
    # if we have a classification then find the matching intent tag
    if results:
        # loop as long as there are matches to process
        while results:
            for i in intents['intents']:
                # find a tag matching the first result
                if i['tag'] == results[0][0]:
                    # a random response from the intent
                    return print(random.choice(i['responses']))

            results.pop(0)
response('明天的行程')  
