import React, { useState } from "react";
import { User, Eye, EyeOff } from "lucide-react";
import Logo from "./assets/Logo.png";
import Fundo from "./assets/Fundo.jpeg";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex flex-col relative zoom-effect"
      style={{
        backgroundImage: `url(${Fundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <header className="relative p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <a href="https://m3par.com">
            <img src={Logo} alt="M3 Logo" className="h-12" />
          </a>
        </div>
        <div className="flex gap-6 text-[#546272]">
          <a
            href="#"
            className="hover:text-gray-600 transition-colors"
            style={{
              fontFamily: "Oswald, Manrope, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            LOG IN
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition-colors"
            style={{
              fontFamily: "Oswald, Manrope, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            ENGLISH
          </a>
        </div>
      </header>

      <main className="relative flex-1 flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 border-1 border-[#00000]">
          <h1
            className="text-[#546272] text-center mb-8"
            style={{
              fontFamily:
                "'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Entrar no site
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="relative mb-2">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-[#e5e7eb] rounded text-[#546272] placeholder-[#a4a4a4] focus:outline-none focus:border-[#546272] transition-colors"
                placeholder="Username or Email"
                style={{
                  fontFamily:
                    "'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              />
              <User
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c8c8c8] hover:text-[#546272] transition-colors"
                size={20}
              />
            </div>

            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-[#e5e7eb] rounded text-[#546272] placeholder-[#a4a4a4] focus:outline-none focus:border-[#546272] transition-colors"
                placeholder="Password"
                style={{
                  fontFamily:
                    "'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c8c8c8] hover:text-[#546272] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#546272] hover:bg-[#455363] text-white rounded transition-colors"
              style={{
                fontFamily: "'Exo 2', Manrope, sans-serif",
                fontWeight: 600,
              }}
            >
              ENTRAR
            </button>

            <div className="text-center mt-4">
              <a
                href="https://m3par.com/sign-up/"
                className="inline-block text-[#546272] hover:text-[#455363] transition-colors"
                style={{
                  fontFamily: "'Exo 2', Manrope, sans-serif",
                }}
              >
                CADASTRAR
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
