"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./actions";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await loginAction(password);
      if (result.success) {
        router.push("/admin");
      } else {
        setError(result.error || "Erreur de connexion");
      }
    } catch (err) {
      setError("Une erreur est survenue");
    } finally {
      if (!error) setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-border">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-2xl font-extrabold text-nav text-center mb-2">Administration</h1>
        <p className="text-muted-foreground text-sm text-center mb-8">
          Veuillez entrer le mot de passe pour accéder au tableau de bord.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-nav block mb-2">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container border border-border rounded-xl px-4 py-3 text-nav focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
              placeholder="••••••••"
              disabled={loading}
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center h-[52px]"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Se connecter"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
