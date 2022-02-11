from app.models import db, User



# Adds a demo user, you can add other users here if you want
def seed_users():
    u1 = User(
        username='Demo', email='demo@aa.io', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user01.jpeg', password='password')
    u2 = User(
        username='natgeo', email='natgeo@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user02.jpeg', password='password')
    u3 = User(
        username='nasa', email='nasa@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user03.jpeg', password='password')
    # u4 = User(
    #     username='8thdamon', email='8thdamon@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user04.jpeg', password='password')
    # u5 = User(
    #     username='architecture_hunter', email='architecture_hunter@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user05.png', password='password')
    # u6 = User(
    #     username='beautifuldestinations', email='beautifuldestinations@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user06.jpeg', password='password')
    # u7 = User(
    #     username='coryrichards', email='coryrichards@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user07.jpeg', password='password')
    # u8 = User(
    #     username='humzadeus', email='humzadeus@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user08.jpeg', password='password')
    # u9 = User(
    #     username='photified', email='photified@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user09.jpeg', password='password')
    # u10 = User(
    #     username='streetart', email='streetart@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user10.jpeg', password='password')
    # u11 = User(
    #     username='tobishinobi', email='tobishinobi@mail.com', profile_image='https://instagramme415.s3.us-west-1.amazonaws.com/user11.jpeg', password='password')






    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    # db.session.add(u4)
    # db.session.add(u5)
    # db.session.add(u6)
    # db.session.add(u7)
    # db.session.add(u8)
    # db.session.add(u9)
    # db.session.add(u10)
    # db.session.add(u11)

    db.session.commit()


    u1.following.append(u2)
    u1.following.append(u3)
    # u1.following.append(u4)
    # u1.following.append(u5)
    # u1.following.append(u6)
    # u1.followers.append(u3)
    # u1.followers.append(u4)
    # u1.followers.append(u7)
    # u1.followers.append(u8)
    # u1.followers.append(u9)

    u2.following.append(u3)
    # u2.following.append(u5)
    # u2.following.append(u7)
    # u2.following.append(u9)
    # u2.following.append(u10)

    u3.following.append(u1)
    u3.following.append(u2)
    # u3.following.append(u4)
    # u3.following.append(u5)
    # u3.following.append(u6)
    # u3.following.append(u7)
    # u3.following.append(u8)
    # u3.following.append(u9)
    # u3.following.append(u10)
    # u3.following.append(u11)

    # u4.following.append(u1)
    # u4.following.append(u3)
    # u4.following.append(u7)
    # u4.following.append(u9)
    # u4.following.append(u10)

    # u5.following.append(u3)
    # u5.following.append(u4)
    # u5.following.append(u6)
    # u5.following.append(u8)
    # u5.following.append(u10)
    # u5.following.append(u11)

    # u6.following.append(u2)
    # u6.following.append(u3)
    # u6.following.append(u7)
    # u6.following.append(u8)
    # u6.following.append(u9)
    # u6.following.append(u11)

    # u7.following.append(u1)
    # u7.following.append(u2)
    # u7.following.append(u3)
    # u7.following.append(u4)
    # u7.following.append(u6)
    # u7.following.append(u8)
    # u7.following.append(u9)
    # u7.following.append(u10)

    # u8.following.append(u2)
    # u8.following.append(u3)
    # u8.following.append(u5)
    # u8.following.append(u7)
    # u8.following.append(u9)
    # u8.following.append(u11)

    # u9.following.append(u1)
    # u9.following.append(u5)
    # u9.following.append(u6)
    # u9.following.append(u7)
    # u9.following.append(u10)
    # u9.following.append(u11)

    # u10.following.append(u1)
    # u10.following.append(u2)
    # u10.following.append(u3)
    # u10.following.append(u4)
    # u10.following.append(u5)
    # u10.following.append(u6)
    # u10.following.append(u7)
    # u10.following.append(u8)
    # u10.following.append(u9)
    # u10.following.append(u11)

    # u11.following.append(u1)
    # u11.following.append(u2)
    # u11.following.append(u3)
    # u11.following.append(u4)
    # u11.following.append(u5)
    # u11.following.append(u6)
    # u11.following.append(u7)
    # u11.following.append(u8)
    # u11.following.append(u9)
    # u11.following.append(u10)

    db.session.commit()


    


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
