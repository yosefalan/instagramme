from wtforms import StringField, IntegerField, SubmitField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

class PostForm(FlaskForm):

	user_id=IntegerField("user_id", validators=[DataRequired()])
	description=StringField("description", validators=[DataRequired()])
	url=StringField("url", validators=[DataRequired()])
	submit=SubmitField("submit")
