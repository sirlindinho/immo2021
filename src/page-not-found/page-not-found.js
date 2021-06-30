// Neue Datei für Klasse PageNotFound
class PageNotFound {
  constructor(app) {
    this._app = app;
  }

  async show () { // Code vom Server Laden
    let html = await fetch ("page-not-found/page-not-found.html");
    let css = await fetch ("page-not-found/page-not-found.css");

    if (html.ok && css.ok){
      html = await html.text();
      css = await css.text();
    } else {
      console.error("Fehler beim Laden des HTML/CSS-Inhalts");
    }

    // Seite anzeigen

    let pageDom = document.createElement("div");
    pageDom.innerHTML = html;

    this._app.setPageTitle("Seite nicht gefunden");
    this._app.setPageCss(css);
    this._app.setPageHeader(pageDom.querySelector("header"));
    this._app.setPageContent(pageDom.querySelector("main"));


  }
}
