from app.models import db, User
import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', user_name='Demo', email='demo@aa.io', password='password', created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())
    marnie = User(
        first_name='Marnie', last_name='Marnerson', user_name='marnie', email='marnie@aa.io', password='password', created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())
    bobbie = User(
        first_name='Bobbie', last_name='Bobberson', user_name='bobbie', email='bobbie@aa.io', password='password', created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
