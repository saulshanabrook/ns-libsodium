var Observable = require("data/observable").Observable;
var Sodium = require('libsodium-wrappers-sumo');


function getMessage(time) {
    if (time) {
        return "It took " + time.toString();
    } else {
        return "Click button to time"
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.time = null;
    viewModel.message = getMessage(viewModel.time);

    viewModel.onTap = function() {
        this.time = 10;
        this.set("message", getMessage(this.time));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
