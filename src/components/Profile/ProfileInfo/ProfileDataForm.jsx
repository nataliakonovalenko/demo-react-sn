import React, {useState} from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save changes</button>
            <div>
                <b>Full name:</b>
                {createField("Full Name", "fullName", Input, [])}
            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
                {createField("About Me", "aboutMe", Textarea, [])}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b>My proffessional skills:</b>
                {createField("My proffessional skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b>Contacts:</b>
               {/* {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}*/}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;