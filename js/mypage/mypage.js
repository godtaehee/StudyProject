window.addEventListener("load", function(){

    let profileModify = document.querySelector(".profile-modify");
    let isModify = false;

    profileModify.addEventListener("click", (e) => {
        let profileStatus = document.querySelector(".profile-status");

        if(!isModify){
            isModify = true;
            profileStatus.readOnly = false;
            /* 프로필 수정 이미지를 변경 */
            
        }
        else{
            isModify = false;
            profileStatus.readOnly = true;
            /* 프로필 수정 이미지를 변경 */

        }
    })
})