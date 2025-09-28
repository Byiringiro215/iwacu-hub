"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await login(email, password);
    setLoading(false);
    if (res.ok) {
      router.push("/home");
    } else {
      setError(res.error || "Login failed");
    }
  };

  return (
    <div>
      <h5 className="text-sm">WELCOME BACK </h5>
      <h1 className="text-bold text-lg mt-2 mb-3">Log into your account</h1>
      <div>
        <form className="flex flex-col gap-2" autoComplete="off" onSubmit={onSubmit}>
          <Input
            label="Email"
            type="email"
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            placeholder="admin@gmail.com"
            name="email"
            autoComplete="email"
            value={email}
          />
          <Input
            label="Password"
            type="password"
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
            placeholder="admin"
            name="current-password"
            autoComplete="current-password"
            value={password}
          />

          <div className="flex justify-between items-center text-[#424242] my-2">
            <div className="flex items-center gap-1">
              <Checkbox />
              <label className="ml-2 text-sm ">Remember me</label>
            </div>
            <a href="#" className="text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded px-3 py-2">{error}</p>
          )}

          <Button className="w-full mt-4" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "CONTINUE"}
          </Button>

          <div className="flex gap-1 justify-center items-center my-4">
            <p className="text-[#212121] text-sm">New User?</p>
            <a
              href="/signup"
              className="font-bold text-sm hover:underline text-[#000033]"
            >
              SIGN UP HERE
            </a>
          </div>
        </form>
      </div>
      <div className="text-xs text-gray-500 mt-4">
        Demo credentials: <span className="font-mono">admin@gmail.com / admin</span>
      </div>
    </div>
  );
};

export default Login;
