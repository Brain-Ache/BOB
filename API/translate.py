from flask import Flask, jsonify, request
from textblob import TextBlob

app = Flask(__name__)


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
    





# driver function
if __name__ == '__main__':

	app.run(debug = True)
