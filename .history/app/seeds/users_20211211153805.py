from app.models import db, User



# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', profile_, password='password')
    natgeo = User(
        username='natgeo', email='natgeo@mail.com', password='password')
    nasa = User(
        username='NASA', email='nasa@mail.com', password='password')
    oneUser = User(
        username='OneUser', email='oneuser@mail.com', password='password')
    twoUser = User(
        username='TwoUser', email='twouser@mail.com', password='password')

    db.session.add(demo)
    db.session.add(natgeo)
    db.session.add(nasa)
    db.session.add(oneUser)
    db.session.add(twoUser)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
