from app.models import db, Photo

def seed_photos():

    # natgeo************************************************************************
    photo1 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo01.jpeg', user_id=2, post_id=1)
    photo2 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo02.jpeg', user_id=2, post_id=2)
    photo3 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo03.jpeg', user_id=2, post_id=3)
    photo4 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo04.jpeg', user_id=2, post_id=4)
    photo5 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo05.jpeg', user_id=2, post_id=5)
    photo6 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo06.jpeg', user_id=2, post_id=6)
    photo7 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo07.jpeg', user_id=2, post_id=7)
    photo8 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo08.jpeg', user_id=2, post_id=8)
    photo9 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo09.jpeg', user_id=2, post_id=9)
    photo10 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo10.jpeg', user_id=2, post_id=10)
    photo11 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo11.jpeg', user_id=2, post_id=11)
    photo12 = Photo(
        url='https://instagramme415.s3.us-west-1.amazonaws.com/photo12.jpeg', user_id=2, post_id=12)

    #**********************************NASA**************************************

    photo13 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo13.jpeg', user_id=3, post_id=13)
    photo14= Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo14.jpeg', user_id=3, post_id=14)
    photo15 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo15.jpeg', user_id=3, post_id=15)
    photo16 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo16.jpeg', user_id=3, post_id=16)
    photo17 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo17.jpeg', user_id=3, post_id=17)
    photo18 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo18.jpeg', user_id=3, post_id=18)
    photo19 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo19.jpeg', user_id=3, post_id=19)
    photo20 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo20.jpeg', user_id=3, post_id=20)
    photo21 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo21.jpeg', user_id=3, post_id=21)
    photo22 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo22.jpeg', user_id=3, post_id=22)
    photo23 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo23.jpeg', user_id=3, post_id=23)
    photo24 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo24.jpeg', user_id=3, post_id=24)

   #**********************************8th Damon**************************************
    photo25 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo25.jpeg', user_id=4, post_id=25)
    photo26 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo26.jpeg', user_id=4, post_id=26)
    photo27 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo27.jpeg', user_id=4, post_id=27)
    photo28 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo28.jpeg', user_id=4, post_id=28)
    photo29 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo29.jpeg', user_id=4, post_id=29)
    photo30 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo30.jpeg', user_id=4, post_id=30)
    photo31 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo31.jpeg', user_id=4, post_id=31)
    photo32 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo32.jpeg', user_id=4, post_id=32)
    photo33 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo33.jpeg', user_id=4, post_id=33)
    photo34 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo34.jpeg', user_id=4, post_id=34)
    photo35 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo35.jpeg', user_id=4, post_id=35)
    photo36 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo36.jpeg', user_id=4, post_id=36)

    # #**********************************arch_hunter**************************************

    photo37 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo37.jpeg', user_id=5, post_id=37)
    photo38 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo38.jpeg', user_id=5, post_id=38)
    photo39 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo39.jpeg', user_id=5, post_id=39)
    photo40 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo40.jpeg', user_id=5, post_id=40)
    photo41 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo41.jpeg', user_id=5, post_id=41)

# #new
    photo42 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo42.jpeg', user_id=5, post_id=42)


    photo43 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo43.jpeg', user_id=5, post_id=43)
    photo44 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo44.jpeg', user_id=5, post_id=44)
    photo45 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo45.jpeg', user_id=5, post_id=45)
    
# #new    
    photo46 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo46.jpeg', user_id=5, post_id=46)
    
    
    photo47 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo47.jpeg', user_id=5, post_id=47)
    photo48 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo48.jpeg', user_id=5, post_id=48)


#     #  #**********************************beaut_dest6**************************************
    photo49 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo49.jpeg', user_id=6, post_id=49)
    photo50 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo50.jpeg', user_id=6, post_id=50)
    photo51 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo51.jpeg', user_id=6, post_id=51)
    photo52 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo52.png', user_id=6, post_id=52)
    photo53 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo53.png', user_id=6, post_id=53)
    photo54 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo54.png', user_id=6, post_id=54)
    photo55 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo55.png', user_id=6, post_id=55)
    photo56 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo56.png', user_id=6, post_id=56)
    photo57 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo57.png', user_id=6, post_id=57)
    photo58 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo58.png', user_id=6, post_id=58)
    photo59 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo59.png', user_id=6, post_id=59)
    photo60 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo60.png', user_id=6, post_id=60)

