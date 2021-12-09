from wtforms import StringField, IntegerField, SubmitField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    post_id=IntegerField("post_id", validators=[DataRequired()])
    user_id=IntegerField("user_id", validators=[DataRequired()])
    content=StringField("content", validators=[DataRequired()])
    submit=SubmitField('Submit')
