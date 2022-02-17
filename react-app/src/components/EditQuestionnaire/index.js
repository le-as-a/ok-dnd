import './editquestionnaire.css';
import React, { useState } from 'react';
import { edit_questionnaire } from '../../store/questionnaire';
import { useDispatch } from 'react-redux';

const EditQ = ({user, questionnaire}) => {
    const dispatch = useDispatch();
    const userId = user?.id;
    const q = questionnaire
    const [exp, setExp] = useState(q?.exp_lvl);
    const [themes, setThemes] = useState(q?.themes);
    const [background, setBackground] = useState(q?.background);

    const onUpdate = async (e) => {
        e.preventDefault();
        const updated = {
            exp_lvl: exp,
            themes,
            background,
            user_id: userId
        };
        dispatch(edit_questionnaire(updated));
    }
}