from app.models import db, Photo


# Adds a demo user, you can add other users here if you want
def seed_photos():
    photo1 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122241.jpg', user_id=2, post_id=1)
    photo2 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122318.jpg', user_id=2, post_id=2)
    photo3 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122336.jpg', user_id=2, post_id=3)
    photo4 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122318.jpg', user_id=1, post_id=4)

    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(photo4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
