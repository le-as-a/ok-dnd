from app.models import db, Questionnaire

def seed_questionnaires():
    demo = Questionnaire(
        exp_lvl=3,
        themes='Puzzles, Exploration',
        background="This is the demo user's questionnaire.",
        user_id=1
    )

    db.session.add(demo)
    db.session.commit()

def undo_questionnaires():
    db.session.execute('TRUNCATE questionnaires RESTART IDENTITY CASCADE;')
    db.session.commit()