/* ===========================================================
   Presentation fixes for the generated PerturbNMF reports.

   The pipeline emits Plotly figures with fixed margins, which clips
   long categorical tick labels (GO terms, condition names) and axis
   titles. Turning on Plotly's `automargin` lets each axis reserve the
   space its labels actually need, and a resize pass refits every
   figure to the grid in site-overrides.css.

   Purely visual: no data or figure values are altered.
   =========================================================== */
(function () {
  'use strict';

  function enhance() {
    if (typeof Plotly === 'undefined') return;

    var plots = document.querySelectorAll('.js-plotly-plot');

    plots.forEach(function (el) {
      try {
        Plotly.relayout(el, {
          'xaxis.automargin': true,
          'yaxis.automargin': true,
          'margin.t': 30,
          'margin.b': 50
        });
      } catch (e) {
        /* a figure without a standard cartesian axis — leave it alone */
      }
    });

    resizeAll(plots);
  }

  function resizeAll(plots) {
    (plots || document.querySelectorAll('.js-plotly-plot')).forEach(function (el) {
      try { Plotly.Plots.resize(el); } catch (e) { /* ignore */ }
    });
  }

  function start() {
    // the inline figure scripts run after DOMContentLoaded, so give them a beat
    setTimeout(enhance, 300);
    setTimeout(enhance, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(function () { resizeAll(); }, 200);
  });
})();
