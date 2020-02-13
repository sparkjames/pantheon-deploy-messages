'use strict';

try {
    const commitMessages = Array.from( document.querySelectorAll('.c-commit-log__message') );
    const deployLogInput = document.querySelectorAll('.deploy-log-input');

    if( commitMessages.length && deployLogInput.length && !deployLogInput[0].value ){

        let newMessage = '';
        newMessage += commitMessages.map( message => '- ' + message.innerText + '\r\n' );

        if( newMessage ){
            deployLogInput[0].value = newMessage;
        }

    }

}
catch(e){
    console.log("Pantheon Commit Deploy Message error:");
    console.log(e);
}
