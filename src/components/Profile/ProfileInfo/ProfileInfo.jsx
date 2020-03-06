import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-image.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo  = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.setLargeProfilePhoto(e.target.files[0]);
        }
    }

    let activateEditMode = () => {
        setEditMode(true);
    }

    return (
        <div>
            <div className={s.descriptonBlock}>
                <div className={s.profilePhoto}>
                    <img src={props.profile.photos.large || userPhoto} alt=""/>
                </div>
                {props.isOwner && <input onChange={onMainPhotoSelected} type="file" />}
                {editMode
                    ? <ProfileDataForm profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={activateEditMode} />
                }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div> <b>{contactTitle}:</b> {contactValue} </div>
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner &&  <button onClick={props.goToEditMode}>Edit profile</button>}
            <div>
                <b>Full name:</b>
                {props.profile.fullName}
            </div>
            <div>
                <b>About me:</b>
                {props.profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b>
                {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            { props.profile.lookingForAJob &&
                <div>
                    <b>My proffessional skills:</b>
                    {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

export default ProfileInfo;