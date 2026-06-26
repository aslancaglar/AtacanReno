import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Oups ! Page introuvable
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg">
          La page que vous recherchez semble avoir été déplacée ou n'existe plus. 
          Ne vous inquiétez pas, vous pouvez retourner à l'accueil pour découvrir nos services.
        </p>
        <Link href="/">
          <Button className="btn-pill bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-bold flex items-center gap-2">
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
