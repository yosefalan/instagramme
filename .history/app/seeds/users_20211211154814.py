from app.models import db, User



# Adds a demo user, you can add other users here if you want
def seed_users():
    u1 = User(
        username='Demo', email='demo@aa.io', profile_image='https://darebnb.s3.us-east-2.amazonaws.com/amigo.jpg', password='password')
    u2 = User(
        username='natgeo', email='natgeo@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/natgeo_95140556_594026277870211_4156802974091313152_n.jpg', password='password')
    u3 = User(
        username='NASA', email='nasa@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/nasa_29090066_159271188110124_1152068159029641216_n.jpg', password='password')
    u4 = User(
        username='8thdamon', email='8thdamon@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/8thdamon_44631416_1758020310991589_2015343799408001024_n.jpg', password='password')
    u5 = User(
        username='coryrichards', email='coryrichards@mail.com', profile_image='', password='password')

#  twoUser = User(
#         username='TwoUser', email='twouser@mail.com', profile_image='', password='password')


    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    db.session.add(u4)
    db.session.add(u5)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
