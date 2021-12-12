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
        username='architecture_hunter', email='architecture_hunter@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/Screenshot+2021-12-11+161959.png', password='password')
    u7 = User(
        username='coryrichards', email='coryrichards@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/coryrichards_160305831_460242368407794_6869638752963182742_n.jpg', password='password')
    u8 = User(
        username='humzadeus', email='humzadeus@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/humzadeas_199336949_323802005811514_6532429867704456145_n.jpg', password='password')
    u9 = User(
        username='photified', email='photified@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/photified_13712793_521884364674120_1031212724_a.jpg', password='password')
    u10 = User(
        username='streetart', email='streetart@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/streetart_47693045_138353037100636_8955888861003644928_n.jpg', password='password')
    u11 = User(
        username='tobishinobi', email='tobishinobi@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/tobishinobi_58950168_338527316861296_1427657913853280256_n.jpg', password='password')
    u6 = User(
        username='beatifuldestinations', email='beatifuldestinations@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/beautifuldestinations_70407954_391397441514568_6341081271908696064_n.jpg', password='password')

#   u5 = User(
#         username='coryrichards', email='coryrichards@mail.com', profile_image='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/profile_pics/coryrichards_160305831_460242368407794_6869638752963182742_n.jpg', password='password')




    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    db.session.add(u4)
    db.session.add(u5)
    db.session.add(u6)
    db.session.add(u7)
    db.session.add(u8)
    db.session.add(u9)
    db.session.add(u10)
    db.session.add(u11)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
