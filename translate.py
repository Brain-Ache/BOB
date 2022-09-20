# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request
from textblob import TextBlob
# creating a Flask app
app = Flask(__name__)

# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET', 'POST'])
def home():
	
    text=request.json
    # print(text['data'])
    word10=TextBlob(text['data'])
    tamil=word10.translate(from_lang='en',to='ta')
    print(tamil)

    # word5=TextBlob(u"இது நல்ல புத்தகமா")
    st = u"{}".format(tamil)
    word5=TextBlob(st)
    english=word5.translate(from_lang='ta',to='en')
    print(english)
    st = u"{}".format(tamil)
    english=u"{}".format(english)
    print(st)
    word1=TextBlob(text['data'])
    hindi=word1.translate(from_lang='en',to='hi')

    hindi=u"{}".format(hindi)
    return jsonify({"tamil":st,"english":english,"hindi":hindi})
    

# A simple function to calculate the square of a number
# the number to be squared is sent in the URL when we use GET
# on the terminal type: curl http://127.0.0.1:5000 / home / 10
# this returns 100 (square of 10)



# driver function
if __name__ == '__main__':

	app.run(debug = True)
