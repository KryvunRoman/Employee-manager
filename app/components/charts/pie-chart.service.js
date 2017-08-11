(function () {
    'use strict';

    angular
        .module('app')
        .factory('chartService', ChartService);

    ChartService.$inject = [];

    function ChartService() {

        return {
            initChart: initChart
        };

        function initChart($element) {
            var ctrl = this;
            var chartWidth = 250;
            var chartHeight = chartWidth;
            var chartRadius = chartWidth / 2;
            var color = d3.scaleOrdinal().range(d3.schemeCategory20c);
            var dataObj = parseData(ctrl);

            var arc = d3.arc()
                .outerRadius(chartRadius - 10)
                .innerRadius(0);

            var labelArc = d3.arc()
                .outerRadius(chartRadius - 50)
                .innerRadius(chartRadius - 50);

            var pie = d3.pie().sort(null).value(function (d) {
                return d.value;
            });

            var svg = d3.select($element.find('svg')[0])
                .attr('width', chartWidth)
                .attr('height', chartHeight)
                .append('g')
                .attr('transform', 'translate(' + chartWidth / 2 + ',' + chartHeight / 2 + ')');

            var g = svg.selectAll('.arc')
                .data(pie(d3.entries(dataObj)))
                .enter().append('g')
                .attr('class', 'arc');

            g.append('path')
                .attr('d', arc)
                .style('fill', function (d) {
                    return color(d.data.key);
                });


            g.append('text')
                .attr('transform', function (d) {
                    return 'translate(' + labelArc.centroid(d) + ')';
                })
                .attr('dy', '.35em')
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text(function (d) {
                    return d.data.key;
                });
        }

        function parseData(ctrl) {
            return ctrl.chartData.reduce(function (dataObj, el) {
                var key = el[ctrl.key];
                var value = dataObj[key] = dataObj[key] ? (dataObj[key] + 1) : 1;

                dataObj[key] = value;

                return dataObj;
            }, {});
        }
    }

})();