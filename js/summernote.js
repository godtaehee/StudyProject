(() => {
        const boldBtn = document.querySelector('.bold-btn');
        const styleBtn = document.querySelector('.style-btn');
        const styleList = document.querySelector('.style-list');
        boldBtn.addEventListener('click', bold);


        /* style-Btn */
        styleBtn.addEventListener('click',() => {
            if(styleList.classList.contains('hide')){
                styleList.classList.remove('hide');
                styleList.classList.add('show');
            }else if(styleList.classList.contains('show')){
                styleList.classList.remove('show');
                styleList.classList.add('hide');
            }
        });


        styleList.addEventListener('click', (e) => {
            const dataVal = e.target.parentNode.dataset.value;
            const element = document.createElement(dataVal);
            console.log(dataVal);
            window.getSelection().getRangeAt(0).surroundContents(element);
            console.log(e.target.parentNode);
        });


        function bold(){
            const boldElem = document.createElement('b');
            window.getSelection().getRangeAt(0).surroundContents(boldElem);
        }
    }
)();