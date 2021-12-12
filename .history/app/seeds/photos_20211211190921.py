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
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/257893331_582764219476341_1586823667727359792_n.jpg', user_id=3, post_id=13)
    photo14 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/258995903_290810822943223_8548512272256129729_n.jpg', user_id=3, post_id=14)
    photo15 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/259714562_150299143987818_9022110161127680844_n.jpg', user_id=3, post_id=15)
    photo16 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/260825856_627576468281569_1977688749747307940_n.jpg', user_id=3, post_id=16)
    photo17 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/261105751_4347362052057383_717691107611346826_n.jpg', user_id=3, post_id=17)
    photo18 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/261125101_1033619717484138_8694233464070296481_n.jpg', user_id=3, post_id=18)
    photo19 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/262362992_1324564754650647_135936091752868875_n.jpg', user_id=3, post_id=19)
    photo20 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/263713334_1325058104591349_2646844913847280964_n.jpg', user_id=3, post_id=20)
    photo21 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/263871205_442938027268134_3664071965245975377_n.jpg', user_id=3, post_id=21)
    photo22 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_248699753_4350520851712746_136122035232266495_n.jpg', user_id=3, post_id=22)
    photo23 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_257794486_1206065673224493_8157411533182798130_n.jpg', user_id=3, post_id=23)
    photo24 = Photo(
        url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)


 #**********************************NASA**************************************
    photo25 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo26 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo27 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo28 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo29 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo2 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
    photo24 = Photo(
    url='https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/nasa_241698339_280602086901951_2643544708970367929_n.jpg', user_id=3, post_id=24)
https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/Nasa/1.jpg





  #**********************************NASA**************************************





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
