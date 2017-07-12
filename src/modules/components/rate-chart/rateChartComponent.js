var rateChartView = require('./rateChartView.js');
var rateChartModel = require('./rateChartModel.js');

module.exports = function (config) {
    return new rateChartView({
        model: new rateChartModel(config),
    });
};