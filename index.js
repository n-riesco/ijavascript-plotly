/*
 * Copyright 2017 Nicolas Riesco
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * Module `ijavascript-plotly` is a wrapper for {@link https://plot.ly/|Plotly}.
 *
 * @module ijavascript-plotly
 *
 */
module.exports = Plotly;


/**
 * Create a Plotly plot.
 *
 * @function
 * @param {array}  data   Plotly array of traces
 * @param {object} layout Plotly layout
 * @param {object} [$$]   IJavascript cell or display (defaults to current cell)
 */
function Plotly(data, layout, $$) {
    $$ = $$ || global.$$;

    $$.mime({
        "application/vnd.plotly.v1+json": {
            data: data,
            layout: layout,
        },
    });
}
