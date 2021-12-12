from app.models import db, User



# Adds a demo user, you can add other users here if you want
def seed_users():
    f1 = User(
        followed=2, follower=1)
    f2 = User(
        followed=3, follower=1)
    f3 = User(
        followed=4, follower=1)
    f4 = User(
        followed=3, follower=2)
    f5 = User(
        followed=4, follower=2)
    f6 = User(
        followed=2, follower=1)
    f7 = User(
        followed=3, follower=1)
    f8 = User(
        followed=4, follower=1)
    f9 = User(
        followed=3, follower=2)
    f10 = User(
        followed=4, follower=2)

    db.session.add(f1)
    db.session.add(f2)
    db.session.add(f3)
    db.session.add(f4)
    db.session.add(f5)
    db.session.add(f6)
    db.session.add(f7)
    db.session.add(f8)
    db.session.add(f9)
    db.session.add(f10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
