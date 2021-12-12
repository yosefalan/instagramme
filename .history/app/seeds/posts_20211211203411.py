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
        user_id=1, description="""A lion in Uganda’s Queen Elizabeth National Park grips the trunk of a large fever tree. Lions in this part of Africa have a unique habit of climbing large fig, acacia, and euphorbia trees, a cultural behavior that's common across the prides. Every day around 7 in the morning, the prides find a tree and climb. The cited reasons for this behavior include increasing their view of the landscape to escaping biting flies! If you think of a better one, leave a comment.
        """)
    p5 = Post(
        user_id=1, description="""A basking shark cruises along the west coast of Scotland. After locating a plankton patch, this giant opened its mouth and blasted right through it. The white gill arches contain rakers—structures that snag plankton from water passing through its mouth. Unlike many other species of filter feeder able to pump water through gill rakers, basking sharks feed passively. This means they must swim to eat. Given their size, they need to do a lot of eating—and therefore a lot of swimming. It’s estimated they can filter two million liters (500,000 gallons) of water per hour!
        """)
    p6 = Post(
        user_id=1, description="""A hike to the ice caves of Longyearbreen, a glacier in Svalbard, Norway, feels like time travel. The air bubbles trapped in this ice contains air from a thousand years ago. Due to climate change, Svalbard's glaciers lost their protection during the 1980s and have been melting ever since. Let’s act to protect this delicate Arctic environment—and our future.""")
    p7 = Post(
        user_id=1, description="""""")

        """)
    p8 = Post(
        user_id=1, description="""""")

        """)
    p9 = Post(
        user_id=1, description="""""")

        """)
    p10 = Post(
        user_id=1, description="""""")

        """)
    p11 = Post(
        user_id=1, description="""""")

        """)
    p12 = Post(
        user_id=1, description="""""")

        """)



    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)
    db.session.add(p7)
    db.session.add(p8)
    db.session.add(p9)
    db.session.add(p10)
    db.session.add(p11)
    db.session.add(p12)
    db.session.add(p13)
    db.session.add(p14)
    db.session.add(p15)
    db.session.add(p16)
    db.session.add(p17)
    db.session.add(p18)
    db.session.add(p19)
    db.session.add(p20)
    db.session.add(p21)
    db.session.add(p22)
    db.session.add(p23)
    db.session.add(p24)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
