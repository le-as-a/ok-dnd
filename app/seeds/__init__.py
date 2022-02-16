from flask.cli import AppGroup
from .users import seed_users, undo_users
from .questionnaires import seed_questionnaires, undo_questionnaires
from .campaigns import seed_campaigns, undo_campaigns

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_questionnaires()
    seed_campaigns()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_questionnaires()
    undo_campaigns()
    # Add other undo functions here
