from app.models import db, Photo


# Adds a demo user, you can add other users here if you want
def seed_photos():

    # natgeo************************************************************************
    photo1 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122241.jpg', user_id=2, post_id=1)
    photo2 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122318.jpg', user_id=2, post_id=2)
    photo3 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122336.jpg', user_id=2, post_id=3)
    photo4 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122431.jpg', user_id=2, post_id=4)
    photo5 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122449.jpg', user_id=2, post_id=5)
    photo6 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122515.jpg', user_id=2, post_id=6)
    photo7 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122617.jpg', user_id=2, post_id=7)
    photo8 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122645.jpg', user_id=2, post_id=8)
    photo9 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122705.jpg', user_id=2, post_id=9)
    photo10 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122729.jpg', user_id=2, post_id=10)
    photo11 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122748.jpg', user_id=2, post_id=11)
    photo12 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122811.jpg', user_id=2, post_id=12)

    #**********************************NASA**************************************

    photo13 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/1.jpg', user_id=3, post_id=24)
    photo214= Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/2.jpg', user_id=3, post_id=24)
    photo15 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/3.jpg', user_id=3, post_id=24)
    photo16 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/4.jpg', user_id=3, post_id=24)
    photo17 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/5.jpg', user_id=3, post_id=24)
    photo18 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/6.jpg', user_id=3, post_id=24)
    photo19 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/7.jpg', user_id=3, post_id=24)
    photo20 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/8.jpg', user_id=3, post_id=24)
    photo21 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/8.jpg', user_id=3, post_id=24)
    photo22 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/10.jpg', user_id=3, post_id=24)
    photo23 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/11.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/12.jpg', user_id=3, post_id=24)

   #**********************************NASA**************************************




    #**********************************NASA**************************************




     #**********************************NASA**************************************





      #**********************************NASA**************************************





       #**********************************NASA**************************************






        #**********************************NASA**************************************

# photo8 = Photo(
#         url='', user_id=, post_id=)


    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(photo4)
    db.session.add(photo5)
    db.session.add(photo6)
    db.session.add(photo7)
    db.session.add(photo8)
    db.session.add(photo9)
    db.session.add(photo10)
    db.session.add(photo11)
    db.session.add(photo12)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
