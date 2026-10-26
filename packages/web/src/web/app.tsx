/**
 * Racine de l'application : fournisseurs, routage multilingue.
 * - Français : URL sans préfixe (/produits)
 * - Anglais  : /en/produits
 * - Arabe    : /ar/produits (RTL)
 * Les routes sont imbriquées (wouter `nest`) : les <Link href="/produits">
 * reçoivent automatiquement le préfixe de la langue courante.
 */
import { Route, Switch } from "wouter";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import { Provider } from "./components/provider";
import { LangProvider, type Lang } from "./lib/i18n";
import { OverlayProvider } from "./components/overlays";
import { Layout } from "./components/layout";
import Home from "./pages/index";
import About from "./pages/a-propos";
import Products from "./pages/produits";
import ProductPage from "./pages/produit";
import Plants from "./pages/plantes";
import PlantPage from "./pages/plante";
import Quality from "./pages/fabrication-qualite";
import Research from "./pages/recherche-innovation";
import Blog from "./pages/blog";
import Article from "./pages/article";
import Partners from "./pages/partenaires";
import Contact from "./pages/contact";
import { Legal, Privacy, Disclaimer } from "./pages/legal";
import NotFound from "./pages/not-found";

/** Toutes les pages d'une langue */
function SiteRoutes({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <OverlayProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/a-propos" component={About} />
            <Route path="/produits" component={Products} />
            <Route path="/produits/:slug" component={ProductPage} />
            <Route path="/plantes" component={Plants} />
            <Route path="/plantes/:slug" component={PlantPage} />
            <Route path="/fabrication-qualite" component={Quality} />
            <Route path="/recherche-innovation" component={Research} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={Article} />
            <Route path="/partenaires" component={Partners} />
            <Route path="/contact" component={Contact} />
            <Route path="/mentions-legales" component={Legal} />
            <Route path="/confidentialite" component={Privacy} />
            <Route path="/avertissement" component={Disclaimer} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </OverlayProvider>
    </LangProvider>
  );
}

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/en" nest>
          <SiteRoutes lang="en" />
        </Route>
        <Route path="/ar" nest>
          <SiteRoutes lang="ar" />
        </Route>
        <Route>
          <SiteRoutes lang="fr" />
        </Route>
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