#     #   #**********************************cory 7**************************************
    photo61 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo61.jpeg', user_id=7, post_id=61)
    photo62 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo62.jpeg', user_id=7, post_id=62)
    photo63 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo63.jpeg', user_id=7, post_id=63)
    photo64 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo64.jpeg', user_id=7, post_id=64)
    
#   #new  
    photo65 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo65.jpg', user_id=7, post_id=65)
    
    
    photo66 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo66.jpeg', user_id=7, post_id=66)
    photo67 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo67.jpeg', user_id=7, post_id=67)
    photo68 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo68.jpg', user_id=7, post_id=68)
    photo69 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo69.jpg', user_id=7, post_id=69)
    photo70 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo25.jpeg', user_id=7, post_id=70)
    photo71 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo25.jpeg', user_id=7, post_id=71)
    photo72 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo25.jpeg', user_id=7, post_id=72)

    #    #**********************************humz 8**************************************
    photo73 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo73.jpeg', user_id=8, post_id=73)
    photo74 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo74.jpeg', user_id=8, post_id=74)
    photo75 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo75.jpeg', user_id=8, post_id=75)
    photo76 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo76.jpeg', user_id=8, post_id=76)
    
# #new    
    photo77 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo77.jpeg', user_id=8, post_id=77)
    
    
    photo78 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo78.jpeg', user_id=8, post_id=78)
    photo79 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo79.jpeg', user_id=8, post_id=79)
    photo80 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo80.jpeg', user_id=8, post_id=80)
    
# #new    
    photo81 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo81.jpeg', user_id=8, post_id=81)
    
    
    photo82 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo82.jpeg', user_id=8, post_id=82)
    photo83 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo83.jpeg', user_id=8, post_id=83)
    photo84 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo84.jpeg', user_id=8, post_id=84)

        #**********************************photified 9**************************************
    photo85 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo85.jpeg', user_id=9, post_id=85)
    photo86 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo86.jpeg', user_id=9, post_id=86)
    photo87 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo87.jpeg', user_id=9, post_id=87)
    photo88 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo88.jpeg', user_id=9, post_id=88)
    photo89 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo89.jpeg', user_id=9, post_id=89)
    
    
# #new
    photo90 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo90.jpeg', user_id=9, post_id=90)
    photo91 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo91.jpeg', user_id=9, post_id=91)
    
    
    
    photo92 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo92.jpeg', user_id=9, post_id=92)
    photo93 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo93.jpeg', user_id=9, post_id=93)
    photo94 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo94.jpeg', user_id=9, post_id=94)
    photo95 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo95.jpeg', user_id=9, post_id=95)
    photo96 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo96.jpeg', user_id=9, post_id=96)

#     #     #**********************************street_art 10**************************************
    photo97 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo97.jpeg', user_id=10, post_id=97)
    photo98 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo98.jpeg', user_id=10, post_id=98)
    photo99 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo99.jpeg', user_id=10, post_id=99)
    photo100 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo100.jpeg', user_id=10, post_id=100)
    photo101 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo101.jpeg', user_id=10, post_id=101)
    photo102 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo102.jpeg', user_id=10, post_id=102)
    photo103 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo103.jpeg', user_id=10, post_id=103)
    photo104 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo104.jpeg', user_id=10, post_id=104)
    photo105 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo105.jpeg', user_id=10, post_id=105)
    photo106 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo106.jpeg', user_id=10, post_id=106)
    photo107 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo107.jpeg', user_id=10, post_id=107)
    photo108 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo108.jpeg', user_id=10, post_id=108)

