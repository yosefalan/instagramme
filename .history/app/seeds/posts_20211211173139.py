from app.models import db, Post

# Adds a demo user, you can add other users here if you want
def seed_posts():

    p1 = Post(
        user_id=2, description="""There was something almost otherworldly about this vantage point on Round Island, Alaska—the rich green water, the fissures in the ancient rocks, the surfacing of walrus, like creatures from the moon. Pacific walrus are known to have rested on this island every summer for thousands of years, and it took millions more for them to evolve into the highly specialized, sensitive, Arctic clam-eater they are today.

        Contemplating the vast timescales of evolution often evokes, for me, a wonderful and comforting sense of insignificance. But it's also powerful motivation to work toward preserving the animals and ecosystems that have existed far back into deep time—which need our attention to survive into the future.""")

    p2 = Post(
        user_id=2, description="""Chile. This year ought to be the “super year” for nature, the one where we collectively agree on the unacceptable risk we have taken by becoming totally out of balance with nature. The path forward is simple, though it will take all of us working together for a better future. We need to protect at least 30% of land and ocean by 2030 in order to preserve biodiversity, address climate change, and support our growing population.""")

    p3 = Post(
        user_id=2, description="""Firefighters with Cal Fire conduct an operation to contain the Dixie fire south of Highway 44 in Lassen National Forest, on August 27. The fire started on July 13. At the time of this image, on October 2, it had burned roughly 965,000 acres (400,000 ha) and was 94% contained. Now it's fully secured. Shot on assignment with the help of a grant from the National Geographic Society.""")
    p4 = Post(
        user_id=1, description="""https://mamba-instagramme.s3.us-east-2.amazonaws.com/seed_photos/NatGeo/Screenshot+2021-12-06+122431.jpg""")

    p5 = Post(
        user_id=4, description="""OMG adorable!""")
    p6 = Post(
        user_id=5, description="""Cute Doggo"""
    )
    p7 = Post(
        user_id=5, description="""Happy Cat"""
    )
    p8 = Post(
        user_id=3, description="""Hobbit Kitties""")


    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)
    db.session.add(p7)
    db.session.add(p8)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
