/* Throw exceptions and don't silently catch them (Angular's default) */
angular.module('exceptionOverride', []).factory('$exceptionHandler', function () {
    return function (exception, cause) {
        exception.message += ' (caused by "' + cause + '")';
        throw exception;
    };
});
angular.bootstrap(document.querySelector('html'), ['exceptionOverride']);
