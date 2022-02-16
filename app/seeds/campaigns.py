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
    others = [
        Campaign(
            name='Adventures in Fiara',
            about='Fiara has been a safe haven for all non-humanoids for a thousand years...',
            player_max=6,
            exp_req=1,
            themes="Exploration, Story",
            user_id=1
        ),
        Campaign(
            name='Heroes of the Orient',
            about="The emporer won the war against the Shinsai, but conflict will continue.",
            player_max=5,
            exp_req=2,
            themes="Combat, Estate Management",
            user_id=2
        ),
        Campaign(
            name="Story of the Origin",
            about="Heroes from a damned world enter a new one... perhaps to save it.",
            player_max=4,
            exp_req=2,
            themes="Story, Combat",
            user_id=3
        )
    ]
    db.session.add(demo)
    db.session.add_all(others)
    db.session.commit()

def undo_campaigns():
    db.session.execute('TRUNCATE campaigns RESTART IDENTITY CASCADE;')
    db.session.commit()