#     #     #**********************************toshi**************************************

    photo109 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo109.jpeg', user_id=11, post_id=109)
    photo110 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo110.jpeg', user_id=11, post_id=110)
    photo111 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo111.jpeg', user_id=11, post_id=111)
    photo112 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo112.jpeg', user_id=11, post_id=112)
    photo113 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo113.jpeg', user_id=11, post_id=113)
    photo114 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo114.jpeg', user_id=11, post_id=114)
    photo115 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo115.jpeg', user_id=11, post_id=115)
    photo116 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo116.jpeg', user_id=11, post_id=116)
    photo117 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo117.jpeg', user_id=11, post_id=117)
    photo118 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo118.jpeg', user_id=11, post_id=118)
    photo119 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo119.jpeg', user_id=11, post_id=119)
    photo120 = Photo(
    url='https://instagramme415.s3.us-west-1.amazonaws.com/photo120.jpeg', user_id=11, post_id=120)

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
    db.session.add(photo13)
    db.session.add(photo14)
    db.session.add(photo15)
    db.session.add(photo16)
    db.session.add(photo17)
    db.session.add(photo18)
    db.session.add(photo19)
    db.session.add(photo20)
    db.session.add(photo21)
    db.session.add(photo22)
    db.session.add(photo23)
    db.session.add(photo24)
    db.session.add(photo25)
    db.session.add(photo26)
    db.session.add(photo27)
    db.session.add(photo28)
    db.session.add(photo29)
    db.session.add(photo30)
    db.session.add(photo31)
    db.session.add(photo32)
    db.session.add(photo33)
    db.session.add(photo34)
    db.session.add(photo35)
    db.session.add(photo36)
    db.session.add(photo37)
    db.session.add(photo38)
    db.session.add(photo39)
    db.session.add(photo40)
    db.session.add(photo41)
    db.session.add(photo42)
    db.session.add(photo43)
    db.session.add(photo44)
    db.session.add(photo45)
    db.session.add(photo46)
    db.session.add(photo47)
    db.session.add(photo48)
    db.session.add(photo49)
    db.session.add(photo50)
    db.session.add(photo51)
    db.session.add(photo52)
    db.session.add(photo53)
    db.session.add(photo54)
    db.session.add(photo55)
    db.session.add(photo56)
    db.session.add(photo57)
    db.session.add(photo58)
    db.session.add(photo59)
    db.session.add(photo60)
    db.session.add(photo61)
    db.session.add(photo62)
    db.session.add(photo63)
    db.session.add(photo64)
    db.session.add(photo65)
    db.session.add(photo66)
    db.session.add(photo67)
    db.session.add(photo68)
    db.session.add(photo69)
    db.session.add(photo70)
    db.session.add(photo71)
    db.session.add(photo72)
    db.session.add(photo73)
    db.session.add(photo74)
    db.session.add(photo75)
    db.session.add(photo76)
    db.session.add(photo77)
    db.session.add(photo78)
    db.session.add(photo79)
    db.session.add(photo80)
    db.session.add(photo81)
    db.session.add(photo82)
    db.session.add(photo83)
    db.session.add(photo84)
    db.session.add(photo85)
    db.session.add(photo86)
    db.session.add(photo87)
    db.session.add(photo88)
    db.session.add(photo89)
    db.session.add(photo90)
    db.session.add(photo91)
    db.session.add(photo92)
    db.session.add(photo93)
    db.session.add(photo94)
    db.session.add(photo95)
    db.session.add(photo96)
    db.session.add(photo97)
    db.session.add(photo98)
    db.session.add(photo99)
    db.session.add(photo100)
    db.session.add(photo101)
    db.session.add(photo102)
    db.session.add(photo103)
    db.session.add(photo104)
    db.session.add(photo105)
    db.session.add(photo106)
    db.session.add(photo107)
    db.session.add(photo108)
    db.session.add(photo109)
    db.session.add(photo110)
    db.session.add(photo111)
    db.session.add(photo112)
    db.session.add(photo113)
    db.session.add(photo114)
    db.session.add(photo115)
    db.session.add(photo116)
    db.session.add(photo117)
    db.session.add(photo118)
    db.session.add(photo119)
    db.session.add(photo120)



    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
