import { useDispatch } from "react-redux";
import { login } from "../store/session";

export const createUserErrors = (username, email, password, repeatPassword) => async () => {
    const dispatch = useDispatch();
    const errors = [];
    const emailExists = await dispatch(login(email, password));

    if (username.length <= 3) {
        errors.push("Username must be more than 3 characters.");
    }
    if (emailExists) {
        errors.push("This email already exists. Please try another.");
        
    } else if (email.length <= 3) {
        errors.push("Your email must contain more than 3 characters.");
    } else if (email.includes('@')) {
        errors.push("Email is invalid. Please try again.");
    }
    if (password.length <= 3) {
        errors.push("Password must be more than 3 characters");
    } else if (password !== repeatPassword) {
        errors.push("Passwords must match.");
    }

    return errors;
}

export const campaignErrors = ({ name, about, player_max, exp_req, themes }) => {
    const errors = [];

    if (name.length <= 3) {
        errors.push("Name must be longer than 3 characters.");
    }
    if (about.length === 0 || about.length <= 3) {
        errors.push("Details can't be empty or less than 3 characters.");
    }
    if (player_max > 8 || player_max < 1) {
        errors.push("The max amount of players a campaign can hold is between 1-8.");
    }
    if (exp_req > 3 || exp_req < 1) {
        errors.push("The experience required can only be levels 1-3.");
    }
    if (themes.length === 0) {
        errors.push("You must include at least 1 theme in your preferences.");
    }

    return errors;
}

export const preferenceErrors = ({ exp_lvl, themes }) => {
    const errors = {};

    if (exp_lvl > 3 || exp_lvl < 1) {
        errors['exp_lvl'] = "Your experience level must be between 1-3.";
    }
    if (themes.length === 0) {
        errors['themes'] = "You must have at least one theme in your preferences.";
    }

    return errors;
}