import React from "react";
import s from "../ProfileInfo.module.css";
import AddAvatar from "../addAvatar/AddAvatar";



const ButtonsBlock = ({
                          userId,  isFollowed, followFromProfile,isOpen, setIsOpen, setEditPageMode,
                          unfollowFromProfile, isOwner, savePhoto, errorMessage,
                          addPhotoError, setProfileEditMode, profileEditMode
                      }) => {

    return (
        <>

            {(isOwner)
                ? <div>
                    {!profileEditMode
                        ? <div className={s.editPage}>
                            <button onClick={() => setProfileEditMode(true)}>Edit page</button>
                        </div>
                        : <div className={s.editPageEditionMode}>
                            <button disabled={true}>Edition mode</button>
                        </div>

                    }

                    <div className={s.addPhoto}>
                        <button onClick={() => setIsOpen(true)}>Add photo</button>
                        <AddAvatar isOpen={isOpen} setIsOpen={setIsOpen} savePhoto={savePhoto}
                                   errorMessage={errorMessage} addPhotoError={addPhotoError}/>
                    </div>
                </div>
                : <div>
                    <div className={s.sendMessageButton}>
                        <button>Send message</button>
                    </div>
                    {isFollowed
                        ? <div className={s.isFollow}>
                            <button onClick={() => {
                                unfollowFromProfile(userId)
                            }}>Unfollow
                            </button>
                        </div>
                        : <div className={s.isNotFollow}>
                            <button onClick={() => {
                                followFromProfile(userId)
                            }}>Follow
                            </button>
                        </div>}
                </div>
            }

        </>
    )

}


export default ButtonsBlock