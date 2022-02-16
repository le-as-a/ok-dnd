from app.models import db, Campaign

def seed_campaigns():
    demo = Campaign(
        name='Example Campaign',
        about="This is an example campaign.",
        player_max=4,
        exp_req=3,
        themes="Puzzles, Mystery",
        user_id=1
    )
    db.session.add(demo)
    db.session.commit()

def undo_campaigns():
    db.session.execute('TRUNCATE campaigns RESTART IDENTITY CASCADE;')
    db.session.commit()