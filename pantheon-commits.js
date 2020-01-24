let new_commit_messages = document.querySelectorAll('.c-commit-log__message');
let deploy_log_message = '';

for( i=0; i<new_commit_messages.length; i++ ){

    if( undefined !== new_commit_messages[i].innerText ){
        deploy_log_message += '- ' + new_commit_messages[i].innerText;
    }

}

if( deploy_log_message ){
    document.querySelectorAll('.deploy-log-input')[0].value = deploy_log_message;
}
