(function() {
    var buttonElement = document.querySelector("a[data-url^='github-mac://']");

    if ( buttonElement != null ) {
        buttonElement.href = buttonElement.getAttribute("data-url").replace('https:\/\/github.com/', 'git@github.com:');
    }
}());