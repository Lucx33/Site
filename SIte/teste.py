from flask import Blueprint



views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("login.html")