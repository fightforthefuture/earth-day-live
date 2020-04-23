(function(e, t){
  e.actBlueConfig = {
    styleSheetHref: "https://stage.earthdaylive2020.org/donate/main.css",
    onContribute: function(contribution) {
      t.getElementById('act-blue-token').style.display = 'none'
      t.getElementById('act-blue-thanks').style.display = 'block'
    }
  };
})(window, document);
